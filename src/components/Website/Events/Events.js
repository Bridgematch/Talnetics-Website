'use client'


import {motion} from 'framer-motion'
import { FiSettings, FiUsers, FiAward } from 'react-icons/fi';
import Image from 'next/image';


import styles from './events.module.css'
import { useRecoilState } from 'recoil';
import { waitlistForm } from '@/atom/contentState';



const events = [
    {
      title: 'Manage',
      description: 'Partners can create and manage their events and competitions which gets promoted and marketed globally and on social media.',
      icon: <FiSettings className="text-orange-600" />,
      image: '/images/event1.png', // Replace with your image path
    },
    {
      title: 'Engage',
      description: 'Users and Talents can engage in events to view, rate, rank, like, give comments and share events details.',
      icon: <FiUsers className="text-orange-600" />,
      image: '/images/event3.png', // Replace with your image path
    },
    {
      title: 'Participate',
      description: 'Talents can register to participate in event challenges and competitions, giving the opportunity to improve their creative ability and achievements stories.',
      icon: <FiAward className="text-orange-600" />,
      image: '/images/event2.png', // Replace with your image path
    },
  ];

  
const Events = () => {

  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)


  return (
    <section id="events"  className="py-16 bg-gradient-to-r from-orange-500 from-0% via-gray-800 via-50% to-emerald-500 to-100% text-base-content">
    <div className="container-fluid mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">More with Events</h2>
      {/* <div className="mb-12 mt-3">
        <a href="/signup" className="btn bg-orange-600 px-12 border-none text-white hover:text-black">Get Started</a>
      </div> */}
          <div onClick={()=>setShowWaitlist(true)} className="btn border-none mb-8 bg-orange-600 px-12  text-white hover:text-black">Join the Waitlist</div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:px-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-xl p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4 text-6xl text-orange-600">
              {event.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
            <p className=" mb-4">{event.description}</p>
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={200}
              className="rounded-lg w-[80%] mx-auto"
            />
          </motion.div>
        ))}
      </div>
     
    </div>
  </section>
  )
}

export default Events