'use client'

import { useState, useEffect, KeyboardEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from '@/styles/icons'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const query = searchParams.get('query')

    if (query) {
      setSearch(query as string)
    }
  }, [])

  useEffect(() => {
    if (pathname === '' || pathname === '/') {
      setSearch('')
    }
  }, [pathname])

  const handleSearch = () => {
    const currentParams = new URLSearchParams(searchParams.toString())

    if (search) {
      currentParams.set('query', search) // Add or update the search query
      currentParams.set('sortBy', 'relevance')
      currentParams.set('offset', '0')
      currentParams.set('limit', '9')
    } else {
      currentParams.delete('query') // Remove search if input is empty
    }

    router.push(`/search?${currentParams.toString()}`) // Update URL with modified query
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleSearch}>
        <SearchIcon />
      </button>
      <input
        placeholder="Search by Brand, Product, or Category"
        className={styles.input}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown} // Call handleSearch on Enter key press
      />
    </div>
  )
}

export default SearchBar
