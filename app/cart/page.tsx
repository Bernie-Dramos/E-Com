"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useCart } from "@/contexts/CartContext"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { t } = useLanguage()
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-beige flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some eco-friendly items to get started!</p>
          <Link href="/category/upper-wear" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("yourCart")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      {item.size && <p>Size: {item.size}</p>}
                      {item.color && <p>Color: {item.color}</p>}
                    </div>
                    <p className="text-lg font-bold text-forest-green mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(`${item.id}-${item.size}-${item.color}`)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-forest-green">${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/checkout" className="w-full btn-primary text-center block">
                  {t("proceedToCheckout")}
                </Link>
                <Link href="/category/upper-wear" className="w-full btn-secondary text-center block">
                  {t("continueShopping")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
