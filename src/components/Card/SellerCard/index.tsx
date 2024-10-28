import { MerchantsType } from '@/types'
import styles from './sellerCard.module.scss'
import Image from 'next/image'

interface SellerCardProps {
  sellerData: MerchantsType
}

const SellerCard = ({ sellerData }: SellerCardProps) => {
  return (
    <div className={styles.container}>
      {sellerData?.images && (
        <Image
          src={sellerData?.images ? sellerData?.images[0]?.url : ''}
          alt={sellerData?.name}
          width={262}
          height={248}
        />
      )}
      <h3>{sellerData?.name}</h3>
    </div>
  )
}

export default SellerCard
