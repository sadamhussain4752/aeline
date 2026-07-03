'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getStoredPosts } from './local-data'
import { assets, faqs, plans, posts } from './aeline-content'

const BraveraHeroScene = dynamic(() => import('./BraveraHeroScene'), { ssr: false })

const navLinks = [
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/stories', label: 'Stories' },
  { href: '/contact-us', label: 'Contact Us' },
]

const digitalServices = [
  'Digital Marketing Service',
  'SEO',
  'Website Design Development',
  'Social Media Marketing',
  'Creative Designing',
  'Mobile Application',
]

const offlineServices = [
  'Marketing Collaterals',
  'Out of Home',
  'Paper insert',
  'Transit Media',
  'Retail Branding & Signages',
  'Events and activations',
]

const digitalServiceCards = [
  {
    title: 'Digital Marketing Service',
    text: 'Performance campaigns, content planning, audience targeting, and reporting built to turn attention into measurable leads.',
    image: assets.card8,
  },
  {
    title: 'SEO',
    text: 'Technical SEO, keyword planning, content structure, and search visibility improvements for long-term organic growth.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Website Design Development',
    text: 'Modern websites with clear UX, fast performance, responsive layouts, and conversion-focused content presentation.',
    image: assets.card1,
  },
  {
    title: 'Social Media Marketing',
    text: 'Daily creative systems for social posts, campaigns, community growth, paid promotion, and platform-ready brand content.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Creative Designing',
    text: 'Campaign visuals, brand assets, launch graphics, print-ready layouts, and digital creatives with one consistent style.',
    image: assets.about,
  },
  {
    title: 'Mobile Application',
    text: 'User-friendly mobile app experiences, interface planning, feature flows, and scalable product presentation.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
  },
]

const offlineServiceCards = [
  {
    title: 'Marketing Collaterals',
    text: 'Brochures, flyers, posters, product sheets, and branded print assets designed for strong offline recall.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Out of Home',
    text: 'Large-format OOH campaigns with bold messaging, clean layouts, and high-distance readability.',
    image: assets.card4,
  },
  {
    title: 'Paper insert',
    text: 'Newspaper and leaflet insert campaigns planned with clear offers, local reach, and sharp print design.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Transit Media',
    text: 'Campaign systems for buses, autos, metro placements, stations, and moving audience impressions.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Retail Branding & Signages',
    text: 'In-store visibility, fascia design, wayfinding, POSM, and signage systems for stronger retail presence.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Events and activations',
    text: 'Launch events, booth branding, on-ground activations, and audience engagement ideas built for recall.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
  },
]

const campaignSections = [
  {
    kicker: 'Brand Strategy',
    label: 'Branding',
    title: 'Strategy-led branding that gives every campaign a clear direction.',
    text: 'We define positioning, voice, visual language, launch messaging, and campaign systems so your brand feels consistent online and offline.',
    image: '/branding.png',
    color: '#b51f1c',
  },
  {
    kicker: 'Social Media Marketing',
    label: 'Marketing',
    title: 'Daily content systems built for attention, trust, and measurable growth.',
    text: 'From content calendars to creative design, paid campaigns, SEO-aligned posts, and performance reporting, we build social media that works as a brand engine.',
    image: '/marketing.png',
    color: '#a84f22',
  },
  {
    kicker: 'Offline Marketing',
    label: 'Offline',
    title: 'High-visibility offline campaigns for streets, retail, transit, and events.',
    text: 'We plan and design marketing collaterals, out-of-home, paper inserts, transit media, retail branding, signages, events, and activations.',
    image: '/packaging.png',
    color: '#7b3827',
  },
  
]

const sliderItems = [
  {
    label: 'AI Strategy',
    title: 'Intelligent roadmaps for faster execution',
    text: 'Prioritize the highest-impact automation opportunities, align teams, and move from idea to measurable value.',
    metric: '42%',
    detail: 'faster planning cycles',
    images: [assets.card8, assets.card6, assets.card5],
  },
  {
    label: 'Data Systems',
    title: 'Decision-ready insight across every workflow',
    text: 'Connect fragmented data, expose leading indicators, and build dashboards that leaders can act on immediately.',
    metric: '520k+',
    detail: 'signals analyzed monthly',
    images: [assets.card5, assets.card8, assets.about],
  },
  {
    label: 'Automation',
    title: 'Premium operating systems powered by AI',
    text: 'Design dependable automations that remove repetitive work while keeping human judgment in control.',
    metric: '98.6%',
    detail: 'workflow efficiency score',
    images: [assets.card6, assets.card1, assets.card8],
  },
]

const portfolioItems = [
  {
    title: 'Signal Studio',
    label: 'Analytics Experience',
    text: 'A leadership dashboard that turns live operational patterns into clear, confident decisions.',
    image: assets.card8,
  },
  {
    title: 'Autopilot Ops',
    label: 'Automation System',
    text: 'A sleek workflow layer for routing repetitive work while keeping teams in control.',
    image: assets.card6,
  },
  {
    title: 'Growth Command',
    label: 'Strategy Platform',
    text: 'A planning environment built for fast experiments, measurable outcomes, and executive visibility.',
    image: assets.card5,
  },
  {
    title: 'Adaptive Core',
    label: 'AI Infrastructure',
    text: 'A modern foundation for smarter services, cleaner handoffs, and scalable intelligence.',
    image: assets.about,
  },
]

const testimonials = [
  {
    quote: 'Bravera helped us turn a scattered AI roadmap into a focused operating system our team actually uses.',
    name: 'Maya Chen',
    role: 'Chief Strategy Officer',
  },
  {
    quote: 'The work felt premium from day one: sharp strategy, beautiful systems, and measurable impact.',
    name: 'Julian Ortiz',
    role: 'Founder, Northstar Labs',
  },
  {
    quote: 'They brought clarity to complex data and gave our leaders a faster way to make confident decisions.',
    name: 'Priya Shah',
    role: 'VP Operations',
  },
]

const reelsItems = [
  {
    title: 'Product Launch Campaign',
    category: 'Social Campaign',
    description: 'Bold opener for a new product launch with motion graphics and trending audio.',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85',
    color: '#FF6B6B',
  },
  {
    title: 'Brand Story Reel',
    category: 'Brand Storytelling',
    description: 'Behind-the-scenes look at how we build products, shot in cinematic style.',
    thumbnail: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    color: '#4ECDC4',
  },
  {
    title: 'Tutorial & Education',
    category: 'How-To Content',
    description: 'Quick 15-second tutorial showing product features with clear on-screen text.',
    thumbnail: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    color: '#45B7D1',
  },
  {
    title: 'Customer Testimonial',
    category: 'Social Proof',
    description: 'Real customer success story with authentic footage and impactful messaging.',
    thumbnail: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85',
    color: '#96CEB4',
  },
  {
    title: 'Trending Audio Reel',
    category: 'Viral Content',
    description: 'Trendy audio hook paired with eye-catching visuals optimized for engagement.',
    thumbnail: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=900&q=85',
    color: '#FFEAA7',
  },
]

const cinematicServices = [
  {
    title: 'Branding',
    text: 'Identity systems, positioning, visual language, and launch-ready brand worlds.',
    icon: '01',
  },
  {
    title: 'Social Media Marketing',
    text: 'Content engines, paid social, community growth, and campaign calendars.',
    icon: '02',
  },
  {
    title: 'Offline Marketing',
    text: 'OOH, paper inserts, transit media, retail branding, signages, events, and activations.',
    icon: '03',
  },
  {
    title: 'Reels & Short Videos',
    text: 'Hooks, scripts, shoots, edits, motion direction, and platform-ready reels.',
    icon: '04',
  },
  {
    title: 'Digital Campaigns',
    text: 'Performance funnels, landing journeys, SEO, and measurable acquisition systems.',
    icon: '05',
  },
  {
    title: 'AI Automation',
    text: 'Smarter workflows, AI-assisted operations, reporting, and customer journeys.',
    icon: '06',
  },
  {
    title: 'Creative Strategy',
    text: 'Campaign concepts, story systems, audience insight, and creative direction.',
    icon: '07',
  },
  {
    title: 'Performance Marketing',
    text: 'Media planning, conversion tracking, optimization, and growth experiments.',
    icon: '08',
  },
]

export function ArrowButton({
  href,
  children,
  dark = false,
}: {
  href: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <Link href={href} className={`button ${dark ? 'dark' : ''}`}>
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">↗</span>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="Bravera home">
          <img className="logo-image" src="/bravera-logo.png" alt="Bravera" />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.label !== 'Services') {
              return (
                <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : undefined}>
                  {link.label}
                </Link>
              )
            }

            return (
              <div className="nav-dropdown" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-service-trigger ${pathname === link.href ? 'active' : ''}`}
                  aria-haspopup="true"
                >
                  {link.label}
                </Link>
                <div className="services-mega-menu" role="menu" aria-label="Services menu">
                  <Link href="/services#offline-services" className="mega-feature outdoor" role="menuitem">
                    <span className="mega-kicker">Services (Offline)</span>
                    <strong>Offline Services</strong>
                    <small>Know More</small>
                  </Link>
                  <Link href="/services#digital-services" className="mega-feature digital" role="menuitem">
                    <span className="mega-kicker">Digital Services</span>
                    <strong>Digital Services</strong>
                    <small>Know More</small>
                  </Link>
                 
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <img className="logo-image" src="/bravera-logo.png" alt="Bravera logo" />
            </Link>
            <p className="lead">
              Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support business growth.
            </p>
            <form className="newsletter" aria-label="Subscribe to newsletter">
              <input
                aria-label="Email address"
                placeholder="Enter your email"
                type="email"
              />
              <button className="button dark" type="submit">Subscribe</button>
            </form>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <h3>Company</h3>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h3>Digital</h3>
              {['Digital Marketing', 'SEO', 'Website Design', 'Social Media'].map((item) => (
                <Link key={item} href="/services#digital-services">
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h3>Offline</h3>
              {['Marketing Collaterals', 'Out of Home', 'Transit Media', 'Retail Branding'].map((item) => (
                <Link key={item} href="/services#offline-services">
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:hello@bravera.in">hello@bravera.in</a>
              <Link href="/contact-us">Start a project</Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Bravera Inc. All rights reserved.</p>
          <p>Inspire. Create. Achieve.</p>
        </div>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const shellRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !shellRef.current) return

    

    const tiltCleanups: Array<() => void> = []
const ctx = gsap.context(() => {
  const reveal = (
    selector: string,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars = {}
  ) => {
    gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })
    })
  }

  // Navbar
  gsap.from('.nav-inner', {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Hero
  gsap.from('.hero-frame', {
    scale: 0.94,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from('.hero-word', {
    y: 90,
    opacity: 0,
    rotateX: 75,
    filter: 'blur(18px)',
    duration: 1,
    stagger: 0.08,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.hero-kicker', {
    x: -40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power3.out',
  })

  gsap.from('.hero-lead', {
    y: 35,
    opacity: 0,
    duration: 0.85,
    delay: 0.9,
    ease: 'power3.out',
  })

  gsap.from('.hero-actions', {
    scale: 0.88,
    opacity: 0,
    duration: 0.8,
    delay: 1.1,
    ease: 'back.out(1.7)',
  })

  // Hero scroll parallax
  gsap.to('.hero-orbit, .hero-three-scene', {
    y: -90,
    scale: 1.08,
    rotate: 4,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.to('.hero-frame', {
    '--heroGlowX': '72%',
    '--heroGlowY': '22%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  // Section headings
  reveal('.section-title', {
    y: 70,
    opacity: 0,
    filter: 'blur(10px)',
  }, {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.9,
    ease: 'power3.out',
  })

  reveal('.body-copy, .lead', {
    y: 35,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.75,
    ease: 'power3.out',
  })

  reveal('.eyebrow', {
    y: 20,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.65,
    ease: 'power3.out',
  })

  // About
  reveal('.about-title', {
    scale: 0.92,
    opacity: 0,
    y: 40,
  }, {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
  })

  reveal('.about-stats .stat-card', {
    y: 70,
    opacity: 0,
    rotate: -3,
    scale: 0.92,
  }, {
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    duration: 0.85,
    ease: 'back.out(1.4)',
  })

  // Services
  reveal('.cinematic-service-card', {
    opacity: 0,
    y: 80,
    rotateY: -22,
    scale: 0.92,
    transformPerspective: 1000,
  }, {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    duration: 0.9,
    ease: 'power3.out',
  })

  reveal('.service-category-card', {
    opacity: 0,
    y: 70,
    scale: 0.95,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.9,
    ease: 'power3.out',
  })

  reveal('.service-detail-card', {
    opacity: 0,
    x: -70,
    scale: 0.96,
  }, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 0.85,
    ease: 'power3.out',
  })

  // Premium slider
  reveal('.premium-slider-shell', {
    opacity: 0,
    y: 80,
    scale: 0.96,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: 'power4.out',
  })

  // Campaign map
  reveal('.adams-pin-stage', {
    opacity: 0,
    y: 80,
    scale: 0.96,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: 'power4.out',
  })

  // Portfolio
  reveal('.portfolio-card', {
    opacity: 0,
    scale: 1.08,
    clipPath: 'inset(18% 18% 18% 18% round 28px)',
  }, {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 28px)',
    duration: 1,
    ease: 'power4.out',
  })

  // Expertise
  reveal('.metric-panel', {
    opacity: 0,
    x: -80,
    scale: 0.94,
  }, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 0.9,
    ease: 'power3.out',
  })

  // Pricing
  reveal('.price-card', {
    opacity: 0,
    y: 70,
    scale: 0.85,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.85,
    ease: 'back.out(1.6)',
  })

  // Blog
  reveal('.post-card', {
    opacity: 0,
    y: 80,
    rotate: 2,
    scale: 0.95,
  }, {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    duration: 0.85,
    ease: 'power3.out',
  })

  // FAQ
  reveal('.faq-item', {
    opacity: 0,
    x: -45,
  }, {
    opacity: 1,
    x: 0,
    duration: 0.75,
    ease: 'power3.out',
  })

  // Contact / CTA
  reveal('.cta-band', {
    opacity: 0,
    scale: 0.9,
    y: 50,
  }, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.95,
    ease: 'power4.out',
  })

  reveal('.contact-card', {
    opacity: 0,
    y: 60,
    scale: 0.94,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.85,
    ease: 'power3.out',
  })

  // Page hero
  reveal('.page-hero', {
    opacity: 0,
    scale: 0.96,
    y: 40,
  }, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.95,
    ease: 'power3.out',
  })

  reveal('.page-hero-visual', {
    opacity: 0,
    x: 70,
    rotateY: -14,
  }, {
    opacity: 1,
    x: 0,
    rotateY: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // Reels
  reveal('.reel-phone-card', {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateY: -20,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    duration: 0.85,
    ease: 'back.out(1.5)',
  })

  // Image parallax
  gsap.utils.toArray<HTMLElement>(
    '.portfolio-card img, .agency-proof img, .service-detail-media img, .image-card img'
  ).forEach((image) => {
    gsap.to(image, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // Tilt cards
  gsap.utils.toArray<HTMLElement>('.tilt-card').forEach((card) => {
    const onMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      gsap.to(card, {
        rotateY: x * 8,
        rotateX: y * -8,
        y: -6,
        duration: 0.45,
        ease: 'power2.out',
      })
    }

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.55)',
      })
    }

    card.addEventListener('pointermove', onMove)
    card.addEventListener('pointerleave', onLeave)

    tiltCleanups.push(() => {
      card.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerleave', onLeave)
    })
  })
}, shellRef)

    return () => {
      tiltCleanups.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const shell = shellRef.current
    if (!shell || !isHome) return

    const cursor = shell.querySelector<HTMLElement>('.cinematic-cursor')
    const progress = shell.querySelector<HTMLElement>('.scroll-progress-bar span')

    const onPointerMove = (event: PointerEvent) => {
      if (!cursor) return
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    const onScroll = () => {
      if (!progress) return
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const amount = maxScroll > 0 ? window.scrollY / maxScroll : 0
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [isHome])

  return (
    <main className={`site-shell ${isHome ? 'home-cinematic-shell' : ''}`} ref={shellRef}>
      {isHome ? (
        <>
          <div className="scroll-progress-bar" aria-hidden="true"><span /></div>
          <div className="cinematic-cursor" aria-hidden="true" />
        </>
      ) : null}
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}



export function Hero() {
  const words = [
    { text: 'Building', className: 'hero-word slide-up' },
    { text: 'Brands', className: 'hero-word rotate-in' },
    { text: 'That', className: 'hero-word blur-in' },
    { text: 'Move', className: 'hero-word zoom-in' },
    { text: 'People', className: 'hero-word slide-right' },
    { text: 'Online', className: 'hero-word fade-up' },
    { text: '&', className: 'hero-word spin-in' },
    { text: 'Offline', className: 'hero-word glow-in' },
  ]

  return (
    <section className="hero">
      <div className="hero-frame">
        {/* <BraveraHeroScene /> */}

        {/* <div className="hero-visual-stack" aria-hidden="true">
          <span className="glass-orb glass-orb-main" />
          <span className="glass-orb glass-orb-blue" />
          <span className="glass-orb glass-orb-pink" />
          <span className="neon-line neon-line-one" />
          <span className="neon-line neon-line-two" />
        </div> */}

        <div className="hero-noise" />

        <div className="hero-content">

          <p className="eyebrow hero-kicker">
            Brand systems / Social / Offline / AI
          </p>

          <h1 className="hero-title">
            {words.map((item, index) => (
              <span
                key={item.text}
                className={item.className}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {item.text}
              </span>
            ))}
          </h1>

          <p className="lead hero-lead">
            We create powerful branding, social media campaigns,
            offline marketing, reels, AI automation,
            and digital growth systems for modern businesses.
          </p>

          <div className="hero-actions hero-actions-animate">
            <ArrowButton href="/contact-us">
              Start Your Brand Journey
            </ArrowButton>
          </div>

        </div>
      </div>
    </section>
  )
}

export function PremiumSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const shellRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<number | null>(null)
  const activeRef = useRef(0)
  const touchStartRef = useRef(0)
  const touchMoveRef = useRef(0)

  const goToSlide = (index: number) => {
    const nextIndex = (index + sliderItems.length) % sliderItems.length
    activeRef.current = nextIndex
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const shell = shellRef.current
    const track = trackRef.current
    if (!shell || !track) return

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -activeIndex * 100,
        duration: 0.85,
        ease: 'power3.inOut',
      })

      gsap.fromTo(
        '.slider-panel.is-active .slider-copy > *',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out' }
      )

      gsap.fromTo(
        '.slider-panel.is-active .slider-visual',
        { rotateY: -10, rotateX: 5, z: -18 },
        { rotateY: 0, rotateX: 0, z: 0, duration: 0.85, ease: 'power3.out' }
      )
    }, shell)

    return () => ctx.revert()
  }, [activeIndex])

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const imageMoveX = gsap.quickTo('.slider-panel.is-active .slider-visual', 'rotateY', { duration: 0.45, ease: 'power2.out' })
    const imageMoveY = gsap.quickTo('.slider-panel.is-active .slider-visual', 'rotateX', { duration: 0.45, ease: 'power2.out' })
    const glowMoveX = gsap.quickTo('.slider-glow', 'x', { duration: 0.7, ease: 'power2.out' })
    const glowMoveY = gsap.quickTo('.slider-glow', 'y', { duration: 0.7, ease: 'power2.out' })

    const onMove = (event: PointerEvent) => {
      const rect = shell.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      imageMoveX(x * 8)
      imageMoveY(y * -7)
      glowMoveX(x * 56)
      glowMoveY(y * 42)
    }

    const onLeave = () => {
      imageMoveX(0)
      imageMoveY(0)
      glowMoveX(0)
      glowMoveY(0)
    }

    shell.addEventListener('pointermove', onMove)
    shell.addEventListener('pointerleave', onLeave)

    return () => {
      shell.removeEventListener('pointermove', onMove)
      shell.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  useEffect(() => {
    const start = () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
      autoplayRef.current = window.setInterval(() => {
        goToSlide(activeRef.current + 1)
      }, 5200)
    }

    start()

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    }
  }, [])

  const handleControl = (index: number) => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    goToSlide(index)
    autoplayRef.current = window.setInterval(() => {
      goToSlide(activeRef.current + 1)
    }, 5200)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = event.touches[0]?.clientX ?? 0
    touchMoveRef.current = touchStartRef.current
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchMoveRef.current = event.touches[0]?.clientX ?? touchMoveRef.current
  }

  const handleTouchEnd = () => {
    const distance = touchStartRef.current - touchMoveRef.current
    if (Math.abs(distance) < 44) return
    handleControl(activeIndex + (distance > 0 ? 1 : -1))
  }

  return (
    <section className="section slider-section" aria-label="Bravera capabilities carousel">
      <div className="container">
        <div className="split slider-heading">
          <div>
            <p className="eyebrow">Featured Systems</p>
            <h2 className="section-title">A smarter moving view of what Bravera builds</h2>
          </div>
          <p className="body-copy">
            Explore strategic AI, data intelligence, and automation programs through a smooth premium carousel.
          </p>
        </div>

        <div
          className="premium-slider-shell"
          ref={shellRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-glow" aria-hidden="true" />
          <div className="slider-viewport">
            <div className="slider-track" ref={trackRef}>
              {sliderItems.map((item, index) => (
                <article
                  className={`slider-panel ${activeIndex === index ? 'is-active' : ''}`}
                  key={item.title}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="slider-copy">
                    <p className="eyebrow">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="slider-metric">
                      <strong>{item.metric}</strong>
                      <span>{item.detail}</span>
                    </div>
                  </div>
                  <div className="slider-visual">
                    <img className="slider-main-image" src={item.images[0]} alt="" />
                    <img className="slider-stack-image slider-stack-top" src={item.images[1]} alt="" />
                    <img className="slider-stack-image slider-stack-bottom" src={item.images[2]} alt="" />
                    <div className="slider-chip slider-chip-top">Live model</div>
                    <div className="slider-chip slider-chip-bottom">Smooth GSAP motion</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button type="button" aria-label="Previous slide" onClick={() => handleControl(activeIndex - 1)}>‹</button>
            <div className="slider-dots" aria-label="Carousel pagination">
              {sliderItems.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  className={activeIndex === index ? 'is-active' : ''}
                  aria-label={`Show ${item.label}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => handleControl(index)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next slide" onClick={() => handleControl(activeIndex + 1)}>›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PortfolioGallery() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="split portfolio-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="section-title">Creative systems with strategy, motion, and intelligence built in</h2>
          </div>
          <p className="body-copy">
            A curated look at the kind of premium digital experiences Bravera shapes for modern teams.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <article key={item.title} className={`portfolio-card tilt-card ${index === 0 ? 'featured' : ''}`}>
              <img src={item.image} alt="" />
              <div className="portfolio-overlay">
                <p className="eyebrow text-white">{item.label}</p>
                <h3 className="text-white">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
   <></>
  )
}

export function Marquee() {
  const words = ['Brand Strategy', 'Digital Marketing', 'Social Media', 'Offline Marketing', 'Reels', 'SEO', 'Creative Design', 'Mobile Apps']
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </div>
  )
}

export function CampaignMapSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSection = campaignSections[activeIndex]

  useEffect(() => {
    const image = document.querySelector('.adams-product-image')
    const copy = document.querySelector('.adams-sticky-copy')
    if (!image || !copy) return

    gsap.fromTo(
      image,
      { autoAlpha: 0, scale: 0.94, y: 24 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, ease: 'power3.out' }
    )
    gsap.fromTo(
      copy,
      { autoAlpha: 0, y: 34 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out' }
    )
  }, [activeIndex])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const section = sectionRef.current
    if (!section) return

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${window.innerHeight * (campaignSections.length - 1)}`,
      pin: '.adams-pin-stage',
      pinSpacing: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const nextIndex = Math.min(
          campaignSections.length - 1,
          Math.round(self.progress * (campaignSections.length - 1))
        )
        setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex))
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="campaign-map-section adams-scroll-section"
      id="brand-strategy"
      style={{ '--adams-active': activeSection.color } as React.CSSProperties}
    >
      <div className="adams-content">
        <div className="adams-pin-stage">
          <div className="adams-sticky-visual" aria-hidden="true">
            <div className="adams-project-visual">
              <img className="adams-product-image" src={activeSection.image} alt="" />
            </div>
          </div>

          <div className="adams-sticky-copy">
            <div className="adams-project-title">
              <h3>{activeSection.label}</h3>
            </div>
            <div className="adams-project-info">
              <p>{activeSection.title}</p>
              <span>{activeSection.text}</span>
              <Link href="/services" className="adams-project-link">Read Case Study</Link>
            </div>
          </div>

          <div className="adams-scroll-progress" aria-hidden="true">
            {campaignSections.map((section, index) => (
              <span className={activeIndex === index ? 'active' : ''} key={section.kicker}>
                {section.kicker}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="section about-webflow" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="eyebrow font-bold-1">· About us</p>
          <h2 className="section-title about-title font-bold-1">
            A global consulting partner dedicated to building <span className="icon-badge blue" /> smarter <span className="muted-line">and <span className="icon-badge lime" /> more adaptive</span>
          </h2>
        </div>
        <div className="stats-grid about-stats">
          <div className="stat-card stat-soft tilt-card">
            <div className="pill-cloud">
              {['Startup Feel', 'Professional', 'Strategic', 'AI-Focused', 'Grow Faster', 'Build Smart', 'Simple'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <span>Continents</span>
            <strong>20+</strong>
          </div>
          <div className="stat-card stat-lime tilt-card">
            <span>Commitment to measurable</span>
            <strong>100%</strong>
            <p>Collaborating with leading AI and cloud technology providers.</p>
          </div>
          <div className="stat-card stat-image tilt-card">
            <img src={assets.card4} alt="" />
            <div>
              <strong>120+</strong>
              <p>Collaborating with leading AI and cloud technology providers.</p>
            </div>
          </div>
          <div className="stat-card stat-soft tilt-card">
            <span>Data Points</span>
            <strong>520k+</strong>
            <p>Analyzed monthly to power smarter business strategies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection({ full = false }: { full?: boolean }) {
  return (
    <section className={`section services-section ${full ? 'services-page-section' : 'dark'}`} id="services">
      <div className="container">
        
       
        {full ? (
          <div className="service-detail-groups">
            <div className="service-detail-group" id="digital-services">
              <div className="service-detail-heading">
                <div>
                  <p className="eyebrow">Services (Digital)</p>
                  <h3 className="font-bold-1">Digital growth services with focused execution for every channel</h3>
                </div>
                <p>Performance-led digital systems for discovery, conversion, retention, and brand consistency.</p>
              </div>
              <div className="service-detail-grid">
                {digitalServiceCards.map((service, index) => (
                  <article className="service-detail-card tilt-card" key={service.title}>
                    <div className="service-detail-media">
                      <img src={service.image} alt="" />
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="service-detail-copy">
                      <p className="eyebrow">Digital</p>
                      <h4 className="font-bold-1">{service.title}</h4>
                      <p>{service.text}</p>
                      <Link href="/contact-us" className="service-detail-link">Plan this service</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="service-detail-group" id="offline-services">
              <div className="service-detail-heading">
                <div>
                  <p className="eyebrow">Services (Offline)</p>
                  <h3 className="font-bold-1">Offline visibility services for print, OOH, transit, retail, and events</h3>
                </div>
                <p>High-recall offline campaigns designed for location, movement, footfall, retail visibility, and on-ground engagement.</p>
              </div>
              <div className="service-detail-grid outdoor-detail-grid">
                {offlineServiceCards.map((service, index) => (
                  <article className="service-detail-card outdoor-detail-card tilt-card" key={service.title}>
                    <div className="service-detail-media">
                      <img src={service.image} alt="" />
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="service-detail-copy">
                      <p className="eyebrow">Offline</p>
                      <h4 className="font-bold-1">{service.title}</h4>
                      <p>{service.text}</p>
                      <Link href="/contact-us" className="service-detail-link">Plan this service</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function ExpertiseSection() {
  return (
    <section className="section">
      <div className="container split">
        <div className="metric-panel">
          <p className="eyebrow font-bold-1">Monthly expanse</p>
          <h3 style={{ color: '#fff', fontSize: 56, letterSpacing: '-.06em' }}>$4900 <small style={{ fontSize: 18, color: 'rgba(255,255,255,.5)' }}>/ $10,000</small></h3>
          <div className="progress" style={{ margin: '26px 0' }}><span style={{ width: '49%' }} /></div>
          <p className="body-copy">Performance in the past 7 days: 49% business growth, +2.5% week over week.</p>
        </div>
        <div>
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title font-bold-1">Where human insight meets intelligent technology</h2>
          <p className="body-copy" style={{ marginTop: 20 }}>
            Our expertise combines strategy, data, and artificial intelligence to amplify creativity and enable smarter decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <div className="split" style={{ alignItems: 'end' }}>
          <h2 className="section-title">Flexible Plans Built for Every Stage of Growth</h2>
          <p className="body-copy">Whether you’re just starting your AI journey or scaling enterprise-wide innovation, our plans grow with you.</p>
        </div>
        <div className="price-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card tilt-card ${plan.featured ? 'featured' : ''}`}>
              <p className="eyebrow">{plan.featured ? 'Popular' : 'Plan'}</p>
              <h3>{plan.name}</h3>
              <p className="body-copy" style={{ marginTop: 14 }}>{plan.text}</p>
              <div className="price">{plan.price} <small>/month</small></div>
              <ul className="feature-list">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <ArrowButton href="/contact-us" dark={!plan.featured}>Get Started</ArrowButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogSection() {
  const [dynamicPosts, setDynamicPosts] = useState(posts)

  useEffect(() => {
    const storedPosts = getStoredPosts()
    setDynamicPosts(storedPosts)
  }, [])

  return (
    <section className="section" id="stories">
      <div className="container">
        <p className="eyebrow font-bold-1">Stories</p>
        <div className="split" style={{ alignItems: 'end' }}>
          <h2 className="section-title font-bold-1">Latest stories and trends</h2>
          <p className="body-copy">Whether you’re optimizing today or building for tomorrow, we help you move faster with confidence.</p>
        </div>
        <div className="blog-grid">
          {dynamicPosts.map((post) => (
            <article key={post.title} className="post-card tilt-card">
              <Link href={post.slug} className="card-media">
                <img src={post.image} alt={post.title} />
              </Link>
              <p className="eyebrow">{post.date}</p>
              <h3><Link href={post.slug}>{post.title}</Link></h3>
              <p className="body-copy" style={{ marginTop: 14 }}>{post.text}</p>
              <div style={{ marginTop: 22 }}><ArrowButton href={post.slug} dark>Learn more</ArrowButton></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section className="section tight" id="faq">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title font-bold-1">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3 className="font-bold-1">{faq.question}</h3>
              <p className="body-copy">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="section tight" id="contact">
      <div className="container">
        <div className="cta-band">
          <div>
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title font-bold-1">We combine human insight with artificial intelligence</h2>
          </div>
          <ArrowButton href="/contact-us">Contact us</ArrowButton>
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = assets.hero,
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title font-bold-1">{title}</h1>
          <p className="lead">{text}</p>
        </div>
        <div className="page-hero-visual">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  )
}

export function SocialMediaMarketingSection() {
  return (
    <section className="section" id="social-media">
      <div className="container split">
        <div>
          <p className="eyebrow">Social Media Marketing</p>
          <h2 className="section-title">Daily content systems built for attention and growth</h2>
          <p className="body-copy" style={{ marginTop: 20 }}>
            From strategic content calendars to creative design, paid campaigns, SEO-aligned posts, and performance reporting. We build social media that works as a brand engine, turning engagement into measurable business results.
          </p>
          <div style={{ marginTop: 32 }}>
            <ArrowButton href="/contact-us">Get Started</ArrowButton>
          </div>
        </div>
        <div className="image-card">
          <img src={assets.card8} alt="Social Media Marketing" />
        </div>
      </div>
    </section>
  )
}

export function OutdoorMarketingSection() {
  return (
    <section className="section" id="outdoor-marketing">
      <div className="container split">
        <div className="image-card">
          <img src={assets.card4} alt="Offline Marketing" />
        </div>
        <div>
          <p className="eyebrow">Offline Marketing</p>
          <h2 className="section-title">High-visibility campaigns beyond the screen</h2>
          <p className="body-copy" style={{ marginTop: 20 }}>
            We plan and design marketing collaterals, OOH, paper inserts, transit media, retail branding, signages, events, and activations that maximize recall in the real world.
          </p>
          <div style={{ marginTop: 32 }}>
            <ArrowButton href="/contact-us">Get Started</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ReelsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const shellRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    const nextIndex = (index + reelsItems.length) % reelsItems.length
    setActiveIndex(nextIndex)
  }

  const getOffset = (index: number) => {
    const rawOffset = index - activeIndex
    const midpoint = Math.floor(reelsItems.length / 2)

    if (rawOffset > midpoint) return rawOffset - reelsItems.length
    if (rawOffset < -midpoint) return rawOffset + reelsItems.length
    return rawOffset
  }

  return (
    <section className="reels-showcase section" id="reels">
      <div className="reels-container">
       
        <div ref={shellRef} className="reels-coverflow-shell">
          <button
            className="reels-nav reels-nav-prev"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Previous reel"
          >
            ‹
          </button>

          <div className="reels-coverflow" aria-live="polite">
            {reelsItems.map((reel, index) => {
              const offset = getOffset(index)
              const isVisible = Math.abs(offset) <= 2

              return (
                <article
                  className={`reel-phone-card reel-offset-${offset + 2} ${offset === 0 ? 'is-active' : ''}`}
                  key={reel.title}
                  aria-hidden={!isVisible}
                  onClick={() => goToSlide(index)}
                >
                  <div className="reel-phone-media">
                    <img src={reel.thumbnail} alt={reel.title} />
                    <div className="reel-card-brand">Bravera</div>
                    <div className="reel-play" aria-hidden="true">▶</div>
                    <div className="reel-card-caption">
                      <span>{reel.category}</span>
                      <strong>{reel.title}</strong>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <button
            className="reels-nav reels-nav-next"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Next reel"
          >
            ›
          </button>

          <div className="reels-dots" aria-label="Reel navigation">
            {reelsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? 'active' : ''}
                aria-label={`Go to reel ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
