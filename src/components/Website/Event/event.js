import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const EventSection = () => {
  return (
    <section className="py-8 ">
    <div className="container-fluid mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-16 text-center lg:text-left  ">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Manage <span className="text-[#E55607]">Events</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Event managers can easily upload and manage their events on Talnetics. Streamline the event creation process and reach a wider audience with our user-friendly interface.
        </p>
        <Link href="/manage-events" className="btn bg-orange-600 w-[180px] border-none text-white hover:text-black mt-4">
            Manage Events
        </Link>
      </div>

      <div className="lg:w-1/3 mb-8 lg:mb-0 lg:px-8">
        <Image
          src="/images/manage-events.jpg"
          alt="Manage Events"
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="lg:w-1/4 text-center lg:text-right">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Register for <span className="text-[#E55607]">Events</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Talents can register and participate in various events listed on Talnetics. Showcase your skills and gain visibility by joining exciting events in your field.
        </p>
        <Link href="/register-events" className="btn bg-orange-600 w-[180px] border-none text-white hover:text-black mt-4">
            Register for Events
        </Link>
      </div>
    </div>
  </section>
  )
}

export default EventSection