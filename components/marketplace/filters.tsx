"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { categories, priceRanges, deliveryTimes } from "@/lib/mock-data"
import { SlidersHorizontal, X } from "lucide-react"

interface FiltersProps {
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  verifiedOnly: boolean
  setVerifiedOnly: (verified: boolean) => void
  availableOnly: boolean
  setAvailableOnly: (available: boolean) => void
  mode?: "mobile" | "desktop" | "both"
}

export function Filters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  verifiedOnly,
  setVerifiedOnly,
  availableOnly,
  setAvailableOnly,
  mode = "both",
}: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 500])
    setVerifiedOnly(false)
    setAvailableOnly(false)
  }

  const activeFilterCount =
    selectedCategories.length +
    (verifiedOnly ? 1 : 0) +
    (availableOnly ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)

  const FilterContent = () => (
    <div className="flex flex-col gap-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCategoryToggle(category.id)}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="flex-1 cursor-pointer text-sm font-normal"
              >
                {category.name}
              </Label>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Price Range</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={0}
            max={500}
            step={10}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1] === 500 ? "500+" : priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Quick Filters */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Quick Filters</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="verified-only"
              checked={verifiedOnly}
              onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
            />
            <Label htmlFor="verified-only" className="cursor-pointer text-sm font-normal">
              Verified creators only
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="available-only"
              checked={availableOnly}
              onCheckedChange={(checked) => setAvailableOnly(checked as boolean)}
            />
            <Label htmlFor="available-only" className="cursor-pointer text-sm font-normal">
              Available now
            </Label>
          </div>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <>
          <Separator />
          <Button variant="ghost" onClick={clearFilters} className="w-full">
            <X className="mr-2 h-4 w-4" />
            Clear all filters
          </Button>
        </>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      {(mode === "desktop" || mode === "both") && (
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              )}
            </div>
            <FilterContent />
          </div>
        </aside>
      )}

      {/* Mobile Filters */}
      {(mode === "mobile" || mode === "both") && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 px-4">
            <FilterContent />
          </div>
          <div className="mt-6 px-4">
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Show Results
            </Button>
          </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}
