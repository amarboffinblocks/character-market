import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, Package, ArrowRight } from "lucide-react"
import { Stepper } from "@/components/ui/stepper"

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    description: "Explore our marketplace of verified creators. Filter by category, price, and specialty to find your perfect match.",
    icon: Search,
  },
  {
    number: "02",
    title: "Discuss & Customize",
    description: "Message creators directly to discuss your vision. Get quotes and timelines before committing.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Receive & Review",
    description: "Get your custom creation delivered. Request revisions until you are completely satisfied.",
    icon: Package,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-2 text-muted-foreground">
            Three simple steps to your custom AI character
          </p>
        </div>

        <Stepper steps={steps} className="mt-16" />

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button asChild size="lg" className="h-14 rounded-2xl px-8 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
            <Link href="/marketplace" className="flex items-center gap-2">
              <span className="font-black uppercase tracking-widest text-xs">Unlock Your Creation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
