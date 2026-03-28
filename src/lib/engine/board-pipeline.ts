import Anthropic from '@anthropic-ai/sdk'
import { nanoid } from 'nanoid'
import type { BoardUpdateDTO, BoardUpdateFormInput, MetricValue } from '@/types/board'

export interface BoardPipelineProgress {
  step: string
  progress: number
  detail?: string
}

function calcMoM(current: number, prev: number | null): { change: number | null; changePct: number | null } {
  if (prev === null || prev === 0) return { change: null, changePct: null }
  const change = current - prev
  const changePct = Math.round((change / prev) * 1000) / 10 // one decimal
  return { change, changePct }
}

function buildMetricValue(current: number, prev: number | null, unit: string): MetricValue {
  const { change, changePct } = calcMoM(current, prev)
  return {
    value: current,
    unit,
    momChange: change,
    momChangePct: changePct,
  }
}

function splitLines(raw: string): string[] {
  return raw
    .split('\n')
    .map(l => l.replace(/^[-•*]\s*/, '').trim())
    .filter(Boolean)
}

function formatMetricsForPrompt(input: BoardUpdateFormInput): string {
  const c = input.currency
  return `
- MRR: ${c}${input.mrr.toLocaleString()} ${input.prevMrr !== null ? `(prev: ${c}${input.prevMrr.toLocaleString()})` : ''}
- ARR: ${c}${input.arr.toLocaleString()} ${input.prevArr !== null ? `(prev: ${c}${input.prevArr.toLocaleString()})` : ''}
- Monthly Burn: ${c}${input.burnRate.toLocaleString()} ${input.prevBurnRate !== null ? `(prev: ${c}${input.prevBurnRate.toLocaleString()})` : ''}
- Runway: ${input.runway} months ${input.prevRunway !== null ? `(prev: ${input.prevRunway} months)` : ''}
- Headcount: ${input.headcount} people ${input.prevHeadcount !== null ? `(prev: ${input.prevHeadcount})` : ''}
- Customers: ${input.customers} ${input.prevCustomers !== null ? `(prev: ${input.prevCustomers})` : ''}
- Monthly Churn: ${input.churn}% ${input.prevChurn !== null ? `(prev: ${input.prevChurn}%)` : ''}
- NRR: ${input.nrr}% ${input.prevNrr !== null ? `(prev: ${input.prevNrr}%)` : ''}
`.trim()
}

interface ClaudeOutput {
  executiveSummary: string
  highlights: string[]
  challenges: string[]
  asks: string[]
  nextMonthGoals: string[]
}

async function callClaude(input: BoardUpdateFormInput): Promise<ClaudeOutput> {
  const client = new Anthropic()

  const metricsText = formatMetricsForPrompt(input)
  const highlights = splitLines(input.highlightsRaw)
  const challenges = splitLines(input.challengesRaw)
  const asks = splitLines(input.asksRaw)
  const nextGoals = splitLines(input.nextMonthGoalsRaw)

  const prompt = `You are writing a monthly investor update for a SaaS startup. The founder has provided these metrics for ${input.period}:
${metricsText}

Key highlights: ${highlights.join('; ')}
Challenges: ${challenges.join('; ')}
Next month goals: ${nextGoals.join('; ')}
Raw notes from founder: ${input.founderNotes || '(none)'}

Write a clear, honest investor update following the Sequoia format. Be direct and specific — investors hate vague updates.

Return ONLY valid JSON (no markdown, no code fences) with these exact fields:
{
  "executiveSummary": "2-3 sentences leading with the most important metric or story. Be specific about numbers. Set clear tone (growth/concern/steady).",
  "highlights": ["max 5 punchy bullet strings, each starting with a strong verb, include specific numbers where possible"],
  "challenges": ["honest about what isn't working — investors respect honesty more than spin, max 4 bullets"],
  "asks": ["specific, actionable asks — not 'introductions to investors' but 'warm intro to Series A leads in fintech in UK'", "max 3 asks"],
  "nextMonthGoals": ["3-5 measurable goals with specific numbers/outcomes"]
}

Rules:
- Executive summary must lead with the most important number (usually MRR)
- If burn/runway is concerning (< 9 months), flag it clearly
- If NRR > 100%, highlight it prominently — it's a key signal
- Refine the founder's raw asks into specific, actionable requests
- Keep highlights to genuine wins, not fluff`

  const message = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''

  // Strip any markdown code fences if model adds them
  const cleaned = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim()

  try {
    return JSON.parse(cleaned) as ClaudeOutput
  } catch {
    // Fallback: return raw content as summary
    return {
      executiveSummary: text.slice(0, 500),
      highlights: splitLines(input.highlightsRaw),
      challenges: splitLines(input.challengesRaw),
      asks: splitLines(input.asksRaw),
      nextMonthGoals: splitLines(input.nextMonthGoalsRaw),
    }
  }
}

export async function runBoardPipeline(
  input: BoardUpdateFormInput,
  onProgress?: (p: BoardPipelineProgress) => void,
): Promise<BoardUpdateDTO> {
  const c = input.currency

  // Step 1: Build metric values with MoM calculations
  onProgress?.({ step: 'Calculating metrics', progress: 15 })
  const metrics: BoardUpdateDTO['metrics'] = {
    mrr: buildMetricValue(input.mrr, input.prevMrr, c),
    arr: buildMetricValue(input.arr, input.prevArr, c),
    burnRate: buildMetricValue(input.burnRate, input.prevBurnRate, c),
    runway: buildMetricValue(input.runway, input.prevRunway, 'months'),
    headcount: buildMetricValue(input.headcount, input.prevHeadcount, 'people'),
    customers: buildMetricValue(input.customers, input.prevCustomers, 'customers'),
    churn: buildMetricValue(input.churn, input.prevChurn, '%'),
    nrr: buildMetricValue(input.nrr, input.prevNrr, '%'),
  }

  // Step 2: Call Claude to generate narrative + refine bullets
  onProgress?.({ step: 'Generating investor narrative', progress: 35, detail: 'Claude is writing your update...' })
  const aiOutput = await callClaude(input)

  onProgress?.({ step: 'Refining highlights and asks', progress: 70 })

  onProgress?.({ step: 'Assembling board update', progress: 90 })

  const update: BoardUpdateDTO = {
    id: nanoid(12),
    companyName: input.companyName,
    period: input.period,
    metrics,
    highlights: aiOutput.highlights,
    challenges: aiOutput.challenges,
    asks: aiOutput.asks,
    nextMonthGoals: aiOutput.nextMonthGoals,
    executiveSummary: aiOutput.executiveSummary,
    founderNotes: input.founderNotes,
  }

  onProgress?.({ step: 'Complete', progress: 100 })

  return update
}
