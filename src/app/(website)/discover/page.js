import StaticHero from '@/components/Website/StaticHero/StaticHero'
import styles from './discover.module.css'
import TalentDiscovery from '@/components/Website/TalentDiscovery/TalentDiscovery'
import GetDiscovered from '@/components/Website/GetDiscovered/GetDiscovered'
import FAQ from '@/components/Website/FAQ/Faq'
import Stats from '@/components/Website/StatsSection/Stats'
import CallForAudition from '@/components/Website/CallForAudition/CallForAudition '
import Partners from '@/components/Website/Partners/Partners'
import PartnerCategories from '@/components/Website/PartnerCategories/PartnerCategories'
import TalentCategories from '@/components/Website/TalentCategories/TalentCategories'


//SEO Optimization


export const metadata = {
  title: 'Talent Discovery - Find Musicians and Artists | BridgeMatch',
  description: 'Discover talented musicians and artists on BridgeMatch. Connect with like-minded individuals, collaborate on projects, and grow your network.',
}

const Discover = () => {
  const desc="Upload your best talents content and stand the chance to get promotion and improve visibility We help you get discovered and together we empower you with the necessary connection to get value for your talent"
  return (
    <div>
      <StaticHero heading="New Talents" highlighted="Discover" linkText="Start Discovering" desc={desc} />
      <TalentDiscovery />
      <TalentCategories />
      <GetDiscovered />
      <CallForAudition />
      <PartnerCategories />
      <Partners />
      <FAQ />
      <Stats />
    </div>
    
  )
}

export default Discover