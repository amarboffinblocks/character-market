import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FeaturedCreatorsSection } from "@/components/sections/featured-creators-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CreatorBenefitsSection } from "@/components/sections/creator-benefits-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TrustSection } from "@/components/sections/trust-section"
import { FAQPreviewSection } from "@/components/sections/faq-preview-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturedCreatorsSection />
        <CategoriesSection />
        <HowItWorksSection />
        <CreatorBenefitsSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
