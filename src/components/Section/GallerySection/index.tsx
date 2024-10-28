import Image from 'next/image'
import Link from 'next/link'
import styles from './gallerySection.module.scss'

const GALLERY_CARDS = [
  {
    src: '/images/image-18.png',
    alt: 'image',
    width: 600,
    height: 500,
    title: 'Lip COMBOS WE’RE LOVING RIGHT NOW',
    buttonText: 'VIEW PRODUCTS',
  },
  {
    src: '/images/image-17.png',
    alt: 'image',
    width: 600,
    height: 500,
    title: 'OUR FAVORITE LIGHTWEIGHT MAKEUP ROUTINE',
    buttonText: 'VIEW PRODUCTS',
  },
]

const GallerySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.topBox}>
          <p>Shop & Sell</p>
          <h1>What YOU Love</h1>
        </div>
        <div className={styles.midBox}>
          {new Array(8).fill(0).map((_, index) => (
            <Link key={index} href="/">
              <Image
                src={`/images/image-${index + 9}.png`}
                alt="image"
                width={360}
                height={330}
              />
            </Link>
          ))}
        </div>
        <div className={styles.bottomBox}>
          {GALLERY_CARDS.map((card, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
              />
              <div className={styles.box}>
                <h2>{card.title}</h2>
                <button>{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GallerySection
