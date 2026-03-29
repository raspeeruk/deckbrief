import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Board Meeting Agenda Template for Startups (With Time Allocations) | DeckBrief',
  description: 'A complete board meeting agenda template with time allocations, pre-meeting materials checklist, discussion facilitation tips, minutes format, and follow-up action tracking.',
  openGraph: {
    title: 'Board Meeting Agenda Template for Startups (With Time Allocations)',
    description: 'Pre-meeting materials, 75-minute agenda structure, facilitation tips, minutes format, and follow-up tracking — for startup board meetings.',
    type: 'article',
  },
}

export default function BoardMeetingAgendaPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">

      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#C8102E]" />
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] tracking-tight">
            DeckBrief
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="https://deckbrief.com"
            className="font-[family-name:var(--font-data)] text-sm font-semibold bg-[#1A1A18] text-white px-5 py-2.5 rounded hover:bg-[#C8102E] transition-colors"
          >
            Generate pre-meeting materials
          </a>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-12" />
      </div>

      {/* Article */}
      <article className="max-w-[780px] mx-auto px-6 pb-24">

        <p className="kicker mb-5">Board Governance</p>

        <h1 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '52px', lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Board Meeting Agenda Template for Startups (With Time Allocations)
        </h1>

        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed mb-12">
          A board meeting without a tight agenda is a status update dressed as governance. This template gives you the structure to run a 75-minute meeting that actually moves decisions forward — with time for real discussion, not just information download.
        </p>

        <div className="h-px bg-[#E5E0D5] mb-12" />

        {/* Pre-meeting */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Pre-Meeting Materials (T-48 hours)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Everything the board reads before the meeting determines the quality of the discussion in the meeting. If you send the board pack the morning of, you get a meeting full of questions that should have been processed beforehand. Send materials 48 hours in advance, minimum.
          </p>
          <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-3 uppercase tracking-wide">Pre-meeting pack checklist:</p>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed space-y-2 pl-5 list-disc mb-6">
            <li>Board report or investor update with key metrics</li>
            <li>Prior meeting minutes (approved or marked as draft)</li>
            <li>Any resolutions requiring a vote (with supporting documentation)</li>
            <li>Strategic context document for major discussion items</li>
            <li>Updated financial statements (if not in board report)</li>
          </ul>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Use DeckBrief to generate your board report for the pre-meeting pack. Having a formatted, Sequoia-style board report in the pack signals that you run a tight operation — which matters for your next fundraise.
          </p>
        </section>

        {/* Agenda */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            The 75-Minute Agenda
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-8">
            Most startup boards meet quarterly for 90–120 minutes. The agenda below is calibrated for 75 minutes — tight enough to respect everyone's time, long enough to have real conversations. Adjust for your cadence.
          </p>

          <div className="space-y-4">
            {[
              {
                time: '0–5 min',
                title: 'Call to order & quorum confirmation',
                detail: 'Confirm quorum (required for any formal votes), note any apologies. This takes 2 minutes if you have quorum. If you do not, decide whether to proceed informally.',
              },
              {
                time: '5–20 min',
                title: 'Business review (15 min)',
                detail: 'CEO walks through the board report — key metrics, highlights, lowlights. Board should have read this already; this is not a read-out. It is a chance to ask clarifying questions and flag issues before the decision section. Stop at 20 minutes regardless.',
              },
              {
                time: '20–50 min',
                title: 'Key decisions (30 min)',
                detail: 'The most valuable 30 minutes of any board meeting. Maximum two or three items. Each item: CEO presents context (5 min), board discussion (10–15 min), decision or next step noted. If you have more than three items, you have not prioritised — defer the lowest-urgency item.',
              },
              {
                time: '50–65 min',
                title: 'CEO concerns & open discussion (15 min)',
                detail: 'This is where the CEO raises things they are genuinely worried about — not in the board report, not in a formal agenda item. Existential concerns, team issues, market shifts, things they want a gut-check on. This section only works if the board has built trust. It is the highest-value part of an early-stage board.',
              },
              {
                time: '65–75 min',
                title: 'Board-only time (10 min)',
                detail: 'Management (including the CEO) leaves the room. Independent board members and investor directors discuss anything they need to discuss without the CEO present. This is standard governance, not a red flag. The output is fed back to the CEO in a brief debrief.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E0D5] rounded p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] bg-[#FFF0F0] px-2 py-1 rounded">{item.time}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-2">{item.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilitating discussion */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Facilitating Decision Discussions
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            The CEO runs the board meeting, not the chairman. You set the agenda, control the time, and close each item. Board members who talk too long or go off-topic need to be politely redirected — "That is an important point, let us note it and come back at the end if we have time."
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            For decision items, frame the options before the meeting (in your pre-meeting materials) so the board is not doing first-principles analysis in the room. The discussion should be about trade-offs, not information gathering.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            End every decision item with a clear statement: "So the decision is X, with Y responsible, by Z date." Note it verbally so everyone hears the same thing. Misalignment on what was decided is the most common source of post-board friction.
          </p>
        </section>

        {/* Minutes */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Minutes Format
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Board minutes are a legal document. They do not need to be a verbatim transcript — they need to record decisions made, votes, and any dissents. Keep them factual and concise.
          </p>
          <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-3 uppercase tracking-wide">Minutes structure:</p>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed space-y-2 pl-5 list-disc">
            <li>Date, time, location (or video call platform), attendees</li>
            <li>Confirmation of quorum</li>
            <li>Approval of prior minutes</li>
            <li>Summary of business review discussion (2–3 sentences)</li>
            <li>For each decision: the motion, who proposed, who seconded, vote (unanimous or noted dissents), resolution</li>
            <li>Action items with owners and due dates</li>
            <li>Date of next meeting</li>
          </ul>
        </section>

        {/* Follow-up */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Follow-Up Actions
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Send a follow-up email within 24 hours with: the action items from the meeting, draft minutes for review, and any documents that need signatures. Board members forget commitments made in meetings unless they are written down and emailed.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Chase unresolved action items from prior meetings in your next board report — list them in a standing section so the board can see what has been done and what has not. Accountability creates follow-through.
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700 }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/board-report-template', label: 'Board Report Template', desc: 'Full slide structure for your pre-meeting pack' },
              { href: '/guides/investor-update-email', label: 'Investor Update Email', desc: 'The update email format VCs actually read' },
              { href: '/guides/startup-kpis', label: 'The 12 KPIs Boards Expect', desc: 'Which metrics belong in your board review section' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-[#E5E0D5] rounded p-5 hover:border-[#1A1A18] transition-colors"
              >
                <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#1A1A18] mb-1">{link.label}</p>
                <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1A1A18] rounded p-12 text-center">
          <p className="kicker text-[#C8102E] mb-4">Pre-meeting pack sorted</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4 leading-tight">
            Generate your board report in 60 seconds
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-8 max-w-[420px] mx-auto leading-relaxed">
            DeckBrief turns your metrics into a formatted board report — ready to send with your pre-meeting materials. No formatting time, no blank page.
          </p>
          <a
            href="https://deckbrief.com"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-8 py-4 rounded font-semibold hover:bg-[#A00E26] transition-colors text-sm"
          >
            Try DeckBrief free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="h-[2px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-8" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-4 bg-[#C8102E]" />
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#6B6456]">DeckBrief</span>
          </div>
          <div className="flex items-center gap-6 font-[family-name:var(--font-data)] text-sm text-[#6B6456]">
            <Link href="/" className="hover:text-[#1A1A18] transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-[#1A1A18] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1A1A18] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
