import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { CartProvider } from "@/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoWear - Nature Inspired Fashion",
  description: "Sustainable fashion inspired by nature",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
