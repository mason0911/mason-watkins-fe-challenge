import Link from 'next/link'
import Image from 'next/image'
import styles from './featureSection.module.scss'

const FeatureSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {new Array(3).fill(0).map((_, index) => (
          <Link
            key={index}
            href="/"
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
          >
            <p className={styles.title}>Shop & Sell</p>
            <Image
              src={`/images/image-${index + 4}.png`}
              width={220}
              height={70}
              alt="image"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection
