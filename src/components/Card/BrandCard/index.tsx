import Image from 'next/image'
import { DeliveryBadge3Icon } from '@/styles/icons'
import styles from './brandCard.module.scss'

interface BrandCardProps {
  name: string
}

const BrandCard = ({ name }: BrandCardProps) => {
  return (
    <div className={styles.container}>
      <Image src="/images/image-19.png" alt={name} width={262} height={248} />
      <DeliveryBadge3Icon className={styles.badge} />
      <h2>{name}</h2>
    </div>
  )
}

export default BrandCard
