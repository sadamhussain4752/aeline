'use client'
import { useRef, useEffect, useState } from 'react'

const marqueeWords1 = ['Professional', 'Strategic', 'AI-Focused', 'Startup Feel']
const marqueeWords2 = ['Smarter', 'Grow Faster', 'Build Smart', 'Simple']

const stats = [
  { number: '20', suffix: '+', label: 'Continents', sub: 'Global reach across every major market' },
  { number: '100', suffix: '%', label: 'Commitment', sub: 'To measurable, real-world results' },
  { number: '120', suffix: '+', label: 'Partners', sub: 'Leading AI and cloud technology providers' },
  { number: '520', suffix: 'k+', label: 'Data Points', sub: 'Analyzed monthly for smarter strategies' },
]

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return inView
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef as React.RefObject<Element>)

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,69,240,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-6">
          <span className="section-label">About us</span>
        </div>

        {/* Giant text headline */}
        <div className="text-center mb-4">
          {[
            { text: 'A global', normal: true },
            { text: 'consulting', gradient: true },
            { text: 'partner', normal: true },
            { text: 'dedicated', normal: true },
            { text: 'to building', normal: true },
          ].map((line, i) => (
            <div
              key={i}
              className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {line.gradient ? (
                <span className="gradient-text">{line.text}</span>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          ))}

          {/* Row with icon + smarter */}
          <div
            className={`flex items-center justify-center gap-4 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4L22 9V19L14 24L6 19V9L14 4Z" fill="white" fillOpacity="0.9"/>
                <circle cx="14" cy="14" r="4" fill="white"/>
              </svg>
            </div>
            <span className="gradient-text">smarter</span>
            <span>and</span>
          </div>

          {/* more adaptive row */}
          <div
            className={`flex items-center justify-center gap-4 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '530ms' }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14z" stroke="white" strokeWidth="2"/>
                <path d="M9 14l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>more</span>
            <span className="gradient-text-blue">adaptive</span>
          </div>
        </div>

        {/* Marquee rows */}
        <div className="my-12 overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...marqueeWords1, ...marqueeWords1, ...marqueeWords1, ...marqueeWords1].map((w, i) => (
              <span key={i} className="text-sm font-semibold text-white/30 uppercase tracking-widest shrink-0 px-2">
                {w} <span className="text-accent-purple mx-2">✦</span>
              </span>
            ))}
          </div>
          <div className="flex gap-6 mt-3 animate-marquee-reverse whitespace-nowrap">
            {[...marqueeWords2, ...marqueeWords2, ...marqueeWords2, ...marqueeWords2].map((w, i) => (
              <span key={i} className="text-sm font-semibold text-white/20 uppercase tracking-widest shrink-0 px-2">
                {w} <span className="text-accent-green mx-2">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`glass-card p-6 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div className="stat-number mb-1">
                {stat.number}
                <span className="gradient-text">{stat.suffix}</span>
              </div>
              <div className="text-base font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-xs text-white/40 leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
