'use client'
import { useState } from 'react'

const testimonials = [
  {
    quote: 'They brought clarity to complex problems, breaking down barriers and delivering innovative solutions that transformed how we operate.',
    author: 'John Doe',
    company: 'Tech Innovations',
    color: '#6D45F0',
  },
  {
    quote: 'Their insight solved every tough hurdle, opening new paths and creating highly effective strategies that exceeded all expectations.',
    author: 'Sarah Jenkins',
    company: 'Global Creative Studio',
    color: '#3B82F6',
  },
  {
    quote: 'We found focus for tricky requirements, cutting through noise and providing truly advanced responses backed by solid data.',
    author: 'Alex Rivera',
    company: 'Nexus Software Systems',
    color: '#22D3A0',
  },
  {
    quote: 'They gave simple paths to hard puzzles, removing all delays while building fresh, brilliant projects that delivered real ROI.',
    author: 'Elena Rossi',
    company: 'Lead Designer at Creative Pulse',
    color: '#F59E0B',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            What they say about us
          </h2>
          <p className="text-white/40 text-base">
            Here&apos;s what they shared about their experience working with our team.
          </p>
        </div>

        {/* Main large testimonial */}
        <div className="glass-card p-10 md:p-16 mb-8 relative overflow-hidden">
          {/* Quote mark */}
          <div className="absolute top-8 right-8 opacity-10">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
              <path d="M0 60V36C0 16.1 13.3 4.1 40 0l4 8C28 10.7 21.3 18 20 30h20v30H0zm40 0V36C40 16.1 53.3 4.1 80 0l4 8C68 10.7 61.3 18 60 30h20v30H40z" fill="white"/>
            </svg>
          </div>

          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-8"
            style={{ background: `${testimonials[active].color}20`, border: `1px solid ${testimonials[active].color}30` }}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill={testimonials[active].color}>
              <path d="M0 16V9.6C0 4.27 3.33 1.03 10 0l1 2.13C7 2.85 5.33 4.8 5 8h5V16H0zm10 0V9.6C10 4.27 13.33 1.03 20 0l1 2.13C17 2.85 15.33 4.8 15 8h5V16H10z"/>
            </svg>
          </div>

          <blockquote className="text-xl md:text-3xl font-light text-white/90 leading-relaxed mb-10 max-w-4xl">
            &ldquo;{testimonials[active].quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
              style={{ background: `linear-gradient(135deg, ${testimonials[active].color}50, ${testimonials[active].color}20)` }}
            >
              {testimonials[active].author[0]}
            </div>
            <div>
              <div className="font-semibold text-white">{testimonials[active].author}</div>
              <div className="text-sm text-white/40">{testimonials[active].company}</div>
            </div>
            {/* Stars */}
            <div className="ml-auto flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={testimonials[active].color}>
                  <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1L2 5.4l4.2-.8L8 1z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Nav cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`glass-card p-5 text-left transition-all duration-300 hover:scale-[1.02] ${
                active === i ? 'scale-[1.02]' : ''
              }`}
              style={active === i ? { borderColor: `${t.color}40`, boxShadow: `0 0 20px ${t.color}15` } : {}}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 16 16" fill={active === i ? t.color : 'rgba(255,255,255,0.2)'}>
                    <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1L2 5.4l4.2-.8L8 1z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                &ldquo;{t.quote.substring(0, 80)}...&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${t.color}30` }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80">{t.author}</div>
                  <div className="text-[10px] text-white/40">{t.company}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
