import PptxGenJS from 'pptxgenjs'
import type { BoardUpdateDTO, MetricValue } from '@/types/board'

// Broadsheet palette (hex strings for pptxgenjs)
const RED = 'C8102E'
const INK = '1A1A18'
const IVORY = 'F4F1EB'
const WHITE = 'FFFFFF'
const GREEN = '1A6B3C'
const TEXT_SEC = '6B6456'
const MUTED = 'E5E0D5'

// Slide dimensions (inches, widescreen 10x5.63)
const SW = 10
const SH = 5.63

function formatMetricValue(m: MetricValue): string {
  if (m.unit === '%') return `${m.value.toLocaleString()}%`
  if (m.unit === 'months') return `${m.value} mo`
  if (m.unit === 'people' || m.unit === 'customers') return m.value.toLocaleString()
  return `${m.unit}${m.value.toLocaleString()}`
}

function formatMoM(m: MetricValue, isNegativeGood = false): { text: string; color: string } | null {
  if (m.momChangePct === null) return null
  const pct = m.momChangePct
  const sign = pct >= 0 ? '+' : ''
  const text = `${sign}${pct}% MoM`
  let color: string
  if (isNegativeGood) {
    color = pct < 0 ? GREEN : pct > 0 ? RED : TEXT_SEC
  } else {
    color = pct > 0 ? GREEN : pct < 0 ? RED : TEXT_SEC
  }
  return { text, color }
}

function addRedAccentStrip(slide: PptxGenJS.Slide) {
  slide.addShape('rect', { x: 0, y: 0, w: SW, h: 0.08, fill: { color: RED } })
}

function addFooter(slide: PptxGenJS.Slide, label: string) {
  slide.addShape('rect', { x: 0, y: SH - 0.3, w: SW, h: 0.3, fill: { color: INK } })
  slide.addText('BoardBrief — boardbrief.com', {
    x: 0.3, y: SH - 0.28, w: 3, h: 0.25,
    fontSize: 7, color: WHITE, fontFace: 'Helvetica',
    valign: 'middle',
  })
  slide.addText(label, {
    x: SW / 2 - 2, y: SH - 0.28, w: 4, h: 0.25,
    fontSize: 7, color: '888888', fontFace: 'Helvetica',
    align: 'center', valign: 'middle',
  })
}

function addSlideCover(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: INK }

  // Red accent strip top
  slide.addShape('rect', { x: 0, y: 0, w: SW, h: 0.12, fill: { color: RED } })

  // "BOARD UPDATE" kicker
  slide.addText('BOARD UPDATE', {
    x: 0.6, y: 0.3, w: 8, h: 0.4,
    fontSize: 11, bold: true, color: RED,
    fontFace: 'Helvetica', charSpacing: 4,
  })

  // Horizontal rule
  slide.addShape('rect', { x: 0.6, y: 0.75, w: 8.8, h: 0.025, fill: { color: WHITE } })

  // Company name — large
  slide.addText(update.companyName.toUpperCase(), {
    x: 0.6, y: 0.9, w: 8.8, h: 1.6,
    fontSize: 60, bold: true, color: WHITE,
    fontFace: 'Helvetica',
    breakLine: false,
  })

  // Period
  slide.addText(update.period, {
    x: 0.6, y: 2.6, w: 5, h: 0.5,
    fontSize: 18, color: WHITE, fontFace: 'Helvetica',
  })

  // "Monthly Investor Update" subtitle
  slide.addText('Monthly Investor Update', {
    x: 0.6, y: 3.1, w: 5, h: 0.4,
    fontSize: 12, color: TEXT_SEC, fontFace: 'Helvetica', italic: true,
  })

  // Red accent strip bottom
  slide.addShape('rect', { x: 0, y: SH - 0.12, w: SW, h: 0.12, fill: { color: RED } })
}

function addSlideExecutiveSummary(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: IVORY }
  addRedAccentStrip(slide)

  // Section label
  slide.addText('EXECUTIVE SUMMARY', {
    x: 0.5, y: 0.25, w: 9, h: 0.35,
    fontSize: 9, bold: true, color: RED,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 0.5, y: 0.6, w: 9, h: 0.025, fill: { color: INK } })

  // Summary text
  slide.addText(`\u201C${update.executiveSummary}\u201D`, {
    x: 0.5, y: 0.75, w: 9, h: 4.2,
    fontSize: 14, italic: true, color: INK,
    fontFace: 'Helvetica',
    valign: 'top',
    wrap: true,
  })

  addFooter(slide, `${update.companyName} | ${update.period}`)
}

function addSlideMetrics(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: IVORY }
  addRedAccentStrip(slide)

  slide.addText('KEY METRICS', {
    x: 0.5, y: 0.25, w: 9, h: 0.35,
    fontSize: 9, bold: true, color: RED,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 0.5, y: 0.6, w: 9, h: 0.025, fill: { color: INK } })

  const metrics: Array<{ label: string; key: keyof BoardUpdateDTO['metrics']; negGood?: boolean }> = [
    { label: 'MRR', key: 'mrr' },
    { label: 'ARR', key: 'arr' },
    { label: 'BURN', key: 'burnRate', negGood: true },
    { label: 'RUNWAY', key: 'runway' },
    { label: 'HEADCOUNT', key: 'headcount' },
    { label: 'CUSTOMERS', key: 'customers' },
    { label: 'CHURN', key: 'churn', negGood: true },
    { label: 'NRR', key: 'nrr' },
  ]

  const cols = 4
  const cellW = 9 / cols
  const cellH = 1.8
  const startX = 0.5
  const startY = 0.8

  metrics.forEach((m, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const cx = startX + col * (cellW + 0.05)
    const cy = startY + row * (cellH + 0.1)

    // Card background
    slide.addShape('rect', {
      x: cx, y: cy, w: cellW - 0.05, h: cellH,
      fill: { color: WHITE },
      line: { color: MUTED, width: 0.5 },
    })

    const metric = update.metrics[m.key]
    const mom = formatMoM(metric, m.negGood)

    // Label
    slide.addText(m.label, {
      x: cx + 0.1, y: cy + 0.1, w: cellW - 0.2, h: 0.3,
      fontSize: 7, color: TEXT_SEC, fontFace: 'Helvetica', bold: true, charSpacing: 1,
    })

    // Value
    slide.addText(formatMetricValue(metric), {
      x: cx + 0.1, y: cy + 0.35, w: cellW - 0.2, h: 0.7,
      fontSize: 22, bold: true, color: INK, fontFace: 'Helvetica',
    })

    // MoM change
    if (mom) {
      slide.addText(mom.text, {
        x: cx + 0.1, y: cy + 1.1, w: cellW - 0.2, h: 0.35,
        fontSize: 9, bold: true, color: mom.color, fontFace: 'Helvetica',
      })
    }
  })

  addFooter(slide, `${update.companyName} | ${update.period}`)
}

function addSlideHighlights(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: IVORY }
  addRedAccentStrip(slide)

  slide.addShape('rect', { x: 0.5, y: 0.22, w: 0.08, h: 0.35, fill: { color: GREEN } })
  slide.addText('HIGHLIGHTS', {
    x: 0.7, y: 0.25, w: 9, h: 0.35,
    fontSize: 9, bold: true, color: GREEN,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 0.5, y: 0.6, w: 9, h: 0.025, fill: { color: GREEN } })

  const items = update.highlights.length ? update.highlights : ['No highlights provided']
  const rows = items.map(item => ({
    text: `\u2022  ${item}`,
    options: { fontSize: 13, color: INK, fontFace: 'Helvetica', bullet: false, breakLine: true, paraSpaceAfter: 8 },
  }))

  slide.addText(rows, {
    x: 0.5, y: 0.75, w: 9, h: 4.3,
    valign: 'top', wrap: true,
  })

  addFooter(slide, `${update.companyName} | ${update.period}`)
}

function addSlideChallenges(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: IVORY }
  addRedAccentStrip(slide)

  slide.addShape('rect', { x: 0.5, y: 0.22, w: 0.08, h: 0.35, fill: { color: RED } })
  slide.addText('CHALLENGES', {
    x: 0.7, y: 0.25, w: 9, h: 0.35,
    fontSize: 9, bold: true, color: RED,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 0.5, y: 0.6, w: 9, h: 0.025, fill: { color: RED } })

  const items = update.challenges.length ? update.challenges : ['No challenges provided']
  const rows = items.map(item => ({
    text: `\u2022  ${item}`,
    options: { fontSize: 13, color: INK, fontFace: 'Helvetica', bullet: false, breakLine: true, paraSpaceAfter: 8 },
  }))

  slide.addText(rows, {
    x: 0.5, y: 0.75, w: 9, h: 4.3,
    valign: 'top', wrap: true,
  })

  addFooter(slide, `${update.companyName} | ${update.period}`)
}

function addSlideAsksAndGoals(pptx: PptxGenJS, update: BoardUpdateDTO) {
  const slide = pptx.addSlide()
  slide.background = { color: IVORY }
  addRedAccentStrip(slide)

  // Left column: Asks
  slide.addText('ASKS FROM INVESTORS', {
    x: 0.5, y: 0.25, w: 4.2, h: 0.35,
    fontSize: 9, bold: true, color: INK,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 0.5, y: 0.6, w: 4.2, h: 0.025, fill: { color: INK } })

  const askItems = update.asks.length ? update.asks : ['No asks provided']
  const askRows = askItems.map(item => ({
    text: `\u2022  ${item}`,
    options: { fontSize: 12, color: INK, fontFace: 'Helvetica', bullet: false, breakLine: true, paraSpaceAfter: 6 },
  }))
  slide.addText(askRows, {
    x: 0.5, y: 0.75, w: 4.2, h: 4.3,
    valign: 'top', wrap: true,
  })

  // Vertical divider
  slide.addShape('rect', { x: 4.9, y: 0.25, w: 0.025, h: 4.8, fill: { color: MUTED } })

  // Right column: Next Month Goals
  slide.addText('NEXT MONTH\u2019S GOALS', {
    x: 5.1, y: 0.25, w: 4.4, h: 0.35,
    fontSize: 9, bold: true, color: RED,
    fontFace: 'Helvetica', charSpacing: 3,
  })
  slide.addShape('rect', { x: 5.1, y: 0.6, w: 4.4, h: 0.025, fill: { color: RED } })

  const goalItems = update.nextMonthGoals.length ? update.nextMonthGoals : ['No goals provided']
  const goalRows = goalItems.map((item, i) => ({
    text: `${String(i + 1).padStart(2, '0')}  ${item}`,
    options: { fontSize: 12, color: INK, fontFace: 'Helvetica', bullet: false, breakLine: true, paraSpaceAfter: 6 },
  }))
  slide.addText(goalRows, {
    x: 5.1, y: 0.75, w: 4.4, h: 4.3,
    valign: 'top', wrap: true,
  })

  addFooter(slide, `${update.companyName} | ${update.period}`)
}

export async function generateBoardPptx(update: BoardUpdateDTO): Promise<Blob> {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_WIDE'
  pptx.title = `${update.companyName} — Board Update ${update.period}`
  pptx.subject = 'Board Update'
  pptx.author = 'BoardBrief'

  addSlideCover(pptx, update)
  addSlideExecutiveSummary(pptx, update)
  addSlideMetrics(pptx, update)
  addSlideHighlights(pptx, update)
  addSlideChallenges(pptx, update)
  addSlideAsksAndGoals(pptx, update)

  const arrayBuffer = await pptx.write({ outputType: 'arraybuffer' }) as ArrayBuffer
  return new Blob([arrayBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  })
}
