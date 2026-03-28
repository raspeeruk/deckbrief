import type { Metadata } from 'next'
import { Playfair_Display, Lora, DM_Sans } from 'next/font/google'
import './globals.css'

// BoardBrief broadsheet typography
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['700', '900'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-data',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'BoardBrief — Investor updates that write themselves',
  description: 'Paste your MRR, burn, milestones. BoardBrief formats a Sequoia-style investor update in seconds. The board update your investors actually want to read.',
  openGraph: {
    title: 'BoardBrief — Investor updates that write themselves',
    description: 'Paste your MRR, burn, milestones. BoardBrief formats a Sequoia-style investor update in seconds.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[var(--color-stone-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  )
}
