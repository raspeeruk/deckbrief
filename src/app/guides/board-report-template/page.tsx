import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Board Report Template for Startups: What to Include Every Month | DeckBrief',
  description: 'A complete board report template for startups — executive summary, key metrics (MRR, ARR, burn rate, runway), highlights & lowlights, board asks, and appendix structure. Copy and adapt.',
  openGraph: {
    title: 'Board Report Template for Startups: What to Include Every Month',
    description: 'A complete board report template covering executive summary, key metrics, highlights & lowlights, asks, and appendix structure.',
    type: 'article',
  },
}

export default function BoardReportTemplatePage() {
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
          <Link
            href="https://deckbrief.com"
            className="font-[family-name:var(--font-data)] text-sm font-semibold bg-[#1A1A18] text-white px-5 py-2.5 rounded hover:bg-[#C8102E] transition-colors"
          >
            Generate your board report
          </Link>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-12" />
      </div>

      {/* Article */}
      <article className="max-w-[780px] mx-auto px-6 pb-24">

        <p className="kicker mb-5">Board Reporting</p>

        <h1 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '52px', lineHeight: '1.05', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Board Report Template for Startups: What to Include Every Month
        </h1>

        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed mb-12">
          Most board reports are either too long (nobody reads them) or too thin (the board loses confidence). This template gives you the structure that works at every stage from pre-seed through Series B — with the right sections, the right order, and the right length.
        </p>

        <div className="h-px bg-[#E5E0D5] mb-12" />

        {/* Section 1 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            The Executive Summary (Slide 1)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Start with a single slide or half-page summary that anyone can read in 90 seconds. Board members often skim before the meeting — this is what they read first. Write it last.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            The executive summary should answer three questions: where are we now, what changed since last report, and what do we need from you today. Keep it to five to seven bullet points. Lead with your most important number — usually MRR or ARR — and the change since last period.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            If you are not comfortable writing this summary, you do not yet know what to say at the board meeting. Clarify that first.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Key Metrics Section (Slides 2–4)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6">
            Show the numbers every board member expects. Present each metric with current value, prior period, and trend (MoM or YoY). Use a simple table or metric grid — not a deck full of charts.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            Revenue Metrics
          </h3>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6 space-y-2 pl-5 list-disc">
            <li><strong>MRR</strong> (Monthly Recurring Revenue) — your baseline. Show absolute number and MoM growth %.</li>
            <li><strong>ARR</strong> (Annual Recurring Revenue) — MRR × 12. VCs think in ARR even if your contracts are monthly.</li>
            <li><strong>New MRR, Expansion MRR, Churned MRR</strong> — the waterfall. Shows whether you are filling a leaky bucket.</li>
          </ul>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            Cash & Efficiency
          </h3>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-6 space-y-2 pl-5 list-disc">
            <li><strong>Burn rate</strong> — net cash out per month. Investors notice if this number is missing.</li>
            <li><strong>Runway</strong> — cash in bank divided by net burn. Express in months. Flag if under 12 months.</li>
            <li><strong>Gross margin</strong> — critical once you pass $1M ARR. Shows unit economics.</li>
          </ul>

          <h3 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-3" style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: 700 }}>
            Headcount
          </h3>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Total headcount by department (Engineering, Sales, Customer Success, G&A). Show prior period for comparison. Include open roles if you are actively hiring. This is one of the most-read tables in any board report.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Highlights & Lowlights (Slide 5)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            This is the section most founders get wrong. They fill highlights with good news and bury bad news or omit it entirely. Board members are pattern-matched to spot this — and it destroys trust faster than the bad news itself.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Use a simple two-column layout: three to five highlights on the left, two to three lowlights on the right. For lowlights, always include what you are doing about it. A lowlight without a plan looks like a surrender.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded p-6 mb-4">
            <p className="font-[family-name:var(--font-data)] text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">Example lowlight</p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#1A1A18] leading-relaxed italic">
              "Churn increased to 3.2% MoM (from 1.8%). Root cause: two enterprise customers cancelled due to missing integrations (Salesforce, HubSpot). Both cited same gap. Response: engineering has scoped both integrations, targeting release in Q3. Pipeline impact: three similar deals in negotiation paused pending this release."
            </p>
          </div>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">
            That format — observation, root cause, response, downstream impact — is what good lowlights look like.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Asks from the Board (Slide 6)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Board members want to help. They just need you to tell them how. This section is chronically underused by founders — either because they feel like asking shows weakness, or because they have not thought through what they actually need.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Be specific. "Looking for intros" is not an ask. "Need a warm intro to the VP of Data at Stripe — we are targeting fintech enterprise, this is a strategic pilot that could anchor the vertical" is an ask.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Keep this to three asks maximum. Prioritise. If you have ten asks, you get zero responses. Three focused asks get followed up on.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Appendix Structure (Slides 7–10)
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Appendix material is for board members who want to go deep. Not everyone will. Include it, but do not present it during the meeting unless asked.
          </p>
          <ul className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed space-y-2 pl-5 list-disc">
            <li>P&L summary — income statement, balance sheet highlights</li>
            <li>Pipeline detail — top 10 deals by value, stage, expected close</li>
            <li>Product roadmap — current quarter milestones, next quarter preview</li>
            <li>Team updates — key hires, departures, org chart changes</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '36px', lineHeight: '1.15', fontWeight: 700 }}>
            Length Recommendation
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed mb-4">
            Target 10–12 slides for the main deck, plus an appendix of 3–5 slides if needed. Any longer and board members start skimming the slides you actually need them to read.
          </p>
          <p className="font-[family-name:var(--font-body)] text-base text-[#1A1A18] leading-relaxed">
            Send the board report 48 hours before the meeting. A report sent the night before is not read — it is glanced at. Board members prepare questions based on what they read in advance. Give them time.
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[#1A1A18] mb-6" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700 }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/investor-update-email', label: 'Investor Update Email Template', desc: 'The email format VCs actually read' },
              { href: '/guides/board-meeting-agenda', label: 'Board Meeting Agenda Template', desc: 'Time-allocated agenda with discussion framework' },
              { href: '/guides/startup-kpis', label: 'The 12 KPIs Every Board Expects', desc: 'Metrics framework from pre-seed to Series B' },
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
          <p className="kicker text-[#C8102E] mb-4">Skip the template</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4 leading-tight">
            Generate your board report in 60 seconds
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-8 max-w-[420px] mx-auto leading-relaxed">
            Paste your metrics into DeckBrief and get a Sequoia-style board report — formatted, structured, and ready to send.
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
