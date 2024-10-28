import Link from 'next/link'
import {
  HeartIcon,
  Logo,
  MenuIcon,
  ShoppingCartIcon,
  DownArrowIcon,
} from '@/styles/icons'
import SearchBar from '../SearchBar'
import styles from './header.module.scss'

const navigationLinks = [
  { title: 'Brands A-Z', href: '/' },
  { title: 'Makeup', href: '/' },
  { title: 'Hair', href: '/' },
  { title: 'Skincare', href: '/' },
  { title: 'Nails', href: '/' },
  { title: 'Tools & Brushes', href: '/' },
  { title: 'Fragrance', href: '/' },
  { title: 'Body', href: '/' },
]

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.innerContainer}>
        <div className={styles.containerTop}>
          <button className={styles.btn}>
            <MenuIcon />
          </button>
          <Link href="/">
            <Logo />
          </Link>
          <div className={styles.actionContainer}>
            <button className={styles.btn}>
              <HeartIcon />
            </button>
            <button className={styles.btn}>
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
        <div className={styles.midContainer}>
          <SearchBar />
        </div>
        <div className={styles.bottomContainer}>
          <button className={styles.dropdown}>
            Marketplace
            <DownArrowIcon />
          </button>
          {navigationLinks.map((link) => (
            <Link key={link.title} href={link.href} className={styles.navLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
