
'use client'

import {FiStar, FiUsers, FiCalendar, FiTrendingUp, FiHeart, FiActivity} from 'react-icons/fi'
import {motion} from 'framer-motion';

import styles from  './features.module.css'

const features = [
    {
      icon: <FiStar className="text-orange-600" />,
      title: 'Content Showcase',
      description: 'Organize and share your content, promoted through our AI-powered pipeline.',
    },
    {
      icon: <FiUsers className="text-orange-600
      " />,
      title: 'Collaboration',
      description: 'Facilitate collaboration among talents, fostering creativity and innovation.',
    },
    {
      icon: <FiCalendar className="text-orange-600" />,
      title: 'Event Management',
      description: 'Participate in events and challenges to further develop your skills and achievements.',
    },
    {
      icon: <FiTrendingUp className="text-orange-600" />,
      title: 'Talent Discovery',
      description: 'Get discovered by partners, scouters, and recruitment agencies. Gain visibility and career opportunities.',
    },
    {
      icon: <FiHeart className=" text-orange-600" />,
      title: 'Support Management',
      description: 'View and manage your supporters (fans). Engage and grow your fan base.',
    },
    {
        icon: <FiActivity className="text-orange-600" />,
        title: 'Promotion',
        description: 'Increase your global visibility via our promotion pipeline and activities.',
      },
  ];

  


const Features = () => {
  return (
     <section id="features"  className=" py-16 bg-base-200 text-base-content">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:w-[70%] xl:mx-auto gap-8">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            className="card bg-base-100 shadow-xl p-6  "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          > 
              <div className="text-6xl mb-4 mx-auto text-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="">{feature.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features