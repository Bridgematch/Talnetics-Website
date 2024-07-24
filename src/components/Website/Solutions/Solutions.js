'use client'

import {motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';


import styles from './solutions.module.css'
import { useRecoilState } from 'recoil';
import { waitlistForm } from '@/atom/contentState';



const Solutions = () => {

  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)


  return (
    <section id="solutions" className="py-16 bg-base-200 text-base-content">
      <div className="container-fluid mx-auto flex flex-col md:flex-row items-center justify-center px-0 space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="w-full md:w-1/2 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/solutions.png" // Replace with your image path
            alt="Talent Connections"
            width={600}
            height={400}
            className="rounded-lg  w-[100%] object-fill"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-11"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-lg  w-[10%] mb-5 "
          />
          <h2 className="text-4xl font-bold mb-4">Empower Your Talent</h2>
          <p className=" mb-6 lg:w-[65%] md:w-[65%]">
            With Talnetics, talented users can upload and share their content which goes through our AI-powered promotion pipeline to improve visibility and promotion.
          </p>
          {/* <Link href="/signup" className="btn bg-orange-600 px-12  text-white hover:text-black">Try It Out</Link> */}
          <div onClick={()=>setShowWaitlist(true)} className="btn bg-orange-600 px-12  text-white hover:text-black">Join the Waitlist</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions