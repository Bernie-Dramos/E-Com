"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useCart } from "@/contexts/CartContext"
import { ShoppingCart, Menu, X, Leaf } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { getTotalItems } = useCart()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("upperWear"), href: "/category/upper-wear" },
    { name: t("lowerWear"), href: "/category/lower-wear" },
    { name: t("accessories"), href: "/category/accessories" },
    { name: t("shoes"), href: "/category/shoes" },
    { name: t("contact"), href: "/contact" },
    { name: t("tracking"), href: "/tracking" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-forest-green" />
            <span className="text-2xl font-bold text-forest-green">EcoWear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-forest-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-sage-green text-white hover:bg-forest-green transition-colors duration-200"
            >
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-forest-green transition-colors duration-200" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-forest-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-forest-green hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
