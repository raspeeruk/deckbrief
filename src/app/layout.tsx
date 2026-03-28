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

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable} ${dmSans.variable}`}>
      <head>
        {GA4_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}');` }} />
          </>
        )}
      </head>
      <body className="min-h-screen bg-[var(--color-stone-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  )
}
