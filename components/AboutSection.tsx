"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Leaf, Recycle, Heart, Shield } from "lucide-react"

export default function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Materials",
      description: "Made from organic and eco-friendly materials",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Recycled Packaging",
      description: "All packaging is 100% recyclable and biodegradable",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Ethical Production",
      description: "Fair trade practices and ethical manufacturing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "Durable products built to last for years",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-warm-beige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("aboutTitle")}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t("aboutText")}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-sage-green flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-sage-green to-forest-green flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Leaf className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Connecting Fashion with Nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
