import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { AboutSection } from '@/components/home/about-section'
import { ApproachSection } from '@/components/home/approach-section'
import { ContactSection } from '@/components/home/contact-section'
import { HeroSection } from '@/components/home/hero-section'
import { MetricsSection } from '@/components/home/metrics-section'
import { QuoteSection } from '@/components/home/quote-section'
import { ServicesSection } from '@/components/home/services-section'
import { TrustStrip } from '@/components/home/trust-strip'
import { WhyUsSection } from '@/components/home/why-us-section'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <TrustStrip />
      <WhyUsSection />
      <ServicesSection />
      <AboutSection />
      <MetricsSection />
      <ApproachSection />
      <QuoteSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
