import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, DollarSign, CreditCard, PiggyBank, HelpCircle } from "lucide-react"

const customerInfo = [
  {
    title: "What You Pay",
    description: "You only pay the creator's listed price. There are no hidden fees or additional charges for customers.",
    icon: DollarSign,
  },
  {
    title: "Payment Protection",
    description: "Your payment is held securely until you approve the delivered work. Full refund if the order isn't delivered.",
    icon: CreditCard,
  },
  {
    title: "Transparent Pricing",
    description: "All prices include the full cost. What you see on the creator's profile is what you pay at checkout.",
    icon: PiggyBank,
  },
]

const creatorFees = [
  {
    tier: "Standard",
    fee: "15%",
    description: "Our standard platform fee for all creators",
    features: [
      "Keep 85% of every sale",
      "Secure payment processing",
      "Order management tools",
      "Profile customization",
      "Customer messaging",
      "Review collection",
    ],
  },
  {
    tier: "Verified Creator",
    fee: "15%",
    description: "Same great rate with added visibility",
    features: [
      "Everything in Standard",
      "Verified badge on profile",
      "Priority in search results",
      "Featured placement eligibility",
      "Early access to new features",
      "Dedicated support channel",
    ],
    highlighted: true,
  },
]

const faqs = [
  {
    question: "When do I get paid?",
    answer: "Payments are released to your account within 24 hours of order completion. You can withdraw to your bank account or PayPal weekly.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. The 15% platform fee is all-inclusive. There are no additional charges for payment processing, withdrawals, or account maintenance.",
  },
  {
    question: "How does payment protection work?",
    answer: "When a customer places an order, their payment is held securely by Character Market. Once you deliver the work and the customer approves it (or the auto-approval period ends), the funds are released to you.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Customers can pay with credit/debit cards, PayPal, and select regional payment methods. Creators can receive payments via bank transfer or PayPal.",
  },
  {
    question: "Is there a minimum withdrawal amount?",
    answer: "Yes, the minimum withdrawal is $10. This helps us keep transaction costs low so we can maintain our competitive fee structure.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Customers are eligible for a full refund if the creator doesn't deliver within the agreed timeframe or if the delivery doesn't match the order requirements. Partial refunds can be arranged for scope changes.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Simple, transparent{" "}
                <span className="text-primary">pricing</span>
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                No surprises, no hidden fees. Creators keep 85% of every sale.
                Customers pay exactly what they see.
              </p>
            </div>
          </div>
        </section>

        {/* For Customers */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">For Customers</h2>
              <p className="mt-4 text-muted-foreground">
                No platform fees, no surprises. Just quality work at fair prices.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {customerInfo.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg">
                <Link href="/marketplace">Browse Creators</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Creators */}
        <section className="border-t bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">For Creators</h2>
              <p className="mt-4 text-muted-foreground">
                One simple fee. Keep 85% of everything you earn.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
              {creatorFees.map((tier) => (
                <Card
                  key={tier.tier}
                  className={tier.highlighted ? "border-primary shadow-lg" : ""}
                >
                  {tier.highlighted && (
                    <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.tier}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold">{tier.fee}</span>
                      <span className="text-muted-foreground"> platform fee</span>
                    </div>
                    <CardDescription className="mt-2">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg">
                <Link href="/for-creators">Start Selling</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fee Calculator */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl border bg-card p-8 text-center">
                <h3 className="text-2xl font-bold">See What You Keep</h3>
                <p className="mt-2 text-muted-foreground">
                  For every $100 commission, here's the breakdown:
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-3xl font-bold text-primary">$85</div>
                    <div className="mt-1 text-sm text-muted-foreground">You Keep</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-3xl font-bold">$15</div>
                    <div className="mt-1 text-sm text-muted-foreground">Platform Fee</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-3xl font-bold">$0</div>
                    <div className="mt-1 text-sm text-muted-foreground">Hidden Fees</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Payment processing is included in the platform fee. No surprise deductions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Pricing FAQ</h2>
              <p className="mt-4 text-muted-foreground">
                Common questions about fees, payments, and refunds
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl divide-y">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="flex items-start gap-3 font-semibold">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="mt-3 pl-8 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary/5 px-6 py-16 text-center sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Join thousands of creators earning on Character Market, or find your perfect creator today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/for-creators">Start Selling</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/marketplace">Browse Creators</Link>
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
