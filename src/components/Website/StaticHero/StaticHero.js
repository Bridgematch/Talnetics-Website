'use client'

import Image from 'next/image';
import { FaUserAlt, FaFileAlt } from 'react-icons/fa';

const StaticHero = ({highlighted, heading , desc, linkText}) => {
  return (
    <div className="container-fluid relative px-8 py-16 cover items-center justify-center w-screen h-screen" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }} >
    <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
    <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 py-8 md:py-0">
      <div className="lg:w-1/2 text-white space-y-8 items-end">
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="bg-orange-500 p-2">{highlighted}</span> {heading}
        </h1>
        <p className="text-lg lg:text-xl pr-8">
          {desc}
        </p>
        <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          {linkText}
        </button>
      </div>
      <div className="relative lg:w-1/2 flex flex-col items-center lg:items-end mt-12 lg:mt-0 space-y-4 mr-8">
        <div className="relative w-80 h-80 md:w-[75%]   lg:w-[80%]  p-2 rounded-full shadow-lg">
          <Image src="/images/event3.png" alt="Artist 1" className="rounded-full object-cover" layout="fill" />
        </div>
        {/* <div className="relative w-32 h-32 lg:w-48 lg:h-48 bg-white p-2 rounded-full shadow-lg -mt-16 ml-16">
          <Image src="/images/event1.png" alt="Artist 2" className="rounded-full object-cover" layout="fill" />
        </div> */}
        <div className="hidden md:flex  flex-row justify-start gap-8   ">
             <div className="bg-gray-900 bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
          <div className="flex items-center justify-center space-x-2">
            <FaFileAlt className="text-blue-500" size={24} />
            <span className="text-2xl font-bold text-white">20K+</span>
          </div>
          <p className=" text-gray-400">Total Contents Showcased</p>
        </div>
        <div className="bg-gray-900 bg-opacity-90 p-4 rounded-lg shadow-lg text-center mt-4">
          <div className="flex items-center justify-center space-x-2">
            <FaUserAlt className="text-green-500" size={24} />
            <span className="text-2xl font-bold text-white">10K+</span>
          </div>
          <p className="text-gray-400">Active Users</p>
        </div>
        </div>
       
      </div>





    </div>
  </div>
  )
}

export default StaticHero