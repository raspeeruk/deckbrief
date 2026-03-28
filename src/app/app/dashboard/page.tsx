import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getUserBoardUpdates } from '@/lib/board-store'
import { getUserTier, getTrialDaysLeft } from '@/lib/auth/tier'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const tier = getUserTier(profile)
  const trialDays = getTrialDaysLeft(profile)
  const updates = await getUserBoardUpdates(user.id)

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Trial banner */}
      {tier === 'trial' && (
        <div className="mb-6 bg-[#C8102E]/5 border border-[#C8102E]/20 rounded px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#1A1A18]">
              Free trial — {trialDays} day{trialDays !== 1 ? 's' : ''} remaining
            </p>
            <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">
              Upgrade to Pro for unlimited updates, no watermark, and full history.
            </p>
          </div>
          <a href="/api/checkout" className="font-[family-name:var(--font-data)] text-sm font-semibold text-[#C8102E] hover:underline">
            Upgrade to Pro
          </a>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="h-[2px] bg-[#1A1A18] mb-0.5" />
        <div className="h-px bg-[#1A1A18] mb-6" />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-1">Dashboard</p>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18]">
              Your board updates
            </h1>
            <p className="font-[family-name:var(--font-data)] text-sm text-[#6B6456] mt-1">
              {updates.length === 0 ? 'Create your first board update.' : `${updates.length} update${updates.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          <Link
            href="/app/upload"
            className="font-[family-name:var(--font-data)] bg-[#C8102E] text-white text-sm font-semibold rounded px-5 py-2.5 hover:bg-[#A00E26] transition-colors"
          >
            New update
          </Link>
        </div>
        <div className="h-px bg-[#E5E0D5] mt-6" />
      </div>

      {/* Updates list */}
      {updates.length > 0 && (
        <div className="space-y-2">
          {updates.map(update => (
            <Link
              key={update.id}
              href={`/app/board/${update.id}`}
              className="block bg-white border border-[#E5E0D5] rounded px-5 py-4 hover:border-[#C8102E]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A1A18]">
                      {update.companyName}
                    </h3>
                    <span className="font-[family-name:var(--font-data)] text-xs text-[#6B6456]">{update.period}</span>
                  </div>
                  <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] mt-0.5 line-clamp-1">
                    {update.executiveSummary}
                  </p>
                </div>
                <svg className="w-4 h-4 text-[#6B6456] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty state */}
      {updates.length === 0 && (
        <div className="text-center py-20 bg-white border border-[#E5E0D5] rounded">
          <div className="w-16 h-16 bg-[#C8102E]/5 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-[#C8102E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1A18] mb-2">
            No board updates yet
          </h3>
          <p className="font-[family-name:var(--font-data)] text-sm text-[#6B6456] mb-6">
            Enter your metrics and BoardBrief writes the investor update.
          </p>
          <Link
            href="/app/upload"
            className="font-[family-name:var(--font-data)] inline-block bg-[#C8102E] text-white text-sm font-semibold rounded px-6 py-2.5 hover:bg-[#A00E26] transition-colors"
          >
            Create first update
          </Link>
        </div>
      )}
    </div>
  )
}
