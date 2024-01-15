import { Metadata } from 'next'
import BannerExperiences from '../components/banner-experiences/page'
 
export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Home() {
  return (
    <main>
      <div className="hero">
        <BannerExperiences />
      </div>
  </main>
  )
}
