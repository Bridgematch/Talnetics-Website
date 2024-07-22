'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const EventTimeline = () => {
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Submit Your <span className="text-[#E55607]">Content</span> for Event Competitions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Showcase your creative ability and achievement story by participating in event competitions. Follow the journey map to understand the event competition management process.
          </p>
        </div>
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 ">
          <div className="flex flex-col justify-center gap-12">
            <Image
              src="/images/event1.png"
              alt="Event Competition"
              width={200}
              height={100}
              className="rounded-lg w-[50%] mx-auto"
            />
            <Image
              src="/images/event2.png"
              alt="Event Competition"
              width={200}
              height={100}
              className="rounded-lg w-[50%] mx-auto"
            />
          </div>
         

          <div className=" w-[100%] md:w-5/6">
          <ul className="timeline timeline-vertical ml-6">
  <li>
    <div className="timeline-start timeline-box">
    <h3 className="text-lg font-semibold">Create an Event/Competition</h3>
    <p>Event managers create and publish competitions for talents to participate in.</p>
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-primary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr className="bg-primary" />
  </li>
  <li>
    <hr className="bg-primary" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-primary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box"> 
       <h3 className="text-lg font-semibold">Participants View and Register for Event Challenges</h3>
    <p>Talents view upcoming events and register to participate in various challenges.</p>
    </div>
    <hr className="bg-primary" />
  </li>
  <li>
    <hr className="bg-primary" />
    <div className="timeline-start timeline-box"> 
      <h3 className="text-lg font-semibold">Participants Submit Their Contents</h3>
       <p>Talents submit their creative works to compete in the challenges.</p>
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-primary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box">
    <h3 className="text-lg font-semibold">Event Managers View Participants and Submissions</h3>
     <p>Event managers review the submitted contents and manage participants.</p>
               
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">
    <h3 className="text-lg font-semibold">Users View and Vote for Talent Submitted Contents</h3>
     <p>Audience members can view and vote for their favorite submissions.</p>
                
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box">
    <h3 className="text-lg font-semibold">Talents Submission on a Scoreboard/Ranking Table</h3>
                  <p>All submitted contents are displayed on a ranking table based on votes and reviews.</p>
                
               
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">
    <h3 className="text-lg font-semibold">Judges Review and Select Winners</h3>
                  <p>Judges review top submissions and select winners based on creativity and impact.</p>
                
                
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box">
    <h3 className="text-lg font-semibold">Winners Get Their Prizes and Badges</h3>
     <p>Winners receive prizes and badges in recognition of their talent and creativity.</p>
                
               
    </div>
    <hr />
  </li>
</ul>

 
          </div>
 </div>

        </div>
       






       

        <div className="text-center">
          <Link href="/signup" className="btn bg-orange-600 w-[180px] border-none text-white hover:text-black mt-4">
              Join Now
          </Link>
        </div>
      </div>

    </section>
  )
}

export default EventTimeline