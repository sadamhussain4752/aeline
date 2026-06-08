import { CTASection, FAQSection, PageHero, PageShell, PricingSection } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Flexible Plans Built for Every Stage of Growth"
        text="Whether you’re just starting your AI journey or scaling enterprise-wide innovation, we offer tailored solutions that grow with you."
        image={assets.card5}
      />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </PageShell>
  )
}
