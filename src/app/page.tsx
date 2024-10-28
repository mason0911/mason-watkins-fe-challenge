import FeatureSection from '@/components/Section/FeatureSection'
import TrendingProductsCarousel from '@/components/Carousel/TrendingProductsCarousel'
import BannerSection from '@/components/Section/BannerSection'
import GallerySection from '@/components/Section/GallerySection'

export default function Home() {
  return (
    <div>
      <FeatureSection />
      <TrendingProductsCarousel />
      <BannerSection />
      <GallerySection />
    </div>
  )
}
