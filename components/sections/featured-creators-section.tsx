import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CreatorCard } from "@/components/creator-card"
import { featuredCreators } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function FeaturedCreatorsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Creators</h2>
            <p className="mt-2 text-muted-foreground">
              Top-rated specialists ready to bring your characters to life
            </p>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link href="/marketplace">
              View all creators
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Creator Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCreators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
