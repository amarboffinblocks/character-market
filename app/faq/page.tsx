"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, MessageSquare, ArrowRight } from "lucide-react"

const customerFaqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is Character Market?",
        answer: "Character Market is a specialized marketplace connecting customers with creators who specialize in AI roleplay assets, character cards, personas, lorebooks, and worldbuilding content. Unlike generic freelance platforms, we focus exclusively on this niche, ensuring creators and customers speak the same language.",
      },
      {
        question: "Do I need an account to browse?",
        answer: "No, you can browse creators and view portfolios without creating an account. However, you will need to sign up to message creators or place orders.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and select regional payment methods. All payments are processed securely through our trusted payment partners.",
      },
    ],
  },
  {
    category: "Ordering",
    questions: [
      {
        question: "How do I place an order?",
        answer: "Find a creator whose work you like, select a package that fits your needs (or message them for a custom quote), then complete the checkout. Your payment is held securely until you approve the final delivery.",
      },
      {
        question: "Can I request custom work outside the listed packages?",
        answer: "Yes! You can message any creator to discuss custom projects. They can provide a custom quote based on your specific requirements.",
      },
      {
        question: "How long does delivery take?",
        answer: "Delivery times vary by creator and package. Each listing shows the expected delivery time. Most orders are completed within 3-7 days, though complex projects may take longer.",
      },
      {
        question: "What if I need my order faster?",
        answer: "Many creators offer rush delivery for an additional fee. Message the creator before ordering to confirm they can accommodate your timeline.",
      },
    ],
  },
  {
    category: "Revisions & Refunds",
    questions: [
      {
        question: "How many revisions are included?",
        answer: "Each package specifies the number of included revisions. Basic packages typically include 2 revisions, while premium packages may include 5 or more. Additional revisions can often be purchased.",
      },
      {
        question: "What counts as a revision?",
        answer: "A revision is a request to modify the delivered work within the original scope. Adding entirely new elements or changing the core concept may be considered a new order rather than a revision.",
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, under certain conditions. If a creator fails to deliver or you cancel before work begins, you receive a full refund. Partial refunds may be available if work is incomplete or significantly differs from the agreed scope. See our Trust & Safety page for details.",
      },
      {
        question: "What if I am not satisfied with the final delivery?",
        answer: "First, use your included revisions to request changes. If you are still unsatisfied after using all revisions, contact our support team. We will review the case and help find a fair resolution.",
      },
    ],
  },
  {
    category: "Content & Assets",
    questions: [
      {
        question: "What is a character card?",
        answer: "A character card is a comprehensive AI character definition that includes personality traits, backstory, dialogue examples, and behavioral guidelines. It is designed to help AI systems roleplay as that character consistently.",
      },
      {
        question: "What is a lorebook?",
        answer: "A lorebook is a collection of world lore, context, and background information that can be integrated into AI roleplay systems. It enriches the storytelling experience with consistent world details.",
      },
      {
        question: "What file formats will I receive?",
        answer: "This depends on the asset type and creator. Common formats include TXT, JSON, PNG for images, and platform-specific formats for certain AI tools. Creators list supported formats in their packages.",
      },
      {
        question: "Can I use commissioned work commercially?",
        answer: "This depends on the agreement with the creator. Most personal-use commissions grant you rights to use the work privately. Commercial use typically requires explicit agreement and may cost more. Always clarify usage rights before ordering.",
      },
    ],
  },
]

const creatorFaqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I become a creator?",
        answer: "Sign up, complete your profile with portfolio samples and packages, and you can start receiving orders. There is no application process or approval wait time for basic accounts.",
      },
      {
        question: "Is there a fee to join?",
        answer: "No, joining is completely free. We only take a 15% commission when you make a sale. There are no listing fees, monthly subscriptions, or hidden charges.",
      },
      {
        question: "How do I get verified?",
        answer: "Complete your first 5 orders with positive reviews and maintain a 4.5+ rating. Verification is then automatically granted. Verified creators get a badge and improved visibility.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        question: "How much commission does Character Market take?",
        answer: "We take 15% of each sale. This covers payment processing, platform maintenance, customer acquisition, and support services. You keep 85% of every order.",
      },
      {
        question: "When do I get paid?",
        answer: "Payments are released once the customer approves your delivery. We process payouts weekly (every Monday) with no minimum threshold. You can receive funds via bank transfer or PayPal.",
      },
      {
        question: "Can I set my own prices?",
        answer: "Absolutely. You have complete control over your pricing, packages, and add-ons. We recommend researching market rates for your specialty to stay competitive.",
      },
      {
        question: "What happens if a customer disputes the payment?",
        answer: "Our support team investigates disputes fairly. If you delivered work as agreed, you are protected. We handle chargeback risks so you do not have to.",
      },
    ],
  },
  {
    category: "Orders & Delivery",
    questions: [
      {
        question: "How do I receive orders?",
        answer: "Orders come through the platform. You will receive email and in-app notifications. You can manage all orders from your creator dashboard.",
      },
      {
        question: "Can I decline an order?",
        answer: "Yes, you can decline orders before accepting them. If you have already accepted but cannot complete the order, contact support immediately to arrange a cancellation.",
      },
      {
        question: "How do revisions work?",
        answer: "Each of your packages specifies how many revisions are included. Customers can request changes within the original scope. You can always offer additional paid revisions.",
      },
      {
        question: "What if a customer is unreasonable?",
        answer: "Our support team is here to help. If a customer makes requests outside the agreed scope or becomes difficult, contact us. We protect creators from abuse.",
      },
    ],
  },
  {
    category: "Profile & Visibility",
    questions: [
      {
        question: "How do customers find me?",
        answer: "Customers discover creators through search, category browsing, and recommendations. Factors like response time, ratings, and profile completeness affect your visibility.",
      },
      {
        question: "How can I improve my visibility?",
        answer: "Maintain high ratings, respond quickly to messages, keep your portfolio fresh, and deliver quality work on time. Verified status and positive reviews significantly boost visibility.",
      },
      {
        question: "Can I promote my Character Market profile elsewhere?",
        answer: "Yes! We encourage you to share your profile link on social media, communities, and other platforms. Direct traffic helps build your reputation.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filterFaqs = (faqs: typeof customerFaqs) => {
    if (!searchQuery) return faqs
    const query = searchQuery.toLowerCase()
    return faqs
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.questions.length > 0)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about Character Market
              </p>

              {/* Search */}
              <div className="relative mt-8 max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="customers" className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-8">
                <TabsTrigger value="customers">For Customers</TabsTrigger>
                <TabsTrigger value="creators">For Creators</TabsTrigger>
              </TabsList>

              <TabsContent value="customers">
                {filterFaqs(customerFaqs).map((category) => (
                  <div key={category.category} className="mb-10">
                    <h2 className="mb-4 text-xl font-semibold">{category.category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`customer-${category.category}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
                {filterFaqs(customerFaqs).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No questions match your search.</p>
                    <Button
                      variant="ghost"
                      className="mt-4"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear search
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="creators">
                {filterFaqs(creatorFaqs).map((category) => (
                  <div key={category.category} className="mb-10">
                    <h2 className="mb-4 text-xl font-semibold">{category.category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`creator-${category.category}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
                {filterFaqs(creatorFaqs).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No questions match your search.</p>
                    <Button
                      variant="ghost"
                      className="mt-4"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear search
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight">Still Have Questions?</h2>
            <p className="mt-4 text-muted-foreground">
              Cannot find what you are looking for? Our support team is happy to help.
            </p>
            <Button asChild className="mt-8">
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
