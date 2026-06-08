'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getStoredPosts } from './local-data'
import { assets, faqs, plans, posts, services } from './aeline-content'

const BraveraHeroScene = dynamic(() => import('./BraveraHeroScene'), { ssr: false })

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact us' },
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
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="Bravera home">
          <span className="logo-mark" aria-hidden="true" />
          <span>Bravera.</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
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
              <span className="logo-mark" aria-hidden="true" />
              <span>Bravera.</span>
            </Link>
            <p className="lead">
              Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support business growth.
            </p>
            <form className="newsletter">
              <input aria-label="Email address" placeholder="Subscribe our newsletter" type="email" />
              <button className="button dark" type="button">Submit</button>
            </form>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p style={{ color: 'rgba(255,255,255,.52)', marginTop: 24 }}>© 2026 Bravera Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const shellRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !shellRef.current) return

    const tiltCleanups: Array<() => void> = []
    const ctx = gsap.context(() => {
      gsap.set('.gsap-fade, .section-title, .body-copy, .service-card, .price-card, .post-card, .stat-card, .image-card, .metric-panel, .faq-item, .timeline-item, .contact-card, .premium-slider-shell, .portfolio-card, .testimonial-card, .agency-proof', {
        y: 34,
      })

      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.nav-inner', { y: -28, duration: 0.75 })
        .from('.hero-frame, .page-hero', { scale: 0.965, duration: 0.95 }, '-=0.35')
        .from('.hero h1, .page-hero h1', { y: 52, duration: 0.9 }, '-=0.45')
        .from('.hero .lead, .page-hero .lead, .hero-actions, .rating-strip, .page-hero-visual', {
          y: 28,
          duration: 0.75,
          stagger: 0.08,
        }, '-=0.45')
        .from('.hero-orbit, .hero-three-scene', { x: 28, rotateY: -18, duration: 0.9 }, '-=0.6')

      gsap.to('.hero-bg', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-orbit, .hero-three-scene', {
        y: -26,
        rotate: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('.gsap-fade, .section-title, .body-copy, .image-card, .metric-panel, .cta-band, .faq-item, .timeline-item, .contact-card, .premium-slider-shell, .portfolio-card, .testimonial-card, .agency-proof').forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.service-grid, .price-grid, .blog-grid, .stats-grid, .portfolio-grid, .testimonial-grid').forEach((grid) => {
        gsap.to(grid.children, {
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
          },
        })
      })

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

      gsap.utils.toArray<HTMLElement>('.portfolio-card img, .agency-proof img').forEach((image) => {
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
    }, shellRef)

    return () => {
      tiltCleanups.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [])

  return (
    <main className="site-shell" ref={shellRef}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="">
        <div className="hero-frame">
          <img src={assets.hero} alt="" className="hero-bg" />
          <BraveraHeroScene />
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-large" />
            <div className="orbit-ring orbit-ring-small" />
            <div className="orbit-card orbit-card-top">
              <span>AI Status</span>
              <strong>98.6%</strong>
            </div>
            <div className="orbit-card orbit-card-bottom">
              <span>Weekly Lift</span>
              <strong>+49%</strong>
            </div>
          </div>
          <div className="hero-content">
            <h1>
              <span>Building the future with</span>
              <span className="hero-muted">AI and strategy</span>
            </h1>
            <p className="lead">
              We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.
            </p>
            <div className="hero-actions">
              <ArrowButton href="/contact-us">Get Started</ArrowButton>
            </div>
            <aside className="rating-strip">
              <p>Rated 4.9/5 by 4,900+ clients</p>
              <span aria-label="5 stars">★★★★★</span>
            </aside>
          </div>
          <div className="hero-card-strip" aria-hidden="true">
            <article className="mini-card mini-card-dark">
              <p>Performance</p>
              <strong>49%</strong>
              <span>Business growth</span>
            </article>
            <article className="mini-card mini-card-glass">
              <img src={assets.card6} alt="" />
              <div>Calendar <small>Live</small></div>
              <div>Messages <small>Live</small></div>
            </article>
            <article className="mini-card mini-card-light">
              <div className="pill-cloud">
                {['Professional', 'Strategic', 'AI-Focused', 'Smarter', 'Grow Faster'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <p>Data Points</p>
              <strong>520k+</strong>
            </article>
            <article className="mini-card mini-card-photo">
              <img src={assets.card5} alt="" />
            </article>
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
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
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
    <section className="section testimonials-section">
      <div className="container">
        <div className="agency-proof">
          <div>
            <p className="eyebrow">Client Voices</p>
            <h2 className="section-title">Built for teams that want polished work and practical momentum</h2>
          </div>
          <img src={assets.card1} alt="" />
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card tilt-card" key={testimonial.name}>
              <span aria-hidden="true">“</span>
              <p>{testimonial.quote}</p>
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const words = ['Professional', 'Strategic', 'AI-Focused', 'Startup Feel', 'Smarter', 'Grow Faster', 'Build Smart', 'Simple']
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

export function AboutSection() {
  return (
    <section className="section about-webflow" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="eyebrow">· About us</p>
          <h2 className="section-title about-title">
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
    <section className="section dark" id="services">
      <div className="container">
        <p className="eyebrow">Services</p>
        <div className="split" style={{ alignItems: 'end' }}>
          <h2 className="section-title">Comprehensive consulting and intelligent innovation</h2>
          <p className="body-copy">Whether you’re optimizing today or building for tomorrow, we help you move faster with confidence.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className={`service-card tilt-card ${service.dark ? 'dark-card' : ''}`}>
              <div className="card-media">
                <img src={service.image} alt="" />
              </div>
              <p className="eyebrow">{service.title.split(' ')[0]}</p>
              <h3>{service.title}</h3>
              <p className="body-copy" style={{ marginTop: 14 }}>{service.text}</p>
              {full ? <ArrowButton href="/contact-us" dark={!service.dark}>Learn more</ArrowButton> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExpertiseSection() {
  return (
    <section className="section">
      <div className="container split">
        <div className="metric-panel">
          <p className="eyebrow">Monthly expanse</p>
          <h3 style={{ color: '#fff', fontSize: 56, letterSpacing: '-.06em' }}>$4900 <small style={{ fontSize: 18, color: 'rgba(255,255,255,.5)' }}>/ $10,000</small></h3>
          <div className="progress" style={{ margin: '26px 0' }}><span style={{ width: '49%' }} /></div>
          <p className="body-copy">Performance in the past 7 days: 49% business growth, +2.5% week over week.</p>
        </div>
        <div>
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">Where human insight meets intelligent technology</h2>
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
    <section className="section">
      <div className="container">
        <p className="eyebrow">Blog and Articles</p>
        <div className="split" style={{ alignItems: 'end' }}>
          <h2 className="section-title">Latest insights and trends</h2>
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
    <section className="section tight">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
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
    <section className="section tight">
      <div className="container">
        <div className="cta-band">
          <div>
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title">We combine human insight with artificial intelligence</h2>
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
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
        </div>
        <div className="page-hero-visual">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  )
}
