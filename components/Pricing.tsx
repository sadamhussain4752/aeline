'use client'
import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter Plan',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small teams beginning to explore AI and automation.',
    features: [
      'AI opportunity assessment',
      'Up to 3 automation workflows',
      'Monthly strategy session',
      'Basic analytics dashboard',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
    color: '#6D45F0',
  },
  {
    name: 'Growth Plan',
    price: '$8,500',
    period: '/month',
    description: 'Great for scaling teams growing their AI and automation setups.',
    features: [
      'Full AI strategy roadmap',
      'Unlimited automation workflows',
      'Weekly consulting sessions',
      'Advanced analytics & BI',
      'Custom ML model development',
      'Priority support',
    ],
    cta: 'Get Started',
    highlight: true,
    color: '#22D3A0',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise Plan',
    price: '$10,500',
    period: '/month',
    description: 'Best for large enterprises needing advanced AI and custom flow.',
    features: [
      'Everything in Growth',
      'Dedicated consulting team',
      'Custom AI integrations',
      'White-glove onboarding',
      '24/7 dedicated support',
      'SLA guarantees',
    ],
    cta: 'Get Started',
    highlight: false,
    color: '#3B82F6',
  },
]

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(109,69,240,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Flexible Plans Built for Every Stage of Growth
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Whether you&apos;re just starting your AI journey or scaling enterprise-wide innovation,
            we offer tailored solutions that grow with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative glass-card p-8 flex flex-col transition-all duration-300 ${
                plan.highlight ? 'pricing-card-active scale-[1.03]' : ''
              } ${hovered === i ? 'scale-[1.02]' : ''}`}
              style={hovered === i || plan.highlight ? { borderColor: `${plan.color}35`, boxShadow: `0 0 50px ${plan.color}12` } : {}}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${plan.color}, #3B82F6)`, color: 'white' }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div
                className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 w-fit"
                style={{ background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}30` }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                <span className="text-white/40 text-base ml-1">{plan.period}</span>
              </div>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">{plan.description}</p>

              {/* Divider */}
              <div className="divider mb-8" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-10">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-white/70">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4.5 7.5L8 2.5" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className={`text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'btn-primary'
                    : 'btn-outline hover:opacity-80'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-white/30 mt-10">
          All plans include a free 30-minute discovery call. No credit card required to get started.
        </p>
      </div>
    </section>
  )
}
