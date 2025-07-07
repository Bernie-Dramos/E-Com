"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useCart } from "@/contexts/CartContext"
import { CreditCard, Smartphone, Shield, Lock } from "lucide-react"

export default function CheckoutPage() {
  const { t } = useLanguage()
  const { items, getTotalPrice, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false)
      setOrderPlaced(true)
      clearCart()
    }, 2000)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-warm-beige flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. You will receive a confirmation email shortly.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Order #ECO-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <button onClick={() => (window.location.href = "/")} className="btn-primary w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("checkout")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Billing Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t("billingInfo")}</h2>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t("paymentMethod")}</h2>

              <div className="space-y-4">
                {/* Payment Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-2 border-sage-green rounded-lg p-4 cursor-pointer hover:bg-sage-green hover:bg-opacity-10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-6 w-6 text-sage-green" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </div>
                  <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-sage-green transition-colors">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-gray-600" />
                      <span className="font-medium">PayPal</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-4">
                  <Lock className="h-4 w-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">
                        {item.size && `Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                      </p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-forest-green">${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className={`w-full btn-primary ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isProcessing ? "Processing..." : t("placeOrder")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
