import { Metadata } from 'next'
import BannerHome from './components/banner-home/page'
import SectionExperiences from './components/video-experiences'
import SectionBooking from './components/booking/page'
import SectionProposeText from './components/propose-text/page'
 
export const metadata: Metadata = {
  title: 'GT RENT',
}

export default function Home() {
  return (
    <main>
      <div className="hero">
        <BannerHome />
      </div>
      <div>
        <SectionProposeText />
      </div>
      <div className="hero">
        <SectionExperiences />
      </div>
      <div>
        <SectionBooking />
      </div>
   </main>
  )
}
