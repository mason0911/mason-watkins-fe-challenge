'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './breadcrumbsNavigate.module.scss'

const BreadcrumbsNavigate = () => {
  const pathname = usePathname()
  const params = useParams()

  const category = params?.category as string

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {pathname === '/' || pathname === '' ? (
          <>
            <Link href="/" className={styles.fadeLink}>
              My Shop
            </Link>
            <span className={styles.fadeLink}>/</span>
            <p className={styles.link}>Marketplace</p>
          </>
        ) : (
          <>
            <Link href="/" className={styles.fadeLink}>
              Home
            </Link>
            <span className={styles.fadeLink}>/</span>
            <p className={styles.link}>{category?.replaceAll('-', ' ')}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default BreadcrumbsNavigate
