import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Model for Startups: What You Need and How to Build It',
  description: 'The 3-statement model explained for founders — which startups need all three, how to model each revenue type, and the common financial model mistakes that kill fundraises.',
  keywords: ['financial model startup', 'startup financial model', 'three statement model', 'financial projections startup', 'SaaS financial model'],
}

const revenueModels = [
  {
    type: 'SaaS',
    formula: 'MRR = (opening MRR + new MRR + expansion MRR) − churned MRR',
    keyAssumptions: 'Monthly growth in new MRR, monthly churn rate, expansion rate from existing customers',
    tip: 'Model at the cohort level, not just top-line. A flat MRR number that hides improving cohort retention is a better story than you\'re showing.',
  },
  {
    type: 'Marketplace',
    formula: 'Revenue = GMV × take rate. GMV = supply side volume × average order value',
    keyAssumptions: 'Supply growth rate, demand-side conversion, average order value, take rate evolution',
    tip: 'Model supply and demand separately. Most marketplace models fail because they assume demand follows supply linearly — it doesn\'t.',
  },
  {
    type: 'Services',
    formula: 'Revenue = billable headcount × utilisation rate × day rate',
    keyAssumptions: 'Headcount hiring plan, time to ramp, utilisation target (typically 70-80%), day rate by seniority',
    tip: 'Always model utilisation conservatively. 80% utilisation sounds achievable — 65% is what most services businesses actually run at in year one.',
  },
  {
    type: 'E-commerce / DTC',
    formula: 'Revenue = orders × AOV. Orders = (new customers + returning customers) × frequency',
    keyAssumptions: 'Customer acquisition cost, repeat purchase rate, average order value, return rate (deducted)',
    tip: 'Separate new customer revenue from repeat customer revenue. They have entirely different margin and CAC profiles.',
  },
]

const mistakes = [
  { mistake: 'Hockey stick with no drivers', detail: 'A revenue line that goes up 5x in year 3 with no corresponding change in headcount, marketing spend, or channel mix. Investors will ask "what drives the inflection?" and you must have an answer that is specific and testable.' },
  { mistake: 'No sensitivity analysis', detail: 'A single-scenario model signals inexperience. Build base, bear, and bull cases. Show what happens if growth is 30% slower or churn is 2% higher. The model that survives stress-testing is more credible than the one that shows unbroken optimism.' },
  { mistake: 'Ignoring working capital', detail: 'Common in services and e-commerce: you bill in arrears, pay suppliers upfront, and have 30-60 day payment terms. Your cash flow can go negative even when you\'re profitable. Model the working capital cycle explicitly.' },
  { mistake: 'Headcount not tied to revenue', detail: 'If your revenue 3x\'s but your team only grows by one person, that is not a hiring plan — it is wishful thinking. Each department\'s headcount should follow a logical ratio to the activity it supports (sales headcount / pipeline, engineering headcount / product milestones).' },
  { mistake: 'Gross margin ignored', detail: 'Top-line revenue in, EBITDA out, nothing in between. Gross margin is where investors look first. If you\'re a SaaS business at 40% gross margin, that needs explanation. The model should show why and when it improves.' },
]

const scenarios = [
  { scenario: 'Base case', desc: 'What you actually expect to happen, built bottom-up from your current growth rate and hiring plan. This is what you present to investors. It should be achievable without perfect execution.' },
  { scenario: 'Bear case', desc: 'Growth is 30-40% lower, key hire takes 3 months longer, churn is 2-3% higher. Your bear case should show you survive — you reach profitability later, but you don\'t run out of cash mid-round. If you do, investors will require covenants.' },
  { scenario: 'Bull case', desc: 'Everything breaks your way: viral growth, enterprise contract closes early, take rate improves. Use this internally to understand your upside. Do not present this to investors as the base case — they will notice and discount everything you say afterwards.' },
]

const faqs = [
  {
    q: 'How far out should a startup financial model go?',
    a: 'Three years for most seed and Series A raises. Year 1 should be monthly (so investors can track actuals vs model after the round). Years 2 and 3 can be quarterly or annual. Going beyond 3 years is usually theatre — the assumptions become too uncertain to be meaningful, and investors know it. Five-year models are more common at Series B and growth stage, where unit economics are proven and the only question is scale.',
  },
  {
    q: 'Do investors expect profitability in the model?',
    a: 'Not for early-stage raises. What investors want to see is a path to profitability that is internally consistent — the business reaches gross margin positive, then EBITDA positive, at a point that aligns with the capital you\'re raising. A model that shows perpetual losses with no inflection point is a red flag. A model that shows profitability in year 1 for a VC-backed business signals you\'re not thinking big enough about the market opportunity.',
  },
  {
    q: 'What\'s the difference between revenue and ARR?',
    a: 'Revenue is what you invoice. ARR (Annual Recurring Revenue) is the annualised value of your current recurring contract base — it excludes one-time revenue and professional services. If you have £50K MRR in recurring SaaS subscriptions plus £20K this month in implementation fees, your MRR is £50K and your ARR is £600K (£50K × 12). Never include non-recurring revenue in your ARR — investors will spot it and it destroys credibility.',
  },
  {
    q: 'How do I model CAC and LTV?',
    a: 'CAC (Customer Acquisition Cost) = total sales and marketing spend in a period ÷ new customers acquired in that period. LTV (Lifetime Value) = average revenue per customer × gross margin % ÷ monthly churn rate. The ratio that matters: LTV:CAC should be 3:1 or better for most SaaS businesses. Payback period (CAC ÷ monthly gross profit per customer) should be under 18 months. Both should be improving over time as your brand, word of mouth, and sales efficiency improve.',
  },
]

export default function FinancialModelForStartupsPage() {
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
          Financial Model Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Financial Model for Startups: What You Need and How to Build It
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          A financial model is not a spreadsheet that proves you&rsquo;ll succeed — it&rsquo;s a structured way of showing you understand your business. Here is what investors want to see, how to model each revenue type, and the mistakes that kill credibility before you&rsquo;ve finished presenting.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 3-statement model — and which startups need all three
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            A full 3-statement model links the P&L, balance sheet, and cash flow statement so that changes in one flow through to the others. Most early-stage founders only build a P&L. Here is when you need each.
          </p>
          <div className="space-y-0">
            {[
              { stmt: 'P&L (Income Statement)', when: 'Always. Revenue, gross margin, operating expenses, EBITDA. This is the minimum. Build it monthly for year 1, quarterly for years 2-3. Show assumptions separately — never bake growth rates into the numbers without surfacing them.' },
              { stmt: 'Cash Flow Statement', when: 'From seed stage onwards. The P&L shows profit; cash flow shows the money actually moving. They diverge when you have deferred revenue (SaaS annual contracts), long payment terms, or capex. Investors care more about cash runway than P&L profitability at early stage.' },
              { stmt: 'Balance Sheet', when: 'Required from Series A onwards. Pre-Series A: a simplified version showing cash position, deferred revenue, and outstanding liabilities is sufficient. Post-Series A: a full balance sheet is expected and will be checked against your management accounts.' },
            ].map((row, i, arr) => (
              <div key={row.stmt} className={`border-t border-[#E5E0D5] py-6 ${i === arr.length - 1 ? 'border-b' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18] mb-2">{row.stmt}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.when}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            How to model each revenue type
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {revenueModels.map(model => (
              <div key={model.type} className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
                <div className="bg-[#1A1A18] px-6 py-3">
                  <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest">{model.type}</p>
                </div>
                <div className="px-6 py-5 space-y-3">
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#6B6456] uppercase tracking-widest mb-1">Formula</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#1A1A18] leading-relaxed">{model.formula}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#6B6456] uppercase tracking-widest mb-1">Key assumptions</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{model.keyAssumptions}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest mb-1">Practical tip</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{model.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Common financial model mistakes
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {mistakes.map(m => (
              <div key={m.mistake} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.mistake}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 3 scenarios rule — and which one to show investors
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Every financial model should have three scenarios. Investors who see only one scenario know you modelled backwards from a target revenue number. The scenario work is as much about your own planning discipline as investor presentation.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {scenarios.map((row, i) => (
              <div key={row.scenario} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-2">{row.scenario}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate standardised financial summary slides from your model outputs
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your P&L projections into DeckBrief and get the financial summary slide, KPI grid, and runway projection formatted for board reports and investor presentations.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Financial Slides Free →
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">From model to board pack</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Turn your financial model into a board-ready slide in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            DeckBrief formats your financial projections into the standardised output that investors and board members expect.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Financial Slides Free →
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
