import Image from 'next/image'
import { DeliveryBadge2Icon } from '@/styles/icons'
import styles from './bannerSection.module.scss'

const BannerSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.box}>
          <DeliveryBadge2Icon />
          <div className={styles.textBox}>
            <h1>Shop & Share any product</h1>
            <h1>Get paid same day on sales</h1>
            <p>-Look for the Badge-</p>
          </div>
        </div>
        <Image src="/images/image-7.png" alt="image" width={360} height={330} />
      </div>
    </div>
  )
}

export default BannerSection
