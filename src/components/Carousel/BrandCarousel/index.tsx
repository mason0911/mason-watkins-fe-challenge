'use client'

import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './brandCarousel.module.scss'
import BrandCard from '@/components/Card/BrandCard'
import { LeftArrowIcon, RightArrowIcon } from '@/styles/icons'

type CarouselProps = {
  items: string[]
}

const BrandCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(0)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= items.length ? prevIndex : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
    )
  }

  const displayedItems = [
    ...items.slice(currentIndex, currentIndex + itemsPerPage),
    ...items.slice(0, Math.max(0, currentIndex + itemsPerPage - items.length)),
  ].slice(0, itemsPerPage)

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)

    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (windowWidth < 1160) {
      setItemsPerPage(1)
    } else if (windowWidth < 1356) {
      setItemsPerPage(2)
    } else {
      setItemsPerPage(3)
    }
  }, [windowWidth])

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <h5>Brands</h5>
        <p>{`${items?.length} Results`}</p>
      </div>
      <div className={styles.carousel}>
        {items.length > itemsPerPage && (
          <button
            className={classNames(styles.carouselButton, styles.prevButton)}
            onClick={handlePrev}
          >
            <LeftArrowIcon />
          </button>
        )}
        <div className={styles.carouselContainer}>
          {displayedItems.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <BrandCard key={index} name={item} />
            </div>
          ))}
        </div>
        {items.length > itemsPerPage && (
          <button
            className={classNames(styles.carouselButton, styles.nextButton)}
            onClick={handleNext}
          >
            <RightArrowIcon />
          </button>
        )}
      </div>
    </div>
  )
}

export default BrandCarousel
