import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, CheckCircle2, Heart } from "lucide-react"

export interface Creator {
  id: string
  name: string
  handle: string
  avatar: string
  coverImage: string
  rating: number
  reviewCount: number
  startingPrice: number
  responseTime: string
  isVerified: boolean
  isAvailable: boolean
  specialties: string[]
  completedOrders: number
}

interface CreatorCardProps {
  creator: Creator
  featured?: boolean
}

export function CreatorCard({ creator, featured = false }: CreatorCardProps) {
  return (
    <Card className={`h-full flex flex-col group gap-0 py-0 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${featured ? 'border-primary/20' : ''}`}>
      {/* Cover Image */}
      <div className="relative aspect-[16/9]  overflow-hidden bg-muted">
        <Image
          src={creator.coverImage}
          alt={`${creator.name}'s work`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Availability Badge */}
        {creator.isAvailable && (
          <div className="absolute left-3 top-3">
            <Badge variant="secondary" className="bg-green-500/90 text-white border-0 text-xs">
              Available Now
            </Badge>
          </div>
        )}
        {/* Save Button */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-background hover:text-primary group-hover:opacity-100">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Save creator</span>
        </button>
      </div>

      <CardContent className="flex-1 flex flex-col p-4 ">
        {/* Creator Info */}
        <div className="flex items-start gap-3">
          <div className="relative">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            {creator.isVerified && (
              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="h-3 w-3" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold truncate">{creator.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">@{creator.handle}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-3 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{creator.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({creator.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{creator.responseTime}</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {creator.specialties.slice(0, 3).map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-xs font-normal">
              {specialty}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t">
          <div>
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="text-lg font-semibold">${creator.startingPrice}</p>
          </div>
          <Button asChild size="sm">
            <Link href={`/creator/${creator.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
