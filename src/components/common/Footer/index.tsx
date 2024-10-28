import Link from 'next/link'
import {
  FaceBookIcon,
  LinkedinIcon,
  Logo,
  XIcon,
  YoutubeIcon,
} from '@/styles/icons'
import styles from './footer.module.scss'

const ICONS = [
  {
    icon: <LinkedinIcon />,
    href: '#',
  },
  {
    icon: <FaceBookIcon />,
    href: '#',
  },
  {
    icon: <XIcon />,
    href: '#',
  },
  {
    icon: <YoutubeIcon />,
    href: '#',
  },
]

const COMPANY_LINKS = [
  {
    href: '#',
    label: 'About Us',
  },
  {
    href: '#',
    label: 'Create a shop',
  },
  {
    href: '#',
    label: 'Media',
  },
]

const SUPPORT_LINKS = [
  {
    href: '#',
    label: 'Help Center',
  },
  {
    href: '#',
    label: 'Contact',
  },
  {
    href: '#',
    label: 'For Brands',
  },
]

const SERVICES_LINKS = [
  {
    href: '#',
    label: 'Privacy Policy',
  },
  {
    href: '#',
    label: 'Terms of Service',
  },
]

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.box1}>
          <Link href="/">
            <Logo width={193} height={36} />
          </Link>
          <div className={styles.socialIcons}>
            {ICONS.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.list}>
            <h4>Company</h4>
            {COMPANY_LINKS.map((item, index) => (
              <Link key={index} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.list}>
            <h4>Support</h4>
            {SUPPORT_LINKS.map((item, index) => (
              <Link key={index} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.box3}>
          <p className="">{`© ${new Date().getFullYear()} NOWwith Ventures Inc. All Rights Reserved.`}</p>
          <div className={styles.box4}>
            {SERVICES_LINKS.map((item, index) => (
              <Link key={index} href={item.href} className={styles.footerLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
