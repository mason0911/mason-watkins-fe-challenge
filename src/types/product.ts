export interface ProductType {
  id: string
  productId: string
  active: boolean
  available: boolean
  badges: string[]
  brand: Brand
  merchantId: string
  merchantProductId: string
  commissionRate: number
  locales: Locale[]
  categories: Category[]
  createdAt: string
  updatedAt: string
}

export interface Brand {
  name: string
  merchantBrand: boolean
}

export interface Locale {
  country: string
  language: string
  currency: string
  active: boolean
  available: boolean
  variants: Variant[]
  createdAt: string
  updatedAt: string
}

export interface Variant {
  merchantVariantId: string
  title: string
  description: string
  price: number
  oldPrice: number
  stockCount: number
  active: boolean
  available: boolean
  images: Image[]
  options: Option[]
  createdAt: string
  updatedAt: string
}

export interface Image {
  url: string
  index: number
}

export interface Option {
  key: string
  keyName: string
  value: string
}

export interface Category {
  name: string
  index: number
}

export type SortByType = 'lowPrice' | 'highPrice' | 'newest' | 'relevance'

export interface SearchParams {
  query?: string
  sortBy?: SortByType
  offset?: number
  limit?: number
  filters?: string
}

export interface MerchantsType {
  id: string
  merchantId: string
  active: boolean
  kycComplete: boolean
  url: string
  shopKey: string
  name: string
  description: string
  type: string
  productBadges: string[]
  productCommissionRate: number
  stripeConnectedAccountId: string
  activeProductCount: number
  totalProductCount: number
  importedAt: string
  createdAt: string
  updatedAt: string
  shopName: string
  profileImage: string
  backgroundImage: any
  images?: Image[]
}

export interface Image {
  url: string
  type: string
}
