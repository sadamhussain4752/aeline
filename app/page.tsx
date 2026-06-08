import { AboutSection, BlogSection, CTASection, ExpertiseSection, Hero, Marquee, PageShell, PortfolioGallery, PremiumSlider, PricingSection, ServicesSection, TestimonialsSection } from '@/components/AelineSite'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <PremiumSlider />
      <ServicesSection />
      <PortfolioGallery />
      <AboutSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <CTASection />
    </PageShell>
  )
}
