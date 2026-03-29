import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 12 KPIs Every Startup Board Expects You to Report | DeckBrief',
  description: 'The complete startup KPI framework: North Star metric, revenue metrics (MRR, ARR, churn), growth metrics (CAC, LTV, LTV:CAC), efficiency metrics (burn multiple, magic number), and people metrics.',
  openGraph: {
    title: 'The 12 KPIs Every Startup Board Expects You to Report',
    description: 'North Star, MRR, ARR, churn, CAC, LTV, burn multiple, magic number — the full KPI framework for startup boards.',
    type: 'article',
  },
}

const kpis = [
  {
    number: '01',
    category: 'North Star',
    name: 'North Star Metric',
    definition: 'The single metric that best captures the value your product delivers to customers. For Slack it was daily active users. For Stripe it was payment volume. For a SaaS: active users who complete the core action, not just logged in.',
    whyItMatters: 'VCs and board members use the North Star metric to understand if you are growing in ways that compound. Revenue can be bought; North Star engagement compounds if the product is working.',
    formula: null,
  },
  {
    number: '02',
    category: 'Revenue',
    name: 'MRR (Monthly Recurring Revenue)',
    definition: 'Total predictable recurring revenue in a given month. For annual contracts: divide ACV by 12. Do not include one-time fees or professional services unless they are truly recurring.',
    whyItMatters: 'MRR is the heartbeat of a SaaS business. Board members want to see absolute MRR and MoM growth rate. Below $100K MRR, grow at 15%+ MoM to be on a Series A trajectory.',
    formula: 'Sum of all recurring monthly fees from active customers',
  },
  {
    number: '03',
    category: 'Revenue',
    name: 'ARR (Annual Recurring Revenue)',
    definition: 'MRR × 12. Used for normalising comparison between companies with mixed billing cycles. Some use it as a snapshot (current MRR × 12), others as a trailing sum — be consistent and state which you use.',
    whyItMatters: 'VCs benchmark against ARR milestones: $1M ARR for Series A conversations, $3M for Series A close, $10M for Series B. Know where you stand.',
    formula: 'MRR × 12',
  },
  {
    number: '04',
    category: 'Revenue',
    name: 'Net Revenue Churn',
    definition: 'Revenue lost from existing customers (cancellations + downgrades), net of expansion revenue from the same cohort. Negative churn means expansion revenue exceeds losses — the ideal state.',
    whyItMatters: 'A SaaS with 3%+ monthly logo churn is filling a leaky bucket. Board members watch this number because it determines whether growth is compounding or eroding. Target: under 1% monthly logo churn, under 5% annual net revenue churn.',
    formula: '(Churned MRR − Expansion MRR) / Beginning MRR',
  },
  {
    number: '05',
    category: 'Growth',
    name: 'MoM Growth Rate',
    definition: 'Month-over-month percentage growth in MRR (or your primary revenue metric). The most scrutinised growth metric at early stage. A compound 10% MoM growth rate means ~3x in a year.',
    whyItMatters: 'Series A investors typically want to see consistent 15–20% MoM growth over a 6-month period. Lumpy growth (spike, flat, spike) is a red flag for sales team or product fit issues.',
    formula: '(Current MRR − Prior MRR) / Prior MRR',
  },
  {
    number: '06',
    category: 'Growth',
    name: 'CAC (Customer Acquisition Cost)',
    definition: 'Total sales and marketing spend divided by new customers acquired in the same period. Include salaries, ad spend, tools, events — every dollar spent to generate a customer.',
    whyItMatters: 'CAC in isolation is meaningless. Board members always read it alongside LTV. A $5,000 CAC is fantastic if LTV is $50,000; it is terminal if LTV is $6,000.',
    formula: 'Total S&M spend / New customers acquired',
  },
  {
    number: '07',
    category: 'Growth',
    name: 'LTV (Lifetime Value)',
    definition: 'The total revenue expected from a customer over their lifetime with you. Simple version: ARPU / monthly churn rate. More accurate: model cohort revenue curves and take the area under the curve.',
    whyItMatters: 'LTV tells you how much you can afford to spend acquiring a customer. The 3x rule (LTV should be at least 3× CAC) is a common benchmark, but VC-backed SaaS often runs at much higher multiples.',
    formula: 'ARPU / Monthly churn rate (simplified)',
  },
  {
    number: '08',
    category: 'Growth',
    name: 'LTV:CAC Ratio',
    definition: 'Lifetime Value divided by Customer Acquisition Cost. The single most important capital efficiency metric at growth stage. Target: 3:1 minimum. Healthy SaaS: 5:1 to 8:1.',
    whyItMatters: 'Below 3:1, every customer you acquire destroys value. Above 5:1, you may be underinvesting in growth. Board members use this ratio to decide whether to push you to grow faster or tighten unit economics first.',
    formula: 'LTV / CAC',
  },
  {
    number: '09',
    category: 'Efficiency',
    name: 'Burn Multiple',
    definition: 'Net burn divided by net new ARR in the same period. How many dollars of cash are you burning to generate one dollar of new ARR? Invented and popularised by David Sacks at Craft Ventures.',
    whyItMatters: 'Under 1× = exceptional. 1–1.5× = good. 1.5–2× = fair. Above 2× = board will ask questions. This metric became the primary efficiency benchmark post-2022 when the funding environment tightened.',
    formula: 'Net burn / Net new ARR',
  },
  {
    number: '10',
    category: 'Efficiency',
    name: 'Magic Number',
    definition: 'Measures the efficiency of your sales and marketing spend. Annualised net new ARR divided by prior quarter S&M spend. Popularised by Pacific Crest/Bessemer as a go-to-market efficiency benchmark.',
    whyItMatters: 'Above 0.75: reasonable — invest more in S&M. Above 1.0: excellent — scale aggressively. Below 0.5: diagnose before spending more. Board members use this to pressure-test your growth investment thesis.',
    formula: 'Annualised net new ARR / Prior period S&M spend',
  },
  {
    number: '11',
    category: 'People',
    name: 'Headcount by Department',
    definition: 'Total employees broken down by function: Engineering & Product, Sales, Customer Success, Marketing, G&A. Show current month vs prior month. Flag open roles in active hiring.',
    whyItMatters: 'Headcount is your biggest expense and your biggest liability. Board members look at headcount growth relative to ARR growth to assess whether the team is scaling efficiently. Revenue per FTE should improve over time.',
    formula: null,
  },
  {
    number: '12',
    category: 'People',
    name: 'Hiring Plan vs Actuals',
    definition: 'What you planned to hire this quarter vs what you actually hired. Include roles, levels, time-to-fill, and any roles you paused or de-prioritised.',
    whyItMatters: 'Consistent hiring plan misses signal execution problems — either in recruiting process, compensation benchmarks, or role definition. Angels are less focused on this; institutional VCs post-Series A will ask about it.',
    formula: null,
  },
]

export default function StartupKPIsPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">

      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#C8102E]" />
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] tracking-tight">
            DeckBrief
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="https://deckbrief.com"
            className="font-[family-name:var(--font-data)] text-sm font-semibold bg-[#1A1A18] text-white px-5 py-2.5 rounded hover:bg-[#C8102E] transition-colors"
          >
            Report these KPIs automatically
          </a>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-12" />
      </div>

      {/* Article */}
      <article className="max-w-[780px] mx-auto px-6 pb-24">

        <p className="kicker mb-5">Startup Metrics</p>

        <h1 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '52px', lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }}>
          The 12 KPIs Every Startup Board Expects You to Report
        </h1>

        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed mb-8">
          Board members have seen hundreds of board packs. They know within 30 seconds whether a founder understands their business. These are the 12 metrics that define that judgment — with definitions, formulas, and why each one matters to your investors.
        </p>

        <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-12">
          <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">Quick navigation</p>
          <div className="grid grid-cols-2 gap-2">
            {['North Star', 'MRR', 'ARR', 'Churn', 'MoM Growth', 'CAC', 'LTV', 'LTV:CAC', 'Burn Multiple', 'Magic Number', 'Headcount', 'Hiring Plan'].map((label, i) => (
              <a
                key={label}
                href={`#kpi-${i + 1}`}
                className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] hover:text-[#C8102E] transition-colors flex items-center gap-1"
              >
                <span className="text-[#E5E0D5]">→</span> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#E5E0D5] mb-12" />

        {/* KPI list */}
        <div className="space-y-12">
          {kpis.map((kpi, i) => (
            <section key={kpi.number} id={`kpi-${i + 1}`} className="scroll-mt-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-[family-name:var(--font-data)] text-2xl font-bold text-[#E5E0D5] flex-shrink-0 leading-none mt-1">{kpi.number}</span>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-[0.15em] mb-1">{kpi.category}</p>
                  <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18]" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700 }}>
                    {kpi.name}
                  </h2>
                </div>
              </div>

              <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
                {kpi.definition}
              </p>

              {kpi.formula && (
                <div className="bg-[#1A1A18] rounded px-4 py-3 mb-4 inline-block">
                  <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] uppercase tracking-widest mr-2">Formula:</span>
                  <span className="font-[family-name:var(--font-data)] text-sm text-white">{kpi.formula}</span>
                </div>
              )}

              <div className="border-l-2 border-[#C8102E] pl-4">
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-1">Why it matters to your board</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{kpi.whyItMatters}</p>
              </div>

              {i < kpis.length - 1 && <div className="h-px bg-[#E5E0D5] mt-12" />}
            </section>
          ))}
        </div>

        {/* VCs vs angels note */}
        <section className="mt-16 mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            VCs vs Angels: Different Lenses on the Same Data
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Angel investors are often former operators. They want to understand the story — what is working, what you tried, what you learned. They are less likely to drill into LTV:CAC ratios and more likely to ask about the specific deal that drove MRR growth last month.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Institutional VCs are portfolio managers. They are benchmarking your metrics against their other companies and the market. They will notice if your burn multiple is trending worse quarter-over-quarter even if ARR is growing. They want the full table, every time, in the same format.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            The right approach: provide all 12 KPIs in your board report. Let each reader focus on what matters to them. Do not pre-filter the data based on who is in the room.
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700 }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/board-report-template', label: 'Board Report Template', desc: 'Where to put these KPIs in your board report' },
              { href: '/guides/investor-update-email', label: 'Investor Update Email', desc: 'How to present metrics in your monthly update' },
              { href: '/guides/board-meeting-agenda', label: 'Board Meeting Agenda', desc: 'How to structure the metrics review in the meeting' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-[#E5E0D5] rounded p-5 hover:border-[#1A1A18] transition-colors"
              >
                <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#1A1A18] mb-1">{link.label}</p>
                <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1A1A18] rounded p-12 text-center">
          <p className="kicker text-[#C8102E] mb-4">Report all 12 automatically</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4 leading-tight">
            Paste your metrics. Get a board-ready report.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-8 max-w-[420px] mx-auto leading-relaxed">
            DeckBrief formats all your KPIs into a Sequoia-style board report — with AI narrative, metric grid, and highlights. Done in 60 seconds.
          </p>
          <a
            href="https://deckbrief.com"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-8 py-4 rounded font-semibold hover:bg-[#A00E26] transition-colors text-sm"
          >
            Try DeckBrief free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="h-[2px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-8" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-4 bg-[#C8102E]" />
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#6B6456]">DeckBrief</span>
          </div>
          <div className="flex items-center gap-6 font-[family-name:var(--font-data)] text-sm text-[#6B6456]">
            <Link href="/" className="hover:text-[#1A1A18] transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-[#1A1A18] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1A1A18] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
