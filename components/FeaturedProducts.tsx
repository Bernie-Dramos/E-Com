"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { mockProducts } from "@/lib/mockData"

export default function FeaturedProducts() {
  const { t } = useLanguage()
  const featuredProducts = mockProducts.filter((product) => product.featured)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("featuredProducts")}</h2>
          <div className="w-24 h-1 bg-sage-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group card-hover bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-forest-green transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <p className="text-xl font-bold text-forest-green">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
