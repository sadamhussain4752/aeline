import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowButton, CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { allServiceCards } from '@/components/service-data'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return allServiceCards.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = allServiceCards.find((item) => item.slug === params.slug)

  if (!service) {
    return {
      title: 'Service not found | Bravera',
    }
  }

  return {
    title: `${service.title} | Bravera Services`,
    description: service.text,
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = allServiceCards.find((item) => item.slug === params.slug)

  if (!service) notFound()

  const categoryLabel = service.category === 'digital' ? 'Digital Service' : 'Offline Service'

  return (
    <PageShell>
      <PageHero
        eyebrow={categoryLabel}
        title={service.title}
        text={service.text}
        image={service.image}
      />

      <section className="section service-single-section">
        <div className="container service-single-grid">
          <div>
            <p className="eyebrow font-bold-1">What we build</p>
            <h2 className="section-title font-bold-1">
              A focused service plan built for visibility, clarity, and measurable business growth.
            </h2>
            <p className="body-copy service-single-copy">
              Bravera plans each service around your audience, market, offer, and channel. The goal is simple: create stronger recall, better communication, and campaigns that help your business move faster.
            </p>
            <ArrowButton href="/contact-us">Book a Free Strategy Call</ArrowButton>
          </div>

          <div className="service-single-panel">
            <p className="eyebrow font-bold-1">Included</p>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  )
}
