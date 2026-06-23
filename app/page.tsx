import { CampaignMapSection, FAQSection, Hero, PageShell, SocialMediaMarketingSection, OutdoorMarketingSection, ReelsSection } from '@/components/AelineSite'

export default function Home() {
  return (
    <PageShell>
      <div className="home-pattern-frame">
        <Hero />
        <CampaignMapSection />
        <SocialMediaMarketingSection />
        <OutdoorMarketingSection />
        <ReelsSection />
        <FAQSection />
      </div>
    </PageShell>
  )
}
