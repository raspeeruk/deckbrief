import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Board Meeting Minutes Template: Free Download + Guide',
  description: 'How to write board meeting minutes for a startup — with template structure, legal requirements, what to include and exclude, and the formatting that protects your company.',
  keywords: ['board meeting minutes template', 'how to write board minutes', 'startup board minutes', 'board meeting minutes format'],
}

const minutesSections = [
  { num: '01', title: 'Header information', detail: 'Company name, date and time of meeting, location (or "via video conference"), and whether the meeting was called as a regular or special meeting. This is administrative but legally important — minutes are corporate records. If you ever face a dispute about what was decided at a board meeting, the header establishes that the meeting happened and when.' },
  { num: '02', title: 'Attendance and quorum', detail: 'List every director present, every director absent (with reason if provided), and any observers or invited guests. Then state whether a quorum was achieved. A quorum is typically a majority of directors — your company articles or bylaws will specify the exact number. Decisions made without a quorum may not be legally binding. This is the most important line in the minutes from a governance perspective.' },
  { num: '03', title: 'Approval of prior minutes', detail: 'Record that the minutes from the previous meeting were presented and either approved as written, approved with amendments (state the amendments), or tabled for revision. This is procedural but necessary — it creates an unbroken chain of approved records. The typical formula: "The minutes of the meeting held on [date] were presented. On motion duly made and seconded, the minutes were unanimously approved."' },
  { num: '04', title: 'Reports and presentations', detail: 'Summarise each presentation at headline level. Do not transcribe the discussion — record the key points, the data presented, and any significant questions or concerns raised. "The CEO presented the quarterly financial review. Revenue was $420K against a $500K plan. The shortfall was attributed to two enterprise deals slipping to Q4. The board discussed the pipeline for Q4 and the CEO confirmed the deals are still in progress." This level of detail is sufficient.' },
  { num: '05', title: 'Resolutions and decisions', detail: 'The most important section. Every formal decision gets its own resolution, numbered sequentially. Format: "RESOLVED, that [specific action] is hereby approved." Include who proposed the motion, who seconded it, and the vote count. "On motion by [Director A], seconded by [Director B], the following resolution was adopted unanimously." If the vote was not unanimous, record the dissent: "[Director C] voted against the resolution."' },
  { num: '06', title: 'Action items', detail: 'List each action item with a named owner and a deadline. "Action: CEO to present revised hiring plan at the next board meeting (April 15, 2025)." Minutes without action items are minutes without accountability. This section converts meeting discussion into assigned work and creates a record that the board can review for follow-up at the next meeting.' },
  { num: '07', title: 'Closed session (if applicable)', detail: 'Record that a closed session took place and its duration. Do not record the substance of closed session discussions in the main minutes — those discussions are confidential by design. A separate record may be kept by the chair if needed, but it is not distributed with the main minutes. "At 3:45 PM, management departed and the independent directors convened in closed session. The closed session concluded at 4:00 PM."' },
  { num: '08', title: 'Adjournment', detail: 'Record the time the meeting ended and the date of the next scheduled meeting. "There being no further business, the meeting was adjourned at 4:05 PM. The next regular meeting of the Board of Directors is scheduled for [date]." This creates a clean close to the corporate record.' },
]

const dosAndDonts = {
  dos: [
    { rule: 'Record decisions, not discussions', detail: 'Minutes are a record of what was decided, not a transcript of what was said. "The board discussed pricing strategy and resolved to increase prices by 15% effective Q2" is correct. A paragraph-by-paragraph account of who said what about pricing is not.' },
    { rule: 'Use consistent formal language', detail: 'Minutes are legal documents. Use "resolved," "approved," "noted." Avoid casual language, first names without surnames, or informal phrasing. This is not bureaucracy — it is protection. If minutes are ever reviewed by a court, regulator, or incoming investor during due diligence, formal language demonstrates governance maturity.' },
    { rule: 'Circulate for review within 48 hours', detail: 'Send draft minutes to all directors within 48 hours of the meeting while memories are fresh. Allow 5 business days for comments and corrections. Then file the approved version. Late minutes lead to disputed recollections and weaken the corporate record.' },
    { rule: 'Number resolutions sequentially', detail: 'Use a running numbering system across meetings (e.g., Resolution 2025-001, 2025-002). This makes it easy to reference specific decisions later and creates an auditable trail of all board actions. Some companies reset numbering annually; others use a continuous sequence. Either is fine — just be consistent.' },
  ],
  donts: [
    { rule: 'Do not record individual director opinions', detail: 'Minutes should not attribute specific arguments or positions to specific directors, except for formal dissent on a vote. "Director Smith expressed concerns about the pricing increase" creates personal liability for Director Smith. "The board discussed the potential risks of the pricing increase" protects everyone while recording that risks were considered.' },
    { rule: 'Do not include privileged discussions', detail: 'Legal advice discussed at a board meeting should be noted only as "The board received legal advice from [counsel] regarding [topic]." Do not summarise the advice itself — doing so may waive attorney-client privilege. If the board discussed potential litigation, keep the description generic.' },
    { rule: 'Do not editorialize', detail: 'Minutes record facts, not interpretations. "The CEO gave a strong presentation" is editorial. "The CEO presented the quarterly results" is factual. "The board had a productive discussion" is editorial. "The board discussed the Q4 pipeline" is factual. Keep personal assessments out of the record.' },
    { rule: 'Do not skip meetings', detail: 'Every board meeting must be minuted, including short or informal ones. Unminuted meetings create gaps in the corporate record that become problematic during fundraising due diligence, audits, or disputes. If a board convenes — even briefly, even by phone — produce minutes.' },
  ],
}

const legalConsiderations = [
  { topic: 'Are board minutes legally required?', answer: 'In most jurisdictions, yes. UK companies are required by the Companies Act 2006 to keep minutes of all board meetings. US companies are required by state corporate law (e.g., Delaware General Corporation Law Section 142). Even where not strictly required, minutes are the primary evidence of board governance and are reviewed during fundraising due diligence, audits, and any litigation.' },
  { topic: 'How long should board minutes be retained?', answer: 'Indefinitely. Board minutes are permanent corporate records. UK companies must retain them for at least 10 years, but best practice is to keep them for the life of the company. Store them securely — a shared drive with access limited to the company secretary and directors. Back them up. These records are irreplaceable.' },
  { topic: 'Who is responsible for taking minutes?', answer: 'The company secretary. If your startup does not have a company secretary (most early-stage companies do not), the responsibility typically falls to the CEO, CFO, or a designated note-taker. Some companies hire a minute-taking service for formal board meetings. Whoever takes the minutes should not be the person presenting — it is difficult to present and record simultaneously.' },
  { topic: 'Can board minutes be amended after approval?', answer: 'Yes, but only through a formal process. Amendments to previously approved minutes must be proposed and approved at a subsequent board meeting, with the amendment itself recorded in those meeting&rsquo;s minutes. You cannot silently edit approved minutes — that undermines the integrity of the corporate record. The standard phrase: "RESOLVED, that the minutes of the [date] meeting be amended to reflect [specific change]."' },
]

const faqs = [
  {
    q: 'How detailed should board meeting minutes be?',
    a: 'Detailed enough to record every decision and the key context behind it, but not so detailed that they become a transcript. The standard guidance from corporate lawyers is "sufficient to demonstrate that directors fulfilled their fiduciary duties." In practice, this means: for each agenda item, record what was presented (one sentence), what was discussed (one to two sentences of summary, not attribution), what was decided (the formal resolution), and what follow-up was agreed (action items). Two to four pages for a two-hour meeting is typical.',
  },
  {
    q: 'Should I record who voted for and against each resolution?',
    a: 'Record the vote outcome (unanimous, majority) and any dissent. If a director votes against a resolution, record their name and that they dissented — this protects the dissenting director from liability for the decision. If the vote is unanimous, "the resolution was adopted unanimously" is sufficient without listing each director&rsquo;s individual vote. If there is an abstention, record it: "[Director] abstained from the vote due to a conflict of interest."',
  },
  {
    q: 'What is the difference between board minutes and board resolutions?',
    a: 'Minutes are the narrative record of the entire meeting — attendance, presentations, discussions, and decisions. Resolutions are the specific formal decisions extracted from the minutes. Some companies maintain a separate resolutions register that lists only the resolutions (with reference to the meeting date), making it easy to find specific decisions without reading through full minutes. This is good practice from Series A onward.',
  },
  {
    q: 'Can written resolutions replace board meetings?',
    a: 'In many jurisdictions, yes — directors can approve actions by written resolution without a meeting, provided all directors (or the required majority) sign. This is common for routine matters: approving option grants, ratifying bank signatories, or accepting an audit. For substantive strategic decisions, a meeting with discussion is better governance. The written resolution should reference the supporting materials that were circulated and state the decision clearly.',
  },
]

export default function BoardMeetingMinutesTemplatePage() {
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
          Board Governance Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Board Meeting Minutes Template: Free Download + Guide
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Board meeting minutes are the legal record of your company&rsquo;s governance. They prove that decisions were made properly, that directors fulfilled their fiduciary duties, and that the company operates with the discipline investors expect. Most startups treat minutes as an afterthought — and then scramble to reconstruct them during due diligence. Here is the template and guide to getting them right from day one.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 8-section board minutes template
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-8">
            This structure covers every element that corporate governance requires. Use it for every board meeting — the consistency makes it easier to write, easier to review, and easier to reference later.
          </p>
          <div className="space-y-0">
            {minutesSections.map((item, i) => (
              <div key={item.num} className={`border-t border-[#E5E0D5] py-6 ${i === minutesSections.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-10">
                    <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest block">{item.num}</span>
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
            What to include and what to leave out
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-4">Do</p>
              <div className="space-y-4">
                {dosAndDonts.dos.map((item) => (
                  <div key={item.rule} className="border-l-2 border-[#C8102E] pl-4">
                    <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.rule}</p>
                    <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] uppercase tracking-widest mb-4">Do not</p>
              <div className="space-y-4">
                {dosAndDonts.donts.map((item) => (
                  <div key={item.rule} className="border-l-2 border-[#E5E0D5] pl-4">
                    <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.rule}</p>
                    <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate your board pack before the meeting — so the minutes write themselves
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            A well-structured board pack makes minutes straightforward to write — the agenda, the data, and the decisions are already documented. DeckBrief generates your board report from raw metrics, giving you a clear structure that simplifies everything downstream.
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
            Legal considerations for board minutes
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-6">
            {legalConsiderations.map((item) => (
              <div key={item.topic} className="bg-white border border-[#E5E0D5] rounded p-6">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-2">{item.topic}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.answer}</p>
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Board governance starts with structure</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Professional board packs make professional minutes easy
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            When your board pack is well-structured — clear agenda, formatted financials, explicit decision items — the minutes practically write themselves. DeckBrief generates the board pack from your raw metrics so you can focus on governance, not formatting.
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
