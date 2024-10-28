// Filters.tsx
import React, { useState } from 'react'
import styles from './filters.module.scss'

interface CategoryFilterProps {
  filters: string[]
  selectedFilters: string[]
  onFilterSelect: (filter: string) => void
}

const Filters: React.FC<CategoryFilterProps> = ({
  filters,
  selectedFilters,
  onFilterSelect,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleFilters = isExpanded ? filters : filters?.slice(0, 7)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Category</h2>
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse categories' : 'Expand categories'}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className={styles.categoryList}>
        {visibleFilters?.map((filter) => (
          <label key={filter} className={styles.categoryItem}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(filter)}
                onChange={() => onFilterSelect(filter)}
                aria-label={`Select ${filter}`}
              />
              <span className={styles.checkmark}></span>
            </div>
            <span className={styles.categoryName}>{filter}</span>
          </label>
        ))}
      </div>

      {!isExpanded && filters.length > 7 && (
        <button
          className={styles.seeMoreButton}
          onClick={() => setIsExpanded(true)}
        >
          See More
        </button>
      )}
    </div>
  )
}

export default Filters
