import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Board Report Template: What to Include at Each Funding Stage',
  description: 'A board report template covering all 7 sections VCs expect — with stage-by-stage format guidance, financial statement advice, and how to present bad news.',
  keywords: ['board report template', 'board pack template', 'startup board pack'],
}

const sections = [
  { num: '01', title: 'Executive summary', purpose: 'The one page that gets read before anything else. State the single most important thing that happened this period, then the decision or context you need directors to hold as they read the rest. Write this last — after you know what the data says.' },
  { num: '02', title: 'Financial statements', purpose: 'P&L, cash position, burn rate, runway. Current period vs prior period vs budget. No commentary needed here — the narrative comes elsewhere. Just clean, correctly formatted numbers with the right comparators.' },
  { num: '03', title: 'KPI dashboard', purpose: 'Your 5-8 core metrics in one view, with trend direction and period-over-period change. Use consistent formatting every month so directors can spot anomalies at a glance. Don\'t add new metrics without removing one — metric sprawl is a red flag.' },
  { num: '04', title: 'Business highlights', purpose: '3-5 specific wins from this period. Not aspirational — things that actually happened. Closed a deal, shipped a feature, hired a key role, hit a milestone. Be concrete: "Closed HSBC at £85k ARR" not "Strong enterprise traction".' },
  { num: '05', title: 'Challenges and risks', purpose: 'This section separates founders who build trust from founders who manage optics. 2-3 real problems, with your understanding of root cause and what you\'re doing about it. No investor expects a clean run — they expect honest reporting.' },
  { num: '06', title: 'Strategic items / decisions needed', purpose: 'The agenda items for the board meeting itself. One memo per item: the question, the options you\'ve considered, your recommendation, and the specific input you need from directors. This is what makes meetings productive versus circular.' },
  { num: '07', title: 'Asks', purpose: 'Specific, named requests. "I need an intro to the CTO of Revolut" not "Any fintech intros welcome". If you can\'t make your asks specific, you\'re not ready for the board meeting. Directors who want to help need a clear brief.' },
]

const stageTable = [
  { stage: 'Pre-seed', exec: 'Optional', financials: 'Basic P&L + runway', kpis: '3-4 key metrics', highlights: '2-3 bullets', strategic: '1 item', asks: 'Required' },
  { stage: 'Seed', exec: '1 page', financials: 'P&L, cash flow, budget vs actual', kpis: '5-6 metrics with MoM', highlights: '3-4 specific wins', strategic: '1-2 items with memos', asks: 'Required, named' },
  { stage: 'Series A', exec: '1 page (structured)', financials: 'Full financials + cohort data', kpis: '7-8 metrics with trends', highlights: '3-5 with attribution', strategic: '2-3 items', asks: 'Required, specific' },
  { stage: 'Series B+', exec: '1 page + committee packs', financials: 'Audited quality + projections', kpis: 'Full dashboard', highlights: 'By business unit', strategic: '3+ items', asks: 'Board committee level' },
]

const badNewsRules = [
  { rule: 'Lead with the fact, not the context', detail: 'Say "We missed February MRR target by 23%" in the first sentence of the relevant section. Context comes after. Burying bad news under positive framing makes it feel like spin — which it is.' },
  { rule: 'Show you understand root cause', detail: 'Investors can handle problems. What they can\'t handle is founders who don\'t understand why things went wrong. Distinguish between one-off causes (key customer churn, a bug) and systemic causes (positioning, sales motion). They require different responses.' },
  { rule: 'Present a remediation plan with a timeline', detail: '"We\'re working on it" is not a plan. "We\'ve moved three enterprise prospects from pipeline to priority close, aiming to recover 60% of the gap by end of March" is a plan. Specific, time-bound, measurable.' },
  { rule: 'Don\'t catastrophise or minimise', detail: 'Both are trust destroyers. A missed month of MRR isn\'t a company-ending event — treat it as what it is. Equally, "We\'re still on track" when you\'re clearly not on track will be remembered.' },
]

const faqs = [
  {
    q: 'How long should a board report be?',
    a: 'The core pack: 8-12 pages. Executive summary is one page maximum. Financial statements: 2-3 pages. KPI dashboard: 1 page. Highlights and challenges: 1-2 pages. Strategic memos: 1-2 pages each. Everything else is appendix — available for those who want depth, not required reading. If your board pack is 40 pages, you\'re writing for yourself, not your directors.',
  },
  {
    q: 'What format should the board report be in?',
    a: 'PDF, sent by email, 48 hours before the meeting. Not a Google Doc link — a PDF ensures everyone reads the same version. Not a presentation deck only — a written pack is more scannable and more likely to actually be read. If your company has a formal board portal, use it, but also send the PDF directly.',
  },
  {
    q: 'Should the board report include projections?',
    a: 'Yes, from Series A onwards. A 12-month rolling forecast updated monthly, showing current trajectory vs original plan. At seed stage, a 6-month runway projection is sufficient. Pre-seed: just show how long the money lasts at current burn. Never include projections you can\'t explain and defend line by line.',
  },
  {
    q: 'Who writes the board report — the CEO or the CFO?',
    a: 'The CEO is responsible for it and the executive summary should be in their voice. The CFO or Head of Finance typically prepares the financial section. At early stage where there\'s no CFO, the CEO writes everything — use tools like BoardBrief to shortcut the time cost. The worst outcome is the CEO delegating the whole report and then presenting something they don\'t fully own.',
  },
]

export default function BoardReportTemplatePage() {
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
          Board Report Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Board Report Template: What to Include at Each Funding Stage
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          A board report — or board pack — is your company&rsquo;s most important recurring document. Investors make decisions about follow-on investment, intros, and how much attention to give you based largely on how you show up in these reports. Here&rsquo;s what goes in one, and how that changes as you scale.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            What should a board report include?
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            A complete board report has seven sections. Each exists for a specific reason — not convention. Understanding why each section exists helps you write it correctly.
          </p>
          <div className="space-y-0">
            {sections.map((s, i) => (
              <div key={s.num} className={`border-t border-[#E5E0D5] py-6 ${i === sections.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest shrink-0 pt-1">{s.num}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{s.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{s.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Board report format by stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            The report evolves as your company matures and your board becomes more sophisticated. Here&rsquo;s what&rsquo;s appropriate at each stage.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-x-auto">
            <table className="w-full font-[family-name:var(--font-data)] text-sm">
              <thead>
                <tr className="bg-[#F4F1EB] border-b border-[#E5E0D5]">
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Exec Summary</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Financials</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">KPIs</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Strategic</th>
                </tr>
              </thead>
              <tbody>
                {stageTable.map((row, i) => (
                  <tr key={row.stage} className={i > 0 ? 'border-t border-[#E5E0D5]' : ''}>
                    <td className="px-4 py-3 font-semibold text-[#1A1A18]">{row.stage}</td>
                    <td className="px-4 py-3 text-[#6B6456]">{row.exec}</td>
                    <td className="px-4 py-3 text-[#6B6456]">{row.financials}</td>
                    <td className="px-4 py-3 text-[#6B6456]">{row.kpis}</td>
                    <td className="px-4 py-3 text-[#6B6456]">{row.strategic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The executive summary — the page they actually read
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            A VC with a portfolio of 15 companies reads a lot of board packs. The executive summary is what they read first, sometimes exclusively. It needs to do three things: establish context, deliver the most important metric or development, and flag the key decision or question for the meeting.
          </p>
          <div className="bg-[#1A1A18] rounded p-6 mb-6">
            <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Structure that works</p>
            <div className="space-y-3">
              {[
                { label: 'Sentence 1', text: 'One sentence of context — where are we in the plan, what period is this.' },
                { label: 'Sentence 2-3', text: 'The headline. The single most important thing that happened — good or bad. Lead with the number.' },
                { label: 'Sentence 4-5', text: 'What it means. Is this confirmation of a trend, an anomaly, a turning point?' },
                { label: 'Sentence 6', text: 'What you need from the board. The question or decision this sets up.' },
              ].map(s => (
                <div key={s.label} className="flex gap-4">
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-wider shrink-0 pt-0.5 w-20">{s.label}</span>
                  <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">
            The executive summary should be written last. You don&rsquo;t know what the most important thing is until you&rsquo;ve finished the rest of the pack. Founders who write it first tend to lead with aspiration rather than reality.
          </p>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">BoardBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Your board pack, generated from metrics in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief generates a professional board report automatically from your metrics. Executive summary, KPI grid, highlights, challenges, asks — formatted in broadsheet style, ready to send.
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
            Financial statements for board reports
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Most early-stage founders include a P&L. Most experienced investors also want to see cash flow and a balance sheet from Series A onwards. Here&rsquo;s what to include and how to format it.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {[
              { title: 'P&L (Income Statement)', desc: 'Current month vs prior month vs budget. YTD vs YTD budget. Include gross margin as a line — not just revenue and EBITDA. If you\'re burning, show the burn clearly. Investors who can\'t find the burn line in your P&L become suspicious.' },
              { title: 'Cash flow statement', desc: 'Operating, investing, financing. More important than the P&L at early stage because it shows the actual movement of money. Reconcile to the opening and closing cash balance on your balance sheet.' },
              { title: 'Balance sheet', desc: 'Required from Series A. Deferred revenue, accounts receivable, and payables matter more than founders realise. An unexpected receivables spike often signals a revenue recognition problem worth flagging proactively.' },
              { title: 'Runway projection', desc: 'How long does the money last at current burn rate? At projected burn rate (if you\'re planning to hire)? Show both. Investors run this calculation anyway — give them your version with your assumptions.' },
            ].map((item, i) => (
              <div key={item.title} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.title}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            How to present bad news in a board report
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            This is where founder credibility is built or destroyed. Not in the good months — in the bad ones. Four rules that experienced founders follow:
          </p>
          <div className="space-y-6">
            {badNewsRules.map((r) => (
              <div key={r.rule} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{r.rule}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Board report vs investor update — what&rsquo;s the difference?
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="grid grid-cols-2 gap-0 bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {[
              { label: 'Board report / Board pack', items: ['Formal governance document', 'Sent to directors + observers only', 'Accompanies a scheduled board meeting', 'Minutes are kept', 'Includes decisions to be made', 'Series A+ companies: quarterly minimum'] },
              { label: 'Investor update email', items: ['Informal communication', 'Sent to all investors (including non-directors)', 'No meeting required', 'No minutes', 'Informational — not decision-making', 'Best practice: monthly at all stages'] },
            ].map((col, i) => (
              <div key={col.label} className={`p-6 ${i > 0 ? 'border-l border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-4">{col.label}</p>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li key={item} className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] flex items-start gap-2">
                      <span className="text-[#C8102E] shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Skip the blank page</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Board report done in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your metrics. BoardBrief writes the executive summary, formats the KPI grid, and exports a PDF your directors will actually read.
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
