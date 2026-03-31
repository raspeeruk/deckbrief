import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Board Guides: Templates, Metrics & Best Practices',
  description: 'Free guides for startup founders — board report templates, SaaS metrics dashboards, investor update formats, financial reporting, runway calculators, and everything you need to run a professional board process.',
  keywords: ['startup board guides', 'board report template', 'SaaS metrics', 'investor update template', 'startup financial reporting'],
}

const guides = [
  {
    slug: 'board-report-template',
    title: 'Board Report Template: What to Include at Each Funding Stage',
    description: 'A board report template covering all 7 sections VCs expect — with stage-by-stage format guidance, financial statement advice, and how to present bad news.',
    category: 'Board Reporting',
  },
  {
    slug: 'quarterly-board-report-template',
    title: 'Quarterly Board Report Template: What to Include',
    description: 'The complete quarterly board report template — section-by-section breakdown, executive summary formula, financial presentation format, and the quarterly cadence that builds investor confidence.',
    category: 'Board Reporting',
  },
  {
    slug: 'board-meeting-agenda',
    title: 'Board Meeting Agenda: The Exact Format VCs Expect',
    description: 'The standard board meeting agenda structure that VCs expect — with time allocations, pre-read materials, and the mistakes that erode investor trust.',
    category: 'Board Meetings',
  },
  {
    slug: 'board-meeting-minutes-template',
    title: 'Board Meeting Minutes Template: Free Download + Guide',
    description: 'How to write board meeting minutes for a startup — with template structure, legal requirements, what to include and exclude, and the formatting that protects your company.',
    category: 'Board Meetings',
  },
  {
    slug: 'investor-update-email',
    title: 'Investor Update Email: The Template That Gets Replies',
    description: 'How to write an investor update email that investors actually read — with subject line formula, 6-part structure, lowlights guidance, and frequency advice.',
    category: 'Investor Relations',
  },
  {
    slug: 'investor-update-email-template',
    title: 'Investor Update Email Template: Monthly Format That Works',
    description: 'The monthly investor update email template that gets read and builds trust — with subject line formula, 6-section structure, metric presentation, and real examples.',
    category: 'Investor Relations',
  },
  {
    slug: 'startup-kpis',
    title: 'Startup KPIs: The Metrics That Actually Matter at Each Stage',
    description: 'Which startup KPIs matter at pre-product, early stage, and growth stage — with formulas, benchmarks, and the one metric that matters at each stage.',
    category: 'Metrics & KPIs',
  },
  {
    slug: 'saas-metrics-dashboard',
    title: 'SaaS Metrics Dashboard: The 12 KPIs Your Board Wants',
    description: 'The 12 SaaS KPIs every board dashboard needs — with formulas, benchmarks by stage, visual format guidance, and the metrics mistakes that make investors nervous.',
    category: 'Metrics & KPIs',
  },
  {
    slug: 'mrr-growth-calculation',
    title: 'How to Calculate MRR Growth: Formulas + Examples',
    description: 'MRR growth calculation explained with formulas, worked examples, component breakdown, and benchmarks by stage for SaaS founders.',
    category: 'Metrics & KPIs',
  },
  {
    slug: 'fundraising-deck-guide',
    title: 'The Fundraising Deck: What Investors Actually Want to See',
    description: 'The 12 slides every seed and Series A deck needs — with slide-by-slide guidance on what works, what fails, and how to frame traction at every stage.',
    category: 'Fundraising',
  },
  {
    slug: 'series-a-readiness-guide',
    title: 'Series A Readiness: The Metrics Investors Expect to See',
    description: 'The bar for Series A has risen. Here are the MRR, churn, and unit economics benchmarks investors expect — plus the board reporting maturity that signals readiness.',
    category: 'Fundraising',
  },
  {
    slug: 'financial-model-for-startups',
    title: 'Financial Model for Startups: What You Need and How to Build It',
    description: 'The 3-statement model explained for founders — which startups need all three, how to model each revenue type, and the common mistakes that kill fundraises.',
    category: 'Finance',
  },
  {
    slug: 'startup-financial-reporting',
    title: 'Startup Financial Reporting: What Your Board Needs to See',
    description: 'Financial reporting for startups — which statements matter at each stage, how to present P&L and cash flow to a board, and the format investors expect.',
    category: 'Finance',
  },
  {
    slug: 'runway-calculator',
    title: 'Startup Runway Calculator: How Many Months Do You Have?',
    description: 'Calculate your startup runway with formulas, examples, and benchmarks. Understand cash runway at current vs planned burn and how to extend it without cutting growth.',
    category: 'Finance',
  },
  {
    slug: 'burn-rate-analysis',
    title: 'Burn Rate Analysis: Gross vs Net Burn Explained',
    description: 'Burn rate analysis for startups — gross vs net burn explained with formulas, the burn multiple framework, stage benchmarks, and board presentation guidance.',
    category: 'Finance',
  },
  {
    slug: 'cap-table-for-board-meetings',
    title: 'Cap Table Presentation: How to Show Ownership at Board Level',
    description: 'What to include in a board cap table, the difference between basic and fully-diluted, how to present waterfall analysis, and the mistakes that confuse board members.',
    category: 'Fundraising',
  },
]

const categories = ['Board Reporting', 'Board Meetings', 'Investor Relations', 'Metrics & KPIs', 'Fundraising', 'Finance']

export default function GuidesIndexPage() {
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

      <header className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-[0.2em] mb-4">
          Resource Library
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#1A1A18] leading-tight mb-6">
          Startup Board Guides
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-[#6B6456] leading-relaxed max-w-[640px]">
          Everything a startup founder needs to run a professional board process — templates, metrics frameworks, financial reporting guides, and investor communication best practices. Written for founders, by people who have sat on both sides of the boardroom table.
        </p>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 pb-24">

        {categories.map((category) => {
          const categoryGuides = guides.filter(g => g.category === category)
          if (categoryGuides.length === 0) return null
          return (
            <section key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-8 bg-[#C8102E]" />
                <h2 className="font-[family-name:var(--font-data)] text-[11px] font-bold text-[#6B6456] uppercase tracking-[0.2em]">
                  {category}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {categoryGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group bg-white border border-[#E5E0D5] rounded p-6 hover:border-[#C8102E] transition-colors"
                  >
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1A18] mb-2 group-hover:text-[#C8102E] transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#6B6456] leading-relaxed">
                      {guide.description}
                    </p>
                    <span className="font-[family-name:var(--font-data)] text-xs font-semibold text-[#C8102E] mt-4 inline-block group-hover:underline">
                      Read guide &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <div className="bg-[#1A1A18] rounded p-8 mt-8">
          <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">DeckBrief</p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-3 leading-tight">
            Stop building board packs manually
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed mb-6">
            Paste your metrics — MRR, burn, headcount, milestones — and DeckBrief generates a professional board report with executive summary, KPI dashboard, financial overview, and strategic framing. PDF and PPTX, ready to send to your investors.
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
