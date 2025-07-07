export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: "upper-wear" | "lower-wear" | "accessories" | "shoes"
  description: string
  sizes?: string[]
  colors?: string[]
  featured?: boolean
}

export const mockProducts: Product[] = [
  // Upper Wear
  {
    id: "1",
    name: "Forest Green Hoodie",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "upper-wear",
    description: "Cozy organic cotton hoodie inspired by deep forest canopies",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Earth Brown", "Sage Green"],
    featured: true,
  },
  {
    id: "2",
    name: "Mountain Peak Jacket",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "upper-wear",
    description: "Weather-resistant jacket perfect for outdoor adventures",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Stone Gray", "Forest Green", "Earth Brown"],
  },
  {
    id: "3",
    name: "Bamboo Fiber Shirt",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "upper-wear",
    description: "Breathable bamboo fiber shirt with natural moisture-wicking",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Natural White", "Sage Green", "Earth Brown"],
    featured: true,
  },

  // Lower Wear
  {
    id: "4",
    name: "Organic Cotton Joggers",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lower-wear",
    description: "Comfortable joggers made from 100% organic cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Earth Brown", "Stone Gray"],
    featured: true,
  },
  {
    id: "5",
    name: "Hemp Cargo Shorts",
    price: 54.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lower-wear",
    description: "Durable hemp shorts with multiple pockets for outdoor activities",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Forest Green", "Stone Gray"],
  },
  {
    id: "6",
    name: "Eco-Friendly Jeans",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lower-wear",
    description: "Sustainable denim made with recycled materials",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Indigo Blue", "Stone Wash", "Dark Blue"],
  },

  // Accessories
  {
    id: "7",
    name: "Wooden Bead Bracelet",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    description: "Handcrafted bracelet made from sustainable wood beads",
    colors: ["Natural Wood", "Dark Walnut", "Light Oak"],
    featured: true,
  },
  {
    id: "8",
    name: "Leaf Pattern Necklace",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    description: "Elegant necklace featuring delicate leaf motifs",
    colors: ["Silver", "Gold", "Rose Gold"],
  },
  {
    id: "9",
    name: "Natural Stone Anklet",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    description: "Beautiful anklet adorned with natural gemstones",
    colors: ["Turquoise", "Amethyst", "Rose Quartz"],
  },

  // Shoes
  {
    id: "10",
    name: "Eco-Leather Boots",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "shoes",
    description: "Sustainable boots made from eco-friendly leather alternatives",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Earth Brown", "Forest Green", "Stone Gray"],
    featured: true,
  },
  {
    id: "11",
    name: "Bamboo Fiber Sneakers",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "shoes",
    description: "Lightweight sneakers with bamboo fiber construction",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Natural White", "Sage Green", "Stone Gray"],
  },
  {
    id: "12",
    name: "Cork Sole Sandals",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "shoes",
    description: "Comfortable sandals with natural cork soles",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Natural Cork", "Dark Brown", "Light Tan"],
  },
]

export const mockOrders = {
  "12345": {
    id: "12345",
    status: "Shipped",
    estimatedDelivery: "July 15, 2025",
    items: [
      { name: "Forest Green Hoodie", quantity: 1, price: 89.99 },
      { name: "Organic Cotton Joggers", quantity: 1, price: 69.99 },
    ],
    total: 159.98,
    trackingSteps: [
      { step: "Order Placed", completed: true, date: "July 10, 2025" },
      { step: "Processing", completed: true, date: "July 11, 2025" },
      { step: "Shipped", completed: true, date: "July 12, 2025" },
      { step: "Out for Delivery", completed: false, date: "July 15, 2025" },
      { step: "Delivered", completed: false, date: "July 15, 2025" },
    ],
  },
  "67890": {
    id: "67890",
    status: "Processing",
    estimatedDelivery: "July 18, 2025",
    items: [{ name: "Bamboo Fiber Shirt", quantity: 2, price: 49.99 }],
    total: 99.98,
    trackingSteps: [
      { step: "Order Placed", completed: true, date: "July 13, 2025" },
      { step: "Processing", completed: true, date: "July 14, 2025" },
      { step: "Shipped", completed: false, date: "" },
      { step: "Out for Delivery", completed: false, date: "" },
      { step: "Delivered", completed: false, date: "" },
    ],
  },
}
