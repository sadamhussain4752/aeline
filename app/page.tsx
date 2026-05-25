import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CardMarquee from '@/components/CardMarquee'
import About from '@/components/About'
import LogoMarquee from '@/components/LogoMarquee'
import Services from '@/components/Services'
import Expertise from '@/components/Expertise'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary overflow-hidden">
      <Navbar />
      <Hero />
      <CardMarquee />
      <About />
      <LogoMarquee />
      <Services />
      <Expertise />
      <Pricing />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
