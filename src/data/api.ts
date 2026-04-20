// Mock Backend API for an E-Commerce Order Management System
// This simulates a backend for a company that sells customizable eyewear

export type Product = {
  id: string
  name: string
  category: "frames" | "lenses" | "accessories"
  price: number
  inStock: boolean
}

export type Customer = {
  id: string
  name: string
  email: string
  tier: "standard" | "vip"
  joinedAt: string
}

export type OrderItem = {
  productId: string
  quantity: number
  priceAtPurchase: number
}

export type Order = {
  id: string
  customerId: string
  items: OrderItem[]
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  createdAt: string
  updatedAt: string
}

export type Review = {
  id: string
  productId: string
  customerId: string
  rating: number
  comment: string
  createdAt: string
}

// --- Mock Data ---

const products: Product[] = [
  { id: "p1", name: "Classic Round Frames", category: "frames", price: 49.99, inStock: true },
  { id: "p2", name: "Modern Square Frames", category: "frames", price: 59.99, inStock: true },
  { id: "p3", name: "Aviator Frames", category: "frames", price: 69.99, inStock: false },
  { id: "p4", name: "Blue Light Lenses", category: "lenses", price: 29.99, inStock: true },
  { id: "p5", name: "Polarized Sunglasses Lenses", category: "lenses", price: 39.99, inStock: true },
  { id: "p6", name: "Progressive Lenses", category: "lenses", price: 89.99, inStock: true },
  { id: "p7", name: "Leather Case", category: "accessories", price: 19.99, inStock: true },
  { id: "p8", name: "Cleaning Kit", category: "accessories", price: 9.99, inStock: true },
  { id: "p9", name: "Titanium Frames", category: "frames", price: 129.99, inStock: true },
  { id: "p10", name: "Kids Round Frames", category: "frames", price: 39.99, inStock: true },
]

const customers: Customer[] = [
  { id: "cust1", name: "Sarah Johnson", email: "sarah@example.com", tier: "vip", joinedAt: "2025-03-15" },
  { id: "cust2", name: "James Lee", email: "james@example.com", tier: "standard", joinedAt: "2025-08-22" },
  { id: "cust3", name: "Maria Garcia", email: "maria@example.com", tier: "vip", joinedAt: "2025-01-10" },
  { id: "cust4", name: "Alex Patel", email: "alex@example.com", tier: "standard", joinedAt: "2026-01-05" },
  { id: "cust5", name: "Emma Wilson", email: "emma@example.com", tier: "standard", joinedAt: "2026-02-18" },
  { id: "cust6", name: "Ryan Chen", email: "ryan@example.com", tier: "vip", joinedAt: "2025-06-30" },
]

const orders: Order[] = [
  { id: "ord1", customerId: "cust1", items: [{ productId: "p1", quantity: 1, priceAtPurchase: 49.99 }, { productId: "p4", quantity: 1, priceAtPurchase: 29.99 }], status: "delivered", total: 79.98, createdAt: "2026-03-01", updatedAt: "2026-03-05" },
  { id: "ord2", customerId: "cust1", items: [{ productId: "p7", quantity: 2, priceAtPurchase: 19.99 }], status: "delivered", total: 39.98, createdAt: "2026-03-15", updatedAt: "2026-03-18" },
  { id: "ord3", customerId: "cust2", items: [{ productId: "p2", quantity: 1, priceAtPurchase: 59.99 }, { productId: "p5", quantity: 1, priceAtPurchase: 39.99 }, { productId: "p8", quantity: 1, priceAtPurchase: 9.99 }], status: "shipped", total: 109.97, createdAt: "2026-04-01", updatedAt: "2026-04-03" },
  { id: "ord4", customerId: "cust3", items: [{ productId: "p9", quantity: 1, priceAtPurchase: 129.99 }, { productId: "p6", quantity: 1, priceAtPurchase: 89.99 }], status: "processing", total: 219.98, createdAt: "2026-04-10", updatedAt: "2026-04-10" },
  { id: "ord5", customerId: "cust4", items: [{ productId: "p10", quantity: 1, priceAtPurchase: 39.99 }], status: "pending", total: 39.99, createdAt: "2026-04-15", updatedAt: "2026-04-15" },
  { id: "ord6", customerId: "cust2", items: [{ productId: "p3", quantity: 1, priceAtPurchase: 69.99 }], status: "cancelled", total: 69.99, createdAt: "2026-03-20", updatedAt: "2026-03-21" },
  { id: "ord7", customerId: "cust5", items: [{ productId: "p1", quantity: 1, priceAtPurchase: 49.99 }, { productId: "p4", quantity: 1, priceAtPurchase: 29.99 }, { productId: "p7", quantity: 1, priceAtPurchase: 19.99 }], status: "delivered", total: 99.97, createdAt: "2026-02-28", updatedAt: "2026-03-03" },
  { id: "ord8", customerId: "cust6", items: [{ productId: "p2", quantity: 1, priceAtPurchase: 59.99 }, { productId: "p6", quantity: 1, priceAtPurchase: 89.99 }], status: "delivered", total: 149.98, createdAt: "2026-01-15", updatedAt: "2026-01-20" },
  { id: "ord9", customerId: "cust3", items: [{ productId: "p5", quantity: 2, priceAtPurchase: 39.99 }, { productId: "p8", quantity: 3, priceAtPurchase: 9.99 }], status: "shipped", total: 109.95, createdAt: "2026-04-12", updatedAt: "2026-04-14" },
  { id: "ord10", customerId: "cust1", items: [{ productId: "p9", quantity: 1, priceAtPurchase: 129.99 }], status: "pending", total: 129.99, createdAt: "2026-04-18", updatedAt: "2026-04-18" },
]

const reviews: Review[] = [
  { id: "r1", productId: "p1", customerId: "cust1", rating: 5, comment: "Love these frames! Perfect fit.", createdAt: "2026-03-10" },
  { id: "r2", productId: "p4", customerId: "cust1", rating: 4, comment: "Blue light lenses work great for screen time.", createdAt: "2026-03-10" },
  { id: "r3", productId: "p2", customerId: "cust6", rating: 5, comment: "Sleek design, very comfortable.", createdAt: "2026-01-25" },
  { id: "r4", productId: "p9", customerId: "cust6", rating: 3, comment: "Good quality but expensive for what you get.", createdAt: "2026-02-01" },
  { id: "r5", productId: "p1", customerId: "cust7", rating: 2, comment: "Broke after two weeks. Disappointed.", createdAt: "2026-03-20" },
  { id: "r6", productId: "p5", customerId: "cust3", rating: 5, comment: "Best polarized lenses I've owned.", createdAt: "2026-04-15" },
  { id: "r7", productId: "p10", customerId: "cust4", rating: 4, comment: "My kid loves them. Durable.", createdAt: "2026-04-16" },
  { id: "r8", productId: "p7", customerId: "cust5", rating: 5, comment: "Beautiful leather case, worth every penny.", createdAt: "2026-03-08" },
]

// --- API Functions ---

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Products
export async function getProducts(): Promise<Product[]> {
  await delay(400)
  return products
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(200)
  return products.find(p => p.id === id)
}

export async function getProductsByCategory(category: Product["category"]): Promise<Product[]> {
  await delay(300)
  return products.filter(p => p.category === category)
}

// Customers
export async function getCustomers(): Promise<Customer[]> {
  await delay(400)
  return customers
}

export async function getCustomerById(id: string): Promise<Customer | undefined> {
  await delay(200)
  return customers.find(c => c.id === id)
}

// Orders
export async function getOrders(): Promise<Order[]> {
  await delay(500)
  return orders
}

export async function getOrdersByCustomer(customerId: string): Promise<Order[]> {
  await delay(300)
  return orders.filter(o => o.customerId === customerId)
}

export async function getOrdersByStatus(status: Order["status"]): Promise<Order[]> {
  await delay(300)
  return orders.filter(o => o.status === status)
}

export async function updateOrderStatus(orderId: string, newStatus: Order["status"]): Promise<Order | undefined> {
  await delay(400)
  const order = orders.find(o => o.id === orderId)
  if (order) {
    order.status = newStatus
    order.updatedAt = new Date().toISOString().split("T")[0]
    return { ...order }
  }
  return undefined
}

// Reviews
export async function getReviewsByProduct(productId: string): Promise<Review[]> {
  await delay(300)
  return reviews.filter(r => r.productId === productId)
}

export async function getReviewsByCustomer(customerId: string): Promise<Review[]> {
  await delay(300)
  return reviews.filter(r => r.customerId === customerId)
}

// Analytics
export async function getCustomerOrderSummary(customerId: string): Promise<{
  totalOrders: number
  totalSpent: number
  avgOrderValue: number
  ordersByStatus: Record<string, number>
}> {
  await delay(400)
  const customerOrders = orders.filter(o => o.customerId === customerId)
  const totalSpent = customerOrders.reduce((sum, o) => sum + o.total, 0)
  const ordersByStatus: Record<string, number> = {}
  customerOrders.forEach(o => {
    ordersByStatus[o.status] = (ordersByStatus[o.status] || 0) + 1
  })
  return {
    totalOrders: customerOrders.length,
    totalSpent: Math.round(totalSpent * 100) / 100,
    avgOrderValue: customerOrders.length > 0 ? Math.round((totalSpent / customerOrders.length) * 100) / 100 : 0,
    ordersByStatus,
  }
}

export async function getProductAnalytics(productId: string): Promise<{
  totalSold: number
  totalRevenue: number
  avgRating: number
  reviewCount: number
}> {
  await delay(400)
  let totalSold = 0
  let totalRevenue = 0
  orders.forEach(o => {
    o.items.forEach(item => {
      if (item.productId === productId) {
        totalSold += item.quantity
        totalRevenue += item.quantity * item.priceAtPurchase
      }
    })
  })
  const productReviews = reviews.filter(r => r.productId === productId)
  const avgRating = productReviews.length > 0
    ? Math.round((productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length) * 10) / 10
    : 0
  return {
    totalSold,
    totalRevenue: Math.round(totalRevenue * 100) / 100,
    avgRating,
    reviewCount: productReviews.length,
  }
}
