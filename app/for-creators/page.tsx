import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DollarSign,
  Users,
  BadgeCheck,
  TrendingUp,
  Palette,
  Shield,
  Clock,
  BarChart3,
  ArrowRight,
  Check,
  Quote,
  UserCircle,
  Search,
} from "lucide-react"
import { Stepper } from "@/components/ui/stepper"

const benefits = [
  {
    icon: DollarSign,
    title: "Keep 85% of Every Sale",
    description: "Industry-leading commission rates mean more money in your pocket. No hidden fees, no surprises.",
  },
  {
    icon: Users,
    title: "Reach Niche Customers",
    description: "Connect with buyers who understand and actively seek your specialized AI character work.",
  },
  {
    icon: BadgeCheck,
    title: "Build Your Reputation",
    description: "Earn verified badges, collect reviews, and establish yourself as a trusted expert in the community.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Analytics, repeat customers, and marketing tools to help you scale your creative business.",
  },
  {
    icon: Palette,
    title: "Creative Freedom",
    description: "Set your own prices, packages, and terms. You control your creative process and workflow.",
  },
  {
    icon: Shield,
    title: "Protected Transactions",
    description: "Secure payments, clear policies, and dispute resolution protect your work and income.",
  },
]

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up in minutes. Add your portfolio, set your packages, and tell customers about your expertise.",
    icon: UserCircle,
  },
  {
    number: "02",
    title: "Get Discovered",
    description: "Customers find you through search, categories, and recommendations. No cold outreach needed.",
    icon: Search,
  },
  {
    number: "03",
    title: "Deliver & Earn",
    description: "Complete orders, collect reviews, and receive payments directly. Weekly payouts, no minimums.",
    icon: DollarSign,
  },
]

const testimonials = [
  {
    content: "I went from struggling to find clients on generic platforms to having a waitlist. Character Market customers actually value quality work.",
    author: "Maya Chen",
    role: "Character Designer",
    earnings: "$3,200/month",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    content: "The best part is not having to explain what a lorebook is. Customers come here knowing exactly what they want.",
    author: "James Morrison",
    role: "Worldbuilder",
    earnings: "$2,800/month",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    content: "I have been freelancing for years but never had this level of consistent income. The niche focus makes all the difference.",
    author: "Aria Santos",
    role: "Persona Specialist",
    earnings: "$4,100/month",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
]

const faqs = [
  {
    question: "How much can I realistically earn?",
    answer: "Earnings vary based on your specialty, pricing, and availability. Our top 25% of creators earn $2,400+ per month. New creators typically see their first orders within the first week.",
  },
  {
    question: "What are the platform fees?",
    answer: "We take a 15% commission on each sale. That is it. No listing fees, no monthly subscriptions, no hidden charges. You only pay when you earn.",
  },
  {
    question: "How do I get paid?",
    answer: "Payments are released after the customer approves your delivery. We offer weekly payouts via bank transfer or PayPal with no minimum threshold.",
  },
  {
    question: "What if a customer is difficult?",
    answer: "Our support team handles disputes. Payments are held in escrow until delivery is approved, and we have clear revision policies to protect both parties.",
  },
  {
    question: "Do I need to be a professional artist?",
    answer: "Not necessarily. Many successful creators focus on writing-based work like character backstories, personas, and lorebooks. What matters is quality and understanding the niche.",
  },
  {
    question: "How do I become a verified creator?",
    answer: "Complete your profile, deliver your first 5 orders with positive reviews, and maintain a 4.5+ rating. Verification is automatic once you meet these criteria.",
  },
]

const earningsExamples = [
  { type: "Character Card", range: "$25 - $150" },
  { type: "Persona Profile", range: "$30 - $120" },
  { type: "Lorebook Package", range: "$75 - $300" },
  { type: "Avatar Commission", range: "$40 - $200" },
  { type: "Worldbuilding Bundle", range: "$200 - $500" },
  { type: "Prompt Pack", range: "$15 - $75" },
]

export default function ForCreatorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-6 bg-primary text-primary-foreground">
                Now accepting creator applications
              </Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Turn Your Character Expertise Into Income
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted sm:text-xl">
                Join the premier marketplace for AI character creators. Sell to customers 
                who understand and value your specialized work.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90">
                  <Link href="#signup">
                    Start Selling Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-muted text-black hover:text-white hover:bg-muted/20">
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">850+</p>
                <p className="mt-1 text-sm text-muted-foreground">Active Creators</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">$2.4M+</p>
                <p className="mt-1 text-sm text-muted-foreground">Paid to Creators</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">12,400+</p>
                <p className="mt-1 text-sm text-muted-foreground">Orders Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">85%</p>
                <p className="mt-1 text-sm text-muted-foreground">Creator Take Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Why Creators Choose Us</h2>
              <p className="mt-2 text-muted-foreground">
                Everything you need to build a successful creative business
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Earnings Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Earn What Your Work Is Worth
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  No more competing with $5 generalists. Our customers come specifically 
                  for quality AI character work and are willing to pay premium prices.
                </p>
                <div className="mt-8 rounded-xl bg-background p-6 shadow-sm">
                  <p className="text-sm text-muted-foreground">Average creator earns</p>
                  <p className="mt-1 text-4xl font-bold">$2,400<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                  <p className="mt-2 text-xs text-muted-foreground">Based on top 25% of active creators</p>
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Typical Price Ranges</h3>
                <div className="space-y-3">
                  {earningsExamples.map((example) => (
                    <div
                      key={example.type}
                      className="flex items-center justify-between rounded-lg bg-background p-4 shadow-sm"
                    >
                      <span>{example.type}</span>
                      <span className="font-mono font-semibold">{example.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Start Earning in 3 Steps</h2>
              <p className="mt-2 text-muted-foreground">
                Get set up and start receiving orders quickly
              </p>
            </div>
            <Stepper steps={steps} className="mt-16" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Creator Success Stories</h2>
              <p className="mt-2 text-muted-foreground">
                Hear from creators who have built thriving businesses on Character Market
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="relative">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <p className="mt-4 text-foreground">{testimonial.content}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-green-100 text-green-700 border-0">
                      {testimonial.earnings}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Creator FAQ</h2>
              <p className="mt-2 text-muted-foreground">
                Everything you need to know about selling on Character Market
              </p>
            </div>
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="signup" className="bg-primary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Start Your Creator Journey?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Join hundreds of creators who have turned their passion for character design 
                and worldbuilding into a sustainable income.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
                  <Link href="/signup/creator">
                    Apply to Become a Creator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60">
                Free to join. Start earning within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
