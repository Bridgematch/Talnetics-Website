'use client'

import Video from 'next-video'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';


// import video1 from '/videos/video1.mp4'
// import video2 from '/videos/video2.mp4'
// import video3 from '/videos/video3.mp4'
// import video4 from '/videos/video4.mp4'
// import video5 from '/videos/video5.mp4'



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './stories.module.css'

import SwiperCore from  'swiper'
import  { Pagination, Mousewheel, Navigation} from 'swiper/modules'
import Image from 'next/image';

SwiperCore.use([Pagination, Mousewheel])
const stories = [
    {
      video: '/videos/video1.mp4', // Replace with your video path
      name: 'Sheyi Omagene',
      talents: 'Singer, Songwriter',
      location: 'New York, USA',
      image: '/images/users/user1.jpg',
    },
    {
      video: '/videos/video2.mp4', // Replace with your video path
      name: 'Tyler Johnson',
      talents: 'Dancer, Choreographer',
      location: 'Los Angeles, USA',
      image: '/images/users/user2.jpg',
    },
    {
      video: '/videos/video3.mp4', // Replace with your video path
      name: 'Megan Callier',
      talents: 'Painter, Sculptor',
      location: 'Paris, France',
      image: '/images/users/user3.jpg',
    },
    {
      video: '/videos/video4.mp4', // Replace with your video path
      name: 'Steve Brad',
      talents: 'Actor, Director',
      location: 'London, UK',
      image: '/images/users/user4.jpg',
    },
    {
      video: '/videos/video5.mp4', // Replace with your video path
      name: 'Ali Khan',
      talents: 'Musician, Composer',
      location: 'Winnipeg, Canada',
      image: '/images/users/user5.jpg',
    },
  ];
  

const Stories = () => {
  return (
    <section id="stories" className="   w-screen z-0 text-base-content">
    <div className="container-fluid  mx-auto px-10  pt-16 pb-8 text-center md:w-[100%]  flex flex-col items-center ">
      
      
        <h2 className="text-4xl font-bold mb-12">Talent Stories</h2>
        <div className="w-full  flex flex-row justify-start items-center gap-2 space-x-4 p-4 z-0">
 
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="h-100  md:w-[90%]  "
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center ">
              <div className="flex flex-col sm:flex-row gap-4 bg-base-100 shadow-xl rounded-lg p-8 w-full mx-auto md:w-[90%]  ">
               
                <div className="md:w-1/2 sm:w-[100%] md:mr-5">
                <video
                    controls
                    src={story.video}
                    className="rounded-lg mb-0 ml-0 pr-0 pb-0 w-full h-full mt-0"
                    alt={story.name}
                    />
                </div> 
                <div className="mx-auto text-center w-1/2">
                <Image src={story.image} width={250} height={250} alt="" className="w-[160px] h-[220px] xs:w-[500px]  mb-5 mx-auto rounded-lg" />
                <h3 className="text-2xl font-bold mb-2"> {story.name} </h3>
                <p className=" mb-2">{story.talents}</p>
                <p className=" mb-4">{story.location}</p>
                <div className="flex md:flex-row flex-col gap-2  justify-center text-center">
                  <Link href="/#" className="btn btn-sm px-4  btn-primary">Support</Link>
                  <Link href="/#" className="btn btn-sm px-6  btn-secondary">Hire</Link>
                  <Link href="/#" className="btn btn-sm px-4  btn-accent">Collaborate</Link>
                </div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Stories