import {
  CampaignMapSection,
  CTASection,
  FAQSection,
  Hero,
  Marquee,
  PageShell,
  PortfolioGallery,
  ReelsSection,
  ServicesSection,
  TestimonialsSection,
} from '@/components/AelineSite'

export default function Home() {
  return (
    <PageShell>
      <div className="home-pattern-frame">
        <Hero />
        <Marquee />
        <CampaignMapSection />
        {/* <ServicesSection /> */}
        {/* <PortfolioGallery /> */}
        <ReelsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </PageShell>
  )
}
