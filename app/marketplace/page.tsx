"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CreatorCard } from "@/components/creator-card"
import { Filters } from "@/components/marketplace/filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { allCreators, sortOptions, categories } from "@/lib/mock-data"
import { Search, X } from "lucide-react"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [availableOnly, setAvailableOnly] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")

  const filteredCreators = useMemo(() => {
    let results = allCreators

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (creator) =>
          creator.name.toLowerCase().includes(query) ||
          creator.handle.toLowerCase().includes(query) ||
          creator.specialties.some((s) => s.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      results = results.filter((creator) =>
        creator.specialties.some((specialty) =>
          selectedCategories.some(
            (cat) =>
              categories
                .find((c) => c.id === cat)
                ?.name.toLowerCase()
                .includes(specialty.toLowerCase()) ||
              specialty.toLowerCase().includes(cat.replace("-", " "))
          )
        )
      )
    }

    // Price filter
    results = results.filter(
      (creator) =>
        creator.startingPrice >= priceRange[0] &&
        (priceRange[1] === 500 || creator.startingPrice <= priceRange[1])
    )

    // Verified filter
    if (verifiedOnly) {
      results = results.filter((creator) => creator.isVerified)
    }

    // Available filter
    if (availableOnly) {
      results = results.filter((creator) => creator.isAvailable)
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        results = [...results].sort((a, b) => b.rating - a.rating)
        break
      case "price-low":
        results = [...results].sort((a, b) => a.startingPrice - b.startingPrice)
        break
      case "price-high":
        results = [...results].sort((a, b) => b.startingPrice - a.startingPrice)
        break
      case "newest":
        results = [...results].sort((a, b) => b.completedOrders - a.completedOrders)
        break
      case "fastest":
        results = [...results].sort((a, b) => a.responseTime.localeCompare(b.responseTime))
        break
      default:
        // relevance - keep original order
        break
    }

    return results
  }, [searchQuery, selectedCategories, priceRange, verifiedOnly, availableOnly, sortBy])

  const removeCategory = (categoryId: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== categoryId))
  }

  const activeFilterCount =
    selectedCategories.length +
    (verifiedOnly ? 1 : 0) +
    (availableOnly ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">Browse Creators</h1>
            <p className="mt-2 text-muted-foreground">
              Discover talented creators specializing in AI characters and worldbuilding
            </p>
          </div>
        </div>

        {/* Search and Sort Bar */}
        <div className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search creators, specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <Filters
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  verifiedOnly={verifiedOnly}
                  setVerifiedOnly={setVerifiedOnly}
                  availableOnly={availableOnly}
                  setAvailableOnly={setAvailableOnly}
                  mode="mobile"
                />
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || searchQuery) && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategories.map((categoryId) => {
                  const category = categories.find((c) => c.id === categoryId)
                  return (
                    <Badge key={categoryId} variant="secondary" className="gap-1">
                      {category?.name}
                      <button onClick={() => removeCategory(categoryId)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Filters */}
            <Filters
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              verifiedOnly={verifiedOnly}
              setVerifiedOnly={setVerifiedOnly}
              availableOnly={availableOnly}
              setAvailableOnly={setAvailableOnly}
              mode="desktop"
            />

            {/* Results */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredCreators.length}</span> creators
                </p>
              </div>

              {/* Creator Grid */}
              {filteredCreators.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredCreators.map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-muted p-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 font-semibold">No creators found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategories([])
                      setPriceRange([0, 500])
                      setVerifiedOnly(false)
                      setAvailableOnly(false)
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
