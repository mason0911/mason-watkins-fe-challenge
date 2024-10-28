'use client'

import { useState, useEffect } from 'react'
import _ from 'lodash'
import ProductCard from '@/components/Card/ProductCard'
import { ProductType } from '@/types'
import styles from './productList.module.scss'

interface ProductListProps {
  products: ProductType[]
  lowerCaseFilters: string[]
  isFiltering: boolean
  isNew: boolean
  meta: {
    hasMore: boolean
    limit: number
    offset: number
    queryTime: number
    totalHits: number
    totalUsers: number
  }
  onLoadMore: () => void
}

const ProductList = ({
  products,
  meta,
  onLoadMore,
  isFiltering,
  isNew,
  lowerCaseFilters,
}: ProductListProps) => {
  const [productList, setProductList] = useState<ProductType[]>([])

  useEffect(() => {
    if (isNew) {
      return setProductList(products)
    }

    setProductList((prevProducts) => {
      const newProducts = _.uniqBy([...prevProducts, ...products], (e) => e.id)

      return isFiltering
        ? newProducts?.filter((product: ProductType) =>
            product.categories?.some((category) =>
              lowerCaseFilters.includes(category.name?.toLowerCase())
            )
          )
        : newProducts
    })
  }, [products, isNew])

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <h5>Products</h5>
        <p>{`${meta.totalHits} Results`}</p>
      </div>
      <div className={styles.list}>
        {productList?.map((product) => (
          <ProductCard
            key={product?.id}
            type="listCard"
            productData={product}
          />
        ))}
      </div>
      {meta.hasMore && <button onClick={onLoadMore}>Load More</button>}
    </div>
  )
}

export default ProductList
