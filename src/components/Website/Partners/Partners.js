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

SwiperCore.use([Pagination, Mousewheel])


const partners = [
    { name: 'Partner 1', logo: '/images/partners/logo1.webp', url: 'https://partner1.com' },
    { name: 'Partner 2', logo: '/images/partners/logo2.webp', url: 'https://partner2.com' },
    { name: 'Partner 3', logo: '/images/partners/logo3.webp', url: 'https://partner3.com' },
    { name: 'Partner 4', logo: '/images/partners/logo4.webp', url: 'https://partner4.com' },
    { name: 'Partner 5', logo: '/images/partners/logo5.png', url: 'https://partner5.com' },
  ];



const Partners = () => {
  return (
    <section id="partners" className="  bg-gray-100 w-screen relative">
    <div className="container-fluid  mx-auto px-10  pt-16 pb-8 text-center md:w-[100%] bg-green-100 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-6  ">Partners We Work With</h2>
      <a href="/signup" className="btn bg-orange-600 text-white hover:text-black mb-6">Become a Partner</a>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="partners-slider mb-8 px-4 w-[100%] md:w-[90%] lg:w-[90%] h-[16vh] md:h-[35vh]" 
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center ">
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center w-[100px] h-[100px] sm:w-[160px] sm:h-[140px] md:w-[260px] md:h-[240px]">
                <Image src={partner.logo} alt={partner.name} width={100} height={100} className="rounded-full w-[80px] h-[80px] sm:w-[125px] sm:h-[100px] md:w-[225px] md:h-[200px] " />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

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