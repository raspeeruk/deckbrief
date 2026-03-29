'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'

export default function BillingSettingsPage() {
  const { tier, profile } = useAuth()
  const [loading, setLoading] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null)

  const openPortal = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setLoading(false)
    }
  }

  const startCheckout = async (plan: 'pro' | 'team') => {
    setCheckoutLoading(plan)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
    } finally {
      setCheckoutLoading(null)
    }
  }

  const plans = [
    {
      key: 'pro' as const,
      name: 'Pro',
      price: '£19/month',
      features: ['Unlimited board updates', 'No watermark PDF', 'Full update history', 'Custom company profile'],
    },
    {
      key: 'team' as const,
      name: 'Team',
      price: '£49/month',
      features: ['Everything in Pro', 'Up to 5 companies', 'Team member access', 'Slack notifications'],
    },
  ]

  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-1">
        Billing
      </h2>
      <p className="text-sm text-[#6B7280] mb-8">
        Manage your subscription and payment method.
      </p>

      {/* Current plan */}
      <div className="bg-[#F8F6F1] border border-[#E5E0D5] rounded p-6 max-w-[500px] mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-[#1A1A18]">
              {tier === 'pro' ? 'Pro' : tier === 'trial' ? 'Free Trial' : 'Free'}
            </p>
            <p className="text-xs text-[#6B6456]">
              {tier === 'pro' ? 'Active subscription' : tier === 'trial' ? '7-day trial active' : 'Upgrade to unlock full features'}
            </p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tier === 'pro' ? 'bg-[#1A6B3C]/10 text-[#1A6B3C]' :
            tier === 'trial' ? 'bg-[#C8102E]/10 text-[#C8102E]' :
            'bg-[#D97706]/10 text-[#D97706]'
          }`}>
            {tier === 'pro' ? 'Active' : tier === 'trial' ? 'Trial' : 'Free'}
          </span>
        </div>

        {profile?.stripe_customer_id ? (
          <button
            onClick={openPortal}
            disabled={loading}
            className="text-sm font-medium text-[#C8102E] hover:underline disabled:opacity-50"
          >
            {loading ? 'Opening...' : 'Manage subscription →'}
          </button>
        ) : null}
      </div>

      {/* Upgrade options — only show if not already on paid plan */}
      {tier !== 'pro' && (
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#1A1A18] mb-4">
            Upgrade your plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[560px]">
            {plans.map(plan => (
              <div key={plan.key} className="border border-[#E5E0D5] rounded p-6 bg-white">
                <p className="font-[family-name:var(--font-data)] text-xs font-semibold uppercase tracking-widest text-[#6B6456] mb-2">
                  {plan.name}
                </p>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1A18] mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {plan.features.map(f => (
                    <li key={f} className="text-xs text-[#6B6456] flex items-start gap-1.5">
                      <span className="text-[#1A6B3C] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => startCheckout(plan.key)}
                  disabled={checkoutLoading === plan.key}
                  className="font-[family-name:var(--font-data)] w-full bg-[#1A1A18] text-white text-sm font-semibold rounded px-4 py-2.5 hover:bg-[#C8102E] transition-colors disabled:opacity-50"
                >
                  {checkoutLoading === plan.key ? 'Redirecting...' : `Upgrade to ${plan.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
