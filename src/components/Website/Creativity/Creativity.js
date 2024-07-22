import React from 'react'
import Image from 'next/image';
import { FaPaintBrush, FaPalette, FaRocket } from 'react-icons/fa';
import Link from 'next/link';


const Creativity = () => {
  return (
    <section className=" py-12 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  mb-8">
          Unleash Your <span className="text-[#E55607]">Creativity</span> and Style
        </h2>
        <p className="text-center text-xl  mb-8">
          Express your unique style and creativity on Talnetics. Connect with like-minded individuals and get inspired.
        </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-5">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaPaintBrush className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold  mb-2 text-center">Express Yourself</h3>
            <p className="text-center ">
              Use Talnetics to showcase your unique talents and creative projects to the world.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaPalette className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold  mb-2 text-center">Find Inspiration</h3>
            <p className="text-center ">
              Connect with other artists and discover new sources of inspiration to fuel your creativity.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold  mb-2 text-center">Launch Your Ideas</h3>
            <p className="text-center ">
              Turn your creative ideas into reality with the support of our vibrant community.
            </p>
          </div>
        </div>

        <div className="relative mb-12">
          <Image
            src="/images/showcase-talents.png" // replace with your image path
            alt="Unleash Your Creativity and Style"
            layout="responsive"
            objectFit="cover"
            width={250}
            height={275}
            className="rounded-lg bg-black w-[30%] h-[200px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-center text-2xl lg:text-2xl  text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              Your Style, Your Voice
            </h3>
          </div>
        </div>

        
    </div>

    <div className="text-center">
          <Link 
            href="/join" // replace with your join page URL
            className="btn bg-orange-600 w-[240px]  border-none text-white hover:text-black mt-4 mx-auto"
          >
            Join Talnetics Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Creativity