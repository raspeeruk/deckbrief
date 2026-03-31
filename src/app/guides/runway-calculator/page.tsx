import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Runway Calculator: How Many Months Do You Have?',
  description: 'Calculate your startup runway with formulas, examples, and benchmarks. Understand cash runway at current vs planned burn, when to start fundraising, and how to extend runway without cutting growth.',
  keywords: ['startup runway calculator', 'burn rate runway', 'cash runway formula', 'startup runway months'],
}

const runwayFormulas = [
  { name: 'Basic runway', formula: 'Cash Balance / Monthly Net Burn Rate = Runway (months)', example: '$1.2M cash / $80K net burn = 15 months runway', note: 'The starting point. Simple division that gives you the headline number. This assumes constant burn, which is almost never true — but it is the benchmark everyone uses.' },
  { name: 'Runway at current burn', formula: 'Cash Balance / Trailing 3-Month Average Net Burn', example: '$1.2M / average($75K, $80K, $85K) = $1.2M / $80K = 15 months', note: 'Using a 3-month trailing average smooths out monthly volatility. A one-off expense in a single month should not dramatically change your reported runway.' },
  { name: 'Runway at planned burn', formula: 'Cash Balance / Projected Monthly Net Burn (including planned hires)', example: '$1.2M / $120K projected burn (after 4 planned hires) = 10 months', note: 'The number your board actually needs. If you plan to hire aggressively, your burn will increase. Show both current and planned runway so directors understand the trade-off between growth investment and financial cushion.' },
  { name: 'Runway with revenue offset', formula: '(Cash Balance) / (Monthly Expenses - Monthly Revenue)', example: '$1.2M / ($160K expenses - $80K revenue) = $1.2M / $80K = 15 months', note: 'For companies with meaningful revenue, net burn (expenses minus revenue) is more relevant than gross burn. But be conservative with the revenue assumption — if revenue is growing, use current revenue, not projected. Optimistic revenue projections in runway calculations are dangerous.' },
]

const runwayBenchmarks = [
  { scenario: 'Post-raise target', months: '18-24 months', detail: 'A standard seed or Series A raise should provide 18-24 months of runway at planned burn rate. This gives you 9-12 months to execute before you need to start the next fundraise, with 6-12 months of buffer.' },
  { scenario: 'Start fundraising', months: '9-12 months remaining', detail: 'Begin your fundraise with at least 9 months of runway. Series A processes take 3-6 months from first meeting to wire. Starting with less than 9 months means you are fundraising under time pressure, which weakens your negotiating position and is visible to experienced investors.' },
  { scenario: 'Amber zone', months: '6-9 months remaining', detail: 'You should already be in active fundraise. If you are not, start immediately and simultaneously develop a plan to cut burn. At this stage, you need optionality — both a fundraise track and a profitability track. Communicate clearly with your board about the situation.' },
  { scenario: 'Red zone', months: '<6 months remaining', detail: 'Emergency territory. You have lost negotiating leverage in any fundraise. Options narrow to: bridge from existing investors, aggressive cost cutting to reach profitability, acqui-hire conversations, or wind-down. Every month of delay at this stage closes doors permanently.' },
  { scenario: 'Default alive threshold', months: 'Revenue growth outpaces expenses', detail: 'Paul Graham\'s concept: if your revenue is growing faster than your expenses, you will eventually become profitable even if you are currently burning cash. A company that is "default alive" has infinite theoretical runway. Calculate whether you are default alive by projecting both revenue growth and expense growth forward — when revenue exceeds expenses, that is your break-even date.' },
]

const extensionStrategies = [
  { strategy: 'Revenue acceleration', impact: 'High impact, no dilution', detail: 'The best way to extend runway is to make more money. Focus on shortening sales cycles, increasing pricing (most startups are underpriced), improving activation and conversion rates, and reducing churn. A 20% revenue increase has the same runway impact as a 20% cost cut, but without the organisational damage.', caveat: 'Revenue acceleration takes time to materialise. If you have 6 months of runway, a revenue-focused strategy alone probably will not save you. Combine with cost management.' },
  { strategy: 'Headcount freeze', impact: 'Immediate, meaningful', detail: 'Hiring is typically 60-80% of a startup\'s burn. Freezing all new hires immediately flattens your burn rate. This is the fastest lever to pull because you avoid new salary commitments without firing anyone. A company burning $150K/month with 3 planned hires at $8K/month each saves $24K/month — extending a 10-month runway to 13 months.', caveat: 'A prolonged hiring freeze creates product and sales capacity constraints. Use it as a bridge, not a permanent strategy.' },
  { strategy: 'Selective cost cutting', impact: 'Moderate, immediate', detail: 'Review every non-headcount expense: software subscriptions, office space, travel, conferences, contractors. Most startups accumulate 10-15% in unnecessary SaaS spend alone. A thorough audit typically finds $10K-$30K/month in savings without impacting operations.', caveat: 'Be surgical. Cutting the marketing budget to zero saves money short-term and kills your pipeline in 3 months. Cut waste, not capability.' },
  { strategy: 'Bridge financing', impact: 'Quick capital, some dilution', detail: 'A bridge round from existing investors (typically a convertible note or SAFE) provides 6-12 months of additional runway. Most Series A leads will support a small bridge ($250K-$500K) to give the company time to hit milestones for a proper round. The key: approach bridge conversations early, with a clear plan for what the bridge funds and why the next milestone is achievable.', caveat: 'Bridges work once, maybe twice. A company that needs a third bridge has a fundamental business model problem. Also, bridge terms (especially if you are in the red zone) can be very dilutive.' },
  { strategy: 'Payment term optimisation', impact: 'Moderate, quick', detail: 'Encourage annual prepayment (offer 10-15% discount), negotiate longer payment terms with vendors, and accelerate invoice collection. Moving 5 customers from monthly to annual payment at $2K/month each brings in $120K immediately — equivalent to several months of burn at a lean startup.', caveat: 'Annual prepayment discounts reduce effective revenue. Make sure the cash flow benefit justifies the revenue reduction.' },
]

const runwayModelling = [
  { scenario: 'Base case', description: 'Current burn rate continues. Revenue grows at trailing 3-month average growth rate. No new hires, no cost changes.', purpose: 'This is your floor — what happens if you change nothing. Every board should see this number.' },
  { scenario: 'Growth case', description: 'Planned hires are made on schedule. Revenue grows at your target rate. Marketing spend increases as planned.', purpose: 'This is your budget case. It shows what happens if the plan works. Boards need this to evaluate your spending plan.' },
  { scenario: 'Downside case', description: 'Revenue growth slows by 30-50% from plan. Expenses increase as planned (because costs are more predictable than revenue).', purpose: 'The scenario that stress-tests your plan. If the downside case leaves you with less than 6 months of runway, your plan is too aggressive relative to your cash position.' },
]

const faqs = [
  {
    q: 'What is the difference between gross burn and net burn?',
    a: 'Gross burn is your total monthly expenses — every dollar going out the door. Net burn is gross burn minus revenue — the net cash the business consumes each month. A company with $200K in monthly expenses and $120K in monthly revenue has a gross burn of $200K and a net burn of $80K. For runway calculations, use net burn — it reflects the actual rate at which you are consuming your cash reserves. Report both to your board: gross burn shows cost structure, net burn shows capital consumption.',
  },
  {
    q: 'Should I include revenue in my runway calculation?',
    a: 'Yes, but conservatively. Use current revenue, not projected revenue. If your revenue is $80K/month and growing 10% monthly, do not use $120K (the projected revenue in 4 months) for your runway calculation. Use $80K. Revenue projections are uncertain; cash balance is certain. Your runway calculation should be grounded in what you know, not what you hope. If you want to show the impact of revenue growth on runway, present it as a separate "optimistic" scenario alongside the base case.',
  },
  {
    q: 'How does runway affect fundraising valuation?',
    a: 'Directly and significantly. A company with 18+ months of runway can afford to be selective about investors and patient about terms. A company with 6 months is negotiating from weakness — and experienced investors know this. The dynamic is straightforward: the more urgently you need capital, the worse your terms will be. This is why the single most important capital allocation decision is starting your fundraise early enough to negotiate from a position of strength. Every extra month of runway at the start of a fundraise is worth more than the capital it consumed.',
  },
  {
    q: 'How often should I report runway to the board?',
    a: 'Every meeting. Runway should appear on the first page of every board pack, ideally in the executive summary or financial dashboard. It should show: current cash balance, current monthly net burn, runway at current burn, and runway at planned burn (if different). When runway drops below 12 months, it becomes a standing agenda item for discussion. Below 9 months, it becomes the primary topic. Board members who are not regularly updated on runway cannot fulfil their governance duties.',
  },
  {
    q: 'What is "default alive" and how do I calculate it?',
    a: 'A concept from Paul Graham: a company is "default alive" if, at its current revenue growth rate and current expense level, it will reach profitability before running out of cash. To calculate: project your revenue forward at your current month-over-month growth rate. Project your expenses forward at your current rate (or planned rate if you are hiring). Find the month where revenue exceeds expenses. If that month is before your cash runs out, you are default alive. If not, you are "default dead" and dependent on raising more capital. Knowing which category you are in fundamentally changes the strategic conversation.',
  },
]

export default function RunwayCalculatorPage() {
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
          Startup Runway Calculator: How Many Months Do You Have?
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Runway is the single most important number in a startup&rsquo;s financial toolkit. Not MRR, not growth rate, not valuation — runway. It determines your strategic options, your fundraising timeline, your hiring plan, and ultimately whether the company survives long enough to succeed. Here are the formulas, the benchmarks, and the practical strategies for managing the number that matters most.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Runway calculation formulas
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            There are several ways to calculate runway, each useful for different conversations. Your board pack should include at least the first two.
          </p>
          <div className="space-y-4">
            {runwayFormulas.map((item) => (
              <div key={item.name} className="bg-white border border-[#E5E0D5] rounded p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-2">{item.name}</h3>
                <div className="bg-[#F4F1EB] rounded px-4 py-3 mb-3">
                  <p className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-bold">{item.formula}</p>
                  <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-2">Example: {item.example}</p>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Runway benchmarks and danger zones
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            These thresholds are well-established in the venture ecosystem. Your board will evaluate your situation against these benchmarks whether you present them or not — so present them proactively.
          </p>
          <div className="space-y-0">
            {runwayBenchmarks.map((item, i) => (
              <div key={item.scenario} className={`border-t border-[#E5E0D5] py-6 ${i === runwayBenchmarks.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-32">
                    <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] block">{item.scenario}</span>
                    <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-bold block mt-1">{item.months}</span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Runway, burn rate, and cash position — formatted for your board
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your financial metrics and DeckBrief generates a professional board report with cash bridge, runway projections, burn analysis, and executive summary. PDF and PPTX, ready to distribute to your directors.
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
            Five strategies to extend runway without killing growth
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            When runway gets tight, the instinct is to cut. But indiscriminate cost cutting can destroy more value than it saves. These strategies are ordered by impact and speed.
          </p>
          <div className="space-y-6">
            {extensionStrategies.map((item) => (
              <div key={item.strategy} className="bg-white border border-[#E5E0D5] rounded p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18]">{item.strategy}</h3>
                  <span className="font-[family-name:var(--font-data)] text-xs text-[#C8102E] font-semibold uppercase tracking-wider shrink-0 ml-4">{item.impact}</span>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-3">{item.detail}</p>
                <div className="border-l-2 border-[#E5E0D5] pl-4">
                  <p className="font-[family-name:var(--font-data)] text-xs font-semibold text-[#6B6456] uppercase tracking-wider mb-1">Caveat</p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{item.caveat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Runway scenario modelling for the board
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Present three scenarios to your board. This framework gives directors the information they need to evaluate your spending plan and make informed trade-off decisions.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Scenario</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Assumptions</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Purpose</span>
            </div>
            {runwayModelling.map((row, i) => (
              <div key={row.scenario} className={`grid grid-cols-3 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.scenario}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.description}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.purpose}</span>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Know your runway. Control your future.</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Board-ready financial reporting in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your cash balance, burn rate, and revenue metrics — DeckBrief generates a professional board pack with runway analysis, cash bridge, scenario projections, and executive narrative. PDF and PPTX ready.
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
