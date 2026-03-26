import Link from "next/link"

const footerLinks = {
  marketplace: {
    title: "Marketplace",
    links: [
      { name: "Browse Creators", href: "/marketplace" },
      { name: "Character Cards", href: "/marketplace?category=character-cards" },
      { name: "Personas", href: "/marketplace?category=personas" },
      { name: "Lorebooks", href: "/marketplace?category=lorebooks" },
      { name: "Worldbuilding", href: "/marketplace?category=worldbuilding" },
    ],
  },
  creators: {
    title: "For Creators",
    links: [
      { name: "Start Selling", href: "/for-creators" },
      { name: "Creator FAQ", href: "/faq#creators" },
      { name: "Pricing & Fees", href: "/pricing" },
      { name: "Success Stories", href: "/for-creators#stories" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Trust & Safety", href: "/trust-safety" },
      { name: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Creator Agreement", href: "/creator-agreement" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">CM</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Character Market</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The premier marketplace for AI roleplay assets and character commissions.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                All systems operational
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Character Market. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              Protected payments · Verified creators · Revision guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
