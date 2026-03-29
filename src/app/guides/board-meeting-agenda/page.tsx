import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Board Meeting Agenda: The Exact Format VCs Expect (2025 Guide)',
  description: 'The standard board meeting agenda structure that VCs expect — with time allocations, pre-read materials, and the mistakes that erode investor trust.',
  keywords: ['board meeting agenda', 'startup board meeting agenda', 'board meeting agenda template'],
}

const agendaItems = [
  { num: '01', title: 'Approve prior minutes', time: '5 min', detail: 'Formal approval of last meeting minutes. Keep it brief — directors confirm, chair notes any corrections, done. If anyone has substantive issues with the minutes, they should have flagged them before the meeting.' },
  { num: '02', title: 'Financial review', time: '15 min', detail: 'P&L vs budget, cash position, burn rate, runway. Lead with the headline number. If you\'re behind plan, say so directly and lead with context — not excuses. Investors already have your board pack; this is commentary and Q&A, not a reading exercise.' },
  { num: '03', title: 'Business review / KPIs', time: '20 min', detail: 'Core metrics: MRR, churn, CAC, LTV/CAC, NRR. Dashboard view first, then narrative. Walk through the one metric that matters most right now — for most early-stage companies, that\'s MoM MRR growth. Then flag anything that\'s moved significantly.' },
  { num: '04', title: 'Strategic items', time: '30 min', detail: 'This is the highest-value block. One to three items maximum. These should be decisions you actually need the board to help you make — pricing changes, hiring the VP of Sales, whether to pursue a partnership. Not status updates dressed up as strategy.' },
  { num: '05', title: 'Founder update', time: '10 min', detail: 'What\'s keeping you up at night. What you\'re most excited about. What you need from each person in the room. This is the most human part of the meeting and founders often rush through it — don\'t.' },
  { num: '06', title: 'Q&A / Open items', time: '10 min', detail: 'Unstructured discussion. Directors ask questions, raise concerns, surface connections. As chair, you\'re managing time here — if a question opens a new rabbit hole, park it for a follow-up call rather than letting it eat the rest of the agenda.' },
  { num: '07', title: 'Closed session', time: '10 min (if needed)', detail: 'Directors only — no founders, no observers. Standard practice at Series A and above. Use it to discuss executive performance or sensitive matters. If your lead investor asks for one, that\'s normal. Don\'t read into it.' },
]

const preMaterials = [
  { item: 'Executive summary', desc: '1 page. Context first, headline metric, key decisions needed. This is what gets read on the train.' },
  { item: 'Financial statements', desc: 'P&L, balance sheet, cash flow. Current month + YTD. Include prior year or prior quarter for context.' },
  { item: 'KPI dashboard', desc: 'Your core metrics in one view. Trend lines where possible. Red/amber/green status is fine for experienced boards.' },
  { item: 'Strategic memo', desc: 'For each agenda item requiring a decision: 1-2 pages maximum. State the question, the options, your recommendation, and what you need from the board.' },
  { item: 'Appendix', desc: 'Supporting data for those who want to dig in. Cohort analysis, hiring plan, pipeline detail. Board members who care will read it; those who don\'t won\'t. That\'s fine.' },
]

const mistakes = [
  { mistake: 'Sending the board pack the night before', why: 'Directors need 48 hours. If you send at 11pm Sunday for a Monday morning meeting, you\'ll get worse questions — not because they\'re unprepared, but because the questions they ask when unprepared are different from the ones they ask when prepared.' },
  { mistake: 'Spending 20 minutes on slides they already read', why: 'If you sent a board pack, don\'t read it to them. Walk through it at pace, anchor on the decisions, and move to discussion. Reading slides to informed adults signals you\'re not confident in the content.' },
  { mistake: 'Burying bad news', why: 'Investors find out eventually. They remember who told them directly versus who they found out about indirectly. The founders who build the most durable investor relationships are the ones who deliver hard news first, with context and a plan.' },
  { mistake: 'No ask, no decision', why: 'If you don\'t walk out with something concrete from the strategic items block, the meeting failed. Every strategic agenda item should end with either a clear decision or a named owner and deadline for the decision.' },
  { mistake: 'Not managing time', why: 'Letting one item run over isn\'t just inefficient — it signals you can\'t prioritise. The board chair (usually the CEO at early stage) is responsible for keeping to the agenda. Cut discussions short, park items, protect the strategic block.' },
]

const meetingFrequency = [
  { stage: 'Pre-seed / Angel', frequency: 'Quarterly', format: 'Informal. Board may just be founders + 1-2 angels. Monthly investor email is more important at this stage.' },
  { stage: 'Seed', frequency: 'Quarterly (with monthly written updates)', format: 'One or two institutional investors. Start building the habit of formal agendas and board packs now.' },
  { stage: 'Series A', frequency: 'Every 6 weeks or monthly', format: 'Full board with independent director. Formal minutes, proper process. Closed sessions standard.' },
  { stage: 'Series B+', frequency: 'Monthly', format: 'Multiple committees (audit, compensation). More independent directors. Significantly more governance overhead.' },
]

const faqs = [
  {
    q: 'How long should a board meeting last?',
    a: 'Two hours maximum for an early-stage company. If you\'re consistently running over, you\'re trying to cover too much or not managing discussion time. A focused 90-minute meeting is better than a sprawling three-hour one. Keep the strategic items block sacred — if time pressure forces you to cut something, cut the KPI review, not the decisions.',
  },
  {
    q: 'Who should attend a startup board meeting?',
    a: 'Board directors (elected), plus any observers with observer rights in your cap table. Founders who aren\'t directors typically attend as presenters. CFO or Head of Finance for the financial review. Legal counsel if there are significant legal items. Keep it tight — every additional person changes the dynamic of the strategic conversation.',
  },
  {
    q: 'What\'s the difference between a board meeting and an investor update?',
    a: 'A board meeting is a formal governance event — decisions are made, minutes are kept, directors have fiduciary duties. An investor update (monthly email or PDF) is communication — it keeps everyone informed between meetings. You need both. The update keeps investors informed so the board meeting can focus on decisions, not status.',
  },
  {
    q: 'Should I use a presentation deck or a written board pack?',
    a: 'Written board pack sent 48 hours before, then a short deck (5-8 slides maximum) for the meeting itself. The pack is for reading; the deck is for anchoring discussion. Founders who send only a deck and present it for 45 minutes are wasting their board\'s time. Founders who send only a written pack without any visual anchors lose the room.',
  },
]

export default function BoardMeetingAgendaPage() {
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
          Board Meeting Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Board Meeting Agenda: The Exact Format VCs Expect (2025 Guide)
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Most founders dread board meetings because they&rsquo;re not sure what to cover. The anxiety usually isn&rsquo;t about the content — it&rsquo;s about structure. Here&rsquo;s the agenda format that experienced investors recognise and respond to, with time allocations and the logic behind each block.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The standard board meeting agenda format
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            A two-hour board meeting for a seed-to-Series A company should follow this structure. Time allocations are approximate — the strategic items block is where you should invest the most time and protect hardest.
          </p>
          <div className="space-y-0">
            {agendaItems.map((item, i) => (
              <div key={item.num} className={`border-t border-[#E5E0D5] py-6 ${i === agendaItems.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-20">
                    <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest block">{item.num}</span>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-1 block">{item.time}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{item.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Pre-read materials — what to send 48 hours before
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            The board pack is not a courtesy — it&rsquo;s what converts meeting time from status update to genuine strategic discussion. These five components should form every pack.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {preMaterials.map((m, i) => (
              <div key={m.item} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.item}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">BoardBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate your board pack automatically — ready to send 48 hours before the meeting
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief generates a professional board report automatically from your metrics. Paste your MRR, burn, headcount, milestones — AI writes the executive summary, formats the KPI grid, and produces a PDF your investors will actually read.
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
            Board meeting mistakes that erode investor trust
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            These are the behaviours that make investors quietly downgrade their confidence in a founder — not dramatically, but incrementally. Each one is avoidable.
          </p>
          <div className="space-y-6">
            {mistakes.map((m) => (
              <div key={m.mistake} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.mistake}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            How often should board meetings happen? (by stage)
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Stage</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Frequency</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Format</span>
            </div>
            {meetingFrequency.map((row, i) => (
              <div key={row.stage} className={`grid grid-cols-3 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.stage}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.frequency}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.format}</span>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Ready for your next board meeting?</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Your board pack, written in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Stop spending Sunday evenings writing the board update. Paste your metrics, get a professional PDF — executive summary, KPI grid, highlights, asks — ready to send before the meeting.
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
