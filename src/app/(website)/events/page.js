import StaticHero from '@/components/Website/StaticHero/StaticHero'
import styles from './events.module.css'
import EventSection from '@/components/Website/Event/event'
import Events from '@/components/Website/Events/Events'
import Stats from '@/components/Website/StatsSection/Stats'
import EventTimeline from '@/components/Website/EventTimeline/EventTimeline'
import EventCategory from '@/components/Website/EventCategories/EventCategory'


export const metadata = {
  title: 'Discover Events and Music Shows | Talnetics',
  description: 'Explore upcoming events, music shows, and concerts on Talnetics. Stay updated with local and global music events, connect with artists, and join the community.',
}


const EventPage = () => {
  const desc="Discover exciting events and register to showcase your talents. Join competitions, engage with industry leaders, and elevate your visibility. We connect you with opportunities to shine and excel in your creative journey."
  return (
    <div>
      <StaticHero heading="Event Contest" highlighted="Manage" linkText="See Events" desc={desc} />
      <EventSection />
      <EventTimeline />
      <EventCategory />
      <Events />
      
      <Stats />
      
      </div>
  )
}

export default EventPage