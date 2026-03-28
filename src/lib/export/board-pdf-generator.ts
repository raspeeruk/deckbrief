import { jsPDF } from 'jspdf'
import type { BoardUpdateDTO, MetricValue } from '@/types/board'

// Broadsheet palette
const INK = { r: 26, g: 26, b: 24 }          // #1A1A18
const RED = { r: 200, g: 16, b: 46 }          // #C8102E
const GREEN = { r: 26, g: 107, b: 60 }        // #1A6B3C
const IVORY = { r: 244, g: 241, b: 235 }      // #F4F1EB
const MUTED = { r: 229, g: 224, b: 213 }      // #E5E0D5
const WHITE = { r: 255, g: 255, b: 255 }
const TEXT_SEC = { r: 107, g: 100, b: 86 }    // #6B6456
const SURFACE = { r: 250, g: 250, b: 250 }

// A4 portrait dimensions in mm
const W = 210
const H = 297
const MARGIN = 16

function setFill(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setFillColor(c.r, c.g, c.b)
}
function setTextC(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setTextColor(c.r, c.g, c.b)
}
function setDraw(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setDrawColor(c.r, c.g, c.b)
}

function formatMetricValue(m: MetricValue): string {
  if (m.unit === '%') return `${m.value.toLocaleString()}%`
  if (m.unit === 'months') return `${m.value} mo`
  if (m.unit === 'people') return m.value.toLocaleString()
  if (m.unit === 'customers') return m.value.toLocaleString()
  return `${m.unit}${m.value.toLocaleString()}`
}

function formatMoM(m: MetricValue, isNegativeGood = false): { text: string; color: { r: number; g: number; b: number } } | null {
  if (m.momChangePct === null) return null
  const pct = m.momChangePct
  const sign = pct >= 0 ? '+' : ''
  const text = `${sign}${pct}% MoM`
  let color: { r: number; g: number; b: number }
  if (isNegativeGood) {
    color = pct < 0 ? GREEN : pct > 0 ? RED : TEXT_SEC
  } else {
    color = pct > 0 ? GREEN : pct < 0 ? RED : TEXT_SEC
  }
  return { text, color }
}

function drawRule(doc: jsPDF, y: number, heavy = false) {
  setDraw(doc, INK)
  doc.setLineWidth(heavy ? 1 : 0.2)
  doc.line(MARGIN, y, W - MARGIN, y)
}

function drawMasthead(doc: jsPDF, update: BoardUpdateDTO): number {
  // Ivory background for page
  setFill(doc, IVORY)
  doc.rect(0, 0, W, H, 'F')

  let y = MARGIN

  // "BOARD UPDATE" kicker label
  setTextC(doc, RED)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('BOARD UPDATE', MARGIN, y + 4)
  y += 8

  // Heavy double rule
  drawRule(doc, y, true)
  y += 1.5
  drawRule(doc, y)
  y += 8

  // Masthead: company name
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(32)
  doc.text(update.companyName.toUpperCase(), MARGIN, y + 14)
  y += 18

  // Period sub-header
  drawRule(doc, y)
  y += 4
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(update.period, MARGIN, y + 4)
  setTextC(doc, TEXT_SEC)
  doc.setFontSize(8)
  doc.text('Monthly Investor Update', W - MARGIN, y + 4, { align: 'right' })
  y += 8
  drawRule(doc, y, true)
  y += 1.5
  drawRule(doc, y)
  y += 10

  return y
}

function drawExecutiveSummary(doc: jsPDF, update: BoardUpdateDTO, y: number): number {
  // Dark band
  setFill(doc, INK)
  doc.rect(MARGIN, y, W - MARGIN * 2, 2, 'F')
  y += 5

  setTextC(doc, RED)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('EXECUTIVE SUMMARY', MARGIN, y)
  y += 4

  setFill(doc, INK)
  doc.rect(MARGIN, y, W - MARGIN * 2, 0.5, 'F')
  y += 5

  // Summary text in italic
  setTextC(doc, INK)
  doc.setFont('helvetica', 'bolditalic')
  doc.setFontSize(9)
  const lines = doc.splitTextToSize(`"${update.executiveSummary}"`, W - MARGIN * 2 - 4)
  doc.text(lines, MARGIN + 2, y)
  y += lines.length * 5 + 6

  drawRule(doc, y)
  y += 6

  return y
}

function drawMetricsGrid(doc: jsPDF, update: BoardUpdateDTO, y: number): number {
  setTextC(doc, RED)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('THIS MONTH\'S NUMBERS', MARGIN, y)
  y += 4

  setFill(doc, INK)
  doc.rect(MARGIN, y, W - MARGIN * 2, 0.5, 'F')
  y += 5

  // 4 columns x 2 rows
  const cellW = (W - MARGIN * 2) / 4
  const cellH = 18
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

  metrics.forEach((m, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    const cx = MARGIN + col * cellW
    const cy = y + row * (cellH + 4)

    const metric = update.metrics[m.key]
    const mom = formatMoM(metric, m.negGood)

    // Card background
    setFill(doc, WHITE)
    doc.rect(cx, cy, cellW - 2, cellH, 'F')
    setDraw(doc, MUTED)
    doc.setLineWidth(0.2)
    doc.rect(cx, cy, cellW - 2, cellH, 'S')

    // Label
    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(5.5)
    doc.text(m.label, cx + 2, cy + 4)

    // Value
    setTextC(doc, INK)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text(formatMetricValue(metric), cx + 2, cy + 11)

    // MoM change
    if (mom) {
      setTextC(doc, mom.color)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6)
      doc.text(mom.text, cx + 2, cy + 15.5)
    }
  })

  y += 2 * (cellH + 4) + 4
  drawRule(doc, y)
  y += 6

  return y
}

function drawThreeColumns(doc: jsPDF, update: BoardUpdateDTO, y: number): number {
  const colW = (W - MARGIN * 2 - 8) / 3

  const sections = [
    { label: 'HIGHLIGHTS', items: update.highlights, color: GREEN },
    { label: 'CHALLENGES', items: update.challenges, color: RED },
    { label: 'ASKS', items: update.asks, color: INK },
  ]

  const startY = y

  sections.forEach((section, i) => {
    const cx = MARGIN + i * (colW + 4)
    let cy = startY

    // Section header
    setFill(doc, section.color)
    doc.rect(cx, cy, colW, 0.8, 'F')
    cy += 3

    setTextC(doc, section.color)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7)
    doc.text(section.label, cx, cy)
    cy += 5

    // Bullets
    setTextC(doc, INK)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)

    section.items.forEach(item => {
      const lines = doc.splitTextToSize(`\u2022  ${item}`, colW - 2)
      doc.text(lines, cx, cy)
      cy += lines.length * 4 + 2
    })
  })

  // Find max column height by estimating
  const maxItems = Math.max(update.highlights.length, update.challenges.length, update.asks.length)
  y = startY + 12 + maxItems * 10

  drawRule(doc, y)
  y += 6

  return y
}

function drawNextMonthGoals(doc: jsPDF, update: BoardUpdateDTO, y: number): number {
  if (!update.nextMonthGoals.length) return y

  setTextC(doc, RED)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('NEXT MONTH\'S GOALS', MARGIN, y)
  y += 4

  setFill(doc, INK)
  doc.rect(MARGIN, y, W - MARGIN * 2, 0.5, 'F')
  y += 5

  // Two-column layout for goals
  const goalColW = (W - MARGIN * 2 - 6) / 2

  update.nextMonthGoals.forEach((goal, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const gx = MARGIN + col * (goalColW + 6)
    const gy = y + row * 10

    setFill(doc, WHITE)
    doc.rect(gx, gy, goalColW, 8, 'F')
    setDraw(doc, MUTED)
    doc.setLineWidth(0.2)
    doc.rect(gx, gy, goalColW, 8, 'S')

    setTextC(doc, TEXT_SEC)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6)
    doc.text(`${String(i + 1).padStart(2, '0')}`, gx + 2, gy + 5)

    setTextC(doc, INK)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    const lines = doc.splitTextToSize(goal, goalColW - 14)
    doc.text(lines[0] || goal, gx + 10, gy + 5)
  })

  const rows = Math.ceil(update.nextMonthGoals.length / 2)
  y += rows * 10 + 6

  return y
}

function drawFooter(doc: jsPDF, update: BoardUpdateDTO, pageNum: number, totalPages: number) {
  setFill(doc, INK)
  doc.rect(0, H - 10, W, 10, 'F')

  setTextC(doc, WHITE)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6)
  doc.text('BoardBrief — boardbrief.com', MARGIN, H - 4)

  setTextC(doc, TEXT_SEC)
  doc.text(`${update.companyName} | ${update.period}`, W / 2, H - 4, { align: 'center' })

  setTextC(doc, WHITE)
  doc.text(`${pageNum} / ${totalPages}`, W - MARGIN, H - 4, { align: 'right' })
}

export async function generateBoardPdf(update: BoardUpdateDTO): Promise<Blob> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  let y = drawMasthead(doc, update)
  y = drawExecutiveSummary(doc, update, y)
  y = drawMetricsGrid(doc, update, y)

  // Check if we need a new page for the columns
  if (y > H - 80) {
    doc.addPage()
    setFill(doc, IVORY)
    doc.rect(0, 0, W, H, 'F')
    y = MARGIN + 10
  }

  y = drawThreeColumns(doc, update, y)
  y = drawNextMonthGoals(doc, update, y)

  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    drawFooter(doc, update, i, totalPages)
  }

  return doc.output('blob')
}
