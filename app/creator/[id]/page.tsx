import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getCreatorProfile } from "@/lib/creator-data"
import {
  Star,
  Clock,
  CheckCircle2,
  MapPin,
  Calendar,
  MessageSquare,
  Shield,
  Heart,
  Share2,
  Check,
} from "lucide-react"
import { CreatorPurchaseActions } from "@/components/creator-purchase-actions"

interface CreatorPageProps {
  params: Promise<{ id: string }>
}

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { id } = await params
  const creator = getCreatorProfile(id)

  if (!creator) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-40">
        {/* Banner */}
        <div className="relative h-48 sm:h-64 lg:h-80">
          <Image
            src={creator.banner}
            alt={`${creator.name}'s banner`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-16 sm:-mt-20 relative z-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              {/* Avatar and Info */}
              <div className="flex items-end gap-4">
                <div className="relative">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    width={120}
                    height={120}
                    className="rounded-2xl border-4 border-background object-cover shadow-lg sm:h-32 sm:w-32"
                  />
                  {creator.isVerified && (
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold sm:text-3xl">{creator.name}</h1>
                    {creator.isAvailable && (
                      <Badge className="bg-green-500 text-white border-0">Available</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">@{creator.handle}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Save creator</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share profile</span>
                </Button>
                <Button size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Stats and Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-b pb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">{creator.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({creator.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Responds {creator.responseTime}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>{creator.completionRate}% completion rate</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Verified Creator</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-8 py-8 lg:grid-cols-3">
            {/* Left Column - About and Portfolio */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-3 text-lg font-semibold">About Me</h2>
                      <p className="text-muted-foreground leading-relaxed">{creator.bio}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{creator.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Member since {creator.memberSince}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-sm font-semibold">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {creator.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-sm font-semibold">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {creator.languages.map((language) => (
                          <Badge key={language} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {creator.portfolio.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-white/80">{item.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    {creator.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Image
                              src={review.avatar}
                              alt={review.author}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-semibold">{review.author}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {review.orderType}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-accent text-accent"
                                          : "text-muted"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="mt-3 text-muted-foreground">{review.content}</p>
                              <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {creator.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Purchase Actions */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 pt-16">
                <CreatorPurchaseActions 
                  creatorName={creator.name} 
                  startingPrice={creator.packages[0]?.price || 35} 
                  packages={creator.packages}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
