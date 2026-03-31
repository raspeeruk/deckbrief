import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Financial Reporting: What Your Board Needs to See',
  description: 'Financial reporting for startups explained — which statements matter at each stage, how to present P&L and cash flow to a board, common accounting mistakes, and the format investors expect.',
  keywords: ['startup financial reporting', 'startup financial statements', 'financial reporting for startups', 'startup board financials'],
}

const threeStatements = [
  {
    name: 'Profit and Loss (Income Statement)',
    when: 'From day one. Required at every board meeting.',
    whatItShows: 'Revenue, cost of goods sold, gross margin, operating expenses by category (R&D, sales & marketing, G&A), EBITDA or net income/loss.',
    boardFormat: 'Current month, prior month, YTD actual, YTD budget, and variance. The most useful P&L for a board is not just the numbers — it is the numbers with comparators. Every line should have at least two reference points so directors can evaluate performance in context.',
    commonMistakes: 'Categorising expenses inconsistently month to month, booking large one-off costs without flagging them, and mixing capitalised development costs with operating expenses without clear policy.',
  },
  {
    name: 'Cash Flow Statement',
    when: 'From Seed onward. More important than the P&L at early stage.',
    whatItShows: 'Operating cash flow (cash generated/consumed by the business), investing cash flow (asset purchases), and financing cash flow (equity raised, debt drawn). Reconciles to opening and closing cash balance.',
    boardFormat: 'Direct method is clearer for boards: start with cash received, subtract cash paid, arrive at the change in cash position. The indirect method (starting from net income with adjustments) is standard in audited financials but harder for non-financial directors to follow.',
    commonMistakes: 'Not reconciling the cash flow statement to the bank balance. If your cash flow statement says you should have $850K and the bank says $820K, you have a reconciliation problem that needs investigating before the board meeting.',
  },
  {
    name: 'Balance Sheet',
    when: 'From Series A. Optional but valuable at Seed.',
    whatItShows: 'Assets (cash, receivables, prepayments), liabilities (payables, deferred revenue, debt), and equity (share capital, retained earnings). A snapshot of the company&rsquo;s financial position at a point in time.',
    boardFormat: 'Current period and prior period. The balance sheet is where deferred revenue lives — and deferred revenue is one of the most misunderstood items in SaaS accounting. If a customer pays $24K upfront for an annual contract, $24K hits cash immediately but only $2K is revenue in month one. The remaining $22K is a liability (deferred revenue) on the balance sheet.',
    commonMistakes: 'Ignoring the balance sheet entirely until a Series A due diligence process forces you to produce one. By then, the historical data is difficult to reconstruct. Start tracking it from Seed even if you do not include it in board packs yet.',
  },
]

const metricsByStage = [
  { stage: 'Pre-seed', required: 'Monthly P&L (simplified), cash balance, burn rate, runway', optional: 'Nothing else. Keep it simple. Your financial reporting at this stage is a one-page summary.', note: 'Most pre-seed companies do not have a formal board. Financial reporting is for the founding team and angel investors. A spreadsheet is fine.' },
  { stage: 'Seed', required: 'Monthly P&L, cash flow summary, burn rate, runway, MRR waterfall', optional: 'Balance sheet, revenue recognition memo, headcount tracker', note: 'This is where you build the financial reporting habit. If your Seed board sees professional financial reporting, they will have more confidence in your ability to manage money — which directly influences follow-on support.' },
  { stage: 'Series A', required: 'Full P&L, cash flow statement, balance sheet, KPI dashboard, revenue breakdown, operating expense detail by department', optional: 'Cohort analysis, unit economics detail, 13-week cash forecast', note: 'Series A is the governance inflection point. Your lead investor expects financial reporting that would survive due diligence scrutiny. This is also when most companies hire their first finance hire or fractional CFO.' },
  { stage: 'Series B+', required: 'All of the above plus departmental budgets, variance analysis, rolling forecast, ARR bridge, and board-level financial commentary', optional: 'Segment P&Ls, customer profitability analysis, capital efficiency metrics', note: 'By Series B, your financial reporting should be indistinguishable from a mature company. The audit committee (if you have one) will expect GAAP/IFRS-compliant statements.' },
]

const revenueRecognition = [
  { scenario: 'Monthly subscription', treatment: 'Recognise as revenue in the month of service delivery. $500/month plan = $500 revenue each month. Straightforward.', trap: 'None, if the customer actually pays monthly. If they pay quarterly in advance, you still recognise monthly — the advance payment is deferred revenue until earned.' },
  { scenario: 'Annual subscription (paid upfront)', treatment: 'Recognise 1/12 per month over the contract term. $12K annual contract = $1K revenue per month. $11K sits as deferred revenue on the balance sheet.', trap: 'Booking the full $12K as revenue in the signing month. This is the single most common revenue recognition error in startups and will be caught during any audit or due diligence process. It overstates revenue in the signing month and understates it in subsequent months.' },
  { scenario: 'Implementation / setup fees', treatment: 'If the implementation is a distinct deliverable, recognise when complete. If it is not distinct from the subscription (i.e., the customer cannot benefit from the subscription without it), recognise over the subscription term.', trap: 'Booking a $50K implementation fee as revenue on day one when the customer cannot use the product until implementation is complete. This is aggressive and will be questioned.' },
  { scenario: 'Usage-based revenue', treatment: 'Recognise as usage occurs. If a customer pays $0.01 per API call and makes 100K calls in March, $1K revenue in March.', trap: 'Estimating usage before it happens. Revenue from usage is recognised when the usage actually occurs, not when you forecast it will occur.' },
  { scenario: 'Multi-year contracts', treatment: 'Recognise monthly over the full contract term. A 3-year, $360K contract = $10K/month for 36 months. The total contract value (TCV) is useful for sales metrics but is not revenue.', trap: 'Confusing TCV with ARR. A $360K 3-year contract is $120K ARR, not $360K ARR. This error inflates your apparent run rate and will be caught by any competent investor.' },
]

const presentationTips = [
  { tip: 'Lead with the cash position', detail: 'For early-stage companies, cash is the most important number. Start your financial section with: "We have $X in the bank, burning $Y per month, giving us Z months of runway." Every director processes this immediately. The rest of the financials provide context for these three numbers.' },
  { tip: 'Show the cash bridge', detail: 'Opening cash + cash in - cash out = closing cash. This one-line reconciliation should appear prominently. It answers the question every board member is silently asking: "Where did the money go?" A visual cash bridge (waterfall chart) is even better.' },
  { tip: 'Explain variances proactively', detail: 'If revenue was 15% below plan, do not wait for the board to ask why. Include a variance explanation: "Revenue miss of $30K driven by two enterprise deals slipping to Q4 (combined value $45K). Pipeline for Q4 is $220K with 60% weighted probability." Proactive explanation builds trust; reactive explanation feels like an excuse.' },
  { tip: 'Separate recurring from non-recurring', detail: 'Boards evaluate recurring revenue differently from one-off revenue. Show MRR/ARR as your primary revenue metric, then break out any professional services, implementation fees, or one-time revenue separately. Mixing them together artificially inflates your recurring metrics and will be flagged during due diligence.' },
  { tip: 'Use consistent chart of accounts', detail: 'Your expense categories should be the same every month. If "Engineering" was one line last month and this month it is split into "Backend" and "Frontend," the board cannot compare periods. Change your chart of accounts between fiscal years if needed, but not mid-year.' },
]

const faqs = [
  {
    q: 'When should a startup hire a CFO or finance lead?',
    a: 'A fractional CFO from Series A, a full-time finance lead from late Series A or Series B. Before Series A, your bookkeeper or accountant plus the CEO can handle financial reporting. At Series A, the reporting requirements step up significantly — a fractional CFO (typically 1-2 days per week) brings the experience to build proper financial infrastructure without the full-time cost. By Series B, the volume and complexity of financial operations (revenue recognition, multi-entity, international, audit prep) justifies a full-time hire.',
  },
  {
    q: 'Should I use cash basis or accrual basis accounting?',
    a: 'Accrual basis from the start, even if it seems like overhead. Cash basis (recognising revenue when cash is received, expenses when cash is paid) is simpler but gives a misleading picture of the business. Accrual basis (recognising revenue when earned, expenses when incurred) matches economic activity to the periods in which it occurs. Every investor, auditor, and acquirer expects accrual basis. Starting on cash basis and converting later is painful and expensive. Start with accrual.',
  },
  {
    q: 'How do I handle R&D capitalisation?',
    a: 'Most early-stage SaaS companies should expense all R&D costs rather than capitalising them. Capitalisation (putting development costs on the balance sheet as an asset and amortising over time) is technically permitted under IFRS for development phase activities, but it introduces complexity, requires meeting specific criteria, and many investors prefer to see the full burn in the P&L. If you do capitalise, maintain detailed records of which costs qualify and apply a consistent amortisation policy. Discuss with your auditor before making this decision.',
  },
  {
    q: 'What accounting software should a startup use?',
    a: 'Xero or QuickBooks Online for seed-stage companies. Both integrate with the tools you are already using (Stripe, banks, payroll) and produce the standard reports your board needs. By Series B, some companies move to NetSuite for multi-entity, multi-currency, and more sophisticated reporting. The tool matters less than the process — consistent categorisation, monthly close discipline, and reconciliation to bank statements.',
  },
  {
    q: 'How do I present financials when we are pre-revenue?',
    a: 'Focus on burn rate, runway, and the path to revenue. Your P&L is all expenses — categorise them clearly (people, infrastructure, marketing, G&A) and show actual vs budget. Your cash flow statement is critical because it shows exactly how fast money is leaving. Include your revenue projections as a separate forward-looking section, clearly labelled as projections, and show the milestones (product launch, first customer, first $10K MRR) on a timeline. Directors of pre-revenue companies are governing a bet — help them understand what the milestones are and whether you are hitting them.',
  },
]

export default function StartupFinancialReportingPage() {
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
          Startup Financial Reporting: What Your Board Needs to See
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Financial reporting is where many startup founders feel least confident — and where investor trust is most easily built or eroded. The good news: at early stage, the reporting requirements are straightforward. Three financial statements, presented consistently with the right comparators, give your board everything they need. Here is what to produce, how to present it, and the common accounting mistakes that derail fundraises.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The three financial statements
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Every company has three core financial statements. At early stage, not all three need to appear in the board pack — but understanding what each one shows helps you present the right information at the right time.
          </p>
          <div className="space-y-8">
            {threeStatements.map((stmt) => (
              <div key={stmt.name} className="bg-white border border-[#E5E0D5] rounded p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-1">{stmt.name}</h3>
                <p className="font-[family-name:var(--font-data)] text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-4">{stmt.when}</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#1A1A18] uppercase tracking-wider mb-1">What it shows</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{stmt.whatItShows}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#1A1A18] uppercase tracking-wider mb-1">Board format</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{stmt.boardFormat}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#1A1A18] uppercase tracking-wider mb-1">Common mistakes</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{stmt.commonMistakes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Financial reporting requirements by funding stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-4 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Required</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Optional</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Note</span>
            </div>
            {metricsByStage.map((row, i) => (
              <div key={row.stage} className={`grid grid-cols-4 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.stage}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.required}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.optional}</span>
                <span className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{row.note}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Financial reporting, formatted for the board
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your financial data and DeckBrief generates a board-ready report with P&L summary, cash position, KPI dashboard, and executive narrative. No more wrestling with slide formatting on Sunday evenings.
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
            Revenue recognition for SaaS companies
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            Revenue recognition is where most startup accounting errors occur. The principle is simple: recognise revenue when it is earned, not when cash is received. In practice, SaaS contracts create several scenarios that founders handle incorrectly.
          </p>
          <div className="space-y-4">
            {revenueRecognition.map((item) => (
              <div key={item.scenario} className="border-t border-[#E5E0D5] pt-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-2">{item.scenario}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-2">{item.treatment}</p>
                <div className="border-l-2 border-[#C8102E] pl-4">
                  <p className="font-[family-name:var(--font-data)] text-xs font-semibold text-[#C8102E] uppercase tracking-wider mb-1">Common trap</p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{item.trap}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Presenting financials to a startup board
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {presentationTips.map((item) => (
              <div key={item.tip} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.tip}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Professional financials, zero formatting pain</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Your financial data, board-ready in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your monthly financials and DeckBrief generates a professional board report — P&L summary, cash bridge, KPI dashboard, and executive commentary — formatted as PDF and PPTX, ready to distribute to your directors.
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
