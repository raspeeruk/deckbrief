import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://deckbrief.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/app`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/board-report-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/investor-update-email`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/board-meeting-agenda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/startup-kpis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/fundraising-deck-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/series-a-readiness-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/financial-model-for-startups`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/cap-table-for-board-meetings`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/quarterly-board-report-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/saas-metrics-dashboard`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/mrr-growth-calculation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/investor-update-email-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/board-meeting-minutes-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/startup-financial-reporting`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/runway-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/burn-rate-analysis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
