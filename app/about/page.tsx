import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Heart, Users, Sparkles, Target, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust First",
    description: "Every transaction is protected. Verified creators, secure payments, and clear policies ensure peace of mind for everyone.",
  },
  {
    icon: Heart,
    title: "Creator-Centric",
    description: "We built this platform because we believe creators deserve a space where their niche expertise is valued and rewarded.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Character Market is more than a marketplace—it's a community of passionate creators and enthusiasts who share a love for AI roleplay.",
  },
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description: "We prioritize quality creators over volume. Our verification process ensures only dedicated specialists join the platform.",
  },
]

const stats = [
  { value: "12,400+", label: "Commissions Completed" },
  { value: "850+", label: "Verified Creators" },
  { value: "4.8", label: "Average Rating" },
  { value: "50+", label: "Countries Served" },
]

const team = [
  {
    name: "The Vision",
    description: "Character Market was born from a simple frustration: why should niche creators compete with $5 generalists on platforms that don't understand their craft? We set out to build something different.",
  },
  {
    name: "The Mission",
    description: "To create the definitive marketplace for AI character and worldbuilding commissions—where creators are valued, customers find exactly what they need, and quality always wins.",
  },
  {
    name: "The Future",
    description: "We're constantly improving based on community feedback. New features, better tools for creators, and an ever-growing library of incredible work from talented specialists.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Built by creators,{" "}
                <span className="text-primary">for creators</span>
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Character Market exists because we believe niche expertise deserves a dedicated home. 
                No more explaining your craft to people who don't get it.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-center">Our Story</h2>
              <div className="mt-10 space-y-8">
                {team.map((item) => (
                  <div key={item.name} className="rounded-xl border bg-card p-6">
                    <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">What We Stand For</h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary/5 px-6 py-16 text-center sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight">Ready to join us?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Whether you're looking to commission your perfect character or share your creative talents, 
                Character Market is the place for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/marketplace">Browse Creators</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/for-creators">Join as Creator</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
