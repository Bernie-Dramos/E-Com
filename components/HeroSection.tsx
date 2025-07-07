"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sage-green via-forest-green to-earth-brown">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 fade-in">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">{t("heroTitle")}</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>
        <Link href="/category/upper-wear" className="btn-primary text-lg px-8 py-4 inline-block">
          {t("shopNow")}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
