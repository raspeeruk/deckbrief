import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burn Rate Analysis: Gross vs Net Burn Explained',
  description: 'Burn rate analysis for startups — gross vs net burn explained with formulas, the burn multiple framework, stage benchmarks, and how to present burn data to your board effectively.',
  keywords: ['burn rate analysis', 'gross vs net burn rate', 'startup burn rate', 'burn multiple'],
}

const burnTypes = [
  {
    type: 'Gross burn rate',
    formula: 'Total monthly operating expenses (all cash out)',
    example: 'A company with $120K in salaries, $15K in software, $10K in office costs, and $15K in marketing = $160K gross burn',
    detail: 'Gross burn tells you the total cost of running the business regardless of revenue. It answers the question: "How much money does this company need every month to keep the lights on?" This is the number to watch when evaluating your cost structure and when planning for a zero-revenue scenario (e.g., if your primary customer segment pauses purchasing). Gross burn is also the basis for headcount efficiency analysis — divide by total employees to get burn per head.',
  },
  {
    type: 'Net burn rate',
    formula: 'Total monthly expenses - Total monthly revenue (cash consumed net of income)',
    example: 'Same company with $160K expenses but $90K in revenue = $70K net burn',
    detail: 'Net burn is the actual rate at which your cash reserves are depleting. It is the number that determines runway. A company with $160K gross burn and $90K revenue is consuming $70K of its cash reserves per month. This is the headline burn number for board reporting because it directly connects to the runway calculation. If your cash balance is $1.4M and your net burn is $70K, you have 20 months of runway.',
  },
]

const burnMultiple = [
  { range: 'Below 1x', rating: 'Exceptional', detail: 'You are adding more net new ARR than you are burning cash. This is the holy grail of capital efficiency. Very few early-stage companies achieve this, but it signals a business that could be profitable at any time by simply choosing to stop investing in growth. Investors love this because it means their capital is being deployed productively.' },
  { range: '1x - 1.5x', rating: 'Great', detail: 'For every dollar of net new ARR, you are burning $1-$1.50 in cash. This is strong capital efficiency and typical of well-run Series A companies that have found product-market fit and a repeatable go-to-market motion.' },
  { range: '1.5x - 2x', rating: 'Good', detail: 'Acceptable efficiency for most venture-backed SaaS. You are spending moderately more than you are earning in new recurring revenue. Most boards will not raise concerns at this level, especially if the trend is improving.' },
  { range: '2x - 3x', rating: 'Mediocre', detail: 'You are spending $2-3 to generate $1 of net new ARR. This is where boards start asking uncomfortable questions about efficiency. Not a crisis, but a signal that either your go-to-market is not efficient or you are investing ahead of revenue (which is defensible if intentional and temporary).' },
  { range: 'Above 3x', rating: 'Concerning', detail: 'Burning more than $3 for every $1 of net new ARR is a red flag. At this level, you are either in very early stage (pre-product-market fit, where the metric is less meaningful), or you have a fundamental efficiency problem. If you are post-Series A with a burn multiple above 3x, the board should be discussing whether the growth strategy is working.' },
]

const burnByStage = [
  { stage: 'Pre-seed', grossBurn: '$20K-$50K/mo', netBurn: 'Near 100% of gross (minimal revenue)', typical: '2-5 people, founder salaries below market, minimal infrastructure', boardFocus: 'Gross burn and runway only. Revenue is negligible.' },
  { stage: 'Seed', grossBurn: '$50K-$150K/mo', netBurn: '$30K-$120K/mo', typical: '5-15 people, first real office or co-working, initial marketing spend', boardFocus: 'Net burn, runway, and burn relative to MRR growth. The ratio matters more than the absolute number.' },
  { stage: 'Series A', grossBurn: '$150K-$400K/mo', netBurn: '$80K-$300K/mo', typical: '15-40 people, departmental structure forming, real sales and marketing spend', boardFocus: 'Burn multiple, department-level burn breakdown, burn-to-growth efficiency.' },
  { stage: 'Series B', grossBurn: '$400K-$1M+/mo', netBurn: '$200K-$700K/mo', typical: '40-100+ people, multiple teams, significant infrastructure', boardFocus: 'Burn multiple, path to profitability, gross margin improvement, opex as % of revenue.' },
]

const burnBreakdown = [
  { category: 'People (salaries + benefits)', typical: '60-80%', detail: 'The largest expense by far in any technology company. Break this down by department for your board: Engineering, Sales, Marketing, G&A. The split tells a story — a company spending 60% of its people budget on engineering and 20% on sales is in a different strategic position than one spending 40/40.' },
  { category: 'Infrastructure and hosting', typical: '5-15%', detail: 'AWS, GCP, Azure, and related infrastructure. For SaaS companies, this is effectively your cost of goods sold. Track it as a percentage of revenue — if infrastructure costs are growing faster than revenue, your unit economics are deteriorating.' },
  { category: 'Software and tools', typical: '3-8%', detail: 'SaaS subscriptions, developer tools, CRM, analytics, etc. This category creeps up silently. A quarterly audit of active subscriptions typically reveals 10-20% in unused or underutilised tools. One of the easiest cost savings to find.' },
  { category: 'Marketing and sales', typical: '10-25%', detail: 'Paid acquisition, content, events, sales tools, and variable compensation. The most lever-able category after headcount. Track marketing spend as a ratio to new MRR generated — this is effectively your CAC denominator.' },
  { category: 'Office and overhead', typical: '5-10%', detail: 'Rent, utilities, insurance, legal, accounting. Many post-COVID startups have minimised this with remote or hybrid work. If office costs exceed 10% of burn, the board should ask whether the space is right-sized.' },
]

const analysisFramework = [
  { metric: 'Burn multiple', formula: 'Net Burn / Net New ARR', target: '<2x', why: 'David Sacks popularised this as the single best measure of startup capital efficiency. It tells you how much cash you need to invest to generate a dollar of recurring revenue. Unlike CAC, it includes ALL costs — not just sales and marketing.' },
  { metric: 'Burn ratio', formula: 'Net Burn / Revenue', target: 'Declining toward 0', why: 'Shows what percentage of your revenue the company is still consuming in excess costs. A burn ratio of 0.5 means you are spending 50% more than you earn. When this reaches 0, you are break-even.' },
  { metric: 'Months to break-even', formula: 'Projected from revenue growth vs expense growth', target: '<24 months', why: 'If revenue is growing faster than expenses, there is a crossover point where the company becomes self-sustaining. Knowing this date (or at least its rough location) is essential for capital planning.' },
  { metric: 'Burn per employee', formula: 'Total Net Burn / Headcount', target: '$10K-$20K/mo', why: 'Normalises burn for team size. Two companies burning $200K/month are in very different positions if one has 10 people and the other has 25. The larger team should be producing more value per dollar burned.' },
]

const faqs = [
  {
    q: 'Is it possible to burn too little?',
    a: 'Yes. Under-burning is a real problem, though it gets less attention than over-burning. If you raised $5M at Series A and your burn is $50K/month, you have 100 months of runway — but you are probably under-investing in growth. Investors gave you capital to deploy, not to sit in a bank account. The opportunity cost of under-investment is significant: market windows close, competitors advance, and your growth rate stagnates. The right burn rate is one that maximises growth while maintaining sufficient runway (18+ months) to execute and raise the next round. Capital sitting idle earns nothing.',
  },
  {
    q: 'How should I report burn rate to the board?',
    a: 'Report both gross and net burn, with a simple bridge between them. Show the trend over the trailing 6 months. Break down gross burn by major category (people, infrastructure, marketing, other). Include the burn multiple if you have sufficient revenue data. Always pair burn with runway — the two numbers are inseparable. And always show burn against plan: "Net burn was $85K against a plan of $90K" is more informative than "$85K net burn" alone. Context turns a number into information.',
  },
  {
    q: 'What is a "burn rate inflection" and when should I expect one?',
    a: 'A burn rate inflection is the point where your revenue growth begins to outpace your expense growth, causing net burn to start declining even as gross burn increases. For most SaaS companies, this happens around $200K-$500K MRR, depending on the cost structure. It is the financial manifestation of operating leverage — the inherent scalability of software. Once you pass this inflection, each new dollar of revenue improves your burn ratio. Showing your board the projected inflection point is powerful because it demonstrates that the current burn is an investment with a finite horizon, not an indefinite cash drain.',
  },
  {
    q: 'How do I calculate the burn multiple when net new ARR is negative?',
    a: 'When net new ARR is negative (i.e., churned and contracted revenue exceeds new and expansion revenue), the burn multiple is undefined and should not be reported as a number. Instead, report the situation directly: "Net ARR contracted by $X this quarter while we burned $Y." A negative net new ARR with any level of burn is the worst possible scenario — you are paying to shrink. The board conversation should focus entirely on diagnosing and fixing the revenue contraction rather than on efficiency metrics that are mathematically meaningless in this state.',
  },
  {
    q: 'Should I include one-off costs in burn rate calculations?',
    a: 'For ongoing reporting, exclude genuinely one-off items (legal costs from a fundraise, security deposit on a new office, one-time hardware purchases) and report a "normalised" burn rate alongside the actual. This prevents a single unusual month from distorting the trend. However, be honest about what is truly one-off — if you have "one-off" legal costs every quarter, they are not one-off. Show both the actual and normalised figures and explain the adjustments. Transparency about adjustments builds more trust than the adjustments themselves.',
  },
]

export default function BurnRateAnalysisPage() {
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
          Finance Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Burn Rate Analysis: Gross vs Net Burn Explained
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Burn rate is the velocity at which your startup consumes cash. It sounds simple — and the basic calculation is — but the analysis beneath the headline number is where the real insights live. Gross burn versus net burn, the burn multiple framework, cost category breakdowns, and stage-appropriate benchmarks tell the full story. Here is how to analyse, present, and manage your burn rate like a finance-literate founder.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Gross burn vs net burn: the two numbers your board needs
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {burnTypes.map((item) => (
              <div key={item.type} className="bg-white border border-[#E5E0D5] rounded p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{item.type}</h3>
                <div className="bg-[#F4F1EB] rounded px-4 py-3 mb-3">
                  <p className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-bold">{item.formula}</p>
                  <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-2">{item.example}</p>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The burn multiple: the efficiency metric that matters most
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-4">
            The burn multiple, popularised by David Sacks at Craft Ventures, is the single best measure of capital efficiency in a startup. The formula is simple:
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-8">
            <p className="font-[family-name:var(--font-data)] text-lg text-[#C8102E] font-bold mb-2">Burn Multiple = Net Burn / Net New ARR</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">A company with $300K net burn and $200K net new ARR in a quarter has a burn multiple of 1.5x. For every dollar of new recurring revenue, it spent $1.50. Lower is better.</p>
          </div>
          <div className="space-y-0">
            {burnMultiple.map((item, i) => (
              <div key={item.range} className={`border-t border-[#E5E0D5] py-5 ${i === burnMultiple.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-28">
                    <span className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18] block">{item.range}</span>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#C8102E] font-semibold block mt-0.5">{item.rating}</span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Burn rate benchmarks by funding stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-5 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Gross burn</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Net burn</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Typical shape</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Board focus</span>
            </div>
            {burnByStage.map((row, i) => (
              <div key={row.stage} className={`grid grid-cols-5 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.stage}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.grossBurn}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#6B6456]">{row.netBurn}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.typical}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.boardFocus}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Burn rate, runway, and efficiency — formatted for the board
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your financial metrics and DeckBrief generates a board-ready report with burn analysis, cash bridge, runway projections, and executive commentary. Professional PDF and PPTX, ready to send.
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
            Where the money goes: burn rate by category
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Breaking down your burn by category gives the board visibility into cost structure and identifies where efficiency gains are available.
          </p>
          <div className="space-y-0">
            {burnBreakdown.map((item, i) => (
              <div key={item.category} className={`border-t border-[#E5E0D5] py-6 ${i === burnBreakdown.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-28">
                    <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] block">{item.category}</span>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#C8102E] font-bold block mt-1">{item.typical}</span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The burn rate analysis framework
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Four metrics that, together, give the board a complete picture of capital efficiency. Include all four in your quarterly board pack from Series A onward.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-4 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Metric</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Formula</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Target</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Why it matters</span>
            </div>
            {analysisFramework.map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-4 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.metric}</span>
                <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">{row.formula}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.target}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.why}</span>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Understand your burn. Control your destiny.</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Professional burn analysis in your board pack
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your monthly financial data and DeckBrief generates a complete board report with burn analysis, efficiency metrics, cash bridge, and executive narrative. Stop building board packs manually.
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
