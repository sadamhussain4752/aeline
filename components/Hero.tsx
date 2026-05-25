'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

const stats = [
  { value: '4.9/5', label: 'Client Rating' },
  { value: '4,900+', label: 'Happy Clients' },
  { value: '20+', label: 'Continents' },
]

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <ThreeScene />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/40 to-bg-primary/90" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 via-transparent to-bg-primary/60" style={{ zIndex: 2 }} />

      {/* Radial glow in center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(109,69,240,0.12) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center" style={{ zIndex: 3 }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-sm text-purple-300 font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
          AI-Powered Consulting Platform
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto"
        >
          Building the{' '}
          <span className="text-shimmer">future</span>
          <br />
          with{' '}
          <span className="gradient-text">AI</span> and{' '}
          <span className="gradient-text-blue">strategy</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
          We help organizations unlock growth and efficiency through
          data-driven consulting and intelligent automation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="#pricing" className="btn-primary text-base px-8 py-3.5">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#services" className="btn-outline text-base px-8 py-3.5">
            Explore Services
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Floating dashboard cards */}
        <div className="relative flex justify-center items-end gap-4 h-48 pointer-events-none select-none">
          {/* Card 1 - Performance */}
          <div className="dash-float glass-card p-4 w-44 text-left hidden lg:block" style={{ marginBottom: '20px' }}>
            <div className="text-xs text-white/40 mb-2">Monthly Growth</div>
            <div className="text-2xl font-bold gradient-text">+49%</div>
            <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[49%] bg-gradient-to-r from-accent-purple to-accent-green rounded-full" />
            </div>
            <div className="mt-2 text-xs text-accent-green flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              +2.5% this week
            </div>
          </div>

          {/* Card 2 - Main center */}
          <div className="dash-float-delayed glass-card p-5 w-56 text-left glow-purple">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#6D45F0"/><circle cx="8" cy="8" r="6" stroke="#6D45F0" strokeOpacity="0.3"/></svg>
              </div>
              <div>
                <div className="text-xs text-white/40">AI Status</div>
                <div className="text-sm font-semibold">Active</div>
              </div>
            </div>
            <div className="text-xs text-white/40 mb-1">Efficiency Score</div>
            <div className="text-3xl font-bold gradient-text mb-1">98.6%</div>
            <div className="text-xs text-accent-green">Intelligence in Every Decision</div>
          </div>

          {/* Card 3 - Clients */}
          <div className="dash-float-slow glass-card p-4 w-44 text-left hidden lg:block" style={{ marginBottom: '10px' }}>
            <div className="text-xs text-white/40 mb-2">Active Clients</div>
            <div className="text-2xl font-bold text-white">5,000+</div>
            <div className="flex -space-x-2 mt-2">
              {[0x6D45F0, 0x22D3A0, 0x3B82F6].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-bg-card"
                  style={{ background: `#${c.toString(16).padStart(6, '0')}` }}
                />
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-bg-card bg-white/10 flex items-center justify-center text-[9px] font-bold">
                +5k
              </div>
            </div>
            <div className="mt-2 text-xs text-white/40">Smart · Simple · Strategic</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 3 }}>
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
