import React from 'react'
import { SearchProducts } from '@/actions'
import { ProductType } from '@/types'
import ProductCarousel from './ProductCarousel'
import styles from './trendingProductsCarousel.module.scss'

const TrendingProductsCarousel = async () => {
  let products: ProductType[] = []

  try {
    const payload = {
      query: '',
      offset: 0,
      limit: 50,
    }

    const data = await SearchProducts(payload)
    products = data?.products
  } catch (error) {
    console.log('Error', error)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Trending Products</h2>
      <ProductCarousel items={products} />
    </div>
  )
}

export default TrendingProductsCarousel
