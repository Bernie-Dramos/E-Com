"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { mockProducts } from "@/lib/mockData"
import { Filter, Grid, List } from "lucide-react"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { t } = useLanguage()
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categoryProducts = mockProducts.filter((product) => product.category === params.category)

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "upper-wear":
        return t("upperWear")
      case "lower-wear":
        return t("lowerWear")
      case "accessories":
        return t("accessories")
      case "shoes":
        return t("shoes")
      default:
        return category
    }
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sage-green to-forest-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{getCategoryTitle(params.category)}</h1>
          <p className="text-xl opacity-90">Discover our sustainable collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sage-green"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-sage-green text-white" : "bg-gray-200 text-gray-600"}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-sage-green text-white" : "bg-gray-200 text-gray-600"}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group card-hover bg-white rounded-lg shadow-md overflow-hidden ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div className={`${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"} overflow-hidden`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-forest-green transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <p className="text-xl font-bold text-forest-green">${product.price.toFixed(2)}</p>
                {product.colors && (
                  <div className="flex space-x-2 mt-3">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.toLowerCase().replace(" ", "") }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
