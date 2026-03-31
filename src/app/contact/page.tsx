import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | BoardBrief',
  description: 'Get in touch with the BoardBrief team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A18]">BoardBrief</Link>
        </div>
        <div className="bg-[#FFFFFF] border border-[#E5E0D5] rounded-lg p-8">
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1A1A18] mb-1">Get in touch</h1>
          <p className="text-sm text-[#6B6456] mb-6">Have a question or need help? We'll get back to you within 24 hours.</p>

          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

            <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wide mb-1.5">Name</label>
            <input name="name" type="text" required placeholder="Your name" className="w-full text-sm border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/50 focus:outline-none focus:ring-2 focus:ring-[#C8102E] mb-4" />

            <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wide mb-1.5">Email</label>
            <input name="email" type="email" required placeholder="you@company.com" className="w-full text-sm border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/50 focus:outline-none focus:ring-2 focus:ring-[#C8102E] mb-4" />

            <label className="block text-xs font-medium text-[#6B6456] uppercase tracking-wide mb-1.5">Message</label>
            <textarea name="message" rows={5} required placeholder="How can we help?" className="w-full text-sm border border-[#E5E0D5] rounded-md px-3 py-2.5 bg-white text-[#1A1A18] placeholder:text-[#6B6456]/50 focus:outline-none focus:ring-2 focus:ring-[#C8102E] resize-none mb-6" />

            <button type="submit" className="bg-[#C8102E] text-white text-sm font-medium rounded-md px-8 py-2.5 hover:bg-[#A00E26] transition-colors">Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
