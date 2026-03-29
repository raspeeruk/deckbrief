import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cap Table Presentation: How to Show Ownership at Board Level',
  description: 'What to include in a board cap table, the difference between basic and fully-diluted, how to present waterfall analysis, and the cap table mistakes that confuse board members.',
  keywords: ['cap table board meeting', 'cap table presentation', 'fully diluted cap table', 'waterfall analysis', 'startup cap table'],
}

const capTableColumns = [
  { col: 'Shareholder name', why: 'Legal name of each entity or individual. Include the registered address for institutional investors — this matters for legal documents.' },
  { col: 'Share class', why: 'Ordinary, Preference A, Preference B, etc. Board members need to understand the capital stack. Different share classes have different rights on exit.' },
  { col: 'Number of shares', why: 'Absolute numbers, not just percentages. Percentages change with every new issuance. If you only show percentages, board members cannot verify calculations themselves.' },
  { col: 'Percentage (basic)', why: 'Percentage of issued share capital excluding options and warrants. This is the "clean" number without dilution from unexercised instruments.' },
  { col: 'Percentage (fully diluted)', why: 'Percentage assuming all options, warrants, convertibles, and SAFEs convert. This is the number that matters for understanding real economic ownership.' },
  { col: 'Investment amount', why: 'Total capital contributed by each investor. Required for preference calculations and useful context for the waterfall analysis.' },
]

const dilutionInstruments = [
  { instrument: 'Employee option pool (EMI)', desc: 'Options granted to employees, typically vesting over 4 years with a 1-year cliff. Show granted, vested, and ungranted pool separately. The ungranted pool still dilutes everyone on a fully-diluted basis.' },
  { instrument: 'Convertible notes', desc: 'Debt that converts to equity at the next round, usually at a discount (20%) or cap. Until conversion, the fully-diluted shares cannot be calculated precisely — show them at the cap for conservatism.' },
  { instrument: 'SAFEs', desc: 'Simple Agreement for Future Equity. Common in US, growing in UK. Like convertibles but no maturity date and no interest. Model conversion at the cap on a fully-diluted basis.' },
  { instrument: 'Warrants', desc: 'Rights to purchase shares at a fixed price, often issued alongside debt or to advisors. Include in fully-diluted count.' },
]

const waterfallScenarios = [
  { exit: '£2M exit', context: 'Below investment — preference shareholders recover partial capital, ordinaries receive nothing', example: 'If Preference A has a 1x preference on £1.5M invested, they take £1.5M; remaining £500K goes to Preference A on pro-rata with ordinary if participating' },
  { exit: '£5M exit', context: 'Modest return — preference and participation mechanics determine split', example: 'Non-participating preference converts to ordinary for best outcome. Participating preference takes 1x then shares pro-rata. Which is better depends on ownership %' },
  { exit: '£20M exit', context: 'Strong return — at this level the preference economics are less material', example: 'Most investors will convert to ordinary to participate in upside. Ordinary shareholders begin to see meaningful return' },
  { exit: '£50M+ exit', context: 'Fund-returning exit — everyone participates, preferences become academic', example: 'Fully-diluted split applies. Founders and early employees see the largest absolute numbers here' },
]

const commonMistakes = [
  { mistake: 'Percentages only, no absolute numbers', fix: 'Always show both. Percentages look smaller, which is tempting, but board members and investors will convert them to shares anyway. Showing both builds trust.' },
  { mistake: 'Options shown as a single pool number', fix: 'Separate granted vs ungranted, vested vs unvested. A board member seeing "15% option pool" needs to know how much of that is already allocated to employees vs held in reserve.' },
  { mistake: 'SAFEs and convertibles excluded', fix: 'Even if they haven\'t converted, show them in a "future dilution" section. Investors know they exist. Excluding them from the presentation reads as an attempt to hide dilution.' },
  { mistake: 'No share class breakdown', fix: 'If you have multiple preference classes with different rights, each needs its own row. Blending them into one "preference" category makes the waterfall analysis impossible to verify.' },
]

const faqs = [
  {
    q: 'How often should the cap table be updated?',
    a: 'The cap table should be updated after every event that changes ownership: new investment, option grants, option exercises, SAFE or convertible note conversion, share transfers, and new employee option grants. For board meetings, the cap table should reflect the state as of the board meeting date. Quarterly reconciliation against Companies House filings (for UK companies) is minimum — monthly is better once you have significant option activity.',
  },
  {
    q: 'Who should have access to the cap table?',
    a: 'Board members and directors: always. Investors: yes, they already know their own ownership, and seeing the full cap table is standard. Employees: generally only their own option grant details, not the full cap table. The exception is very early-stage companies where key employees have shares and deserve context. Full cap table access for all employees is unusual and can cause friction around perceived founder ownership.',
  },
  {
    q: 'What\'s a waterfall analysis?',
    a: 'A waterfall analysis models how exit proceeds are distributed among shareholders at different exit valuations, given the liquidation preferences and participation rights of each share class. It answers the question: "If we sell for £X, who gets what?" The name comes from the way proceeds cascade from the top of the capital stack (most senior preferred) down to ordinary shareholders. It\'s essential for understanding whether preference shares are in or out of the money at a given exit price.',
  },
  {
    q: 'What is a 409A valuation?',
    a: 'A 409A is a US tax requirement: an independent third-party appraisal of the fair market value of common stock, required before granting employee stock options. UK companies use EMI valuations (agreed with HMRC) rather than 409As. The purpose is the same: establish a defensible strike price for option grants so employees don\'t face an unexpected tax bill if the strike price is deemed below fair market value. UK EMI valuations should be renewed every 3 years or after significant funding events.',
  },
]

export default function CapTableForBoardMeetingsPage() {
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
          Cap Table Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Cap Table Presentation: How to Show Ownership at Board Level
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          The cap table is not just an admin document — it is a board-level governance instrument. How you present it signals whether you understand your own capital structure. Here is what to include, how to show fully-diluted ownership, and how to present the waterfall analysis that board members actually care about.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            What to include in a board cap table
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            A board cap table is not the same as the Companies House register. It is a management view that shows the current state of ownership and the potential future dilution from all outstanding instruments.
          </p>
          <div className="space-y-0">
            {capTableColumns.map((col, i) => (
              <div key={col.col} className={`border-t border-[#E5E0D5] py-5 ${i === capTableColumns.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="w-2 h-2 bg-[#C8102E] rounded-full shrink-0 mt-1.5" />
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18] mb-1">{col.col}</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{col.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Basic vs fully diluted — why it matters
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Basic ownership is what shareholders hold today. Fully diluted includes every instrument that could become shares: options (granted and ungranted pool), warrants, convertible notes, and SAFEs. For most funded startups, the difference is 15-25%. Always present both.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {dilutionInstruments.map((row, i) => (
              <div key={row.instrument} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18] mb-2">{row.instrument}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Waterfall analysis — what each shareholder gets on exit
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Liquidation preferences determine how exit proceeds are distributed before ordinary shareholders receive anything. In a downside scenario, ordinary shareholders — including founders and employees — may receive nothing. Board members expect to see a waterfall analysis for at least 3-4 exit price points.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="bg-[#1A1A18] px-6 py-3 grid grid-cols-[120px_1fr]">
              <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest">Exit value</p>
              <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#6B6456] uppercase tracking-widest">What happens</p>
            </div>
            {waterfallScenarios.map((row, i) => (
              <div key={row.exit} className={`px-6 py-4 grid grid-cols-[120px_1fr] gap-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <div>
                  <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#C8102E]">{row.exit}</p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] mt-1 leading-tight">{row.context}</p>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Common cap table presentation mistakes
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {commonMistakes.map(m => (
              <div key={m.mistake} className="bg-white border border-[#E5E0D5] rounded px-6 py-5">
                <div className="flex items-start gap-4">
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-sm font-bold text-[#1A1A18] mb-1">{m.mistake}</p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Cap table slide included in every board report
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief generates a formatted cap table slide alongside your board report — showing basic and fully-diluted ownership, option pool status, and a waterfall summary.
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Complete board pack</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Cap table, financials, KPIs — all in one board report
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            DeckBrief generates your complete board pack including the cap table slide, financial summary, and KPI dashboard from a single metrics input.
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
