"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { mockOrders } from "@/lib/mockData"
import { Package, Search, CheckCircle, Circle, Truck } from "lucide-react"

export default function TrackingPage() {
  const { t } = useLanguage()
  const [orderNumber, setOrderNumber] = useState("")
  const [orderData, setOrderData] = useState<any>(null)
  const [notFound, setNotFound] = useState(false)

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const order = mockOrders[orderNumber as keyof typeof mockOrders]

    if (order) {
      setOrderData(order)
      setNotFound(false)
    } else {
      setOrderData(null)
      setNotFound(true)
    }
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sage-green to-forest-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("trackOrder")}</h1>
          <p className="text-xl opacity-90">Enter your order number to track your package</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tracking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="h-8 w-8 text-sage-green" />
            <h2 className="text-2xl font-bold text-gray-900">Track Your Package</h2>
          </div>

          <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number (e.g., 12345)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green transition-colors"
                required
              />
            </div>
            <button type="submit" className="btn-primary flex items-center justify-center space-x-2 px-8">
              <Search className="h-5 w-5" />
              <span>{t("trackButton")}</span>
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              Try these sample order numbers: <span className="font-mono bg-gray-100 px-2 py-1 rounded">12345</span> or{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">67890</span>
            </p>
          </div>
        </div>

        {/* Order Not Found */}
        {notFound && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Order Not Found</h3>
            <p className="text-red-600">Please check your order number and try again.</p>
          </div>
        )}

        {/* Order Details */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Order #{orderData.id}</h3>
                  <p className="text-gray-600">
                    Status: <span className="font-semibold text-sage-green">{orderData.status}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="text-lg font-semibold text-forest-green">{orderData.estimatedDelivery}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                <div className="space-y-3">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-forest-green">${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Tracking Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Tracking Progress</h4>

              <div className="space-y-6">
                {orderData.trackingSteps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {step.completed ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <Circle className="h-8 w-8 text-gray-300" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-semibold ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                          {step.step}
                        </h5>
                        {step.date && (
                          <span className={`text-sm ${step.completed ? "text-gray-600" : "text-gray-400"}`}>
                            {step.date}
                          </span>
                        )}
                      </div>
                      {index < orderData.trackingSteps.length - 1 && (
                        <div className={`w-0.5 h-6 ml-4 mt-2 ${step.completed ? "bg-green-600" : "bg-gray-300"}`}></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Info */}
              <div className="mt-8 p-4 bg-sage-green bg-opacity-10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-sage-green" />
                  <div>
                    <p className="font-semibold text-gray-900">Delivery Information</p>
                    <p className="text-sm text-gray-600">
                      Your package will be delivered between 9 AM - 6 PM on the estimated delivery date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
