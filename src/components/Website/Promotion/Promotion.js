import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';


const Promotion = () => {
  return (
    <section className="py-12 text-base-content ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold  mb-4">
          Promote Your Talent with <span className="text-[#E55607]">Talnetics</span>
        </h2>
        <p className="text-xl  mb-8">
          Amplify your reach through social media, TV, radio stations, and our exclusive Talnetics show. Get the visibility you deserve!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <Image
              src="/images/promotion-1.jpg" // replace with your image path
              alt="Promote your talent on social media"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-3xl font-bold text-white px-4 py-2">
                Social Media Exposure
              </h3>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/promotion-2.jpg" // replace with your image path
              alt="Talnetics show promotion"
              layout="responsive"
              width={200}
              height={475}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-3xl font-bold text-white px-4 py-2">
                Talnetics Show
              </h3>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          We are dedicated to showcasing your talent on multiple platforms, ensuring maximum visibility and opportunities for sponsorships and collaborations.
        </p>

        <div className="text-center mb-8">
          <Link 
            href="/promote" // replace with your promote page URL
            className="btn bg-orange-600 w-[250px] border-none text-white hover:text-black  mx-auto mt-1"
          >
            Start Promoting Now
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Follow Talnetics</h2>
          <div className="flex space-x-4">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></Link>
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotion