import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  MessageSquare,
  CreditCard,
  Package,
  Star,
  RefreshCw,
  ArrowRight,
  Check,
  UserPlus,
  Palette,
  DollarSign,
  BarChart3,
} from "lucide-react"

const customerSteps = [
  {
    number: "01",
    icon: Search,
    title: "Browse & Discover",
    description: "Explore our marketplace of verified creators. Use filters to find specialists in your preferred category, style, and price range.",
    details: [
      "Search by specialty (character cards, personas, lorebooks)",
      "Filter by price, rating, and availability",
      "View portfolios and sample work",
      "Read reviews from other customers",
    ],
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss Your Project",
    description: "Message creators to discuss your vision. Get custom quotes, ask questions, and ensure they understand your requirements.",
    details: [
      "Direct messaging with creators",
      "Share reference materials and ideas",
      "Get custom quotes for complex projects",
      "Clarify timeline and deliverables",
    ],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Place Your Order",
    description: "Choose a package or accept a custom quote. Your payment is held securely until you approve the final delivery.",
    details: [
      "Select from creator packages",
      "Secure payment processing",
      "Funds held in escrow",
      "Clear project timeline",
    ],
  },
  {
    number: "04",
    icon: Package,
    title: "Receive Your Work",
    description: "Get your custom creation delivered. Review it carefully and request revisions if needed until you are satisfied.",
    details: [
      "Delivery notifications",
      "Preview and review work",
      "Request revisions as needed",
      "Download final files",
    ],
  },
  {
    number: "05",
    icon: Star,
    title: "Approve & Review",
    description: "Once satisfied, approve the delivery to release payment. Leave a review to help other customers and support the creator.",
    details: [
      "Approve final delivery",
      "Payment released to creator",
      "Leave detailed review",
      "Save creator for future orders",
    ],
  },
]

const creatorSteps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and build your creator profile. Showcase your portfolio, set your packages, and describe your expertise.",
    details: [
      "Quick signup process",
      "Portfolio showcase",
      "Custom pricing packages",
      "Bio and specialty tags",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Get Discovered",
    description: "Customers find you through search, categories, and recommendations. Our algorithm promotes quality work and reliability.",
    details: [
      "Searchable profile",
      "Category listings",
      "Featured creator opportunities",
      "Recommendation system",
    ],
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Communicate & Quote",
    description: "Respond to customer inquiries, discuss requirements, and provide custom quotes for unique projects.",
    details: [
      "Built-in messaging system",
      "Quick response tools",
      "Custom quote creation",
      "Project requirement forms",
    ],
  },
  {
    number: "04",
    icon: Package,
    title: "Create & Deliver",
    description: "Work on your commission and deliver through the platform. Manage revisions and ensure customer satisfaction.",
    details: [
      "Secure file delivery",
      "Revision management",
      "Progress updates",
      "Deadline tracking",
    ],
  },
  {
    number: "05",
    icon: DollarSign,
    title: "Get Paid",
    description: "Receive payment once the customer approves. Weekly payouts with no minimums. Keep 85% of every sale.",
    details: [
      "Automatic payment release",
      "Weekly payouts",
      "Multiple payout methods",
      "Detailed earnings reports",
    ],
  },
]

const protections = [
  {
    title: "For Customers",
    items: [
      "Secure escrow payments",
      "Revision guarantees",
      "Verified creators",
      "Dispute resolution",
      "Money-back protection",
    ],
  },
  {
    title: "For Creators",
    items: [
      "Guaranteed payment",
      "Clear revision limits",
      "Dispute support",
      "Fraud protection",
      "Work ownership clarity",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                How Character Market Works
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A simple, secure process for commissioning custom AI characters and 
                worldbuilding content from expert creators.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="customers" className="w-full">
              <TabsList className="mx-auto w-full max-w-md grid grid-cols-2">
                <TabsTrigger value="customers">For Customers</TabsTrigger>
                <TabsTrigger value="creators">For Creators</TabsTrigger>
              </TabsList>

              <TabsContent value="customers" className="mt-12">
                <div className="space-y-12">
                  {customerSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <step.icon className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-sm text-muted-foreground">
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-lg text-muted-foreground">{step.description}</p>
                        <ul className="mt-6 space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <Check className="h-5 w-5 text-primary" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Visual Placeholder */}
                      <div className="flex-1">
                        <div className="aspect-video rounded-2xl bg-muted/50 border" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="creators" className="mt-12">
                <div className="space-y-12">
                  {creatorSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <step.icon className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-sm text-muted-foreground">
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-lg text-muted-foreground">{step.description}</p>
                        <ul className="mt-6 space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <Check className="h-5 w-5 text-primary" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Visual Placeholder */}
                      <div className="flex-1">
                        <div className="aspect-video rounded-2xl bg-muted/50 border" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Protection Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Protected Every Step of the Way
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our platform includes built-in protections for both customers and creators
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {protections.map((protection) => (
                <Card key={protection.title}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{protection.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {protection.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/trust-safety">
                  Learn More About Trust & Safety
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold">Ready to Commission?</h3>
                  <p className="mt-2 text-primary-foreground/80">
                    Browse our marketplace to find the perfect creator for your project.
                  </p>
                  <Button asChild className="mt-6 bg-background text-foreground hover:bg-background/90">
                    <Link href="/marketplace">
                      Browse Creators
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold">Want to Sell?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Join our creator community and start earning from your expertise.
                  </p>
                  <Button asChild className="mt-6">
                    <Link href="/for-creators">
                      Become a Creator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
