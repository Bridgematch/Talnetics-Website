'use client'


import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image';


import styles from './discover.module.css'
import { useRecoilState } from 'recoil';
import { waitlistForm } from '@/atom/contentState';

const Discover = () => {

  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)
  
  return (
    <section id="discover"  className="py-16 text-base-content">
    <div className="container-fluid mx-auto flex flex-col md:flex-row items-center justify-center pl-[10%] pr-[2%] px-0 space-y-8 md:space-y-0 md:space-x-4">
    <motion.div
        className="w-full md:w-1/2 text-center md:text-left  px-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
          <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-lg  w-[10%] mb-5 "
        />
        <h2 className="text-4xl font-bold mb-4">Discover Talents <span className='bg-orange-600 text-white'>Smartly</span></h2>
        <p className=" mb-6 lg:w-[75%] md:w-[70%]">
          With Talnetics, partners which includes record labels, event managers, producers, directors and recruitment agencies discover specific talents timely from pool of talents via our Recommendation system.
        </p>
        {/* <Link href="/signup" className="btn bg-orange-600 px-12 text-white hover:text-black">Check out our talents</Link>
        */}

<div onClick={()=>setShowWaitlist(true)} className="btn border-none mb-8 bg-orange-600 px-12  text-white hover:text-black">Join the Waitlist</div>
      

      </motion.div>
       <motion.div
        className="w-full md:w-1/2 "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/discover.png" // Replace with your image path
          alt="Discover talents"
          width={600}
          height={400}
          className="rounded-lg  w-[100%] object-fill"
        />
      </motion.div>
     
    </div>
  </section>
  )
}

export default Discover