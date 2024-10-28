'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import SellerCarousel from '@/components/Carousel/SellerCarousel'
import BrandCarousel from '@/components/Carousel/BrandCarousel'
import ProductList from '@/components/ProductList'
import Filters from '@/components/Filters'
import { DoubleArrowIcon } from '@/styles/icons'
import styles from './searchScreen.module.scss'

interface SearchScreenProps {
  initialData: any
  initialFilters?: string
  initialQuery?: string
}

interface SearchContentProps {
  data: any
  selectedFilters: string[]
  query?: string
  isNew: boolean
  onFilterSelect: (filter: string) => void
}

const SearchContent = ({
  data,
  selectedFilters,
  query,
  isNew,
  onFilterSelect,
}: SearchContentProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const lowerCaseFilters = selectedFilters.map((filter) => filter.toLowerCase())

  const filters = data?.facets?.categories
    ? data.facets.categories.map((cat: { name: string }) => cat.name)
    : []

  const onLoadMore = () => {
    const currentOffset = Number(searchParams.get('offset')) || 0
    const currentParams = new URLSearchParams(searchParams.toString())
    currentParams.set('offset', String(currentOffset + 9)) // Increase offset by 9

    router.push(`/search?${currentParams.toString()}`) // Update URL with modified query
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSearchFilterContainer}>
        <h2>{query ? `"${query}"` : ''}</h2>
        <div className={styles.sort}>
          <DoubleArrowIcon />
          <p>Sort</p>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.filters}>
          <Filters
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterSelect={onFilterSelect}
          />
        </div>
        <div className={styles.content}>
          <SellerCarousel items={data?.merchants} />
          <BrandCarousel
            items={data?.facets?.brands?.map(
              (brand: { name: string; count: number }) => brand.name
            )}
          />
          <ProductList
            products={data?.products}
            meta={data?.meta}
            onLoadMore={onLoadMore}
            lowerCaseFilters={lowerCaseFilters}
            isNew={isNew}
            isFiltering={selectedFilters.length > 0}
          />
        </div>
      </div>
    </div>
  )
}

const SearchScreen = ({
  initialData,
  initialFilters,
  initialQuery,
}: SearchScreenProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    initialFilters ? initialFilters.split(',') : []
  )
  const [prevQuery, setPrevQuery] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()
  const parameters = useParams()

  const curQuery = searchParams.get('query') || ''

  const handleFilterSelect = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter)
      : [...selectedFilters, filter]

    const params = new URLSearchParams(searchParams.toString())

    if (newFilters.length > 0) {
      params.set('filters', newFilters.join(','))
    } else {
      params.delete('filters')
    }

    router.push(`/${parameters?.category}?${params.toString()}`)

    setSelectedFilters(newFilters)
  }

  useEffect(() => {
    setPrevQuery(curQuery)
  }, [curQuery])

  return (
    <Suspense fallback={<div>Loading search content...</div>}>
      <SearchContent
        data={initialData}
        selectedFilters={selectedFilters}
        query={initialQuery}
        onFilterSelect={handleFilterSelect}
        isNew={prevQuery !== curQuery}
      />
    </Suspense>
  )
}

export default SearchScreen
