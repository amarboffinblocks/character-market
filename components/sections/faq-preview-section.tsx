import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What is a character card?",
    answer: "A character card is a complete AI character definition that includes personality traits, backstory, dialogue examples, and other attributes that help AI systems roleplay as that character consistently.",
  },
  {
    question: "How do I know if a creator is trustworthy?",
    answer: "Look for the verified badge on creator profiles. Verified creators have been reviewed by our team and have demonstrated quality work. You can also check their reviews, completion rate, and response time.",
  },
  {
    question: "What happens if I am not satisfied with my order?",
    answer: "Every order includes revisions based on the package you choose. If you are still not satisfied after revisions, our support team will help mediate. Your payment is protected until you approve the final delivery.",
  },
  {
    question: "How much do commissions typically cost?",
    answer: "Prices vary by creator and complexity. Simple character cards start around $25-50, while complex worldbuilding bundles can be $200-500+. Each creator sets their own prices and packages.",
  },
]

export function FAQPreviewSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground">
            Quick answers to common questions about Character Market
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button asChild variant="ghost">
            <Link href="/faq">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
