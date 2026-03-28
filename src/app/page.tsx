import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">

      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#C8102E]" />
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] tracking-tight">
            BoardBrief
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="font-[family-name:var(--font-data)] text-sm font-medium text-[#6B6456] hover:text-[#1A1A18] transition-colors">
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] text-sm font-semibold bg-[#1A1A18] text-white px-5 py-2.5 rounded hover:bg-[#C8102E] transition-colors"
          >
            Start free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-20">
        {/* Masthead horizontal rules */}
        <div className="h-[3px] bg-[#1A1A18] mb-1" />
        <div className="h-px bg-[#1A1A18] mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline */}
          <div>
            <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-[0.2em] mb-6">
              For SaaS Founders
            </p>
            <h1 className="hero-heading text-[#1A1A18] mb-8">
              The investor<br/>update your<br/>board actually<br/>wants to read.
            </h1>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed max-w-[460px] mb-10">
              Paste your MRR, burn, headcount, milestones. BoardBrief formats
              a Sequoia-style monthly update with AI — honest, specific, done
              in under 60 seconds.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/auth/signup"
                className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-8 py-4 rounded font-semibold hover:bg-[#A00E26] transition-colors text-sm"
              >
                Generate your first update free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">No credit card required</span>
            </div>
          </div>

          {/* Right: Mock board update PDF */}
          <div className="relative">
            <div className="bg-white border border-[#E5E0D5] rounded shadow-lg overflow-hidden">
              {/* Masthead */}
              <div className="bg-[#F4F1EB] border-b border-[#E5E0D5] px-6 py-5">
                <div className="h-[3px] bg-[#1A1A18] mb-0.5" />
                <div className="h-px bg-[#1A1A18] mb-3" />
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-data)] text-[8px] font-bold text-[#C8102E] uppercase tracking-widest mb-1">Board Update</p>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] leading-tight">ACME CORP</h3>
                  </div>
                  <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">March 2026</span>
                </div>
                <div className="h-[2px] bg-[#1A1A18] mt-3 mb-0.5" />
                <div className="h-px bg-[#1A1A18]" />
              </div>

              {/* Executive Summary */}
              <div className="bg-[#1A1A18] px-6 py-4">
                <p className="font-[family-name:var(--font-data)] text-[8px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">Executive Summary</p>
                <p className="font-[family-name:var(--font-body)] text-white text-xs leading-relaxed italic">
                  &ldquo;Acme crossed £100k MRR in March — our fastest growth month. NRR hit 118%, confirming product-market fit in the enterprise segment. Runway extends 18 months at current burn.&rdquo;
                </p>
              </div>

              {/* Metrics grid */}
              <div className="px-6 py-4">
                <p className="font-[family-name:var(--font-data)] text-[7px] font-bold text-[#6B6456] uppercase tracking-widest mb-3 border-b border-[#E5E0D5] pb-1">This Month&apos;s Numbers</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'MRR', value: '£100k', mom: '+18%', pos: true },
                    { label: 'ARR', value: '£1.2M', mom: '+18%', pos: true },
                    { label: 'BURN', value: '£35k', mom: '-4%', pos: true },
                    { label: 'RUNWAY', value: '18 mo', mom: null, pos: true },
                    { label: 'CUSTOMERS', value: '142', mom: '+12', pos: true },
                    { label: 'CHURN', value: '1.2%', mom: '-0.3%', pos: true },
                    { label: 'NRR', value: '118%', mom: '+2%', pos: true },
                    { label: 'HEADCOUNT', value: '11', mom: '+1', pos: true },
                  ].map(m => (
                    <div key={m.label} className="bg-[#F4F1EB] border border-[#E5E0D5] rounded p-2">
                      <p className="font-[family-name:var(--font-data)] text-[6px] text-[#6B6456] uppercase tracking-wider">{m.label}</p>
                      <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#1A1A18]">{m.value}</p>
                      {m.mom && <p className="font-[family-name:var(--font-data)] text-[6px] font-semibold text-[#1A6B3C]">{m.mom}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Three columns */}
              <div className="grid grid-cols-3 gap-0 border-t border-[#E5E0D5]">
                {[
                  { label: 'HIGHLIGHTS', color: '#1A6B3C', items: ['Enterprise deal signed', 'Pricing page conversion +40%'] },
                  { label: 'CHALLENGES', color: '#C8102E', items: ['Sales cycle 6→8 weeks', 'Onboarding drop-off at step 3'] },
                  { label: 'ASKS', color: '#1A1A18', items: ['Intro to Series A fintech VCs', 'Stripe leadership introduction'] },
                ].map((col, i) => (
                  <div key={col.label} className={`px-4 py-4 ${i > 0 ? 'border-l border-[#E5E0D5]' : ''}`}>
                    <p className="font-[family-name:var(--font-data)] text-[7px] font-bold uppercase tracking-widest mb-2 pb-1 border-b-2" style={{ color: col.color, borderColor: col.color }}>
                      {col.label}
                    </p>
                    {col.items.map(item => (
                      <p key={item} className="text-[7px] text-[#1A1A18] mb-1 leading-tight">• {item}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer annotation */}
              <div className="bg-[#1A1A18] px-4 py-2 flex items-center justify-between">
                <span className="font-[family-name:var(--font-data)] text-[7px] text-white/50">BoardBrief — boardbrief.com</span>
                <span className="font-[family-name:var(--font-data)] text-[7px] text-[#C8102E] font-semibold">1 / 1</span>
              </div>
            </div>

            {/* Annotation badge */}
            <div className="absolute -right-3 top-16 bg-[#C8102E] text-white text-[9px] font-bold px-3 py-1.5 rounded shadow-md font-[family-name:var(--font-data)] uppercase tracking-wide rotate-2">
              AI-generated
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-[2px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18]" />
      </div>

      {/* The numbers */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { old: '2-4 hours', new: 'Under 60s', desc: 'Time to write a complete investor update' },
            { old: 'Every month', new: 'Automatic', desc: 'Format, metrics, narrative — handled by AI' },
            { old: 'Dreaded task', new: 'Actually done', desc: 'Founders who hate writing still send great updates' },
          ].map((stat, i) => (
            <div key={i} className={`py-10 px-8 ${i > 0 ? 'border-l border-[#E5E0D5]' : ''}`}>
              <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#C8102E] line-through opacity-40 mb-1">{stat.old}</p>
              <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-3">{stat.new}</p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-[#E5E0D5]" />
      </div>

      {/* How it works */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-4">
          Four inputs. One perfect update.
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#6B6456] mb-16 max-w-[500px] leading-relaxed">
          No templates. No formatting. Just numbers and notes — BoardBrief does the rest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { step: '01', title: 'Enter metrics', desc: 'MRR, ARR, burn, runway, headcount, customers, churn, NRR. Previous month values optional for MoM calcs.' },
            { step: '02', title: 'Dump your notes', desc: 'Highlights, challenges, what you need from investors. Raw notes too — Claude will use them for context.' },
            { step: '03', title: 'AI writes the narrative', desc: 'Claude generates an executive summary, refines your bullets, makes your asks specific and actionable.' },
            { step: '04', title: 'Export PDF', desc: 'Broadsheet-style PDF ready to paste into email or share directly. Saved in your dashboard for next month.' },
          ].map(item => (
            <div key={item.step} className="border-t-2 border-[#C8102E] pt-4">
              <span className="font-[family-name:var(--font-data)] text-xs text-[#C8102E] font-bold tracking-widest">
                {item.step}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mt-2 mb-3">
                {item.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#6B6456] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E5E0D5]" /></div>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-16">
          Founders who stopped dreading Mondays
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: 'I used to cancel calls to write the monthly update. Now it takes 90 seconds and my investors say the quality has gone up.',
              role: 'Founder & CEO',
              sector: 'B2B SaaS, Series A',
            },
            {
              quote: 'The executive summary BoardBrief writes is better than what I\'d write myself. It leads with the right number every time.',
              role: 'Co-founder',
              sector: 'FinTech, Seed',
            },
            {
              quote: 'Our board actually reads our updates now. Apparently the problem wasn\'t the content — it was the formatting.',
              role: 'CEO',
              sector: 'HRtech, Pre-seed',
            },
          ].map((t, i) => (
            <div key={i} className="border border-[#E5E0D5] bg-white rounded p-8">
              <div className="h-0.5 w-8 bg-[#C8102E] mb-6" />
              <p className="font-[family-name:var(--font-body)] text-sm text-[#1A1A18] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">{t.role}</p>
              <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">{t.sector}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E5E0D5]" /></div>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-4">
          Pricing
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#6B6456] mb-16 max-w-[480px] leading-relaxed">
          Start free. Upgrade when you need history, custom branding, and team access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px]">
          {[
            {
              name: 'Free',
              price: '£0',
              period: 'forever',
              highlight: false,
              features: [
                '3 board updates per month',
                'PDF export with BoardBrief branding',
                'All 8 core metrics',
                'AI narrative generation',
                '7-day history',
              ],
              cta: 'Get started free',
              href: '/auth/signup',
            },
            {
              name: 'Pro',
              price: '£19',
              period: '/month',
              highlight: true,
              features: [
                'Unlimited board updates',
                'PDF export — your branding, no watermark',
                'Full update history',
                'Custom company profile',
                'Priority Claude processing',
              ],
              cta: 'Start 7-day trial',
              href: '/auth/signup?plan=pro',
            },
            {
              name: 'Team',
              price: '£49',
              period: '/month',
              highlight: false,
              features: [
                'Everything in Pro',
                'Up to 5 companies',
                'Team member access',
                'Slack notification when update ready',
                'Priority support',
              ],
              cta: 'Start 7-day trial',
              href: '/auth/signup?plan=team',
            },
          ].map(plan => (
            <div
              key={plan.name}
              className={`rounded p-8 ${plan.highlight ? 'bg-[#1A1A18] text-white' : 'bg-white border border-[#E5E0D5]'}`}
            >
              {plan.highlight && (
                <span className="font-[family-name:var(--font-data)] text-[9px] font-bold text-[#C8102E] uppercase tracking-widest mb-4 block">
                  Most popular
                </span>
              )}
              <p className={`font-[family-name:var(--font-data)] text-xs font-semibold uppercase tracking-widest mb-4 ${plan.highlight ? 'text-white/60' : 'text-[#6B6456]'}`}>
                {plan.name}
              </p>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/60' : 'text-[#6B6456]'}`}>{plan.period}</span>
              </div>
              <ul className={`space-y-3 text-sm mb-8 mt-6 ${plan.highlight ? 'text-white/80' : 'text-[#6B6456]'}`}>
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#C8102E]' : 'text-[#1A6B3C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`font-[family-name:var(--font-data)] block text-center px-5 py-3 rounded text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-[#C8102E] text-white hover:bg-[#A00E26]'
                    : 'bg-[#1A1A18] text-white hover:bg-[#C8102E]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E5E0D5]" /></div>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-12">
          Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-[900px]">
          {[
            {
              q: 'What format is the output?',
              a: 'A downloadable PDF in broadsheet/newspaper style — dark ink, clean columns, metric grid, executive summary. Designed to look like something worth reading.',
            },
            {
              q: 'Does it work for early-stage startups?',
              a: 'Yes. You can leave fields blank — BoardBrief only calculates MoM changes when you provide previous month values. Works from pre-revenue through Series B.',
            },
            {
              q: 'How good is the AI narrative?',
              a: 'It uses Claude (by Anthropic) with a Sequoia-format prompt. It leads with your most important metric, flags concerning signals like low runway, and makes your asks specific.',
            },
            {
              q: 'Can I edit the output before exporting?',
              a: 'Yes. The update page shows the AI output and you can regenerate or adjust any section before downloading the PDF.',
            },
            {
              q: 'Do my investors see this?',
              a: 'No — you download the PDF and share it however you want. We never contact your investors or access your contact lists.',
            },
            {
              q: 'Can I use this for board decks?',
              a: 'The PDF is board-ready as-is. PPTX export coming soon for founders who want to embed it in a deck.',
            },
          ].map(faq => (
            <div key={faq.q} className="border-t border-[#E5E0D5] pt-6">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18] mb-2">{faq.q}</h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#E5E0D5]" /></div>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="bg-[#1A1A18] rounded p-16 text-center">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-6">Stop procrastinating</p>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold text-white mb-6 leading-tight">
            Write it in 60 seconds.<br/>Send it this month.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-white/60 mb-10 max-w-[460px] mx-auto leading-relaxed">
            Your metrics are already in your head. BoardBrief turns them into
            the update your investors actually want to receive.
          </p>
          <Link
            href="/auth/signup"
            className="font-[family-name:var(--font-data)] inline-flex items-center gap-2 bg-[#C8102E] text-white px-10 py-4 rounded font-semibold hover:bg-[#A00E26] transition-colors text-sm"
          >
            Generate your first update free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
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
