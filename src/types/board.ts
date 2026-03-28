export interface MetricValue {
  value: number
  unit: string // "£", "%", "people", etc.
  momChange: number | null // month-over-month delta
  momChangePct: number | null
}

export interface BoardUpdateDTO {
  id: string
  companyName: string
  period: string // "March 2026"
  metrics: {
    mrr: MetricValue
    arr: MetricValue
    burnRate: MetricValue
    runway: MetricValue // months
    headcount: MetricValue
    customers: MetricValue
    churn: MetricValue
    nrr: MetricValue
  }
  highlights: string[] // key wins this month
  challenges: string[] // things not going well
  asks: string[] // what you need from investors
  nextMonthGoals: string[]
  executiveSummary: string // AI-generated narrative
  founderNotes: string // raw notes pasted in
}

export interface BoardUpdateFormInput {
  companyName: string
  period: string
  // Current month metrics
  mrr: number
  arr: number
  burnRate: number
  runway: number
  headcount: number
  customers: number
  churn: number
  nrr: number
  // Previous month metrics (for MoM calculations)
  prevMrr: number | null
  prevArr: number | null
  prevBurnRate: number | null
  prevRunway: number | null
  prevHeadcount: number | null
  prevCustomers: number | null
  prevChurn: number | null
  prevNrr: number | null
  // Qualitative inputs
  highlightsRaw: string
  challengesRaw: string
  asksRaw: string
  nextMonthGoalsRaw: string
  founderNotes: string
  // Currency / unit preferences
  currency: string // "£", "$", "€"
}
