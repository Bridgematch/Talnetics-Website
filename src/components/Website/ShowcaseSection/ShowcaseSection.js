import Image from 'next/image';
import Link from 'next/link';
import { FaBullhorn, FaStar, FaUsers } from 'react-icons/fa';

const ShowcaseSection = () => {
  return (
    <section className=" py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Showcase Your Talents on <span className="text-[#E55607]">Talnetics</span>
        </h2>
        <p className="text-center text-xl text-gray-700 mb-8">
          Elevate your visibility, get sponsorships, and connect with top industry professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaBullhorn className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Gain Exposure</h3>
            <p className="text-center text-gray-600">
              Reach a wider audience and showcase your skills to potential sponsors and fans.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Shine Bright</h3>
            <p className="text-center text-gray-600">
              Stand out from the crowd with a unique profile that highlights your best work.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-6xl text-[#E55607] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Connect & Collaborate</h3>
            <p className="text-center text-gray-600">
              Network with industry leaders and other talented individuals to grow your career.
            </p>
          </div>
        </div>

        <div className="relative mb-8">
        
          <div className="relative inset-0 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded text-center">
              Your Talent Deserves the Spotlight
            </h3>
          </div>
        </div>

       
          <Link 
            href="/login" // replace with your join page URL
            className="btn bg-orange-600 w-[250px] border-none text-white hover:text-black  mx-auto mt-1"
          >
            Join Talnetics Now
          </Link>
        
      </div>
    </section>
  )
}

export default ShowcaseSection