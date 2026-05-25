'use client'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We partner with organizations of all sizes — from startups to established enterprises — across industries like retail, technology, finance, manufacturing, and professional services. Our approach is flexible and tailored to fit your business model and growth stage.',
  },
  {
    q: 'How does your consulting process work?',
    a: 'We begin with a deep discovery phase to fully understand your core challenges. Then, we design a custom strategy roadmap. Finally, we execute and monitor the results. Our method ensures that every step is transparent, measurable, and aligned with your unique needs.',
  },
  {
    q: 'What makes your AI solutions different?',
    a: 'We focus on practicality over hype. Unlike generic tools, our solutions are built on your specific data and workflows. We prioritize seamless integration and clear ROI, ensuring the technology solves real business problems rather than just being a shiny new toy.',
  },
  {
    q: 'Do I need to have technical knowledge to work with you?',
    a: 'Not at all. We handle the technical heavy lifting for you. We explain every concept in plain English so you make informed decisions without needing to code. Our team bridges the gap between complex tech and business goals, making the process smooth and accessible.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Timelines vary by project scope. However, we structure our work to deliver quick wins early on while building toward long-term success. Typically, clients see initial impact within the first few weeks, with substantial ROI developing over the following few months.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(109,69,240,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <span className="section-label">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Everything you need to know about our consulting and AI solutions — from strategy to implementation.
            </p>
            <p className="text-sm text-white/40 mb-4">Still have questions?</p>
            <Link
              href="#contact"
              className="btn-outline text-sm"
            >
              Contact us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  open === i ? 'border-accent-purple/30' : ''
                }`}
                style={open === i ? { boxShadow: '0 0 30px rgba(109,69,240,0.08)' } : {}}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-semibold text-base transition-colors ${open === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      open === i
                        ? 'bg-accent-purple/20 border border-accent-purple/40 rotate-45'
                        : 'bg-white/[0.06] border border-white/10'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={open === i ? '#6D45F0' : 'rgba(255,255,255,0.5)'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: open === i ? '300px' : '0px' }}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-white/[0.06] mb-5" />
                    <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
