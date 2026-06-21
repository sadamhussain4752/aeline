import { AboutSection, BlogSection, CampaignMapSection, CTASection, ExpertiseSection, FAQSection, Hero, Marquee, PageShell, PortfolioGallery, PremiumSlider, PricingSection, ServicesSection, TestimonialsSection } from '@/components/AelineSite'

export default function Home() {
  return (
    <PageShell>
      <div className="home-pattern-frame">
        <Hero />
        <Marquee />
        <CampaignMapSection />
        <PremiumSlider />
        <ServicesSection />
        <PortfolioGallery />
        <AboutSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </div>
    </PageShell>
  )
}
