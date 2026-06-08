import { CTASection, ExpertiseSection, Marquee, PageHero, PageShell, ServicesSection } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Smarter strategy. Powered by AI."
        text="From strategy to implementation, we create solutions that deliver measurable impact."
        image={assets.card6}
      />
      <Marquee />
      <ServicesSection full />
      <ExpertiseSection />
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="section-title">We build solutions that create real, measurable impact</h2>
          </div>
          <p className="body-copy">
            Our approach blends strategic consulting, human-centered design, and advanced AI, giving you the clarity, tools, and confidence to thrive in the age of intelligence.
          </p>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
