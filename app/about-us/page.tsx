import { AboutSection, CTASection, Marquee, PageHero, PageShell } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'

const milestones = [
  ['2017', 'We started as a small consulting team focused on business strategy and process optimization.'],
  ['2019', 'As technology advanced, we expanded our expertise into digital strategy and data analytics.'],
  ['2021', 'We evolved our services to include automation, predictive analytics, and intelligent systems design.'],
  ['2023', 'We partnered with forward-thinking clients across industries, designing data-driven strategies and AI-powered frameworks.'],
]

export default function AboutUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trusted over 5,000+"
        title="Empowering businesses through strategy and AI"
        text="We are a consulting and AI innovation firm dedicated to helping organizations think smarter, move faster, and grow stronger."
        image={assets.about}
      />
      <AboutSection />
      <Marquee />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our journey</p>
          <h2 className="section-title font-bold-1">Our journey toward intelligent transformation</h2>
          <p className="body-copy" style={{ marginTop: 18, maxWidth: 680 }}>
            From our early days as a small consulting team to becoming a trusted AI partner for global organizations, our journey has been driven by curiosity, collaboration, and impact.
          </p>
          <div className="timeline">
            {milestones.map(([year, text]) => (
              <article key={year} className="timeline-item">
                <strong>{year}</strong>
                <p className="body-copy">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
