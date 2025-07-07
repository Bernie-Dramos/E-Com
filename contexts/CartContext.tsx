"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotalPrice: () => number
  getTotalItems: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id && i.size === item.size && i.color === item.color)
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
