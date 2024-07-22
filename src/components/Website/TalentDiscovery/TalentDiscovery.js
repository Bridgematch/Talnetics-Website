import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const TalentDiscovery = () => {
  return (
    <section className="py-12  ">
    <div className="container-fluid mx-auto  text-center py-8">
      <h2 className="text-4xl font-extrabold text-base-content mb-4">
        Talent Discovery for <span className="text-[#E55607]">Partners</span>
      </h2>
      <p className="text-xl  mb-12 w-[75%] md:w-[50%] mx-auto">
        Discover a pool of diverse talents from different backgrounds and countries. Connect with the best talents suited for your needs.
      </p>

      <div className="relative mb-12 flex flex-row gap-0">
        <Image
          src="/images/promotion-2.jpg" // replace with your image path
          alt="Partners discovering talents"
          width={400}
          height={275}
          className="rounded-lg w-[50%] mx-auto"
        />
        <Image
        src="/images/partners-discover-2.jpg" // replace with your image path
        alt="Partners discovering talents"
        width={400}
        height={275}
        className="rounded-lg w-[50%] mx-auto"
      />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-4xl  text-white px-4 py-2">
            Your Gateway to Global Talent
          </h3>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/#features" className="btn bg-orange-600 w-[180px]  border-none text-white hover:text-black mt-4 ">
            See Features
          
        </Link>
        <Link href="/#solution" className="btn bg-transparent  w-[180px] border border-[#E55607] text-[#E55607]  mt-4  hover:bg-[#E55607] hover:text-white">
            Discover Solutions
        </Link>
      </div>
    </div>
  </section>
  )
}

export default TalentDiscovery