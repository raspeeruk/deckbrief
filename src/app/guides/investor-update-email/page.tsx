import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Update Email: The Template That Gets Replies (And Builds Trust)',
  description: 'How to write an investor update email that investors actually read — with subject line formula, 6-part structure, lowlights guidance, and frequency advice.',
  keywords: ['investor update email', 'monthly investor email', 'startup investor update template'],
}

const emailParts = [
  {
    num: '01',
    title: 'Opening context',
    desc: 'One to two sentences. Where are you in the plan? What\'s the most important thing to understand before reading the rest? This isn\'t a greeting — it\'s orientation. "We\'re 4 months post-seed close and 60% of the way to our Series A milestone." sets the frame.',
  },
  {
    num: '02',
    title: 'Key metrics',
    desc: 'A small table. 5-8 metrics maximum. Current period, prior period, change. MRR, MoM growth, churn, burn, runway — whatever your core set is. Same metrics every month so investors can track trend without doing the work themselves.',
  },
  {
    num: '03',
    title: 'Highlights',
    desc: '2-3 specific wins. Not aspirational, not general. "Closed Barclays at £42k ARR" not "Strong enterprise traction." "Reduced CAC from £380 to £290 by cutting paid and shifting to content" not "Improved efficiency." The investor who reads this should be able to picture the thing that happened.',
  },
  {
    num: '04',
    title: 'Lowlights',
    desc: '1-2 real problems. This section is required. Investors who never see lowlights don\'t trust the highlights either. The goal isn\'t to worry them — it\'s to show you have accurate self-perception and that you\'re on top of the problems. Include your understanding of root cause.',
  },
  {
    num: '05',
    title: 'Asks',
    desc: 'Specific, named, actionable. "I need an intro to the CPO at Monzo — they just announced a SME product expansion that fits our integration roadmap" is an ask. "Any fintech connections welcome" is noise. Maximum three asks. If you have more than three things you need, you\'re not prioritising.',
  },
  {
    num: '06',
    title: 'Close',
    desc: 'One sentence. Thank them, invite reply, signal what\'s next. Keep it human. "Happy to get on a call if any of this raises questions — next update in 4 weeks." That\'s it.',
  },
]

const exampleEmail = `Subject: TechCo Update — February 2026 — MRR hits £85k (+22% MoM)

Hi all,

We closed February at £85k MRR — our fastest growth month. We're now tracking ahead of the plan we shared at close, which puts Series A milestone in reach by Q3 if we sustain this.

METRICS
MRR: £85,000 (+22% MoM)
ARR: £1,020,000
MoM growth: 22%
Churn: 1.4% (up from 0.9%)
Burn: £48k
Runway: 14 months
NRR: 112%
Headcount: 9 (no change)

HIGHLIGHTS
• Signed Aviva at £28k ARR — our largest enterprise deal. Took 4 months to close. Template being applied to 3 active enterprise prospects now.
• Pricing page conversion up 34% after removing the annual-only tier. Should continue compounding.

LOWLIGHTS
• Churn ticked up to 1.4%. Two cancellations traced to the same onboarding step — the data import wizard. Fix shipping next week. Watching closely.
• Sales cycle on SMB has extended to 3 weeks average from 10 days. Not sure if seasonal or structural — tracking for another month before acting.

ASKS
• Emma: intro to the CTO at Tide — they're expanding into SMB accounting tools, which is adjacent to our core use case.
• If anyone has done enterprise security reviews with Lloyds or Barclays, would love 30 minutes on how to move faster through their procurement.

Next update in 4 weeks.

Andrew`

const lowlightReasons = [
  { reason: 'Trust is asymmetric', detail: 'An investor who reads 6 consecutive updates with no lowlights doesn\'t think you\'re running a perfect business — they think you\'re managing optics. When the problem eventually surfaces (and it always does), the optics management is the thing they remember, not the problem itself.' },
  { reason: 'Lowlights surface help you wouldn\'t otherwise ask for', detail: 'Investors see patterns across portfolios. If you mention that your sales cycle is extending, your investor who just fixed the same problem at another company can tell you exactly what they did. The update is the mechanism — but only if you actually describe the problem.' },
  { reason: 'It demonstrates founder self-awareness', detail: 'The single most common thing early investors say separates good founders from bad ones is the ability to accurately diagnose what\'s not working. The investor who reads your lowlights is assessing exactly this. Show that you understand root cause, not just symptoms.' },
]

const frequencyTable = [
  { freq: 'Monthly', best_for: 'Standard. Works at all stages.', pros: 'Regular enough to track trends, infrequent enough not to be noise.', cons: 'Requires discipline to send on time every month. 12 updates per year is a real commitment.' },
  { freq: 'Quarterly', best_for: 'Lower-activity periods, bootstrapped companies.', pros: 'Less work. More time to have substantial changes to report.', cons: 'Too infrequent to build investor familiarity. Investors are harder to mobilise when needed.' },
  { freq: 'Ad-hoc', best_for: 'Major milestones only.', pros: 'No process overhead.', cons: 'Investors who only hear from you when you close a round or need help will treat you accordingly.' },
]

const responseOptimisations = [
  { tip: 'Make asks specific and easy to act on', detail: 'An investor who wants to help you needs a brief they can forward to a contact. "I need an intro to the CTO at Monzo re: their new SME product" is a forwardable brief. "Any fintech contacts welcome" is not.' },
  { tip: 'Lead with a positive number in the subject line', detail: 'If your MRR grew, put the number in the subject line. Investors open emails that signal good news — and they\'re more likely to engage with the rest of the update including the lowlights if the open rate is high.' },
  { tip: 'Send on a consistent day and time', detail: 'Tuesday or Wednesday morning. Never Friday. Consistency trains your investors to expect it. After 3-4 months of consistent cadence, they\'ll notice if it doesn\'t arrive.' },
  { tip: 'Keep it under 400 words outside the metrics table', detail: 'Investor updates that read like blog posts don\'t get read. The metrics table is required. The narrative around it should be punchy. If you find yourself writing more than 4-5 sentences for any section, cut it.' },
]

const faqs = [
  {
    q: 'How many investors should receive the update?',
    a: 'Everyone who has given you money, regardless of check size. Plus any advisors who have formal agreements. The update is a legal and relationship obligation — not just a communication choice. Angels who wrote £10k checks often have networks as valuable as institutional VCs. Never tier your updates by check size.',
  },
  {
    q: 'Should investor updates be sent by email or a platform?',
    a: 'Email. Always. Platforms like Visible.vc or Notion have their place for dashboards, but the investor update itself should hit the inbox as an email. Investors who have to log into a platform to read your update will read it less. An email they can read in the taxi is more valuable than a portal they\'ll visit quarterly.',
  },
  {
    q: 'What if I\'m in a really bad month — should I still send?',
    a: 'Especially if you\'re in a bad month. The investor update cadence you maintain through difficult periods is what builds the durable relationships. An investor who hears about a bad month proactively — with root cause analysis and a remediation plan — is far more likely to be helpful than one who hears about it when you\'re looking for their bridge commitment.',
  },
  {
    q: 'Should I include attachments like the financial statements?',
    a: 'No. The text update is the product. If investors want to see the full financials, they have board rights or can request them separately. Attaching a 12-tab Excel file to your investor email reduces open rates and creates versioning confusion. Link to a shared drive folder if you want to make documents available — but keep the email standalone.',
  },
]

export default function InvestorUpdateEmailPage() {
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
          Investor Communication
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Investor Update Email: The Template That Gets Replies (And Builds Trust)
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          The investors who reply to updates are the ones who help when it matters. The ones who ghost your updates are also the ones who are hardest to reach when you need a bridge or an intro. Here&rsquo;s how to write updates that get read, get replied to, and build the kind of investor relationships that actually compound.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The subject line
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            The subject line determines open rate. For investor updates, use this formula consistently every month:
          </p>
          <div className="bg-[#1A1A18] rounded p-6 mb-6">
            <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Formula</p>
            <p className="font-[family-name:var(--font-data)] text-white text-base font-semibold">
              [Company] Update — [Month] [Year] — [One KPI highlight]
            </p>
          </div>
          <div className="bg-white border border-[#E5E0D5] rounded p-6">
            <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#6B6456] uppercase tracking-widest mb-4">Examples</p>
            <div className="space-y-2">
              {[
                'TechCo Update — February 2026 — MRR hits £85k (+22% MoM)',
                'FinFlow Update — March 2026 — First enterprise deal closed (£42k ARR)',
                'BuildStack Update — January 2026 — Runway extended to 18 months',
              ].map(ex => (
                <div key={ex} className="font-[family-name:var(--font-data)] text-sm text-[#1A1A18] bg-[#F4F1EB] rounded px-4 py-3 border border-[#E5E0D5]">
                  {ex}
                </div>
              ))}
            </div>
            <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] mt-4 leading-relaxed">
              If the month was genuinely bad, don&rsquo;t fabricate a positive KPI — use a neutral descriptor: "TechCo Update — October 2026 — Q3 review and Q4 plan"
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 6-part investor email structure
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-0">
            {emailParts.map((part, i) => (
              <div key={part.num} className={`border-t border-[#E5E0D5] py-6 ${i === emailParts.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest shrink-0 pt-1">{part.num}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{part.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{part.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Example investor update
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            This is what a well-structured monthly investor update looks like in practice — specific, honest, and with clear asks.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-4">
              <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#6B6456] uppercase tracking-widest">Example investor update email</p>
            </div>
            <pre className="font-[family-name:var(--font-data)] text-sm text-[#1A1A18] leading-relaxed px-6 py-6 whitespace-pre-wrap overflow-x-auto">
              {exampleEmail}
            </pre>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The lowlights section — why most founders skip it and why that&rsquo;s wrong
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            The lowlights section is the most skipped part of every investor update template — and the most important. Three reasons to include it every single month:
          </p>
          <div className="space-y-6">
            {lowlightReasons.map((r) => (
              <div key={r.reason} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{r.reason}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">BoardBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Complement your email updates with a visual board report
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief generates a professional board report deck automatically from your metrics — a visual complement to your text investor updates. Share the PDF with your board 48 hours before the meeting, send the text update to all investors monthly.
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
            Frequency: monthly vs quarterly vs ad-hoc
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-4 bg-[#F4F1EB] border-b border-[#E5E0D5] px-4 py-3">
              {['Frequency', 'Best for', 'Pros', 'Cons'].map(h => (
                <span key={h} className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">{h}</span>
              ))}
            </div>
            {frequencyTable.map((row, i) => (
              <div key={row.freq} className={`grid grid-cols-4 gap-2 px-4 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#C8102E]">{row.freq}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.best_for}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.pros}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.cons}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Response rate optimisation — what makes investors reply
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {responseOptimisations.map((r) => (
              <div key={r.tip} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{r.tip}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{r.detail}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Pair your email update with a visual board pack</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Board report generated in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Send the email update to all investors. Share the BoardBrief PDF with your board before the meeting. Both done before your coffee goes cold.
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
