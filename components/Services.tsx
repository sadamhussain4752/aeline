'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tabs = ['AI Strategy', 'Business Consulting', 'Data & Insights']

const services = [
  {
    tab: 'AI Strategy',
    title: 'AI Strategy',
    headline: 'AI Strategy',
    description: 'We help you identify opportunities for AI adoption and implement the right solutions — from machine learning models to generative AI workflows that drive real business value.',
    image: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a6039c059107c313b5709_services-card.avif',
    points: ['AI roadmap & opportunity mapping', 'Model selection & architecture', 'Implementation & integration', 'ROI measurement & iteration'],
    color: '#6D45F0',
  },
  {
    tab: 'Business Consulting',
    title: 'Business & Digital Consulting',
    headline: 'Business & digital consulting',
    description: 'Strategic consulting that bridges business goals with technology execution — helping you modernize your operating model, build high-performing teams, and accelerate growth.',
    image: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6940a103134f31eb54027413_ai-ab-img-2.avif',
    points: ['Operating model design', 'Digital strategy & transformation', 'Organizational effectiveness', 'Change management'],
    color: '#3B82F6',
  },
  {
    tab: 'Data & Insights',
    title: 'Data & Insights',
    headline: 'Data & insights',
    description: 'Transform raw data into strategic intelligence using advanced analytics, real-time dashboards, and predictive modeling that gives you a competitive edge.',
    image: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6940a103b5837156e6ed1fd6_ai-ab-img-3.avif',
    points: ['Data architecture & pipelines', 'Business intelligence dashboards', 'Predictive analytics & ML', 'Data governance & compliance'],
    color: '#22D3A0',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)
  const active = services[activeTab]

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Services</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Comprehensive consulting and intelligent innovation
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Whether you&apos;re optimizing today or building for tomorrow — we help you move faster with confidence.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-white/[0.04] border border-white/[0.06] rounded-2xl w-fit">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service card */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: content */}
          <div key={activeTab} className="transition-all duration-500">
            <div
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: `${active.color}18`, color: active.color, border: `1px solid ${active.color}30` }}
            >
              {active.tab}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              {active.headline}
            </h3>
            <p className="text-white/50 leading-relaxed mb-8 text-base">
              {active.description}
            </p>

            <ul className="space-y-3 mb-10">
              {active.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${active.color}20`, border: `1px solid ${active.color}40` }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4.5 7.5L8 2.5" stroke={active.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {pt}
                </li>
              ))}
            </ul>

            <Link href="#contact" className="btn-primary">
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card" key={`img-${activeTab}`}>
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover transition-all duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ background: `${active.color}25`, color: active.color, border: `1px solid ${active.color}35`, backdropFilter: 'blur(8px)' }}
            >
              {active.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
