'use client'
import Link from 'next/link'
import { useState } from 'react'

const footerLinks = [
  {
    heading: 'Home',
    links: [
      { label: 'Home V.1', href: '/' },
      { label: 'Home V.2', href: '/' },
      { label: 'Home V.3', href: '/' },
      { label: 'Services', href: '#services' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Contact V.1', href: '#contact' },
      { label: 'Contact V.2', href: '#contact' },
      { label: 'Contact V.3', href: '#contact' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'About Us V.1', href: '#about' },
      { label: 'About Us V.2', href: '#about' },
      { label: 'About Us V.3', href: '#about' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Style Guide', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Licensing', href: '#' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/[0.06]">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(109,69,240,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand col */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Bravera<span className="text-accent-green">.</span>
              </span>
            </Link>

            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-xs">
              Easily adapt to changes and scale your operations with our flexible infrastructure,
              designed to support your business growth.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white/70 mb-3">Subscribe to our newsletter</p>
              {submitted ? (
                <div className="flex items-center gap-2 text-accent-green text-sm font-medium">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Thank you! You&apos;re subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-purple/50 focus:bg-white/[0.08] transition-all min-w-0"
                  />
                  <button
                    type="submit"
                    className="btn-primary text-sm px-4 py-2.5 shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© 2026 Bravera Inc. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                label: 'Twitter / X',
                icon: (
                  <path d="M4 4l3.5 4.5L4 12h1.2l2.9-3.3L10.5 12H12L8.3 7.2 11.8 4h-1.2L7.8 6.9 5.5 4H4z" fill="currentColor"/>
                ),
              },
              {
                label: 'LinkedIn',
                icon: (
                  <>
                    <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor"/>
                    <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.5"/>
                    <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.5"/>
                    <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor"/>
                  </>
                ),
              },
              {
                label: 'GitHub',
                icon: (
                  <path d="M8 2C4.69 2 2 4.69 2 8c0 2.65 1.72 4.9 4.1 5.69.3.06.41-.13.41-.29v-1.1C4.84 12.6 4.5 11.5 4.5 11.5c-.27-.7-.67-.88-.67-.88-.55-.37.04-.37.04-.37.6.04.92.62.92.62.54.92 1.41.65 1.75.5.05-.39.21-.66.38-.81-1.34-.15-2.75-.67-2.75-2.98 0-.66.24-1.2.62-1.62-.06-.15-.27-.77.06-1.6 0 0 .5-.16 1.65.62A5.74 5.74 0 018 5.2c.51 0 1.02.07 1.5.2 1.15-.78 1.65-.62 1.65-.62.33.83.12 1.45.06 1.6.39.42.62.96.62 1.62 0 2.32-1.41 2.83-2.76 2.98.22.19.41.55.41 1.11v1.65c0 .16.11.35.41.29C10.28 12.9 12 10.65 12 8c0-3.31-2.69-6-6-6z" fill="currentColor"/>
                ),
              },
            ].map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  {s.icon}
                </svg>
              </button>
            ))}
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>using Next.js & Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
