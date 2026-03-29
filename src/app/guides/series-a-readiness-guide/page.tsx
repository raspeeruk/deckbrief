import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Series A Readiness: The Metrics Investors Expect to See',
  description: 'The bar for Series A has risen. Here are the MRR, churn, and unit economics benchmarks UK/EU investors expect — plus the board reporting maturity that signals you\'re ready.',
  keywords: ['series a readiness', 'series a metrics', 'series a requirements', 'series a MRR', 'startup series a'],
}

const benchmarks = [
  { metric: 'MRR', benchmark: '£50K–£150K', context: 'With a clear and consistent growth trajectory. The absolute number matters less than the direction and consistency of growth. A company at £60K MRR growing 15% MoM is a stronger Series A candidate than one at £120K MRR growing 3% MoM.' },
  { metric: 'YoY growth', benchmark: '3x minimum', context: 'Often called "triple, triple, double, double, double" (T2D3). If you\'re growing 3x year-on-year from £400K ARR, you\'re on track. Below 2x YoY at this stage is a red flag for most institutional investors.' },
  { metric: 'Monthly churn', benchmark: '<3%', context: 'Logo churn. Revenue churn should be negative (expansion revenue) or close to it. Churn above 5% monthly suggests you haven\'t found product-market fit in a durable way, regardless of top-line growth.' },
  { metric: 'Gross margin', benchmark: '60%+ (SaaS)', context: 'Software margins should be heading toward 70-80%. If you\'re at 40-50%, investors will want to understand why and see the path to improvement. Services revenue blended in at low margins will concern VCs focused on scalability.' },
  { metric: 'CAC payback', benchmark: '<18 months', context: 'How long until a new customer pays back their acquisition cost in gross profit. Under 12 months is strong. Over 24 months is hard to justify unless ACV is very high and churn is near zero.' },
  { metric: 'Net Revenue Retention', benchmark: '>110%', context: 'If your existing customers spend more with you over time (expansion, upsells, seat growth), NRR above 100% means you can grow revenue without adding a single new customer. Best-in-class SaaS companies run at 120-130% NRR.' },
]

const diligenceChecklist = [
  'Management accounts (monthly P&L, balance sheet, cash flow) — last 12 months',
  'ARR/MRR breakdown by customer, cohort, and product line',
  'Customer churn analysis: monthly logo churn and revenue churn by cohort',
  'CAC and LTV by channel and segment',
  'Headcount plan and burn rate bridge to proposed runway',
  'Cap table (fully diluted) with option pool detail',
  'Data room: contracts, IP ownership, employment agreements, shareholder agreements',
  'Board minutes or investor update archive — last 12 months',
  'Financial model with assumptions clearly documented',
  'Customer references (3-5 named customers willing to speak)',
]

const boardReportingMaturity = [
  { level: 'Pre-seed', desc: 'Ad hoc updates to angels when major events occur. No formal structure expected.' },
  { level: 'Seed', desc: 'Monthly investor update email. Covers MRR, runway, key wins, challenges, asks. 1-2 pages. Consistent format.' },
  { level: 'Series A ready', desc: 'Monthly board pack with executive summary, financials (P&L + cash), KPI dashboard, strategic memos, and asks. Sent 48 hours before board meetings. Minutes kept.' },
  { level: 'Series A and beyond', desc: 'Full institutional board governance. Board committees (audit, remuneration). Data room maintained. Quarterly forecast vs actuals.' },
]

const faqs = [
  {
    q: 'What MRR do I need for Series A?',
    a: 'The common benchmark is £50K-£150K MRR (roughly $1-2M ARR) for UK/EU Series A rounds in 2024-2025. But MRR in isolation is less important than the growth rate and churn. A company at £60K MRR growing 15% month-on-month will get more Series A attention than one at £150K MRR growing 4% MoM. The story is: you\'ve found product-market fit (low churn), you know how to grow (improving CAC payback), and you need capital to accelerate what\'s already working.',
  },
  {
    q: 'How long does Series A diligence take?',
    a: 'From term sheet to close: 6-10 weeks on average. But the process from first meeting to term sheet can take 2-6 months. Investors move faster when the data room is ready, the management accounts are clean, and references are pre-warmed. Companies that get to term sheet in under 8 weeks typically have all financial records organised before the first VC meeting.',
  },
  {
    q: 'Do I need audited accounts for Series A?',
    a: 'Not always required at Series A in the UK/EU, but some institutional investors — particularly those with LP requirements — will want it or at least management accounts reviewed by an accountant. You should have clean, accountant-prepared management accounts for the last 12 months as a minimum. Audited accounts become important at Series B and for any company planning to go public. Get your accounts in order before starting the raise, not during it.',
  },
  {
    q: 'What\'s the difference between a Series A and a growth equity round?',
    a: 'Series A is typically for companies that have found product-market fit and need capital to scale go-to-market and product. Growth equity (Series B, C, and beyond) is for companies with proven unit economics that are scaling a repeatable model. The key practical difference: Series A investors are betting on the team and the market as much as the traction; growth equity investors are betting primarily on the numbers. Series A VCs expect to be heavily involved (board seats, strategic input); growth equity firms are often more hands-off.',
  },
]

export default function SeriesAReadinessGuidePage() {
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
          Series A Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Series A Readiness: The Metrics Investors Expect to See
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          The bar has risen. What qualified as a Series A in 2020 is often now a seed or pre-seed in 2025. Here are the specific metrics, diligence requirements, and board reporting maturity that institutional investors in the UK and Europe expect to see before they write a Series A cheque.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Series A benchmarks (UK/EU, 2024–2025)
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            These are directional benchmarks, not hard rules. The right combination of metrics matters more than hitting every number. A company with exceptional NRR and growth rate can raise at lower absolute MRR. A company with high churn cannot compensate with MRR alone.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {benchmarks.map((row, i) => (
              <div key={row.metric} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <div className="flex items-baseline justify-between mb-2">
                  <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18]">{row.metric}</p>
                  <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#C8102E]">{row.benchmark}</p>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.context}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The Series A data room checklist
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Investors will ask for these documents. Having them ready before the process starts — not after the term sheet — signals operational maturity and speeds the close. Each missing document adds a week to the timeline.
          </p>
          <div className="space-y-0">
            {diligenceChecklist.map((item, i) => (
              <div key={i} className={`border-t border-[#E5E0D5] py-4 flex items-start gap-4 ${i === diligenceChecklist.length - 1 ? 'border-b' : ''}`}>
                <div className="w-4 h-4 border border-[#C8102E] rounded-sm shrink-0 mt-0.5" />
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Board reporting maturity — what Series A looks like
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            How you report to your existing investors is a preview of how you&rsquo;ll run the company post-Series A. Investors check this. A founder who has been sending consistent monthly board packs for 12 months signals governance maturity that investors assign a real premium to.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {boardReportingMaturity.map((row, i) => (
              <div key={row.level} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-2">{row.level}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Prepare your monthly board metrics pack to institutional standard
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief generates the board pack format that Series A investors expect to see — executive summary, KPI dashboard, financials, and asks — from your raw metrics in 60 seconds.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Pack Free →
          </Link>
        </div>

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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Get Series A ready</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Board reporting that signals institutional maturity
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Start generating the monthly board pack format that Series A investors expect — before your raise begins.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Pack Free →
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
