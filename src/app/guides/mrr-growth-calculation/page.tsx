import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Calculate MRR Growth: Formulas + Examples',
  description: 'MRR growth calculation explained with formulas, worked examples, component breakdown (new, expansion, contraction, churn), and benchmarks by stage for SaaS founders.',
  keywords: ['MRR growth calculation', 'monthly recurring revenue growth', 'MRR formula', 'how to calculate MRR'],
}

const mrrComponents = [
  { name: 'New MRR', formula: 'MRR from customers acquired this month', example: '15 new customers at $200/month average = $3,000 New MRR', detail: 'Revenue from brand-new customers who signed up during the period. This is pure acquisition — it measures whether your go-to-market engine is producing paying customers. Track it separately from expansion to understand where growth is actually coming from.' },
  { name: 'Expansion MRR', formula: 'MRR increase from existing customers (upgrades, add-ons, seat expansion)', example: '8 customers upgrade from $200 to $500 = $2,400 Expansion MRR', detail: 'Revenue increase from your existing customer base — upgrades, additional seats, add-on products, usage overages. This is the metric that drives NRR above 100%. The best SaaS businesses eventually generate more Expansion MRR than New MRR.' },
  { name: 'Contraction MRR', formula: 'MRR decrease from existing customers (downgrades)', example: '5 customers downgrade from $500 to $200 = $1,500 Contraction MRR', detail: 'Revenue decrease from customers who remain but at a lower plan. Contraction is different from churn — the customer is still there, they are just paying less. High contraction can signal pricing misalignment, feature underuse, or that your premium tier does not deliver sufficient additional value.' },
  { name: 'Churned MRR', formula: 'MRR lost from customers who cancelled entirely', example: '6 customers at $300 average cancel = $1,800 Churned MRR', detail: 'Revenue permanently lost from customers who left. The harshest metric. Churned MRR is the denominator in your gross churn rate calculation and the number that caps your growth potential. A company adding $5K in new MRR but churning $4K is growing at $1K net — an extremely leaky bucket.' },
]

const workedExamples = [
  {
    title: 'Early-stage SaaS: from $20K to Series A',
    scenario: 'A seed-stage B2B SaaS company with $20K MRR wants to understand how long it will take to reach $100K MRR — the median threshold for a Series A raise.',
    data: [
      { label: 'Starting MRR', value: '$20,000' },
      { label: 'MoM growth rate', value: '18%' },
      { label: 'Monthly new MRR', value: '$3,600 (18% of $20K)' },
      { label: 'Months to $100K', value: '~10 months at consistent 18% MoM' },
    ],
    insight: 'At 18% month-over-month growth (which is strong but achievable for a seed-stage company with product-market fit), $20K MRR reaches $100K in approximately 10 months. The compounding effect is what makes this work: by month 6, you are adding $6,500/month in new MRR, not $3,600. However, this assumes the growth rate holds — in practice, growth decelerates as the base gets larger, so 12-14 months is more realistic.',
  },
  {
    title: 'Series A company: the components matter',
    scenario: 'A Series A company at $120K MRR reports 12% MoM growth. But the components tell a more complex story.',
    data: [
      { label: 'Starting MRR', value: '$120,000' },
      { label: 'New MRR', value: '+$18,000' },
      { label: 'Expansion MRR', value: '+$6,000' },
      { label: 'Contraction MRR', value: '-$3,600' },
      { label: 'Churned MRR', value: '-$6,000' },
      { label: 'Net new MRR', value: '+$14,400' },
      { label: 'Ending MRR', value: '$134,400' },
      { label: 'Growth rate', value: '12%' },
    ],
    insight: 'The headline growth rate looks healthy at 12%. But look at the components: gross churn is 5% ($6,000 / $120,000), which for a B2B SaaS is high. Contraction adds another 3%. The business is acquiring well (15% gross addition rate) but leaking from the bottom. If churn stays at 5%, this business hits a natural ceiling around $360K MRR where new additions equal churned revenue. Fixing retention is worth more than increasing acquisition.',
  },
  {
    title: 'Growth slowdown: diagnosing the problem',
    scenario: 'A company that was growing 20% MoM six months ago is now growing 8% MoM. The CEO says growth has slowed. The board needs to understand why.',
    data: [
      { label: '6 months ago — New MRR', value: '$10,000' },
      { label: '6 months ago — Churned MRR', value: '-$2,000' },
      { label: '6 months ago — Net growth', value: '20%' },
      { label: 'Today — New MRR', value: '$14,000' },
      { label: 'Today — Churned MRR', value: '-$8,000' },
      { label: 'Today — Net growth', value: '8%' },
    ],
    insight: 'New MRR actually increased from $10K to $14K — the acquisition engine improved. But churned MRR quadrupled from $2K to $8K. This is not a growth problem; it is a retention crisis. The board conversation should focus entirely on churn root cause analysis, not on how to acquire faster. Adding more customers to a leaky bucket makes the leak worse, not better.',
  },
]

const growthBenchmarks = [
  { stage: 'Pre-seed', mrrRange: '$1K-$10K', goodGrowth: '20-30% MoM', greatGrowth: '30%+ MoM', note: 'Volatile and lumpy. Single deals can swing the growth rate by 50 points. Track direction more than precision.' },
  { stage: 'Seed', mrrRange: '$10K-$80K', goodGrowth: '15-25% MoM', greatGrowth: '25%+ MoM', note: 'This is where product-market fit becomes visible. Consistent 15%+ signals something is working.' },
  { stage: 'Series A', mrrRange: '$80K-$300K', goodGrowth: '10-20% MoM', greatGrowth: '20%+ MoM', note: 'Natural deceleration begins. 15% MoM at $200K MRR is exceptional. Growth becomes harder to sustain.' },
  { stage: 'Series B', mrrRange: '$300K-$1.5M', goodGrowth: '7-12% MoM', greatGrowth: '15%+ MoM', note: 'Annual growth rate matters more here. 100%+ YoY is the bar for a strong Series B story.' },
  { stage: 'Growth / Pre-IPO', mrrRange: '$1.5M+', goodGrowth: '5-8% MoM', greatGrowth: '10%+ MoM', note: 'Rule of 40 becomes the benchmark: growth rate + profit margin should exceed 40%.' },
]

const faqs = [
  {
    q: 'What is the difference between MRR growth rate and net new MRR?',
    a: 'Net new MRR is an absolute dollar amount — the total change in MRR from one month to the next. MRR growth rate is a percentage — net new MRR divided by starting MRR. A company adding $10K net new MRR from a $50K base is growing at 20%. A company adding $10K from a $500K base is growing at 2%. Both added the same dollars, but the growth rate tells you how fast the business is scaling relative to its size. Always report both: the dollar amount for operational context, the percentage for trajectory.',
  },
  {
    q: 'Should I calculate MRR growth on a monthly or annual basis?',
    a: 'Both, for different purposes. Monthly growth rate is your operational pulse — it tells you whether this month was better or worse than last month. Annual growth rate is your strategic trajectory — it tells investors how fast the business is compounding. Annual growth compounds in ways that are not intuitive: 15% monthly growth is not 180% annual, it is 435% annual (1.15^12 - 1). Use monthly for your dashboard and internal reviews. Use annualised growth for fundraising conversations and board-level strategy.',
  },
  {
    q: 'How do I handle annual contracts in MRR calculation?',
    a: 'Divide the annual contract value by 12. A customer paying $12,000 per year contributes $1,000 MRR. Do not book it as a lump sum in the month they sign — that inflates the signing month and deflates the next 11. If you offer discounts for annual payment (which you should — it improves cash flow and reduces churn), the MRR is based on the discounted annual price divided by 12, not the equivalent monthly price. This is standard practice, but founders frequently get it wrong.',
  },
  {
    q: 'What is committed MRR vs live MRR?',
    a: 'Live MRR counts only customers who are actively using and paying for the product right now. Committed MRR includes signed contracts that have not yet started — for example, an enterprise deal signed in March with an April 1 start date. Report live MRR on your board dashboard. You can mention committed MRR in the narrative section as forward-looking context, but mixing the two in your headline metric misleads directors about current business health. Some founders also track "pipeline MRR" which is even further removed — deal stages with estimated MRR. Keep these three categories clearly separated.',
  },
  {
    q: 'How do I model MRR growth for a financial forecast?',
    a: 'Bottom-up is more credible than top-down. Start with your current acquisition rate (leads x conversion rate x average deal size = new MRR per month), add assumptions about expansion (based on historical upgrade rates), subtract churn assumptions (based on historical churn, not aspirational targets), and project forward. The most common mistake is assuming constant percentage growth — in reality, the growth rate decelerates as the base grows. A good model explicitly assumes growth rate decay: if you are growing 20% MoM today, model 18% next month, 16% the month after. Then show the board what happens at the current rate versus the decayed rate. The gap between those two lines is where strategic investment decisions live.',
  },
]

export default function MrrGrowthCalculationPage() {
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
          SaaS Finance Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          How to Calculate MRR Growth: Formulas + Examples
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          MRR growth is the metric that defines a SaaS company&rsquo;s trajectory. But the headline number — &ldquo;we grew 15% this month&rdquo; — hides more than it reveals. The four components of MRR change (new, expansion, contraction, and churn) tell the real story. Here is how to calculate each one, with worked examples, benchmarks, and the analytical framework your board expects.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The MRR growth formula
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-6">
            <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-2">Basic MRR growth rate</p>
            <p className="font-[family-name:var(--font-data)] text-lg text-[#C8102E] font-bold mb-4">(Ending MRR - Starting MRR) / Starting MRR = MRR Growth Rate</p>
            <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-2">Expanded formula (component view)</p>
            <p className="font-[family-name:var(--font-data)] text-lg text-[#C8102E] font-bold">Starting MRR + New MRR + Expansion MRR - Contraction MRR - Churned MRR = Ending MRR</p>
          </div>
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed">
            The basic formula gives you the headline number. The expanded formula tells you where the growth is coming from and where it is being lost. Always report both to your board. A company growing 12% with high new MRR and high churn is in a fundamentally different position than one growing 12% with moderate new MRR and minimal churn.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The four components of MRR change
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Every dollar of MRR change falls into one of four buckets. Understanding which buckets are driving your growth — and which are dragging it — is the difference between managing metrics and managing the business.
          </p>
          <div className="space-y-6">
            {mrrComponents.map((comp) => (
              <div key={comp.name} className="bg-white border border-[#E5E0D5] rounded p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{comp.name}</h3>
                <div className="bg-[#F4F1EB] rounded px-4 py-3 mb-3">
                  <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]"><strong className="text-[#1A1A18]">Definition:</strong> {comp.formula}</p>
                  <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-1"><strong className="text-[#1A1A18]">Example:</strong> {comp.example}</p>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{comp.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Worked examples: MRR growth in practice
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          {workedExamples.map((example, i) => (
            <div key={example.title} className={`${i > 0 ? 'mt-10' : ''}`}>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{example.title}</h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-4">{example.scenario}</p>
              <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden mb-4">
                {example.data.map((row, j) => (
                  <div key={row.label} className={`flex justify-between px-6 py-3 ${j > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                    <span className="font-[family-name:var(--font-data)] text-sm text-[#6B6456]">{row.label}</span>
                    <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{example.insight}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Your MRR data, formatted for the board
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your MRR numbers and DeckBrief generates a board-ready report with MRR waterfall, component breakdown, growth trend analysis, and executive summary. PDF and PPTX, ready for your next investor update.
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
            MRR growth benchmarks by stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Growth rates that are strong at one stage are mediocre at another. Context matters. These benchmarks reflect typical venture-backed B2B SaaS performance in 2024-2025.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-5 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">MRR range</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Good</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Great</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Note</span>
            </div>
            {growthBenchmarks.map((row, i) => (
              <div key={row.stage} className={`grid grid-cols-5 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.stage}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#6B6456]">{row.mrrRange}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.goodGrowth}</span>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.greatGrowth}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.note}</span>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Board reporting, automated</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Your MRR story, told professionally
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your monthly revenue data and DeckBrief generates a complete board report — MRR waterfall, component analysis, growth trends, and executive narrative — formatted as PDF and PPTX. Stop building board packs manually.
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
