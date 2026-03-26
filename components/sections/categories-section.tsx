import Link from "next/link"
import { categories } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  UserCircle, 
  BookOpen, 
  Image, 
  Palette, 
  MessageSquare, 
  Globe,
  ArrowRight
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Users,
  UserCircle,
  BookOpen,
  Image,
  Palette,
  MessageSquare,
  Globe,
}

export function CategoriesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Find Exactly What You Need</h2>
          <p className="mt-2 text-muted-foreground">
            Browse by category to discover creators who specialize in your requirements
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((category) => {
            const Icon = iconMap[category.icon] || Users
            return (
              <Link key={category.id} href={`/marketplace?category=${category.id}`}>
                <Card className="group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <CardContent className="flex flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {category.count}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <span>Browse</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* More Categories */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {categories.slice(4).map((category) => {
            const Icon = iconMap[category.icon] || Users
            return (
              <Link key={category.id} href={`/marketplace?category=${category.id}`}>
                <Card className="group transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-4 py-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.count} creators</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
