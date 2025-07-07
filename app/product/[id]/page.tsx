"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useCart } from "@/contexts/CartContext"
import { mockProducts } from "@/lib/mockData"
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    })
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  const relatedProducts = mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} view ${i}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.0) • 127 reviews</span>
              </div>

              <p className="text-3xl font-bold text-forest-green mb-6">${product.price.toFixed(2)}</p>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">{t("size")}</label>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded-lg font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "border-forest-green bg-forest-green text-white"
                          : "border-gray-300 hover:border-sage-green"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">{t("color")}</label>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all duration-200 ${
                        selectedColor === color
                          ? "border-forest-green bg-forest-green text-white"
                          : "border-gray-300 hover:border-sage-green"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">{t("quantity")}</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isAddedToCart ? "bg-green-600" : ""
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{isAddedToCart ? "Added to Cart!" : t("addToCart")}</span>
              </button>

              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-sage-green" />
                <span className="text-sm text-gray-700">Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-sage-green" />
                <span className="text-sm text-gray-700">30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-sage-green" />
                <span className="text-sm text-gray-700">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group card-hover bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-forest-green transition-colors duration-200">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-forest-green">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
