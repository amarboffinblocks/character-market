export interface Package {
  id: string
  name: string
  description: string
  price: number
  deliveryDays: number
  revisions: number
  features: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  image: string
  category: string
}

export interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  content: string
  date: string
  orderType: string
}

export interface CreatorProfile {
  id: string
  name: string
  handle: string
  avatar: string
  banner: string
  bio: string
  location: string
  memberSince: string
  rating: number
  reviewCount: number
  responseTime: string
  completionRate: number
  completedOrders: number
  isVerified: boolean
  isAvailable: boolean
  specialties: string[]
  languages: string[]
  packages: Package[]
  portfolio: PortfolioItem[]
  reviews: Review[]
  faqs: { question: string; answer: string }[]
}

export const creatorProfiles: Record<string, CreatorProfile> = {
  "luna-pixel": {
    id: "luna-pixel",
    name: "Luna Pixel",
    handle: "lunapixel",
    avatar: "/avatars/luna-avatar.jpg",
    banner: "/portfolio/luna-cover.jpg",
    bio: "Passionate character designer with 5+ years of experience crafting immersive AI personalities. I specialize in fantasy and sci-fi characters that come to life through detailed backstories and authentic dialogue. Every character I create is built to feel real and engaging.",
    location: "Los Angeles, CA",
    memberSince: "January 2024",
    rating: 4.9,
    reviewCount: 127,
    responseTime: "< 2 hrs",
    completionRate: 99,
    completedOrders: 342,
    isVerified: true,
    isAvailable: true,
    specialties: ["Character Cards", "Personas", "Fantasy", "Sci-Fi", "Romance"],
    languages: ["English", "Spanish"],
    packages: [
      {
        id: "basic",
        name: "Basic Character",
        description: "A well-crafted character card with personality, backstory, and sample dialogue",
        price: 35,
        deliveryDays: 3,
        revisions: 2,
        features: [
          "Detailed personality profile",
          "500+ word backstory",
          "10 dialogue examples",
          "Basic character traits",
        ],
      },
      {
        id: "standard",
        name: "Standard Character",
        description: "A comprehensive character with expanded lore and multiple scenarios",
        price: 65,
        deliveryDays: 5,
        revisions: 3,
        features: [
          "Everything in Basic",
          "1000+ word backstory",
          "25 dialogue examples",
          "3 scenario templates",
          "Relationship dynamics",
        ],
      },
      {
        id: "premium",
        name: "Premium Character",
        description: "A fully realized character with extensive worldbuilding integration",
        price: 120,
        deliveryDays: 7,
        revisions: 5,
        features: [
          "Everything in Standard",
          "2000+ word backstory",
          "50+ dialogue examples",
          "Custom lorebook entries",
          "Multiple character moods",
          "Priority support",
        ],
      },
    ],
    portfolio: [
      {
        id: "1",
        title: "Elara Starweaver",
        image: "/portfolio/elara-starweaver.jpg",
        category: "Fantasy",
      },
      {
        id: "2",
        title: "Captain Nova",
        image: "/portfolio/captain-nova.jpg",
        category: "Sci-Fi",
      },
      {
        id: "3",
        title: "Sage Thornwood",
        image: "/portfolio/sage-thornwood.jpg",
        category: "Fantasy",
      },
      {
        id: "4",
        title: "Dr. Iris Chen",
        image: "/portfolio/dr-iris.jpg",
        category: "Modern",
      },
      {
        id: "5",
        title: "Zephyr Nightshade",
        image: "/portfolio/zephyr-nightshade.jpg",
        category: "Dark Fantasy",
      },
      {
        id: "6",
        title: "Maya Solstice",
        image: "/portfolio/maya-solstice.jpg",
        category: "Romance",
      },
    ],
    reviews: [
      {
        id: "1",
        author: "Alex M.",
        avatar: "/avatars/alex-testimonial.jpg",
        rating: 5,
        content: "Luna absolutely nailed my character! The personality depth and dialogue examples were exactly what I was looking for. Will definitely order again.",
        date: "2 weeks ago",
        orderType: "Standard Character",
      },
      {
        id: "2",
        author: "Sarah K.",
        avatar: "/avatars/sarah-testimonial.jpg",
        rating: 5,
        content: "Incredible attention to detail. The character feels so alive and the backstory integration was seamless. Highly recommend!",
        date: "1 month ago",
        orderType: "Premium Character",
      },
      {
        id: "3",
        author: "Jordan T.",
        avatar: "/avatars/jordan-testimonial.jpg",
        rating: 4,
        content: "Great work overall. Quick delivery and responsive to feedback. The character exceeded my expectations.",
        date: "1 month ago",
        orderType: "Basic Character",
      },
    ],
    faqs: [
      {
        question: "What information do you need to get started?",
        answer: "I will need a brief description of your character concept, preferred genre/setting, and any specific personality traits or backstory elements you want included.",
      },
      {
        question: "Can you work with existing characters?",
        answer: "Yes! I can expand on existing characters, create alternate versions, or help flesh out characters you have already started developing.",
      },
      {
        question: "Do you offer rush delivery?",
        answer: "Yes, I can accommodate rush orders for an additional 50% fee. Please message me first to confirm availability.",
      },
    ],
  },
}

export function getCreatorProfile(id: string): CreatorProfile | undefined {
  return creatorProfiles[id]
}
