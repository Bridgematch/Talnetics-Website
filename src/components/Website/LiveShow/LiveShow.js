import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const liveShowImages = [
    '/images/live-show1.jpg',
    '/images/live-show2.jpg',
    '/images/live-show3.jpg',
    '/images/live-show4.jpg',
  ];

const LiveShow = () => {
  return (
    <section className="py-12 text-base-content">
      <div className="container-fluid mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 w-[100%] md:ml-16    ">
          <h2 className="text-4xl font-extrabold  mb-4">
            <span className="text-[#E55607]">Talnetics</span> Live Show
          </h2>
          <p className="text-lg  mb-6 md:pr-20">
            Talnetics hosts a live show where we feature various talents from different categories in the entertainment and art space. In our studio, we conduct interview sessions with talents to promote them and help them gain visibility.
          </p>
          <div className="flex space-x-4">
            <Link href="/live-show" className="btn bg-orange-600 w-[180px] border-none text-white hover:text-black mt-4">
                View our Live Show
            </Link>
            <Link href="/host-show" className="btn bg-transparent border-orange-600 w-[180px]  text-orange-600 hover:text-black mt-4">
                Host your Show
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 ">
          {liveShowImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-black">
              <Image
                src={src}
                alt={`Talnetics Live Show ${index + 1}`}
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                className="transform transition duration-500 hover:scale-105 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveShow