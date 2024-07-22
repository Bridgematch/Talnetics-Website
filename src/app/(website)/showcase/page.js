
import StaticHero from '@/components/Website/StaticHero/StaticHero'
import styles from './showcase.module.css'
import FAQ from '@/components/Website/FAQ/Faq'
import ShowcaseSection from '@/components/Website/ShowcaseSection/ShowcaseSection'
import Creativity from '@/components/Website/Creativity/Creativity'
import Promotion from '@/components/Website/Promotion/Promotion'
import Stats from '@/components/Website/StatsSection/Stats'
import TalentCategories from '@/components/Website/TalentCategories/TalentCategories'
import PartnerCategories from '@/components/Website/PartnerCategories/PartnerCategories'
import LiveShow from '@/components/Website/LiveShow/LiveShow'



// export const metadata = {
//   title: 'Explore BridgeMatch Showcases | BridgeMatch',
//   description: 'Discover diverse showcases and events on BridgeMatch. Join a community of artists, creators, and performers showcasing their talents globally.',
// }

// export const metadata = {
//   title: 'Discover Talents and Artists | BridgeMatch',
//   description: 'Explore talented artists, musicians, and performers on BridgeMatch. Connect with local and global talents, discover new music, and join the creative community.',
// }

export const metadata = {
  title: 'Showcase Talents and Get Sponsored | BridgeMatch',
  description: 'Showcase your talents, skills, and creativity on BridgeMatch. Discover sponsorship opportunities, connect with a global audience, and elevate your visibility as an artist or performer.',
}

const Showcase = () => {
  const desc="Upload your best talents content and stand the chance to get promotion and improve visibility We help you get discovered and together we empower you with the necessary connection to get value for your talent"
  return (
    <div>
      <StaticHero heading="your Talents" highlighted="Showcase" linkText="Grab This Offer" desc={desc} />
      <ShowcaseSection />
       <TalentCategories />
        <Creativity />
        <LiveShow />
        <PartnerCategories />
        <Promotion /> 
        <FAQ />
        <Stats />
    </div>
   
  )
}

export default Showcase