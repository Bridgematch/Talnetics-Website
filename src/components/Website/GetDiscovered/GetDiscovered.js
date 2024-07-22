import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const GetDiscovered = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 mt-12">
      <div className="container-fluid mx-auto  text-center flex flex-col md:flex-row item-center justify-between  ">
       <div className="w-[100%] md:w-[50%] px-4 md:px-8 pt-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 items-center">
          Get Discovered with <span className="text-[#E55607]">BridgeMatch</span>
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          BridgeMatch gives you the platform to connect and get discovered by partners, companies, brands, and other talents.
        </p>
        <div className="flex justify-center  mb-8 gap-5">
          <Link href="/#features" className="btn bg-orange-600 w-[180px]  border-none text-white hover:text-black mt-4  ">
              Sign Up Now
          </Link>
          <Link href="/#solution" className="btn bg-transparent  w-[180px] border border-[#E55607] text-[#E55607]  mt-4  hover:bg-[#E55607] hover:text-white">
              Learn More
          </Link>
        </div>
        </div>

        <div className="relative mb-12 mx-auto bg-black w-[50%] rounded-lg">
          <Image
            src="/images/talent-discovered.jpg" // replace with your image path
            alt="Talents getting discovered"
            width={700}
            height={475}
            className="rounded-lg w-[100%] cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-3xl font-bold text-white px-4 py-2">
              Your Opportunity Awaits
            </h3>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default GetDiscovered