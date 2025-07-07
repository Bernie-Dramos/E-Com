"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    upperWear: "Upper Wear",
    lowerWear: "Lower Wear",
    accessories: "Accessories",
    shoes: "Shoes",
    cart: "Cart",
    contact: "Contact",
    tracking: "Order Tracking",

    // Home page
    heroTitle: "Nature Inspired Fashion",
    heroSubtitle: "Sustainable clothing that connects you with nature",
    shopNow: "Shop Now",
    featuredProducts: "Featured Products",
    aboutTitle: "About EcoWear",
    aboutText:
      "We create sustainable fashion inspired by the beauty of nature. Our eco-friendly materials and ethical practices ensure that every piece tells a story of environmental consciousness.",

    // Product
    addToCart: "Add to Cart",
    price: "Price",
    size: "Size",
    color: "Color",
    quantity: "Quantity",

    // Cart
    yourCart: "Your Cart",
    subtotal: "Subtotal",
    proceedToCheckout: "Proceed to Checkout",
    continueShopping: "Continue Shopping",

    // Contact
    contactUs: "Contact Us",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",

    // Tracking
    trackOrder: "Track Your Order",
    orderNumber: "Order Number",
    trackButton: "Track Order",

    // Payment
    checkout: "Checkout",
    billingInfo: "Billing Information",
    paymentMethod: "Payment Method",
    placeOrder: "Place Order",
  },
  pt: {
    // Navigation
    home: "Início",
    upperWear: "Parte Superior",
    lowerWear: "Parte Inferior",
    accessories: "Acessórios",
    shoes: "Calçados",
    cart: "Carrinho",
    contact: "Contato",
    tracking: "Rastrear Pedido",

    // Home page
    heroTitle: "Moda Inspirada na Natureza",
    heroSubtitle: "Roupas sustentáveis que conectam você com a natureza",
    shopNow: "Comprar Agora",
    featuredProducts: "Produtos em Destaque",
    aboutTitle: "Sobre a EcoWear",
    aboutText:
      "Criamos moda sustentável inspirada na beleza da natureza. Nossos materiais ecológicos e práticas éticas garantem que cada peça conte uma história de consciência ambiental.",

    // Product
    addToCart: "Adicionar ao Carrinho",
    price: "Preço",
    size: "Tamanho",
    color: "Cor",
    quantity: "Quantidade",

    // Cart
    yourCart: "Seu Carrinho",
    subtotal: "Subtotal",
    proceedToCheckout: "Finalizar Compra",
    continueShopping: "Continuar Comprando",

    // Contact
    contactUs: "Entre em Contato",
    name: "Nome",
    email: "Email",
    subject: "Assunto",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",

    // Tracking
    trackOrder: "Rastrear Seu Pedido",
    orderNumber: "Número do Pedido",
    trackButton: "Rastrear Pedido",

    // Payment
    checkout: "Finalizar Compra",
    billingInfo: "Informações de Cobrança",
    paymentMethod: "Método de Pagamento",
    placeOrder: "Fazer Pedido",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
