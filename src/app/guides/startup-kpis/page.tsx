import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup KPIs: The Metrics That Actually Matter at Each Stage',
  description: 'Which startup KPIs matter at pre-product, early stage, and growth stage — with formulas, benchmarks, and the one metric that matters at each stage.',
  keywords: ['startup KPIs', 'startup metrics to track', 'key metrics for startups'],
}

const preProductKpis = [
  { kpi: 'Weekly active users (WAU)', why: 'Before revenue, engagement is the only real signal. WAU tells you whether people are returning — the only thing that matters before monetisation. Day-1 or Day-7 retention is even better if you can track it.' },
  { kpi: 'Waitlist conversion rate', why: 'If you\'re pre-launch, how many people who hear about the product sign up? And of those, how many complete onboarding when they get access? Each handoff is a conversion you should be measuring.' },
  { kpi: 'NPS (Net Promoter Score)', why: 'Ask 10 users. You need to understand whether your early adopters love the product or just tolerate it. An NPS below 30 pre-product/market fit means you have a product problem. An NPS above 50 with any retention means you have something.' },
  { kpi: 'Retention (Day-7, Day-30)', why: 'The single hardest metric to fake. Users who come back after 7 days found real value. Track it from the first cohort, even if n=20. The earlier you build this habit, the more valuable your data is when you\'re raising.' },
]

const earlyStageKpis = [
  { kpi: 'MRR (Monthly Recurring Revenue)', formula: 'Sum of all monthly subscription revenue', benchmark: 'Benchmark varies — focus on trajectory' },
  { kpi: 'MoM growth rate', formula: '(MRR this month - MRR last month) / MRR last month × 100', benchmark: '10-15% MoM is exceptional at seed. 5-7% is solid.' },
  { kpi: 'Gross churn rate', formula: 'MRR lost to cancellations / MRR at start of period × 100', benchmark: 'Under 2% monthly. Over 3% is a structural problem.' },
  { kpi: 'CAC (Customer Acquisition Cost)', formula: 'Total sales & marketing spend / number of new customers acquired', benchmark: 'Less important than LTV/CAC ratio' },
  { kpi: 'LTV/CAC ratio', formula: '(Average contract value × gross margin) / (churn rate × CAC)', benchmark: '3:1 minimum. 5:1+ is healthy for early stage.' },
  { kpi: 'Runway', formula: 'Cash in bank / monthly net burn', benchmark: 'Under 12 months: raise or cut. 18+ months: execute.' },
]

const growthStageKpis = [
  { kpi: 'NRR / NDR (Net Revenue Retention)', formula: '(Starting MRR + expansion - contraction - churn) / Starting MRR × 100', benchmark: '100% = flat. 110%+ = growth from existing customers alone. 120%+ = best in class.' },
  { kpi: 'Payback period', formula: 'CAC / (Monthly revenue per customer × gross margin %)', benchmark: 'Under 12 months for SMB. Under 18 months for enterprise.' },
  { kpi: 'Burn multiple', formula: 'Net burn / net new ARR', benchmark: 'Under 1x is excellent. 1-1.5x is good. 2x+ needs explanation.' },
  { kpi: 'ARR (Annual Recurring Revenue)', formula: 'MRR × 12', benchmark: 'The headline metric for Series A+ fundraising' },
  { kpi: 'Quick ratio', formula: '(New MRR + expansion MRR) / (contraction MRR + churn MRR)', benchmark: '4+ is strong. Under 2 suggests you\'re leaking faster than you\'re filling.' },
]

const kpiTable = [
  { kpi: 'MRR', formula: 'Sum of monthly subscriptions', measures: 'Revenue momentum', good: '10%+ MoM growth at seed', bad: 'Flat or declining 3+ months' },
  { kpi: 'MoM Growth', formula: '(MRR₂ - MRR₁) / MRR₁ × 100', measures: 'Growth velocity', good: '10-15%+ monthly', bad: 'Under 3% consistently' },
  { kpi: 'Gross Churn', formula: 'Churned MRR / Opening MRR × 100', measures: 'Product retention', good: 'Under 2% monthly', bad: 'Over 3% monthly' },
  { kpi: 'NRR', formula: '(Start + expansion - churn) / Start × 100', measures: 'Net revenue health', good: '110%+', bad: 'Under 90%' },
  { kpi: 'CAC', formula: 'S&M spend / new customers', measures: 'Acquisition efficiency', good: 'Trending down over time', bad: 'Rising without explanation' },
  { kpi: 'LTV/CAC', formula: 'LTV / CAC', measures: 'Unit economics', good: '3:1 minimum, 5:1+ healthy', bad: 'Under 2:1' },
  { kpi: 'Payback Period', formula: 'CAC / (Rev/customer × GM%)', measures: 'Cash efficiency', good: 'Under 12 months', bad: 'Over 24 months' },
  { kpi: 'Burn Multiple', formula: 'Net burn / net new ARR', measures: 'Capital efficiency', good: 'Under 1x', bad: 'Over 2x' },
  { kpi: 'Runway', formula: 'Cash / monthly burn', measures: 'Survival horizon', good: '18+ months', bad: 'Under 12 months' },
]

const stageMetrics = [
  { stage: 'Pre-product / Waitlist', metric: 'Day-7 retention', why: 'Before you have revenue, retention is the only signal that matters. Everything else is noise.' },
  { stage: 'Pre-revenue ($0 MRR)', metric: 'Time to first paid customer', why: 'Validation that the product is worth paying for. Not pilot, not LOI — paying customer.' },
  { stage: 'Early revenue ($0-100k ARR)', metric: 'MoM MRR growth rate', why: 'Velocity is what investors are buying at seed. Are you compounding?' },
  { stage: 'Finding PMF ($100k-$500k ARR)', metric: 'Gross churn rate', why: 'High growth with high churn is a leaky bucket. Churn tells you if you\'ve found product-market fit or just good salespeople.' },
  { stage: 'Post-PMF ($500k-$2M ARR)', metric: 'NRR (Net Revenue Retention)', why: 'If NRR is 110%+, your existing customers are growing the business for you. This is the metric that defines your Series A story.' },
  { stage: 'Growth ($2M+ ARR)', metric: 'Burn multiple', why: 'Capital efficiency becomes the dominant question. How much are you burning to generate each pound of new ARR?' },
]

const vanityMetrics = [
  { vanity: 'Total registered users', real: 'Weekly active users (WAU) or daily active users (DAU). Registered ≠ active. Investors know this.' },
  { vanity: 'Gross revenue (incl. refunds/credits)', real: 'Net revenue. Show refunds and credits explicitly — investors will ask.' },
  { vanity: 'Pipeline value', real: 'Closed ARR. Pipeline is opinion; closed deals are fact. Weighted pipeline is acceptable at Series A+.' },
  { vanity: 'Social media followers', real: 'Referral conversion rate, organic trial starts, content-driven signups. Followers don\'t pay rent.' },
  { vanity: 'App downloads', real: 'Day-7 retention rate, WAU/MAU ratio. Downloads that don\'t convert to active users are a vanity stat.' },
  { vanity: 'Press mentions / PR coverage', real: 'Direct traffic growth, branded search volume. Coverage that doesn\'t move a metric isn\'t a business result.' },
]

const faqs = [
  {
    q: 'How many KPIs should a startup track?',
    a: 'Five to seven core metrics, reviewed weekly. The problem with tracking 20 metrics isn\'t the data — it\'s that you don\'t know which five actually matter, so you track everything and understand nothing. At each stage, there are 2-3 metrics that determine whether the business is working. Identify those and track them obsessively. Track everything else monthly for context.',
  },
  {
    q: 'When should a startup start tracking KPIs formally?',
    a: 'Day one. Not because you\'ll have meaningful data on day one, but because the habit and infrastructure matters. Set up basic tracking before you have your first customer. The founders who present clean, historical metric data at seed stage are the ones who raised quickly — not because the numbers were good, but because the rigour signalled something about how they run the business.',
  },
  {
    q: 'What KPIs do VCs ask about in Series A meetings?',
    a: 'NRR, CAC payback period, gross margin, and MoM growth over the last 6-12 months. They also care deeply about churn cohort analysis — not just aggregate churn, but how churn differs by cohort, segment, and acquisition channel. If you can\'t answer "what\'s the churn rate of customers acquired through paid vs organic?" you haven\'t done the analysis.',
  },
  {
    q: 'Is ARR or MRR more important?',
    a: 'MRR for operational decisions (burn rate, runway, month-to-month trend). ARR for fundraising conversations (easier benchmark against VC return models). Both matter. Track MRR monthly, report ARR in investor conversations. Be explicit about the difference — some founders conflate annualised monthly run rate with actual annual contract value, and investors catch it.',
  },
]

export default function StartupKpisPage() {
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
          Startup Metrics
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Startup KPIs: The Metrics That Actually Matter at Each Stage
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Most founders track 20 metrics and understand none of them deeply. VCs care about 5-7 core metrics — and the specific ones change as you scale. Here&rsquo;s which KPIs matter at each stage, with formulas, benchmarks, and the one number to obsess over.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Pre-product KPIs
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            When you have no revenue, you&rsquo;re measuring signal — is this product creating genuine value for the people using it? Four metrics that matter before the first paying customer:
          </p>
          <div className="space-y-0">
            {preProductKpis.map((k, i) => (
              <div key={k.kpi} className={`border-t border-[#E5E0D5] py-5 ${i === preProductKpis.length - 1 ? 'border-b' : ''}`}>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-2">{k.kpi}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{k.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Early-stage KPIs ($0–$1M ARR)
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Once you&rsquo;re generating revenue, these six metrics are the ones every seed-stage investor will ask about. Know them, track them weekly, and have at least 6 months of history.
          </p>
          <div className="space-y-0">
            {earlyStageKpis.map((k, i) => (
              <div key={k.kpi} className={`border-t border-[#E5E0D5] py-5 ${i === earlyStageKpis.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18]">{k.kpi}</h3>
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-wider shrink-0">BENCHMARK: {k.benchmark}</span>
                </div>
                <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] bg-[#F4F1EB] border border-[#E5E0D5] rounded px-3 py-2 mb-0">
                  Formula: {k.formula}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Growth-stage KPIs ($1M–$10M ARR)
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            At Series A and beyond, you carry all the early-stage metrics plus these. The questions shift from &ldquo;is this growing?&rdquo; to &ldquo;is this growing efficiently?&rdquo;
          </p>
          <div className="space-y-0">
            {growthStageKpis.map((k, i) => (
              <div key={k.kpi} className={`border-t border-[#E5E0D5] py-5 ${i === growthStageKpis.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18]">{k.kpi}</h3>
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-wider shrink-0">BENCHMARK: {k.benchmark}</span>
                </div>
                <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] bg-[#F4F1EB] border border-[#E5E0D5] rounded px-3 py-2">
                  Formula: {k.formula}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Comprehensive KPI reference table
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-x-auto">
            <table className="w-full font-[family-name:var(--font-data)] text-xs min-w-[640px]">
              <thead>
                <tr className="bg-[#F4F1EB] border-b border-[#E5E0D5]">
                  {['KPI', 'Formula', 'Measures', "What's Good", "What's Bad"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-[9px] font-bold text-[#6B6456] uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kpiTable.map((row, i) => (
                  <tr key={row.kpi} className={i > 0 ? 'border-t border-[#E5E0D5]' : ''}>
                    <td className="px-4 py-3 font-semibold text-[#1A1A18] whitespace-nowrap">{row.kpi}</td>
                    <td className="px-4 py-3 text-[#6B6456] font-mono text-[10px]">{row.formula}</td>
                    <td className="px-4 py-3 text-[#6B6456]">{row.measures}</td>
                    <td className="px-4 py-3 text-[#1A6B3C] font-medium">{row.good}</td>
                    <td className="px-4 py-3 text-[#C8102E] font-medium">{row.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The one metric that matters at each stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Every stage has a single metric that, if you optimise for it correctly, pulls everything else forward. This doesn&rsquo;t mean ignoring the others — it means knowing which number you should be able to recite in your sleep.
          </p>
          <div className="space-y-0">
            {stageMetrics.map((s, i) => (
              <div key={s.stage} className={`border-t border-[#E5E0D5] py-5 ${i === stageMetrics.length - 1 ? 'border-b' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest mb-1">{s.stage}</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-0.5 w-4 bg-[#C8102E] shrink-0" />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#C8102E]">{s.metric}</h3>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{s.why}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">BoardBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Pull your KPIs into a board-ready visual report automatically
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief takes your metrics — MRR, churn, burn, NRR — and generates a formatted board report with KPI grid, trend context, and AI-written executive summary. Ready to share before your next board meeting.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Report Free →
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Vanity metrics vs real metrics
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Six metrics that founders put in pitch decks and investor updates that experienced investors immediately discount. What to track instead:
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-2 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest">Vanity metric</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Track this instead</span>
            </div>
            {vanityMetrics.map((row, i) => (
              <div key={row.vanity} className={`grid grid-cols-2 gap-4 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] line-through opacity-60">{row.vanity}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.real}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Turn your KPIs into a board report</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Board report generated from your metrics in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your MRR, churn, burn, NRR — BoardBrief formats a KPI grid, writes the executive summary, and exports a PDF your board will actually read.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Board Report Free →
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
