import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Lock,
  UserCheck,
  RefreshCw,
  AlertTriangle,
  Scale,
  Eye,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react"

const protectionSections = [
  {
    icon: Shield,
    title: "Protected Payments",
    description: "Your money is safe with our escrow system",
    details: [
      "Funds are held securely until you approve the final delivery",
      "Payment is only released when both parties are satisfied",
      "Full refund available if the order is cancelled before work begins",
      "Partial refunds available for incomplete or unsatisfactory work",
      "Secure payment processing through trusted providers",
    ],
  },
  {
    icon: UserCheck,
    title: "Verified Creators",
    description: "Quality assurance through our verification process",
    details: [
      "All creators undergo identity verification",
      "Portfolio review by our team",
      "Performance tracking (ratings, completion rate, response time)",
      "Verified badge earned after 5+ successful orders with 4.5+ rating",
      "Ongoing monitoring for quality and policy compliance",
    ],
  },
  {
    icon: RefreshCw,
    title: "Revision Guarantee",
    description: "Satisfaction built into every order",
    details: [
      "Every package includes a specified number of revisions",
      "Clear revision scope defined before work begins",
      "Additional revisions available for purchase if needed",
      "Revision requests handled within the platform",
      "Support team mediates if revision disputes arise",
    ],
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description: "Fair process when issues occur",
    details: [
      "Dedicated support team for dispute handling",
      "Both parties given opportunity to present their case",
      "Evidence-based decision making",
      "Resolution within 5-7 business days",
      "Escalation path for complex disputes",
    ],
  },
]

const creatorProtections = [
  {
    title: "Guaranteed Payment",
    description: "When customers place an order, funds are secured. Complete your work, and you will get paid.",
  },
  {
    title: "Clear Boundaries",
    description: "Revision limits are enforced. Customers cannot request unlimited changes outside the agreed scope.",
  },
  {
    title: "Work Ownership",
    description: "Your original work remains yours until properly compensated. We protect your intellectual property.",
  },
  {
    title: "Fraud Protection",
    description: "We monitor for fraudulent buyers and chargebacks, shielding you from bad actors.",
  },
]

const contentGuidelines = [
  {
    icon: Eye,
    title: "Content Labeling",
    description: "Clear categorization helps everyone find appropriate content",
    points: [
      "SFW/NSFW content filtering",
      "Genre and theme tags",
      "AI-assisted vs. human-made labels",
      "Age-appropriate content boundaries",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Prohibited Content",
    description: "We maintain a safe marketplace by prohibiting",
    points: [
      "Content involving minors inappropriately",
      "Non-consensual themes",
      "Hate speech or discrimination",
      "Intellectual property infringement",
      "Illegal activities",
    ],
  },
]

const securityFeatures = [
  { title: "256-bit SSL encryption", description: "All data transmitted securely" },
  { title: "PCI DSS compliance", description: "Payment card industry standards" },
  { title: "Regular security audits", description: "Third-party penetration testing" },
  { title: "Two-factor authentication", description: "Optional account protection" },
  { title: "Privacy-first design", description: "Minimal data collection" },
]

export default function TrustSafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Trust & Safety
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Character Market is built with safety and trust at its core. Every transaction 
                is protected, every creator is verified, and every dispute is fairly handled.
              </p>
            </div>
          </div>
        </section>

        {/* Main Protections */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {protectionSections.map((section) => (
                <Card key={section.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <section.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{section.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Protections */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">How We Protect Creators</h2>
              <p className="mt-2 text-muted-foreground">
                Creators are the heart of our marketplace. We ensure fair treatment and reliable income.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {creatorProtections.map((protection) => (
                <Card key={protection.title}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{protection.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{protection.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Content Guidelines</h2>
              <p className="mt-2 text-muted-foreground">
                Maintaining a safe and welcoming environment for all users
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {contentGuidelines.map((guideline) => (
                <Card key={guideline.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <guideline.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{guideline.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{guideline.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.points.map((point, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-foreground text-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Platform Security</h2>
                <p className="mt-4 text-lg text-muted">
                  Your data and transactions are protected with enterprise-grade security measures. 
                  We take privacy seriously and follow industry best practices.
                </p>
              </div>
              <div className="space-y-4">
                {securityFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-lg bg-background/10 p-4"
                  >
                    <Check className="h-5 w-5 shrink-0 text-green-400 mt-0.5" />
                    <div>
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-sm text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Need Help?</h2>
            <p className="mt-4 text-muted-foreground">
              Our support team is here to help with any questions or concerns about trust and safety.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
