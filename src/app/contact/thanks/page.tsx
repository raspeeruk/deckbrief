import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Message Sent | BoardBrief' }

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#FFFFFF] border border-[#E5E0D5] rounded-lg p-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A18] mb-2">Thanks for reaching out</h1>
        <p className="text-sm text-[#6B6456] mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Link href="/" className="text-sm font-medium bg-[#C8102E] text-white px-6 py-2.5 rounded-md hover:bg-[#A00E26] transition-colors inline-block">Back to homepage</Link>
      </div>
    </div>
  )
}
