'use client'

import {motion} from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

import styles from './partners.module.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from  'swiper'
import  {
     Pagination, Mousewheel, Navigation
} from 'swiper/modules'
import { useRecoilState } from 'recoil';
import { waitlistForm } from '@/atom/contentState';

SwiperCore.use([Pagination, Mousewheel])


const partners = [
    { name: 'Partner 1', logo: '/images/partners/logo1.webp', url: 'https://partner1.com' },
    { name: 'Partner 2', logo: '/images/partners/logo2.webp', url: 'https://partner2.com' },
    { name: 'Partner 3', logo: '/images/partners/logo3.webp', url: 'https://partner3.com' },
    { name: 'Partner 4', logo: '/images/partners/logo4.webp', url: 'https://partner4.com' },
    { name: 'Partner 5', logo: '/images/partners/logo5.png', url: 'https://partner5.com' },
  ];



const Partners = () => {
  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)


  return (
    <section id="partners" className="   w-screen z-0 text-base-content">
    <div className="container-fluid  mx-auto px-10  pt-16 pb-8 text-center md:w-[100%]  flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-6  ">Partners We Work With</h2>
      {/* <a href="/signup" className="btn bg-orange-600 text-white hover:text-black mb-6">Become a Partner</a>
       */}

<div onClick={()=>setShowWaitlist(true)} className="btn border-none mb-8 bg-orange-600 px-12  text-white hover:text-black">Join the Waitlist</div>
<div className="w-full  flex flex-row justify-start items-center gap-2 space-x-4 p-4 z-0">
 
 <Swiper
        slidesPerView={4}
        spaceBetween={5}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className=" flex flex-col w-screen pr-0 sm:pr-12  md:pr-12  space-y-3  rounded-xl pt-2 mt-2 relative z-0" 
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center ">
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              
                <Image src={partner.logo} alt={partner.name} width={100} height={100} className="shadow-neutral-600 shadow-md rounded-full w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[180px] md:h-[180px] object-cover " />
              
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
</div>
      <div className="mt-12 ">
        
        <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a>
        </div>
      </div>

      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/path/to/partners-bg.jpg" // Replace with your background image
          alt="Partners Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div> */}
    </div>
  </section>
  )
}

export default Partners