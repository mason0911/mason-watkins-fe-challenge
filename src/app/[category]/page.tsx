'use server'

import { Suspense } from 'react'
import { SearchProducts } from '@/actions'
import { SearchParams } from '@/types'
import SearchScreen from '@/components/pages/SearchScreen'

type SearchPage = {
  searchParams: SearchParams
}

const SearchPage = async ({ searchParams }: SearchPage) => {
  try {
    const payload = {
      query: searchParams.query || '',
      sortBy: searchParams.sortBy || 'relevance',
      offset: Number(searchParams.offset) || 0,
      limit: Number(searchParams.limit) || 9,
    }

    const data = await SearchProducts(payload)

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchScreen
          initialData={data}
          initialFilters={searchParams.filters}
          initialQuery={searchParams.query}
        />
      </Suspense>
    )
  } catch (error) {
    console.log('Error', error)
    return <div>Error loading data</div>
  }
}

export default SearchPage
