"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-forest-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-sage-green" />
              <span className="text-2xl font-bold">EcoWear</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Sustainable fashion inspired by nature. Creating eco-friendly clothing that connects you with the natural
              world.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-sage-green cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-sage-green cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-sage-green cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/upper-wear"
                  className="text-gray-300 hover:text-sage-green transition-colors duration-200"
                >
                  {t("upperWear")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/lower-wear"
                  className="text-gray-300 hover:text-sage-green transition-colors duration-200"
                >
                  {t("lowerWear")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/accessories"
                  className="text-gray-300 hover:text-sage-green transition-colors duration-200"
                >
                  {t("accessories")}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/shoes"
                  className="text-gray-300 hover:text-sage-green transition-colors duration-200"
                >
                  {t("shoes")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  {t("tracking")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-sage-green transition-colors duration-200">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 EcoWear. All rights reserved. Made with 💚 for the planet.</p>
        </div>
      </div>
    </footer>
  )
}
