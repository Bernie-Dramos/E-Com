"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sage-green to-forest-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("contactUs")}</h1>
          <p className="text-xl opacity-90">We'd love to hear from you. Send us a message!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="h-8 w-8 text-sage-green" />
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("name")}</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("subject")}</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("message")}</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green transition-colors resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>{t("sendMessage")}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-sage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@ecowear.com</p>
                    <p className="text-gray-600">support@ecowear.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-sage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">123 Eco Street</p>
                    <p className="text-gray-600">Green Valley, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Store</h3>
              <div className="aspect-video bg-gradient-to-br from-sage-green to-forest-green rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-80" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm opacity-80">123 Eco Street, Green Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
