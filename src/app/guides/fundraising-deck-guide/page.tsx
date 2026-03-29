import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Fundraising Deck: What Investors Actually Want to See (Slide by Slide)',
  description: 'The 12 slides every seed and Series A deck needs — with slide-by-slide guidance on what works, what fails, and how to frame traction at every stage.',
  keywords: ['fundraising deck', 'pitch deck slides', 'investor deck', 'seed deck', 'series a pitch deck'],
}

const slides = [
  {
    num: '01',
    title: 'Cover',
    purpose: 'One sentence that captures what the company does. Not a tagline — a functional description. "Software that automates accounts payable for mid-market manufacturers" beats "Revolutionising finance." Investors look at 1,000 decks a year. Make the business legible in three seconds.',
    mistake: 'Abstract taglines that could apply to any company. Mission statements on slide one.',
  },
  {
    num: '02',
    title: 'Problem',
    purpose: 'The problem must be felt before the solution is introduced. Who has this problem, how often, and what does it currently cost them — in time, money, or risk? The best problem slides quantify the pain. "$180bn is spent on X annually, and 73% of it is wasted on Y."',
    mistake: 'Starting with the solution. Describing the problem in abstract terms without evidence of who experiences it.',
  },
  {
    num: '03',
    title: 'Solution',
    purpose: 'How you solve the problem, simply. One paragraph maximum. This is not a product walkthrough — it\'s the core insight. What do you do that the incumbent approach cannot? If you can\'t explain the solution in two sentences, you haven\'t distilled it yet.',
    mistake: 'Feature lists. Screenshots of a half-built MVP. Describing the tech instead of the outcome.',
  },
  {
    num: '04',
    title: 'Why Now',
    purpose: 'The single most underused slide in early-stage decks. What changed in the world in the last 2-3 years that makes this the right moment? Regulatory shift, infrastructure change, behaviour change, cost curve crossing a threshold. Investors back timing as much as teams.',
    mistake: 'Omitting this slide entirely. Vague statements like "the market is ready" without identifying the specific change.',
  },
  {
    num: '05',
    title: 'Market Size',
    purpose: 'TAM, SAM, SOM — but done bottom-up, not top-down. Bottom-up: number of target customers × average contract value. Top-down ("the global X market is $50bn") is lazy and investors know it. Your SAM should be the segment you can actually win in 5 years.',
    mistake: 'Top-down TAM from a market research report. Failing to show the path from SAM to TAM. No SOM — the serviceable obtainable market that grounds the next 3 years.',
  },
  {
    num: '06',
    title: 'Product',
    purpose: 'Show the product in use, not in isolation. Screenshots with annotated callouts are better than a product tour. If you have a demo video, link it — don\'t embed autoplay. This slide should answer: what does the user actually do, and what do they get from it?',
    mistake: 'Product roadmaps on slide 6 — save those for due diligence. Too many screens without narrative thread.',
  },
  {
    num: '07',
    title: 'Business Model',
    purpose: 'How do you charge, who pays, and what is the unit economics shape. If SaaS: price point, billing frequency, expected LTV. If marketplace: take rate, GMV, supplier vs buyer economics. If services: rate card, utilisation model. The simpler the better — one revenue line, clearly explained.',
    mistake: 'Three different monetisation strategies when you\'re pre-revenue. Pricing that is clearly provisional but presented as certain.',
  },
  {
    num: '08',
    title: 'Traction',
    purpose: 'The most important slide at seed and Series A. Show the number that moves the fastest in the right direction. MRR graph with consistent growth beats a table of vanity metrics. Context matters: "£28K MRR, up 22% MoM for 5 consecutive months" is a story. "£28K MRR" is a number.',
    mistake: 'Leading with user counts or signups if you have revenue — revenue always leads. Including metrics that are flattening.',
  },
  {
    num: '09',
    title: 'Team',
    purpose: 'Why are you the people to solve this problem? Not a LinkedIn bio — a specific answer to: what relevant experience do you have, what have you built before, and what is the gap in the team you\'re fundraising to fill. Investors back people more than plans.',
    mistake: 'Photos without context. University names as the main credential. Not naming the gap — it makes investors wonder if you know it\'s there.',
  },
  {
    num: '10',
    title: 'Competition',
    purpose: 'A 2×2 matrix with your logo in the top right is the most distrusted slide in fundraising. Instead: acknowledge the real alternatives (including "do nothing"), explain why they fall short for your specific customer, and state your defensible advantage. Category maps beat positioning grids.',
    mistake: 'Claiming no competitors exist — it signals you don\'t understand the market. Magic quadrants where you are inexplicably better at everything.',
  },
  {
    num: '11',
    title: 'Financials',
    purpose: 'Three-year P&L projection with visible assumptions. Revenue = number of customers × ACV × growth rate. Show the unit economics improving over time. If you\'re burning: show the path to gross margin positive. If you\'re pre-revenue: show the cost structure and what revenue unlocks.',
    mistake: 'Hockey sticks with no assumption behind the curve. P&L without a cash flow projection. Profit in year 1 for a VC-backed business — it signals you\'re not thinking big enough.',
  },
  {
    num: '12',
    title: 'The Ask',
    purpose: 'How much you\'re raising, what structure (equity, SAFE, convertible), and exactly how the capital will be deployed. "18 months of runway, 3 engineers, 1 head of sales, and £200K in growth marketing" is a real plan. "To grow faster" is not. Close with the milestone this round gets you to.',
    mistake: 'A range instead of a number — signals lack of conviction. No breakdown of use of funds. Forgetting to state what the post-money valuation or cap implies for investor ownership.',
  },
]

const tractionByStage = [
  { stage: 'Pre-revenue', show: 'LOIs / paid pilots / design partners (named), waitlist size with conversion signal, user interviews that validate willingness to pay, early activation rates' },
  { stage: 'Early revenue', show: 'MRR with growth rate, logo count (named if possible), retention curve, NPS or qualitative customer quotes from recognisable companies' },
  { stage: 'Scaling', show: 'MRR + ARR, cohort retention, payback period, CAC:LTV, expansion MRR, geographic or vertical proof of repeatability' },
]

const faqs = [
  {
    q: 'How many slides should a pitch deck have?',
    a: 'The 12-slide structure above is the right shape for seed and Series A. In practice: 10-15 slides. Under 10 and you\'re missing sections investors need. Over 18 and you\'re adding appendix material to the body of the deck. Appendices (deep dives on market, product, team) are separate documents for due diligence — not slides 16-25.',
  },
  {
    q: 'What order should the slides go in?',
    a: 'Problem before solution, always. Why Now before Market Size — it reframes the market opportunity. Traction before Team — let the results speak first. Financials before The Ask — give context for the number. The order above is the most commonly accepted structure among institutional investors in the UK/EU, but the specifics of your story may justify adjustments.',
  },
  {
    q: 'Should you include a demo in the deck?',
    a: 'A demo video linked from the Product slide is fine. Embedded autoplay is not — slides are often sent as PDFs or shared in environments where video is unwelcome. A live demo in the meeting is almost always better than a recorded one. If your product isn\'t ready to demo live, a narrated Loom walkthrough sent separately carries more weight than a product screenshot.',
  },
  {
    q: 'How do you show traction before revenue?',
    a: 'The hierarchy: paid pilots > LOIs with specific companies > signed waitlist > general waitlist > user interviews. Paid pilots — even at £1K — demonstrate willingness to pay far more credibly than any number of free users. If you have zero of the above, your "traction" slide should be titled "Validation" and show the specific customer conversations that confirmed the problem and the price point.',
  },
]

export default function FundraisingDeckGuidePage() {
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
          Fundraising Guide
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          The Fundraising Deck: What Investors Actually Want to See (Slide by Slide)
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed">
          Most pitch decks fail on a small number of slides. The cover doesn&rsquo;t explain the business. The market size is a top-down number from a research report. The traction slide buries the growth rate. Here is what investors are looking for on each of the 12 slides that matter.
        </p>
      </header>

      <main className="max-w-[768px] mx-auto px-6 pb-24">

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The 12 slides — and what each one needs to do
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <div className="space-y-0">
            {slides.map((s, i) => (
              <div key={s.num} className={`border-t border-[#E5E0D5] py-6 ${i === slides.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-start gap-6">
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest shrink-0 pt-1">{s.num}</span>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2">{s.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-3">{s.purpose}</p>
                    <div className="flex items-start gap-2">
                      <span className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest shrink-0 pt-0.5">Common mistake</span>
                      <p className="font-[family-name:var(--font-body)] text-xs text-[#6B6456] leading-relaxed">{s.mistake}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Market size: why bottom-up beats top-down
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            Top-down market sizing ("the global SaaS market is $300bn") signals one thing to an experienced investor: the founder pulled a number from a research report and divided it by 100. It tells you nothing about whether the specific customer segment is addressable.
          </p>
          <div className="bg-[#1A1A18] rounded p-6 mb-6">
            <p className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest mb-4">Bottom-up model that works</p>
            <div className="space-y-3">
              {[
                { label: 'TAM', text: 'Total Addressable Market — all companies that could theoretically use your product. Calculated as: total number of target companies × average contract value at full penetration.' },
                { label: 'SAM', text: 'Serviceable Addressable Market — the segment you can actually reach with your current go-to-market. Same formula, but scoped to geography, company size, or vertical you\'re starting in.' },
                { label: 'SOM', text: 'Serviceable Obtainable Market — what you can realistically win in 3-5 years. This is your credibility anchor. If your SOM is larger than well-funded competitors\' current revenue, explain why.' },
              ].map(s => (
                <div key={s.label} className="flex gap-4">
                  <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-wider shrink-0 pt-0.5 w-8">{s.label}</span>
                  <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            Traction slide: what to show at each stage
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            The traction slide changes radically depending on where you are. The mistake is showing the wrong metric for your stage — using user registrations when you have revenue, or showing a flat MRR graph when the growth rate is the story.
          </p>
          <div className="bg-white border border-[#E5E0D5] rounded overflow-hidden">
            {tractionByStage.map((row, i) => (
              <div key={row.stage} className={`px-6 py-5 ${i > 0 ? 'border-t border-[#E5E0D5]' : ''}`}>
                <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-2">{row.stage}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{row.show}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-2">
            The ask: how to frame use of funds
          </h2>
          <div className="h-0.5 w-12 bg-[#C8102E] mb-8" />
          <p className="font-[family-name:var(--font-body)] text-[#6B6456] leading-relaxed mb-6">
            The ask slide is where vague decks are exposed. &ldquo;We&rsquo;re raising £1.5M to grow the business&rdquo; is not an ask — it&rsquo;s a number attached to nothing. A real use of funds statement names the headcount you&rsquo;re adding, the specific channels you&rsquo;re investing in, and the milestone the capital unlocks.
          </p>
          <div className="space-y-4">
            {[
              { label: 'The right structure', text: 'Amount → runway duration → specific headcount plan → specific growth investment → the milestone reached. Example: "£1.5M over 18 months. Hiring 2 engineers (backend, ML), 1 head of sales. £200K in performance marketing. Milestone: £150K MRR and first enterprise contract."' },
              { label: 'Why specificity matters', text: 'Investors will model your use of funds independently. If your breakdown doesn\'t add up, or if you\'re planning 4 hires on £500K in a London market, it signals financial naivety. Show the model, not just the outcome.' },
              { label: 'What not to say', text: '"We\'re in conversations with several investors" is a negotiating tactic, not information. State the lead investor if you have one. State whether this is a priced round or a SAFE. State the cap if relevant. Ambiguity reads as no lead and no terms.' },
            ].map(item => (
              <div key={item.label} className="border-l-2 border-[#C8102E] pl-5">
                <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18] mb-1">{item.label}</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1A1A18] rounded p-8 mb-16">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Generate your financial and KPI slides from real data
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            DeckBrief takes your metrics and generates the financials, KPI grid, and traction slides in the format institutional investors expect — in 60 seconds.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Deck Slides Free →
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
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Skip the blank slide</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-3 leading-tight">
            Financials and KPIs done in 60 seconds
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed mb-6">
            Paste your metrics. DeckBrief generates the financial summary, KPI grid, and traction slides in the format investors expect.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#A00E26] transition-colors"
          >
            Generate Your Deck Slides Free →
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
