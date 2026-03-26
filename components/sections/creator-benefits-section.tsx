import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, BadgeCheck, TrendingUp, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Keep 85% of Every Sale",
    description: "Industry-leading commission rates. No hidden fees, transparent pricing.",
  },
  {
    icon: Users,
    title: "Reach Niche Customers",
    description: "Connect with buyers who understand and value your specialized work.",
  },
  {
    icon: BadgeCheck,
    title: "Get Verified",
    description: "Earn trust badges that highlight your expertise and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Built-in tools for portfolio showcase, pricing packages, and repeat customers.",
  },
]

export function CreatorBenefitsSection() {
  return (
    <section className="bg-foreground text-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary-foreground/70">For Creators</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Turn Your Character Expertise Into Income
            </h2>
            <p className="mt-4 text-lg text-muted">
              Join a marketplace built specifically for creators like you. Sell to customers who 
              understand and appreciate your niche expertise.
            </p>

            {/* Benefits Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/for-creators">
                  Start Selling Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Earnings Preview Card */}
          <div className="relative">
            <Card className="overflow-hidden border-0 bg-card/10 backdrop-blur">
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="text-sm text-muted">Average creator earns</p>
                  <p className="mt-2 text-5xl font-bold text-background">$2,400</p>
                  <p className="mt-1 text-sm text-muted">per month</p>
                </div>
                <div className="mt-8 text-white space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-background/10 px-4 py-3">
                    <span className="text-sm">Character Card</span>
                    <span className="font-mono text-sm">$35 - $150</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-background/10 px-4 py-3">
                    <span className="text-sm">Lorebook Package</span>
                    <span className="font-mono text-sm">$75 - $300</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-background/10 px-4 py-3">
                    <span className="text-sm">Worldbuilding Bundle</span>
                    <span className="font-mono text-sm">$200 - $500</span>
                  </div>
                </div>
                <p className="mt-6 text-center text-xs text-muted">
                  Based on top 25% creator earnings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
