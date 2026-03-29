'use client'

import { useEffect, useState, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { BoardUpdateDTO } from '@/types/board'

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

type DownloadState = 'loading' | 'downloading' | 'done' | 'error'

export function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const reportId = searchParams.get('report_id')
  const [state, setState] = useState<DownloadState>('loading')
  const [errorMsg, setErrorMsg] = useState('')
  const hasDownloaded = useRef(false)

  useEffect(() => {
    if (!reportId || hasDownloaded.current) return

    async function triggerDownloads() {
      hasDownloaded.current = true
      setState('downloading')

      try {
        // Try sessionStorage first (stored before Stripe redirect)
        const storageKey = `boardbrief_report_${reportId}`
        const stored = sessionStorage.getItem(storageKey)

        let update: BoardUpdateDTO | null = null

        if (stored) {
          update = JSON.parse(stored) as BoardUpdateDTO
        } else {
          // Fall back to API if sessionStorage was cleared
          const res = await fetch(`/api/board-update/${reportId}`)
          if (!res.ok) throw new Error('Report not found — it may have expired.')
          update = await res.json() as BoardUpdateDTO
        }

        if (!update) throw new Error('Could not load report data.')

        const slug = `${update.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-${update.period.replace(/\s+/g, '-')}`

        // Generate and download PDF
        const { generateBoardPdf } = await import('@/lib/export/board-pdf-generator')
        const pdfBlob = await generateBoardPdf(update)
        downloadBlob(pdfBlob, `${slug}-board-update.pdf`)

        // Small delay so browser registers the first download
        await new Promise(resolve => setTimeout(resolve, 800))

        // Generate and download PPTX
        const { generateBoardPptx } = await import('@/lib/export/board-pptx-generator')
        const pptxBlob = await generateBoardPptx(update)
        downloadBlob(pptxBlob, `${slug}-board-update.pptx`)

        setState('done')
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Download failed — please try again.'
        setErrorMsg(msg)
        setState('error')
      }
    }

    triggerDownloads()
  }, [reportId])

  return (
    <div className="max-w-[640px] mx-auto py-20 px-4 text-center">
      {/* Header rule */}
      <div className="h-1 bg-[#1A1A18] mb-1 w-full" />
      <div className="h-px bg-[#1A1A18] mb-10 w-full" />

      {state === 'loading' && (
        <>
          <div className="w-10 h-10 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18] mb-3">
            Preparing your files…
          </h1>
          <p className="text-[#6B6456]">Just a moment while we confirm your payment.</p>
        </>
      )}

      {state === 'downloading' && (
        <>
          <div className="w-10 h-10 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <p className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">Payment confirmed</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18] mb-3">
            Downloading your Board Update
          </h1>
          <p className="text-[#6B6456]">
            Your PDF and PPTX files are downloading now. Check your browser&apos;s download bar.
          </p>
        </>
      )}

      {state === 'done' && (
        <>
          <div className="w-14 h-14 rounded-full bg-[#1A6B3C] flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">Download complete</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18] mb-3">
            Your Board Update is ready
          </h1>
          <p className="text-[#6B6456] mb-8">
            You should have received a <strong>PDF</strong> and a <strong>PPTX</strong> — check your downloads folder.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" onClick={() => router.push('/app/upload')}>
              Create another update
            </Button>
            <Button onClick={() => router.push('/app/board/' + reportId)}>
              Back to report
            </Button>
          </div>
        </>
      )}

      {state === 'error' && (
        <>
          <div className="w-14 h-14 rounded-full bg-[#C8102E] flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-xs font-bold text-[#C8102E] uppercase tracking-widest mb-3">Download error</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18] mb-3">
            Something went wrong
          </h1>
          <p className="text-[#6B6456] mb-8">{errorMsg}</p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" onClick={() => router.push('/app/board/' + reportId)}>
              Back to report
            </Button>
            <Button onClick={() => { setState('loading'); hasDownloaded.current = false }}>
              Try again
            </Button>
          </div>
        </>
      )}

      <div className="mt-16 pt-6 border-t border-[#E5E0D5]">
        <p className="text-xs text-[#6B6456] font-[family-name:var(--font-data)] uppercase tracking-wider">
          BoardBrief — boardbrief.com
        </p>
      </div>
    </div>
  )
}
