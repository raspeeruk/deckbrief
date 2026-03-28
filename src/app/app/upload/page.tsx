'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'
import type { BoardUpdateFormInput } from '@/types/board'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1]

function parseNum(v: string): number {
  const cleaned = v.replace(/[£$€,\s]/g, '')
  return parseFloat(cleaned) || 0
}

function parseOptNum(v: string): number | null {
  const cleaned = v.replace(/[£$€,\s]/g, '')
  if (cleaned === '' || cleaned === '-') return null
  const n = parseFloat(cleaned)
  return isNaN(n) ? null : n
}

interface MetricFieldProps {
  label: string
  sublabel?: string
  current: string
  prev: string
  onCurrentChange: (v: string) => void
  onPrevChange: (v: string) => void
  prefix?: string
  suffix?: string
}

function MetricField({ label, sublabel, current, prev, onCurrentChange, onPrevChange, prefix, suffix }: MetricFieldProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
          {label}{' '}
          {sublabel && <span className="text-[#6B6456]/60 normal-case tracking-normal font-normal">{sublabel}</span>}
        </label>
        <div className="relative">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6456]">{prefix}</span>
          )}
          <input
            type="text"
            value={current}
            onChange={e => onCurrentChange(e.target.value)}
            placeholder="0"
            className={`w-full border border-[#E5E0D5] rounded-md py-2.5 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm ${prefix ? 'pl-7 pr-3' : suffix ? 'pl-3 pr-8' : 'px-3'}`}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6456]">{suffix}</span>
          )}
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-[#6B6456]/60 uppercase tracking-wider mb-1.5">
          Previous month
        </label>
        <div className="relative">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6456]/60">{prefix}</span>
          )}
          <input
            type="text"
            value={prev}
            onChange={e => onPrevChange(e.target.value)}
            placeholder="leave blank to skip"
            className={`w-full border border-[#E5E0D5] rounded-md py-2.5 bg-[#F4F1EB] text-[#6B6456] focus:outline-none focus:ring-1 focus:ring-[#C8102E]/20 text-sm placeholder:text-[#6B6456]/30 ${prefix ? 'pl-7 pr-3' : suffix ? 'pl-3 pr-8' : 'px-3'}`}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#6B6456]/60">{suffix}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MetricsFormPage() {
  const router = useRouter()

  const [companyName, setCompanyName] = useState('')
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[new Date().getMonth()])
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR.toString())
  const [currency, setCurrency] = useState('£')

  const [mrr, setMrr] = useState('')
  const [arr, setArr] = useState('')
  const [burnRate, setBurnRate] = useState('')
  const [runway, setRunway] = useState('')
  const [headcount, setHeadcount] = useState('')
  const [customers, setCustomers] = useState('')
  const [churn, setChurn] = useState('')
  const [nrr, setNrr] = useState('')

  const [prevMrr, setPrevMrr] = useState('')
  const [prevArr, setPrevArr] = useState('')
  const [prevBurnRate, setPrevBurnRate] = useState('')
  const [prevRunway, setPrevRunway] = useState('')
  const [prevHeadcount, setPrevHeadcount] = useState('')
  const [prevCustomers, setPrevCustomers] = useState('')
  const [prevChurn, setPrevChurn] = useState('')
  const [prevNrr, setPrevNrr] = useState('')

  const [highlights, setHighlights] = useState('')
  const [challenges, setChallenges] = useState('')
  const [asks, setAsks] = useState('')
  const [nextGoals, setNextGoals] = useState('')
  const [founderNotes, setFounderNotes] = useState('')

  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ step: '', progress: 0, detail: '' })
  const [error, setError] = useState<string | null>(null)

  const handleMrrChange = (v: string) => {
    setMrr(v)
    const n = parseNum(v)
    if (n > 0 && !arr) {
      setArr(String(Math.round(n * 12)))
    }
  }

  const canSubmit = companyName.trim() && mrr.trim()

  const handleSubmit = async () => {
    if (!canSubmit) return
    setProcessing(true)
    setError(null)

    const input: BoardUpdateFormInput = {
      companyName: companyName.trim(),
      period: `${selectedMonth} ${selectedYear}`,
      mrr: parseNum(mrr),
      arr: parseNum(arr) || parseNum(mrr) * 12,
      burnRate: parseNum(burnRate),
      runway: parseNum(runway),
      headcount: parseNum(headcount),
      customers: parseNum(customers),
      churn: parseNum(churn),
      nrr: parseNum(nrr),
      prevMrr: parseOptNum(prevMrr),
      prevArr: parseOptNum(prevArr),
      prevBurnRate: parseOptNum(prevBurnRate),
      prevRunway: parseOptNum(prevRunway),
      prevHeadcount: parseOptNum(prevHeadcount),
      prevCustomers: parseOptNum(prevCustomers),
      prevChurn: parseOptNum(prevChurn),
      prevNrr: parseOptNum(prevNrr),
      highlightsRaw: highlights,
      challengesRaw: challenges,
      asksRaw: asks,
      nextMonthGoalsRaw: nextGoals,
      founderNotes,
      currency,
    }

    try {
      const res = await fetch('/api/process-board', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Processing failed')
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let updateId = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const text = decoder.decode(value)
          const lines = text.split('\n').filter(l => l.startsWith('data: '))
          for (const line of lines) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.type === 'progress') {
                setProgress({ step: data.step, progress: data.progress, detail: data.detail || '' })
              } else if (data.type === 'complete') {
                updateId = data.updateId
              } else if (data.type === 'error') {
                throw new Error(data.error)
              }
            } catch (e) {
              if (e instanceof Error && e.message !== 'Unexpected end of JSON input') {
                throw e
              }
            }
          }
        }
      }

      if (updateId) {
        router.push(`/app/board/${updateId}`)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setProcessing(false)
    }
  }

  if (processing) {
    return (
      <div className="max-w-[600px] mx-auto">
        <Card padding="lg">
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C8102E]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#C8102E] animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2 text-[#1A1A18]">
                {progress.step || 'Generating your board update...'}
              </h3>
              {progress.detail && (
                <p className="text-sm text-[#6B6456]">{progress.detail}</p>
              )}
            </div>
            <ProgressBar progress={progress.progress} />
            <p className="text-xs text-[#6B6456] mt-4">
              Claude is writing your investor narrative
            </p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-[760px] mx-auto">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] mb-3">
          New board update
        </h1>
        <p className="text-[#6B6456]">
          Fill in your metrics, dump your notes. BoardBrief writes the investor update.
        </p>
      </div>

      <div className="space-y-6">
        {/* Company & Period */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Company &amp; period</CardTitle>
          </CardHeader>
          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
                Company name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Acme Inc."
                className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
                  Period
                </label>
                <div className="flex gap-2">
                  <select
                    value={selectedMonth}
                    onChange={e => setSelectedMonth(e.target.value)}
                    className="flex-1 border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 text-sm"
                  >
                    {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select
                    value={selectedYear}
                    onChange={e => setSelectedYear(e.target.value)}
                    className="w-24 border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 text-sm"
                  >
                    {YEARS.map(y => <option key={y} value={String(y)}>{y}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 text-sm"
                >
                  <option value="£">£ GBP</option>
                  <option value="$">$ USD</option>
                  <option value="€">€ EUR</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Revenue metrics */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Revenue metrics</CardTitle>
            <p className="text-sm text-[#6B6456] mt-1">Enter current month values. Previous month is optional — used for MoM change calculations.</p>
          </CardHeader>
          <div className="mt-5 space-y-5">
            <MetricField label="MRR" sublabel="monthly recurring revenue" current={mrr} prev={prevMrr} onCurrentChange={handleMrrChange} onPrevChange={setPrevMrr} prefix={currency} />
            <MetricField label="ARR" sublabel="auto-calculated if blank" current={arr} prev={prevArr} onCurrentChange={setArr} onPrevChange={setPrevArr} prefix={currency} />
            <MetricField label="Monthly Burn" current={burnRate} prev={prevBurnRate} onCurrentChange={setBurnRate} onPrevChange={setPrevBurnRate} prefix={currency} />
            <MetricField label="Runway" sublabel="months at current burn" current={runway} prev={prevRunway} onCurrentChange={setRunway} onPrevChange={setPrevRunway} suffix="mo" />
          </div>
        </Card>

        {/* Business metrics */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Business metrics</CardTitle>
          </CardHeader>
          <div className="mt-5 space-y-5">
            <MetricField label="Headcount" current={headcount} prev={prevHeadcount} onCurrentChange={setHeadcount} onPrevChange={setPrevHeadcount} suffix="ppl" />
            <MetricField label="Customers" sublabel="paying accounts" current={customers} prev={prevCustomers} onCurrentChange={setCustomers} onPrevChange={setPrevCustomers} />
            <MetricField label="Monthly Churn" current={churn} prev={prevChurn} onCurrentChange={setChurn} onPrevChange={setPrevChurn} suffix="%" />
            <MetricField label="NRR" sublabel="net revenue retention" current={nrr} prev={prevNrr} onCurrentChange={setNrr} onPrevChange={setPrevNrr} suffix="%" />
          </div>
        </Card>

        {/* Qualitative inputs */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Highlights &amp; challenges</CardTitle>
            <p className="text-sm text-[#6B6456] mt-1">One item per line. AI will refine and prioritise.</p>
          </CardHeader>
          <div className="mt-5 space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#1A6B3C] uppercase tracking-wider mb-1.5">
                Highlights — what went well
              </label>
              <textarea
                value={highlights}
                onChange={e => setHighlights(e.target.value)}
                placeholder={"Signed 3 enterprise deals\nLaunched new pricing page, conversion up 40%\nFirst £50k MRR month"}
                rows={4}
                className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/40 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm resize-y"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#C8102E] uppercase tracking-wider mb-1.5">
                Challenges — what&apos;s not working
              </label>
              <textarea
                value={challenges}
                onChange={e => setChallenges(e.target.value)}
                placeholder={"Sales cycle longer than expected\nOnboarding drop-off at step 3\nKey customer churned (20% of ARR)"}
                rows={3}
                className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/40 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm resize-y"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
                Asks — what you need from investors
              </label>
              <textarea
                value={asks}
                onChange={e => setAsks(e.target.value)}
                placeholder={"Introductions to fintech VCs for Series A\nAdvice on enterprise pricing strategy\nWarm intro to Stripe leadership"}
                rows={3}
                className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/40 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm resize-y"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wider mb-1.5">
                Next month goals
              </label>
              <textarea
                value={nextGoals}
                onChange={e => setNextGoals(e.target.value)}
                placeholder={"Hit £50k MRR\nHire senior AE\nLaunch mobile app beta"}
                rows={3}
                className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/40 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm resize-y"
              />
            </div>
          </div>
        </Card>

        {/* Raw notes */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Raw notes</CardTitle>
            <p className="text-sm text-[#6B6456] mt-1">Dump anything here — meeting notes, Slack messages, random thoughts. AI will use this for context.</p>
          </CardHeader>
          <div className="mt-5">
            <textarea
              value={founderNotes}
              onChange={e => setFounderNotes(e.target.value)}
              placeholder="Just paste whatever... the context helps Claude write a better update."
              rows={5}
              className="w-full border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/40 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/40 focus:border-[#C8102E] text-sm resize-y"
            />
          </div>
        </Card>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex justify-end pb-8">
          <Button size="lg" onClick={handleSubmit} disabled={!canSubmit}>
            {!canSubmit ? 'Enter company name and MRR to continue' : 'Generate board update'}
          </Button>
        </div>
      </div>
    </div>
  )
}
