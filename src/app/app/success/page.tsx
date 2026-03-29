import { Suspense } from 'react'
import { SuccessContent } from './success-content'

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[640px] mx-auto py-20 px-4 text-center">
          <div className="h-1 bg-[#1A1A18] mb-1 w-full" />
          <div className="h-px bg-[#1A1A18] mb-10 w-full" />
          <div className="w-10 h-10 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A18]">
            Loading…
          </h1>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
