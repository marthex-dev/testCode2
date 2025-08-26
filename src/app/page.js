import HeroSection from '@/components/HeroSection'
import DiscordPromotion from '@/components/DiscordPromotion'
import DiscordFeature from '@/components/DiscordFeature'
import BasicMessage from '@/components/BasicMessage'
import StatsSection from '@/components/StatsSection'
import TestimonialSection from '@/components/TestimonialSection'
import TrustedBy from '@/components/TrustedBy'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DiscordPromotion />
      <TrustedBy />
      <StatsSection />
      <DiscordFeature />
      <TestimonialSection />
      <BasicMessage />
      <CTASection />
    </main>
  )
}
