import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quarterly Board Report Template: What to Include (2025 Guide)',
  description: 'The complete quarterly board report template — section-by-section breakdown, executive summary formula, financial presentation format, and the quarterly cadence that builds investor confidence.',
  keywords: ['quarterly board report template', 'board report format', 'quarterly board pack', 'board report structure'],
}

const reportSections = [
  { num: '01', title: 'Executive summary', length: '1 page', detail: 'The single most-read page in any board pack. State the quarter in one sentence — "Q3 was a miss on revenue and a beat on pipeline" — then three to five bullet points covering the numbers, the narrative, and the one decision you need from directors. Write this last, after every other section is done. Investors who only read one page will read this one, and many of them will only read this one.' },
  { num: '02', title: 'Financial performance vs plan', length: '2-3 pages', detail: 'Revenue, gross margin, EBITDA (or net burn), and cash position — each shown as actual vs budget vs prior quarter. The comparison matters more than the absolute number. A company doing $180K MRR against a $200K plan tells a different story than a company doing $180K against a $150K plan. Include variance explanations for anything outside a 10% band.' },
  { num: '03', title: 'KPI dashboard', length: '1 page', detail: 'Your core 6-10 metrics in a single view with directional indicators and quarter-over-quarter change. At Series A, this typically means MRR, MRR growth rate, gross churn, net revenue retention, CAC, LTV/CAC ratio, payback period, and headcount. Use the same layout every quarter so anomalies jump out visually. Adding new metrics without removing old ones is a governance smell.' },
  { num: '04', title: 'Product and engineering update', length: '1-2 pages', detail: 'What shipped, what slipped, and what the next quarter roadmap looks like. Founders frequently either over-detail this (listing every Jira ticket) or under-detail it (vague references to "platform improvements"). The right level: 3-5 major deliverables with business impact stated. "Launched self-serve onboarding — reduced time-to-value from 14 days to 3 days" is useful. "Various UX improvements" is not.' },
  { num: '05', title: 'Go-to-market update', length: '1-2 pages', detail: 'Pipeline, win rates, average deal size, sales cycle length, and channel performance. For PLG companies, activation rates, free-to-paid conversion, and expansion revenue. The board wants to understand whether your growth engine is working, not just whether revenue went up. Revenue can go up while the engine is broken — you just closed some big deals. Show the leading indicators.' },
  { num: '06', title: 'People and organisation', length: '0.5-1 page', detail: 'Headcount by function (actual vs plan), key hires made, key departures, and any cultural observations. Boards under-invest attention here, but the best directors watch hiring velocity as a leading indicator. If you planned to hire 8 engineers and hired 3, that matters more than most metric misses — it compounds into product delays for the next two quarters.' },
  { num: '07', title: 'Risks and challenges', length: '0.5-1 page', detail: 'The section that separates trust-building founders from optics-managing founders. Two to four real risks, each with your assessment of likelihood, impact, and what you are doing about it. "Enterprise pipeline is concentrated — 40% of Q4 target depends on two deals" is the kind of honest framing that builds credibility. Investors already know things are not perfect.' },
  { num: '08', title: 'Strategic decisions and asks', length: '1 page', detail: 'The agenda items for the meeting itself. Each one framed as: the question, the options you have considered, your recommendation, and the specific input you need. "Should we enter the US market in Q1? Options: direct hire, channel partner, or delay. I recommend channel partner because..." This converts meeting time from discussion to decision.' },
]

const quarterlyTimeline = [
  { week: 'Week 1 post-quarter', task: 'Close the books', detail: 'Finance closes the month. Revenue recognised, expenses categorised, cash reconciled. If your close takes more than 10 business days, your finance function needs investment — either people or tools. Fast close = fast reporting = board confidence.' },
  { week: 'Week 2 post-quarter', task: 'Draft the board pack', detail: 'CEO writes the executive summary and strategic sections. Finance produces the financial pages. Department heads submit their updates. The CEO should write the narrative — do not delegate the executive summary to an analyst.' },
  { week: 'Week 3 (Mon-Tue)', task: 'Internal review and refinement', detail: 'CFO and CEO review the complete pack together. Check for consistency between the narrative and the numbers. If the executive summary says "strong quarter" but the financials show a miss, one of them is wrong.' },
  { week: 'Week 3 (Wed)', task: 'Send to board — 48 hours minimum', detail: 'Board pack distributed to all directors. Minimum 48 hours before the meeting, ideally 72 hours for quarterly packs. Late board packs signal disorganisation and guarantee worse questions in the meeting.' },
  { week: 'Week 3 (Fri)', task: 'Board meeting', detail: 'Two hours maximum. The pack has been read. The meeting is for discussion, decisions, and the strategic items — not for reading slides aloud. Protect the strategic block — that is the highest-value time.' },
]

const benchmarksByStage = [
  { metric: 'MRR', seed: '$20K-$80K', seriesA: '$80K-$250K', seriesB: '$500K-$1.5M', note: 'Median Series A MRR in 2024 was approximately $100K. Below $50K is increasingly difficult to raise Series A.' },
  { metric: 'MRR growth (MoM)', seed: '15-25%', seriesA: '10-20%', seriesB: '7-12%', note: 'Growth decelerates with scale. A Series A company growing 15% MoM is exceptional. A seed company growing 5% MoM has a problem.' },
  { metric: 'Gross margin', seed: '60-70%', seriesA: '65-80%', seriesB: '70-85%', note: 'Software should trend toward 80%+. Below 60% suggests a services business priced as software.' },
  { metric: 'Net burn (monthly)', seed: '$50K-$150K', seriesA: '$150K-$400K', seriesB: '$400K-$1M', note: 'Burn should correlate with growth. High burn + low growth is the worst combination.' },
  { metric: 'Runway', seed: '12-18 months', seriesA: '18-24 months', seriesB: '18-24 months', note: 'Start fundraising with 9+ months of runway remaining. Below 6 months, you lose all negotiating leverage.' },
  { metric: 'Net revenue retention', seed: 'Often unmeasurable', seriesA: '100-120%', seriesB: '110-140%', note: 'Best-in-class SaaS NRR is 130%+. Below 100% means your existing customers are shrinking — a red flag at any stage.' },
]

const reportMistakes = [
  { mistake: 'Changing the format every quarter', why: 'Directors build mental models of your reporting structure. When you rearrange it, they spend cognitive energy reorienting instead of analysing. Pick a format, commit to it, and iterate it slowly. The familiarity is a feature, not a limitation.' },
  { mistake: 'Reporting metrics without context', why: 'A number without a comparator is meaningless. "$180K MRR" means nothing on its own. "$180K MRR vs $200K plan, up from $140K last quarter" tells a complete story in one line. Every metric needs at least two reference points: plan and prior period.' },
  { mistake: 'Omitting the cash bridge', why: 'The cash bridge — opening balance, plus revenue received, minus costs paid, equals closing balance — is the single most useful financial visualisation for a board. It shows where the money actually went, not where the P&L says it went.' },
  { mistake: 'Over-optimistic forecasts quarter after quarter', why: 'If you missed plan three quarters in a row, your planning process is broken. Boards notice the pattern before you do. Either fix your forecasting methodology or revise the plan — credibility compounds, and so does the lack of it.' },
  { mistake: 'No forward-looking section', why: 'A quarterly report that only looks backward is a post-mortem. Include a forward view: next quarter targets, the 2-3 bets you are making, and the leading indicators you will be watching. This converts the board from auditors to advisors.' },
]

const faqs = [
  {
    q: 'How long should a quarterly board report be?',
    a: 'Eight to fifteen pages including financial statements, with a one-page executive summary at the front. If your quarterly pack routinely exceeds 20 pages, you are including too much operational detail. Board reporting is an exercise in compression, not comprehensiveness. The executive summary should stand alone — a director who reads only that page should understand the quarter, the trajectory, and the decisions needed.',
  },
  {
    q: 'What is the difference between a quarterly board report and a monthly investor update?',
    a: 'A monthly investor update is communication — it keeps all investors (including non-board members) informed with key metrics and a brief narrative. It goes to your full investor list. A quarterly board report is a governance document — it is the formal pack for a board meeting, includes detailed financials, strategic memos, and decision items, and goes only to directors and observers. You need both. The monthly update prevents information asymmetry between meetings; the quarterly report enables informed governance at meetings.',
  },
  {
    q: 'Should I include a competitive landscape section?',
    a: 'Only when something material has changed — a competitor raised a large round, launched a competing product, or exited the market. A standing competitive landscape slide that says the same thing every quarter wastes space and attention. When competition does shift materially, dedicate a strategic memo to it with a specific recommendation: "Competitor X launched feature Y. Here is how we should respond. I recommend option B because..."',
  },
  {
    q: 'How do I present a bad quarter to the board?',
    a: 'Lead with it. Open the executive summary with the miss: "Q3 revenue was $420K against a $500K plan — a 16% miss driven by two enterprise deals slipping to Q4." Then explain root cause, what you have learned, and your corrective plan. The single worst thing a founder can do is bury a miss in page 7 of the financial statements. Directors will find it, and then the meeting becomes about trust rather than solutions. Every experienced board member has seen bad quarters. They have not all seen founders handle them with clarity and ownership.',
  },
  {
    q: 'When should I start doing quarterly board reporting?',
    a: 'As soon as you have a formal board — which typically means your first priced round with a board seat. Pre-seed companies with only common directors (founders) do not need formal quarterly packs, but building the habit early with monthly investor updates makes the transition much smoother. By the time you reach Series A, quarterly board reporting should be a well-oiled process that takes days, not weeks.',
  },
]

export default function QuarterlyBoardReportTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">

      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#C8102E]" />
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] tracking-tight">
            BoardBrief
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="font-[family-name:var(--font-data)] text-sm font-medium text-[#6B6456] hover:text-[#1A1A18] transition-colors">Login</Link>
          <Link href="/auth/signup" className="font-[family-name:var(--font-data)] text-sm font-semibold bg-[#1A1A18] text-white px-5 py-2.5 rounded hover:bg-[#C8102E] transition-colors">
            Start free
          </Link>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18]" />
      </div>

      <header className="max-w-[768px] mx-auto px-6 pt-16 pb-12">
        <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-[0.2em] mb-4">
          Board Reporting Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Quarterly Board Report Template: What to Include
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          A quarterly board report is not a summary of what happened — it is a tool for decision-making. The best board packs compress an entire quarter into a document that directors can read in 30 minutes and arrive at the meeting ready to advise, challenge, and decide. Here is the section-by-section structure that experienced investors expect, with format guidance at each funding stage.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 8-section quarterly board report structure
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            This structure works from Seed through Series B. The depth of each section increases as your company matures, but the bones stay the same. Directors should be able to navigate your pack without a map because the structure is consistent quarter to quarter.
          </p>
          <div className="space-y-0">
            {reportSections.map((item, i) => (
              <div key={item.num} className={`border-t border-[#E5E0D5] py-6 ${i === reportSections.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-20">
                    <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest block">{item.num}</span>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-1 block">{item.length}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{item.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The quarterly reporting timeline
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            The best-run startups deliver their quarterly board pack within three weeks of quarter end. Here is the standard timeline. If your close takes longer than this, the bottleneck is usually accounting tooling or revenue recognition complexity — both fixable.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {quarterlyTimeline.map((item, i) => (
              <div key={item.week} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <div className="flex items-start gap-4">
                  <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] uppercase tracking-wider shrink-0 w-36 pt-0.5">{item.week}</span>
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.task}</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            SaaS benchmarks to include in your quarterly report
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Reporting your metrics alongside stage-appropriate benchmarks gives directors useful context. These ranges reflect typical venture-backed SaaS companies in 2024-2025 and are drawn from OpenView, Bessemer, and public SaaS data.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-5 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Metric</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Seed</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Series A</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Series B</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Note</span>
            </div>
            {benchmarksByStage.map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-5 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.metric}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#6B6456]">{row.seed}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.seriesA}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#6B6456]">{row.seriesB}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.note}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate your quarterly board report in minutes, not days
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your quarterly metrics — MRR, burn, headcount, milestones — and DeckBrief generates a professional board pack with executive summary, KPI dashboard, financial overview, and strategic framing. PDF and PPTX, ready to send to your board.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Report Free &rarr;
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Quarterly board report mistakes that damage credibility
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            These patterns erode director confidence gradually. Each one is avoidable with discipline and the right process.
          </p>
          <div className="space-y-6">
            {reportMistakes.map((m) => (
              <div key={m.mistake} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.mistake}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            How to write the executive summary
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-4">
            The executive summary is the most important page in your board pack. It should stand alone — a director who reads nothing else should understand the quarter, the trajectory, and the decisions needed. Use this formula:
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-6">
            <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-4">The one-page executive summary formula</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] shrink-0 w-6">1.</span>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed"><strong className="text-[#1A1A18]">Quarter headline</strong> — one sentence that captures the quarter. &ldquo;Q3 was a beat on revenue, a miss on hiring, and a breakthrough on enterprise pipeline.&rdquo;</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] shrink-0 w-6">2.</span>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed"><strong className="text-[#1A1A18]">Key metrics</strong> — 4-6 numbers in a compact grid: MRR, MRR growth, burn, runway, headcount, one product metric.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] shrink-0 w-6">3.</span>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed"><strong className="text-[#1A1A18]">Highlights</strong> — 3-4 concrete wins. Deals closed, features shipped, hires made. Specific, not aspirational.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] shrink-0 w-6">4.</span>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed"><strong className="text-[#1A1A18]">Challenges</strong> — 2-3 real problems with your assessment and response plan.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] shrink-0 w-6">5.</span>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed"><strong className="text-[#1A1A18]">Decisions needed</strong> — the specific items on the board meeting agenda that require director input.</p>
              </div>
            </div>
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">
            One page. One font size. No graphics on this page — save the charts for the KPI dashboard. The executive summary is for reading, not scanning. Founders who can distil an entire quarter into one page demonstrate the clarity of thought that investors want to see in the people running their money.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Quarterly vs monthly board reporting
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-4">
            The question is not whether to do quarterly or monthly — it is understanding that they serve different purposes. Most venture-backed startups should do both:
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Dimension</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Monthly update</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Quarterly board pack</span>
            </div>
            {[
              { dim: 'Audience', monthly: 'All investors + advisors', quarterly: 'Board directors + observers only' },
              { dim: 'Format', monthly: 'Email (plain text or light formatting)', quarterly: 'PDF or slide deck (formal document)' },
              { dim: 'Length', monthly: '1-2 pages', quarterly: '8-15 pages' },
              { dim: 'Content', monthly: 'Key metrics, highlights, lowlights, asks', quarterly: 'Full financials, KPIs, strategic memos, decisions' },
              { dim: 'Purpose', monthly: 'Communication — keep everyone informed', quarterly: 'Governance — enable decisions at board level' },
            ].map((row, i) => (
              <div key={row.dim} className={`grid grid-cols-3 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.dim}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.monthly}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.quarterly}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Frequently asked questions
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`border-t border-[#E5E0D5] py-6 ${i === faqs.length - 1 ? 'border-b' : ''}`}>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-3">{faq.q}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-[#C8102E] rounded p-8">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Stop building board packs manually</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Your quarterly board report, generated in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your quarterly metrics and DeckBrief generates a professional board pack — executive summary, KPI dashboard, financial overview, and strategic framing — formatted as PDF and PPTX, ready to distribute to your directors.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Report Free &rarr;
          </Link>
        </div>

      </main>

      <footer className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="h-[2px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-8" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-4 bg-[#C8102E]" />
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#6B6456]">BoardBrief</span>
          </div>
          <div className="flex items-center gap-6 font-[family-name:var(--font-data)] text-sm text-[#6B6456]">
            <Link href="/auth/login" className="hover:text-[#1A1A18] transition-colors">Login</Link>
            <Link href="/privacy" className="hover:text-[#1A1A18] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1A1A18] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
