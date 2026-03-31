import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Metrics Dashboard: The 12 KPIs Your Board Wants to See',
  description: 'The 12 SaaS KPIs every board dashboard needs — with formulas, benchmarks by stage, visual format guidance, and the metrics mistakes that make investors nervous.',
  keywords: ['SaaS metrics dashboard', 'SaaS KPIs', 'board KPI dashboard', 'SaaS board metrics'],
}

const coreMetrics = [
  { num: '01', name: 'Monthly Recurring Revenue (MRR)', formula: 'Sum of all recurring subscription revenue normalised to a monthly figure', benchmark: 'Median Series A: ~$100K MRR. Top quartile: $150K+. Below $50K is increasingly difficult for Series A.', why: 'MRR is the single most important number in a SaaS business. It is the foundation for every other metric. If you report only one number, report this one. Show it as a time series with at least 12 months of history — trend matters more than level.' },
  { num: '02', name: 'MRR Growth Rate (MoM)', formula: '(Current MRR - Prior MRR) / Prior MRR', benchmark: 'Seed: 15-25% MoM. Series A: 10-20%. Series B: 7-12%. Compounding makes these small differences enormous over 12 months.', why: 'Growth rate decelerates naturally with scale. A $50K MRR company growing 20% MoM is performing well. A $500K MRR company growing 20% MoM is extraordinary. Always contextualise your growth rate against your base — directors who see the percentage without the base will misjudge it.' },
  { num: '03', name: 'Annual Recurring Revenue (ARR)', formula: 'MRR x 12', benchmark: '$1M ARR is the common Series A threshold, though this has risen to $1.5M-$2M in 2024-2025 for competitive rounds.', why: 'ARR is the number investors use for valuation multiples. A company at $1.5M ARR raising at 20x is seeking a $30M valuation. Show both MRR and ARR — MRR for operational tracking, ARR for the strategic conversation about where you sit and where you are heading.' },
  { num: '04', name: 'Gross Churn Rate', formula: 'MRR lost from cancellations and downgrades / Starting MRR', benchmark: 'SMB SaaS: 3-7% monthly. Mid-market: 1-3% monthly. Enterprise: <1% monthly. Annual gross churn above 30% is a red flag at any stage.', why: 'Gross churn measures how much revenue you lose before accounting for expansion. It tells you whether your product retains customers. High gross churn with high expansion revenue can mask a retention problem — the expansion is plugging holes rather than building on a solid base.' },
  { num: '05', name: 'Net Revenue Retention (NRR)', formula: '(Starting MRR + Expansion - Contraction - Churn) / Starting MRR', benchmark: 'Good: 100-110%. Great: 110-130%. Best-in-class: 130%+. Below 100% means your existing customer base is shrinking.', why: 'NRR is arguably the most important metric after MRR. An NRR above 120% means your existing customers alone would grow the business even if you never signed another new customer. This is the metric that separates good SaaS businesses from great ones. Bessemer reports that the top quartile of public SaaS companies have NRR above 120%.' },
  { num: '06', name: 'Customer Acquisition Cost (CAC)', formula: 'Total sales and marketing spend / New customers acquired', benchmark: 'Varies enormously by segment. SMB self-serve: $200-$2K. Mid-market: $5K-$25K. Enterprise: $25K-$100K+.', why: 'CAC only makes sense in the context of LTV. A $50K CAC is fine if your LTV is $250K. Report CAC by channel where possible — directors want to know whether your paid acquisition is working, not just whether your blended number looks good because organic is carrying it.' },
  { num: '07', name: 'LTV/CAC Ratio', formula: 'Customer Lifetime Value / Customer Acquisition Cost', benchmark: 'Healthy: 3:1 or above. Below 1:1 means you are destroying value with every customer. Above 5:1 may suggest under-investment in growth.', why: 'The unit economics metric that boards care about most. Below 3:1, your growth is not self-funding. Above 5:1, you might be leaving growth on the table by not spending more on acquisition. Show the trend — improving LTV/CAC is one of the strongest signals that a business is getting healthier.' },
  { num: '08', name: 'CAC Payback Period', formula: 'CAC / (Average MRR per customer x Gross Margin %)', benchmark: 'Good: 12-18 months. Great: <12 months. Concerning: >24 months. Capital-efficient companies recover CAC within a year.', why: 'Payback period tells the board how long it takes to recoup the cost of acquiring a customer. A 6-month payback means you can reinvest the recovered capital twice a year. A 24-month payback means your growth is extremely capital-intensive and you will need to keep raising money to fund it.' },
  { num: '09', name: 'Gross Margin', formula: '(Revenue - Cost of Goods Sold) / Revenue', benchmark: 'Software SaaS: 70-85%. Infrastruture/platform: 50-70%. Services-heavy: 40-60%. Below 60% raises questions about scalability.', why: 'Gross margin determines how much of each revenue dollar is available to fund growth, R&D, and operations. Software businesses should trend toward 80%+. If your gross margin is stuck at 50%, investors will question whether you have a technology company or a services company with software pricing.' },
  { num: '10', name: 'Burn Rate (Net)', formula: 'Cash spent - Cash received in a given month', benchmark: 'Seed: $50K-$150K/month. Series A: $150K-$400K. Series B: $400K-$1M. The key is burn-to-growth ratio, not absolute burn.', why: 'Net burn tells you how fast cash is leaving the business. Pair it with MRR growth to evaluate efficiency. The burn multiple (net burn / net new ARR) is the best single metric for this: below 1x is excellent, 1-2x is good, above 3x is concerning. David Sacks popularised this and it has become a standard board metric.' },
  { num: '11', name: 'Cash Runway', formula: 'Current cash balance / Net burn rate', benchmark: '18+ months post-raise. Start fundraising at 9+ months remaining. Below 6 months is emergency territory.', why: 'Runway is not just a metric — it is a countdown. The number of months until you run out of cash determines your strategic options. Boards should see this number every single month, presented clearly and honestly. Show the runway at current burn AND at planned burn if you are scaling spending.' },
  { num: '12', name: 'Headcount and Burn per Employee', formula: 'Total burn / Total headcount', benchmark: 'Efficient SaaS: $15K-$25K burn per employee per month. Above $30K suggests overspending on non-headcount costs or very expensive hires.', why: 'A proxy for capital efficiency that normalises for team size. A 20-person company burning $400K/month ($20K per employee) is in a very different position than a 10-person company burning the same amount ($40K per employee). This metric surfaces operational efficiency questions that raw burn does not.' },
]

const dashboardFormatting = [
  { rule: 'Always show trend lines', detail: 'A metric without history is a snapshot without context. Show at least 6 months, ideally 12. Directors spot patterns in trend lines that they cannot see in single-period numbers.' },
  { rule: 'Use consistent comparators', detail: 'Every metric should show: current period, prior period, and plan/budget. Three columns minimum. Some boards add a fourth — same period last year — which is valuable once you have the data.' },
  { rule: 'Colour-code directional movement', detail: 'Green for on-plan or improving, red for off-plan or deteriorating, neutral for within tolerance. Keep the tolerance bands reasonable — a 2% miss on a volatile metric should not be red. Reserve red for genuine alerts.' },
  { rule: 'One page, no scrolling', detail: 'The KPI dashboard should fit on a single page or screen. If it does not, you have too many metrics. Ruthlessly prioritise. Six to ten metrics is the right range — twelve is the upper limit. Beyond that, you are creating noise.' },
  { rule: 'Label everything', detail: 'Units, time periods, whether numbers are in thousands or millions. An unlabelled chart or metric is a trap for miscommunication. "Revenue: 180" — is that $180, $180K, or $180M? Is that monthly or annual? This quarter or trailing?' },
]

const metricMistakes = [
  { mistake: 'Reporting vanity metrics', why: 'Total registered users, gross transaction volume, and page views are not board metrics. They look impressive and mean little. Focus on metrics that directly connect to revenue, retention, and capital efficiency. If a metric does not help the board make a decision, it should not be on the dashboard.' },
  { mistake: 'Mixing ARR and MRR without labelling', why: 'This seems minor but causes real confusion. Some founders switch between ARR and MRR within the same document, sometimes within the same sentence. Pick one as primary (MRR for operational, ARR for strategic), label it clearly every time, and be consistent.' },
  { mistake: 'Showing gross churn without net retention', why: 'Gross churn alone tells half the story. A business with 5% monthly gross churn but 130% NRR is doing something very right — the expansion revenue more than offsets the losses. Always show both, and make the relationship between them clear.' },
  { mistake: 'Not segmenting metrics', why: 'Blended metrics hide problems. Your overall churn rate might look fine while enterprise churn is zero and SMB churn is catastrophic. Segment by customer tier, acquisition channel, or cohort where the sample size allows it. Boards that only see blended numbers are governing blind.' },
]

const faqs = [
  {
    q: 'How many metrics should be on a SaaS board dashboard?',
    a: 'Between six and twelve. Below six and you are not giving directors enough signal. Above twelve and you are creating noise that makes it harder to spot what matters. The right number depends on your stage — a seed company might track MRR, growth rate, burn, runway, activation rate, and churn. A Series B company adds NRR, LTV/CAC, payback period, gross margin, and segment breakdowns. Start lean and add metrics as they become meaningful.',
  },
  {
    q: 'Should I show weekly or monthly metrics?',
    a: 'Monthly for board reporting. Weekly cadence is for internal operating reviews. Boards meet monthly or quarterly and think in those time horizons. Weekly fluctuations create noise at board level and can prompt reactive questions about normal variance. The exception is if you have a genuinely weekly product cadence (like a marketplace with weekly GMV) — in which case, show weekly data rolled up to monthly with the weekly trend visible.',
  },
  {
    q: 'When should I add cohort analysis to the board dashboard?',
    a: 'As soon as you have three or more monthly cohorts with meaningful data. Cohort analysis is the most honest view of retention because it shows how specific groups of customers behave over time, rather than blending all customers together. A business can show improving blended churn while individual cohorts are actually getting worse — if the newer cohorts are large enough to dilute the older ones. Cohort data prevents this illusion.',
  },
  {
    q: 'What tools should I use for the SaaS metrics dashboard?',
    a: 'At the earliest stage, a well-formatted spreadsheet is fine. As you grow, tools like ChartMogul, Baremetrics, or ProfitWell (now Paddle) automate the subscription metrics. For the board dashboard specifically, the format matters more than the tool. DeckBrief generates a formatted KPI dashboard from your raw metrics that is ready for a board pack. The key requirement is consistency — use the same tool and format every period so changes in the data stand out, not changes in the presentation.',
  },
]

export default function SaasMetricsDashboardPage() {
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
          SaaS Metrics Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          SaaS Metrics Dashboard: The 12 KPIs Your Board Wants to See
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Every board meeting starts with the same implicit question: is this business healthy, and is it heading in the right direction? A well-structured SaaS metrics dashboard answers both questions in under two minutes. Here are the 12 KPIs that belong on every SaaS board dashboard, with formulas, stage-appropriate benchmarks, and the formatting decisions that make the difference between a dashboard that informs and one that confuses.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 12 SaaS board metrics
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            These twelve metrics give a board complete visibility into revenue, retention, unit economics, and capital efficiency. Not every company needs all twelve from day one — but by Series A, you should be tracking and reporting all of them.
          </p>
          <div className="space-y-0">
            {coreMetrics.map((metric, i) => (
              <div key={metric.num} className={`border-t border-[#E5E0D5] py-6 ${i === coreMetrics.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-10">
                    <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest block">{metric.num}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{metric.name}</h3>
                    <div className="bg-white border border-[#E5E0D5] rounded px-4 py-3 mb-3">
                      <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]"><strong className="text-[#1A1A18]">Formula:</strong> {metric.formula}</p>
                      <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-1"><strong className="text-[#1A1A18]">Benchmark:</strong> {metric.benchmark}</p>
                    </div>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{metric.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Turn your raw metrics into a board-ready KPI dashboard
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your MRR, churn, burn rate, and headcount — DeckBrief generates a formatted board report with KPI dashboard, trend analysis, executive summary, and strategic framing. PDF and PPTX, ready for your next board meeting.
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
            Dashboard formatting rules
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            A dashboard with the right metrics in the wrong format is still a bad dashboard. These formatting rules ensure your board can absorb the information quickly and focus on the discussion rather than deciphering the data.
          </p>
          <div className="space-y-6">
            {dashboardFormatting.map((item) => (
              <div key={item.rule} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.rule}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Metrics by funding stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Not every metric is meaningful at every stage. Here is what to prioritise on your board dashboard as the company matures.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Primary metrics</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Secondary metrics</span>
            </div>
            {[
              { stage: 'Pre-seed / Seed', primary: 'MRR, MRR growth rate, burn rate, runway', secondary: 'Activation rate, early churn signals, product engagement' },
              { stage: 'Series A', primary: 'MRR, growth rate, gross churn, NRR, CAC, LTV/CAC, runway', secondary: 'Payback period, gross margin, pipeline coverage, headcount' },
              { stage: 'Series B+', primary: 'All 12 metrics, segmented by customer tier and channel', secondary: 'Cohort analysis, magic number, burn multiple, rule of 40' },
            ].map((row, i) => (
              <div key={row.stage} className={`grid grid-cols-3 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.stage}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.primary}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.secondary}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            SaaS metrics mistakes that make investors nervous
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {metricMistakes.map((m) => (
              <div key={m.mistake} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.mistake}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.why}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Your metrics, board-ready</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            From spreadsheet to board pack in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Stop spending hours formatting your KPI dashboard. Paste your metrics into DeckBrief and get a professional board report — executive summary, formatted KPI grid, trend analysis, and narrative — ready to send to your directors.
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
