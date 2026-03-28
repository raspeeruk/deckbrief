'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { BoardUpdateDTO, MetricValue } from '@/types/board'

// ── helpers ──

function formatValue(m: MetricValue): string {
  if (m.unit === '%' || m.unit === 'months' || m.unit === 'people' || m.unit === 'customers') {
    return `${m.value.toLocaleString()}${m.unit === '%' ? '%' : ''}`
  }
  return `${m.unit}${m.value.toLocaleString()}`
}

function formatMoM(m: MetricValue, isNegativeGood = false): { label: string; color: string } | null {
  if (m.momChangePct === null) return null
  const pct = m.momChangePct
  const sign = pct >= 0 ? '+' : ''
  const label = `${sign}${pct}%`
  // For burn/churn, going down is good
  let color: string
  if (isNegativeGood) {
    color = pct < 0 ? '#1A6B3C' : pct > 0 ? '#C8102E' : '#6B6456'
  } else {
    color = pct > 0 ? '#1A6B3C' : pct < 0 ? '#C8102E' : '#6B6456'
  }
  return { label, color }
}

interface MetricCardProps {
  label: string
  metric: MetricValue
  isNegativeGood?: boolean
}

function MetricCard({ label, metric, isNegativeGood }: MetricCardProps) {
  const mom = formatMoM(metric, isNegativeGood)
  return (
    <div className="bg-white border border-[#E5E0D5] rounded p-4">
      <p className="text-[10px] font-medium text-[#6B6456] uppercase tracking-widest mb-1">{label}</p>
      <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18]">
        {formatValue(metric)}
      </p>
      {mom && (
        <p className="text-xs font-medium mt-1" style={{ color: mom.color }}>
          {mom.label} MoM
        </p>
      )}
    </div>
  )
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  if (!items.length) return <p className="text-sm text-[#6B6456] italic">None provided</p>
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-[#1A1A18] leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1 bg-[#E5E0D5]" />
      <span className="text-[10px] font-bold text-[#6B6456] uppercase tracking-widest">{children}</span>
      <div className="h-px flex-1 bg-[#E5E0D5]" />
    </div>
  )
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function BoardUpdatePage() {
  const params = useParams()
  const router = useRouter()
  const updateId = params.id as string
  const [update, setUpdate] = useState<BoardUpdateDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/board-update/${updateId}`)
        if (res.ok) {
          const data = await res.json()
          setUpdate(data)
        }
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
  }, [updateId])

  const handleExportPdf = async () => {
    if (!update) return
    setExporting(true)
    try {
      const { generateBoardPdf } = await import('@/lib/export/board-pdf-generator')
      const blob = await generateBoardPdf(update)
      downloadBlob(blob, `${update.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-${update.period.replace(/\s+/g, '-')}-board-update.pdf`)
    } catch (err) {
      console.error('PDF export failed:', err)
      alert('PDF export failed — check the console for details')
    } finally {
      setExporting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!update) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">Update not found</h2>
        <Button onClick={() => router.push('/app/upload')}>Create new update</Button>
      </div>
    )
  }

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-2">
            Board Update
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1A1A18] leading-tight">
            {update.companyName}
          </h1>
          <p className="text-[#6B6456] mt-1 font-[family-name:var(--font-data)]">{update.period}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <Button variant="secondary" size="sm" onClick={() => router.push('/app/upload')}>
            New update
          </Button>
          <Button size="sm" onClick={handleExportPdf} loading={exporting}>
            Export PDF
          </Button>
        </div>
      </div>

      {/* Newspaper masthead rule */}
      <div className="h-1 bg-[#1A1A18] mb-1" />
      <div className="h-px bg-[#1A1A18] mb-8" />

      {/* Executive Summary */}
      <div className="mb-10 bg-[#1A1A18] text-white rounded p-8">
        <p className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-3">Executive Summary</p>
        <p className="font-[family-name:var(--font-heading)] text-xl leading-relaxed font-normal italic">
          &ldquo;{update.executiveSummary}&rdquo;
        </p>
      </div>

      {/* Metrics grid — 3 columns newspaper-style */}
      <div className="mb-10">
        <SectionLabel>This month&apos;s numbers</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MetricCard label="MRR" metric={update.metrics.mrr} />
          <MetricCard label="ARR" metric={update.metrics.arr} />
          <MetricCard label="Monthly Burn" metric={update.metrics.burnRate} isNegativeGood />
          <MetricCard label="Runway" metric={update.metrics.runway} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          <MetricCard label="Headcount" metric={update.metrics.headcount} />
          <MetricCard label="Customers" metric={update.metrics.customers} />
          <MetricCard label="Churn" metric={update.metrics.churn} isNegativeGood />
          <MetricCard label="NRR" metric={update.metrics.nrr} />
        </div>
      </div>

      {/* Three-column narrative section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card padding="lg">
          <p className="text-[10px] font-bold text-[#1A6B3C] uppercase tracking-widest mb-4 border-b-2 border-[#1A6B3C] pb-2">
            Highlights
          </p>
          <BulletList items={update.highlights} color="#1A6B3C" />
        </Card>

        <Card padding="lg">
          <p className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-4 border-b-2 border-[#C8102E] pb-2">
            Challenges
          </p>
          <BulletList items={update.challenges} color="#C8102E" />
        </Card>

        <Card padding="lg">
          <p className="text-[10px] font-bold text-[#1A1A18] uppercase tracking-widest mb-4 border-b-2 border-[#1A1A18] pb-2">
            Asks
          </p>
          <BulletList items={update.asks} color="#1A1A18" />
        </Card>
      </div>

      {/* Next month goals */}
      {update.nextMonthGoals.length > 0 && (
        <div className="mb-10">
          <SectionLabel>Next month&apos;s goals</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {update.nextMonthGoals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#E5E0D5] rounded p-4">
                <span className="font-[family-name:var(--font-data)] text-[10px] font-bold text-[#6B6456] mt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-[#1A1A18] leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom export bar */}
      <div className="mt-8 flex items-center justify-between py-6 border-t-2 border-[#1A1A18]">
        <p className="font-[family-name:var(--font-data)] text-xs text-[#6B6456] uppercase tracking-wider">
          BoardBrief — generated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => router.push('/app/upload')}>
            New update
          </Button>
          <Button onClick={handleExportPdf} loading={exporting}>
            Export PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
