import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Update Email Template: Monthly Format That Works',
  description: 'The monthly investor update email template that gets read and builds trust — with subject line formula, 6-section structure, metric presentation, and real examples from funded startups.',
  keywords: ['investor update email template', 'monthly investor update', 'investor update format', 'how to write investor updates'],
}

const updateSections = [
  { num: '01', title: 'Subject line', length: 'One line', detail: 'The subject line determines whether your email gets opened. Use a consistent format: "[Company Name] — [Month] Update: [One-line summary]". Example: "Acme — March Update: $142K MRR, new VP Sales, Series A timeline." The summary should contain your headline metric and one other thing worth reading. Investors receive dozens of these per month — yours needs to earn the click.' },
  { num: '02', title: 'TL;DR / Opening paragraph', length: '3-5 sentences', detail: 'Three to five sentences that capture the entire month. The best investor updates can be understood without scrolling. Lead with the headline number (MRR or revenue), one highlight, one challenge, and one ask. "March was a strong month: $142K MRR (+14% MoM), we closed our largest enterprise deal, churn ticked up to 4.2%, and we are looking for intros to Series A investors." Done. Everything that follows is supporting detail.' },
  { num: '03', title: 'Key metrics', length: '4-8 lines', detail: 'A compact grid of your core numbers. MRR, MRR growth, burn rate, runway, one product metric, headcount. Format them identically every month — same order, same labels, same comparators. Investors build a mental model of your numbers over time, and consistency lets them spot changes instantly. Use this format: "MRR: $142K (+14% MoM, +340% YoY)" — metric, current value, direction, context.' },
  { num: '04', title: 'Highlights', length: '3-5 bullets', detail: 'Specific, concrete wins from this month. "Closed HSBC at $18K ARR after a 4-month sales cycle" is good. "Strong enterprise momentum" is vague and unhelpful. Each bullet should pass the "so what?" test — would an investor reading this feel more confident in the business? New customers, product launches, key hires, partnerships. Keep it tight and factual.' },
  { num: '05', title: 'Lowlights / Challenges', length: '2-3 bullets', detail: 'This is the section that builds trust. Every month has problems — founders who pretend otherwise lose credibility. Be specific: "Churn increased from 3.1% to 4.2%, concentrated in our SMB segment. Root cause appears to be onboarding friction — we are deploying a new guided setup flow next week." Show the problem, show that you understand it, show what you are doing. This section is what converts passive investors into active allies.' },
  { num: '06', title: 'Asks', length: '2-3 bullets', detail: 'The highest-ROI section of any investor update. Specific, actionable requests. "Looking for an intro to the Head of Procurement at Barclays — we have a champion in their innovation team who needs internal buy-in" is a perfect ask. "Any fintech intros welcome" is not. Named people, named companies, specific contexts. Investors who want to help need a brief they can act on. Most founders leave money on the table by making vague asks or skipping this section entirely.' },
]

const frequencyGuide = [
  { type: 'Monthly update email', audience: 'All investors + advisors + key angels', effort: 'Low (30-60 minutes)', purpose: 'Keep everyone informed, maintain relationships, surface asks. This is communication, not governance.' },
  { type: 'Quarterly board pack', audience: 'Board directors + observers only', effort: 'Medium (2-4 hours)', purpose: 'Formal governance document with full financials, strategic memos, and decision items for the board meeting.' },
  { type: 'Ad hoc update', audience: 'Lead investor + board', effort: 'Minimal', purpose: 'Material events: large deal closed, key hire departure, runway concern, M&A interest. Do not wait for the monthly cadence for genuinely significant news.' },
]

const realExamples = [
  {
    label: 'Subject line — good',
    text: 'Acme — March Update: $142K MRR, HSBC closed, Series A prep',
    note: 'Contains the headline metric, a notable win, and strategic context. An investor knows whether to open this immediately or save it.',
  },
  {
    label: 'Subject line — bad',
    text: 'March Update',
    note: 'Which company? What happened? No reason to prioritise opening this. Investors with 40 portfolio companies cannot search for "March Update" and find yours.',
  },
  {
    label: 'Opening paragraph — good',
    text: 'March was our strongest month since launch: $142K MRR (+14% MoM), driven by our first enterprise deal (HSBC, $18K ARR). Churn ticked up to 4.2% in SMB — we have identified the root cause and are shipping a fix this week. We are beginning Series A prep and could use introductions to Accel, Balderton, and Index.',
    note: 'Every important piece of information in 60 words. An investor who reads nothing else understands the business.',
  },
  {
    label: 'Opening paragraph — bad',
    text: 'Hi everyone! Hope you had a great month. Things have been really busy here at Acme and the team has been working incredibly hard. We have some exciting things to share with you this month!',
    note: 'Four sentences, zero information. This reads like a newsletter, not a business update. Investors scan — do not make them work to find the substance.',
  },
]

const updateMistakes = [
  { mistake: 'Skipping months when things are bad', why: 'The worst thing you can do. Silence signals either incompetence or evasion — and investors assume the latter. The months when things are hardest are the months when consistent communication matters most. A candid update during a tough month builds more trust than three glowing updates in a row.' },
  { mistake: 'Writing a novel', why: 'The ideal investor update takes two minutes to read. If yours consistently runs over 1,000 words, you are including operational detail that belongs in an internal review, not an investor communication. Compress ruthlessly. If a section does not help an investor understand the business trajectory or act on an ask, cut it.' },
  { mistake: 'Listing metrics without direction', why: '"MRR: $142K" is incomplete. "$142K (+14% MoM)" is better. "$142K (+14% MoM, plan was $135K)" is best. Every metric needs context — at minimum, period-over-period direction. Ideally, comparison to plan. Without context, the investor has to remember last month&rsquo;s number and calculate the delta themselves. They will not.' },
  { mistake: 'Making vague asks', why: '"Any introductions to potential customers would be great" is not an ask — it is a wish. "Looking for an introduction to Sarah Chen, VP Product at Stripe — we are building a payments integration and she is the decision-maker" is an ask. The specificity is what makes it actionable. An investor reading the first ask thinks "I&rsquo;ll think about it." An investor reading the second thinks "I know Sarah — let me send an email."' },
  { mistake: 'Only emailing when you need something', why: 'If your investors only hear from you when you need introductions, money, or favours, the relationship becomes transactional. Monthly updates maintain the relationship on your terms. When you do need something, the ask comes in the context of an ongoing dialogue — not out of nowhere. The cadence itself is the relationship strategy.' },
]

const faqs = [
  {
    q: 'How long should a monthly investor update be?',
    a: 'Under 500 words is ideal. 750 words maximum. If your update consistently exceeds this, you are including too much operational detail. The investor update is a summary, not a report. Use the board pack for detail and the investor update for headlines. A good test: if someone reads it on their phone between meetings, can they absorb the key information? If not, it is too long.',
  },
  {
    q: 'Should I send the update to all investors or just board members?',
    a: 'All investors, including angels who wrote small cheques, advisors with a vested interest, and anyone who might make useful introductions. The board pack is restricted to directors and observers. The monthly update is your broadest investor communication — it maintains relationships with your full support network. Some founders create two tiers: a detailed update for board members and a shorter version for everyone else. This is unnecessary overhead that rarely justifies the effort.',
  },
  {
    q: 'What day of the month should I send the update?',
    a: 'Within the first two weeks of the following month. Earlier is better — it signals operational discipline. The best founders send their updates by the 5th of the month. If your financial close takes longer, send a partial update with the narrative sections and follow up with final numbers. Consistently late updates (after the 15th) signal that reporting is not a priority, which makes investors wonder what else is not a priority.',
  },
  {
    q: 'Should I include a fundraising section?',
    a: 'Only when you are actively fundraising or about to start. When you are, be specific: "We are opening our Series A process in April. Targeting $8M at $30-35M pre. Conversations started with Accel, Index, and Balderton. Warm introductions to [specific people] would be valuable." Between rounds, do not mention fundraising — focus on the business. Investors who see constant fundraising references in a company that is not actively raising start to worry about cash management.',
  },
  {
    q: 'What format should the investor update be in — email, PDF, or a tool like Visible?',
    a: 'Plain email with light formatting. HTML emails with images and fancy templates look like marketing newsletters, not business communication. A well-structured plain-text email (with some bold headers and a metric grid) is what investors are accustomed to and what they prefer. Tools like Visible or Carta can automate distribution, but the format should still be a readable email, not a link to a portal. Investors open emails; they do not log in to portals.',
  },
]

export default function InvestorUpdateEmailTemplatePage() {
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
          Investor Relations Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Investor Update Email Template: Monthly Format That Works
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          The monthly investor update is the single most important communication channel between a founder and their investors. Not the board meeting — the email. It reaches everyone, it builds trust over time, and it surfaces help you would never think to ask for. Here is the format that experienced investors expect, with the section-by-section structure that gets read, gets replies, and gets results.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 6-section investor update structure
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            This structure works from the first angel cheque through Series C and beyond. The depth increases, the metrics become more sophisticated, but the bones stay the same. Investors appreciate the consistency — it lets them focus on the content rather than navigating a new format each month.
          </p>
          <div className="space-y-0">
            {updateSections.map((item, i) => (
              <div key={item.num} className={`border-t border-[#E5E0D5] py-6 ${i === updateSections.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-20">
                    <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest block">{item.num}</span>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-1 block">{item.length}</span>
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
            Good vs bad examples
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {realExamples.map((ex) => (
              <div key={ex.label} className="bg-white border border-[#E5E0D5] rounded p-6">
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">{ex.label}</p>
                <p className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-3 leading-relaxed italic">&ldquo;{ex.text}&rdquo;</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{ex.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Communication cadence by type
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            <div className="grid grid-cols-4 bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-3">
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Type</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Audience</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Effort</span>
              <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">Purpose</span>
            </div>
            {frequencyGuide.map((row, i) => (
              <div key={row.type} className={`grid grid-cols-4 px-6 py-4 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <span className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{row.type}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.audience}</span>
                <span className="font-[family-name:var(--font-data)] text-sm text-[#C8102E] font-semibold">{row.effort}</span>
                <span className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.purpose}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate your investor update from your metrics
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your monthly numbers and DeckBrief generates a complete board report with the narrative, metric grid, highlights, and strategic framing already written. PDF and PPTX for the board pack, plus a formatted email draft for your monthly investor update.
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
            Investor update mistakes that damage relationships
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {updateMistakes.map((m) => (
              <div key={m.mistake} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{m.mistake}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{m.why}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Never miss a monthly update again</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Your investor update, written in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your monthly metrics — MRR, burn, headcount, milestones — and DeckBrief generates the narrative, formats the metrics grid, and produces a professional board report ready to send. Stop spending Sunday evenings writing updates.
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
