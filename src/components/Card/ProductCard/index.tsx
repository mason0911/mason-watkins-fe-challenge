import Image from 'next/image'
import _ from 'lodash'
import { ProductType } from '@/types'
import { DeliveryBadgeIcon, LikeIcon } from '@/styles/icons'
import styles from './productCard.module.scss'

const currencySign = {
  USD: '$',
}

interface ProductCardProps {
  productData: ProductType
  type?: 'listCard' | 'other'
}

const ProductCard = ({ productData, type = 'other' }: ProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        {type === 'listCard' ? (
          <div className={styles.commission1}>
            {`${_.get(productData, 'commissionRate', 0)}% Commission`}
          </div>
        ) : (
          <div className={styles.commission2}>
            {`${_.get(productData, 'commissionRate', 0)}% Commission`}
          </div>
        )}
        <LikeIcon className={styles.like} />
        <DeliveryBadgeIcon className={styles.badge} />
        <Image
          src={_.get(productData, 'locales[0].variants[0].images[0].url', '')}
          alt={_.get(productData, 'locales[0].variants[0].title')}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.middleBox}>
        <p className={styles.brand}>{_.get(productData, 'brand.name')}</p>
        <p className={styles.title}>
          {_.get(productData, 'locales[0].variants[0].title', '')}
        </p>
        <p className={styles.options}>
          {`${_.get(productData, 'locales[0].variants[0].options', []).length} options`}
        </p>
        <p className={styles.price}>
          {`${
            currencySign[
              _.get(
                productData,
                'locales[0].currency',
                'USD'
              ) as keyof typeof currencySign
            ]
          }${_.get(productData, 'locales[0].variants[0].price', 0)}`}
        </p>
      </div>
      <div className={styles.bottomBox}>
        <button>Add to Shelf</button>
        <button>Add to Bag</button>
      </div>
    </div>
  )
}

export default ProductCard
