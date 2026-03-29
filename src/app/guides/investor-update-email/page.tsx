import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Investor Update Email Template That VCs Actually Read | DeckBrief',
  description: 'Write investor updates that get read and responded to. Includes subject line formulas, what to include (traction, team, ask), Paul Graham vs VC format, and a real-numbers example.',
  openGraph: {
    title: 'Investor Update Email Template That VCs Actually Read',
    description: 'Subject line formulas, the right structure, what NOT to include, and a worked example with real numbers.',
    type: 'article',
  },
}

export default function InvestorUpdateEmailPage() {
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
            Generate your investor update
          </a>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-12" />
      </div>

      {/* Article */}
      <article className="max-w-[780px] mx-auto px-6 pb-24">

        <p className="kicker mb-5">Investor Relations</p>

        <h1 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '52px', lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Investor Update Email Template That VCs Actually Read
        </h1>

        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed mb-12">
          Most investor updates get skimmed for 30 seconds and archived. The ones that get read — and generate warm intros, bridge capital, and early term sheets — follow a specific format. Here it is.
        </p>

        <div className="h-px bg-[#E5E0D5] mb-12" />

        {/* Why consistency matters */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Why Consistency Is More Important Than Brilliance
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Investors back founders, not just companies. An investor who receives monthly updates for 18 months — even when the numbers are flat — is far more likely to double down in the next round than one who hears from you only when you need money.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            The update is relationship infrastructure. Send it on the same date every month — first Tuesday, last Friday — so investors build a habit of reading it. When you skip a month, they notice. When you never started, you are a stranger at the worst possible time.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Monthly is the right cadence for most startups. Quarterly is acceptable post-Series B with a large portfolio. Never is how companies become invisible to their cap table.
          </p>
        </section>

        {/* What to include */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            What to Include
          </h2>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            1. Traction (the headline number)
          </h3>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Lead with your most important metric and what changed. One sentence, specific number. If your MRR grew, say by how much and what drove it. If it declined, say why and what you are doing about it. Never bury the headline.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            2. Metrics snapshot
          </h3>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Include 4–6 key metrics in a simple table or bulleted list. Current value, prior month, delta. Investors scan this first. Keep it consistent — same metrics every month.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-6 font-[family-name:var(--font-data)] text-sm">
            <p className="font-bold text-[#1A1A18] mb-3">Suggested metrics table:</p>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#E5E0D5]">
                  <th className="pb-2 text-[#6B6456] font-semibold">Metric</th>
                  <th className="pb-2 text-[#6B6456] font-semibold">This month</th>
                  <th className="pb-2 text-[#6B6456] font-semibold">Prior month</th>
                  <th className="pb-2 text-[#6B6456] font-semibold">Change</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A18]">
                {[
                  ['MRR', '$42,100', '$38,400', '+9.6%'],
                  ['ARR', '$505,200', '$460,800', '+9.6%'],
                  ['Burn', '$68,000', '$71,000', '-$3K'],
                  ['Runway', '14 months', '13 months', '+1mo'],
                  ['Customers', '127', '118', '+9'],
                  ['Churn', '1.4%', '1.8%', '-0.4pp'],
                ].map(row => (
                  <tr key={row[0]} className="border-b border-[#E5E0D5]/50">
                    <td className="py-2">{row[0]}</td>
                    <td className="py-2">{row[1]}</td>
                    <td className="py-2">{row[2]}</td>
                    <td className="py-2 text-[#1A6B3C] font-semibold">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            3. Wins & challenges
          </h3>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Three wins, two challenges. Write these in plain English — not bullet-point corporate speak. "We closed Accenture as a customer" is a win. "We restructured our go-to-market" is not a win statement; it is an evasion.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            4. The Ask
          </h3>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            One specific, actionable ask per update. If you need intros to fintech CTOs, say so. If you need a recommendation for a VP of Sales, ask. Investors respond to specificity. "Let me know if you can help with anything" generates zero responses.
          </p>
        </section>

        {/* What NOT to include */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            What Not to Include
          </h2>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed space-y-3 pl-5 list-disc">
            <li><strong>Vanity metrics</strong> — app downloads without activation data, social followers, press mentions that did not drive revenue</li>
            <li><strong>Padded narratives</strong> — three paragraphs about your product vision belong in a pitch deck, not a monthly update</li>
            <li><strong>Anything you would not say in person</strong> — if you would not lead a board meeting with a number, do not put it in the headline of your update email</li>
            <li><strong>No subject line that hides the news</strong> — "Company Update — March 2026" says nothing. The subject line should tell the story.</li>
          </ul>
        </section>

        {/* Subject line formulas */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Subject Line Formulas That Work
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Your subject line is the most-read part of any investor update. Treat it like a newspaper headline — tell the story, not just the date.
          </p>
          <div className="space-y-3">
            {[
              { formula: 'Growth month', example: '[Company] — March: $42K MRR (+9.6%), 14mo runway, 1 ask' },
              { formula: 'Milestone month', example: '[Company] — Feb: Crossed $500K ARR, closed Series A prep' },
              { formula: 'Honest pivot', example: '[Company] — Jan: Slower growth, here\'s why and the fix' },
              { formula: 'Fundraise signal', example: '[Company] — Apr: $600K ARR, opening Series A conversations' },
            ].map(item => (
              <div key={item.formula} className="bg-white border border-[#E5E0D5] rounded p-4">
                <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-1">{item.formula}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#1A1A18] italic">{item.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PG vs VC format */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Paul Graham Format vs VC-Preferred Format
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Paul Graham's format (popularised through YC) is a short, plain-text email: what you did last month, what you will do next month, what is blocking you. It works well for angels and early advisors who want founder authenticity over polish.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Institutional VCs, especially post-Series A, tend to prefer a more structured format with a consistent metrics table, a narrative section, and a clear ask. They are reading 20–30 portfolio updates a month and scan for the table first.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            The smart move: use the structured format with a short narrative opener that sounds like you, not a press release. The table gives them the data; the voice keeps the relationship warm.
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700 }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/board-report-template', label: 'Board Report Template', desc: 'Full slide structure for monthly board reports' },
              { href: '/guides/board-meeting-agenda', label: 'Board Meeting Agenda', desc: 'Time-allocated agenda that moves decisions forward' },
              { href: '/guides/startup-kpis', label: 'The 12 KPIs Boards Expect', desc: 'Metrics framework from pre-seed to Series B' },
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
          <p className="kicker text-[#C8102E] mb-4">Done in 60 seconds</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4 leading-tight">
            Generate your investor update now
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-8 max-w-[420px] mx-auto leading-relaxed">
            Paste your metrics into DeckBrief. Get a structured, Sequoia-style investor update — formatted and ready to send.
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
