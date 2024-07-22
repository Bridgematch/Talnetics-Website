import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const CallForAudition  = () => {
  return (
    <section className="py-12 m-0 p-0  mb-8  ">
      <div className="container-fluid  mx-auto text-center flex flex-col justify-center item-center ">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 ">
          <span className="bg-[#E55607] text-white px-2">Call for Audition</span> <br />
          <p className="mt-4"><span className="text-[#E55607] ">Expression of Interest</span></p>
        </h2>
        <p className="text-xl text-gray-700 mb-8 w-[75%] md:w-[50%] mx-auto">
          Directors, producers, and project managers can create a call for audition. Talents can express their interest to collaborate and join exciting projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
          <div className="relative">
            <Image
              src="/images/call_for_audition_2.jpg" // replace with your image path
              alt="Call for Audition"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-3xl font-bold text-white px-4 py-2">
                Your Chance to Shine
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-8 pr-10">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
          <p className="mt-4"><span className=" ">Share your Interest</span></p>
        </h3>
            <p className="text-lg text-gray-700 mb-6 w-[80%]">
              Looking for the perfect cast or crew for your project? Create a call for audition and find the best talents suited for your needs. Give opportunities to rising stars and bring your vision to life.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/create-audition" className="btn bg-orange-600 w-[180px]  border-none text-white hover:text-black mt-4">
                  Create Audition
          
              </Link>
              <Link href="/#features" className="btn bg-transparent  border-orange-600 w-[180px]   text-orange-600 hover:text-black mt-4">
                  See Features
                </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-[#E55607]">Join</span> the Revolution of <span className="bg-[#E55607] text-white px-2">Talent Discovery</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default CallForAudition 