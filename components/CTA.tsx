'use client'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(109,69,240,0.14) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,160,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Trust strip */}
        <div className="text-center mb-16" ref={ref}>
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Avatars */}
            <div className="flex -space-x-2">
              {['#6D45F0', '#22D3A0', '#3B82F6', '#F59E0B'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-bg-primary flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: c }}
                >
                  {['A', 'S', 'J', 'E'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/60">Trusted by <span className="text-white font-semibold">5,000+</span> businesses worldwide</span>
          </div>

          <h2
            className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            We combine{' '}
            <span className="gradient-text">human insight</span>
            <br />
            with{' '}
            <span className="gradient-text-blue">artificial intelligence</span>
          </h2>

          <p
            className={`text-lg text-white/50 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Our consulting team bridges strategic thinking and advanced AI technologies
            to help companies streamline processes, accelerate growth, and build for the future.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Link href="#pricing" className="btn-primary text-base px-10 py-4">
              Get Started Today
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#contact" className="btn-outline text-base px-10 py-4">
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Feature pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { icon: '⚡', text: 'Fast Implementation' },
            { icon: '🎯', text: 'Measurable ROI' },
            { icon: '🤖', text: 'AI-Powered' },
            { icon: '🔒', text: 'Enterprise Security' },
            { icon: '📈', text: 'Proven Results' },
            { icon: '🌍', text: 'Global Reach' },
          ].map((pill) => (
            <div
              key={pill.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-white/60"
            >
              <span>{pill.icon}</span>
              <span>{pill.text}</span>
            </div>
          ))}
        </div>

        {/* Big decorative stat row */}
        <div
          className={`mt-20 grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {[
            { val: '98.6%', label: 'Client Satisfaction', icon: '★' },
            { val: '<48h', label: 'Average Response Time', icon: '⚡' },
            { val: '3.5×', label: 'Average ROI Delivered', icon: '📈' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{ background: 'rgba(7,8,10,0.8)' }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">{stat.val}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
