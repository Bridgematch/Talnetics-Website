import StaticHero from '@/components/Website/StaticHero/StaticHero'
import styles from './blog.module.css'



export const metadata = {
  title: 'Explore Insights and Tips | Talnetics Blog',
  description: 'Discover insightful articles, tips, and stories on the Talnetics Blog. Stay updated with the latest trends, news, and resources for artists, performers, and creatives.',
}




const Blog = () => {
  const desc="Upload your best talents content and stand the chance to get promotion and improve visibility We help you get discovered and together we empower you with the necessary connection to get value for your talent"
  return (
    <div>
      <StaticHero heading="your Talents" highlighted="Showcase" linkText="Grab This Offer" desc={desc} />
          <div className={styles.bold}>Blog Page</div>
    </div>

  )
}

export default Blog