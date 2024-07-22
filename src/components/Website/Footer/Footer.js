'use client'

import Link from 'next/link'
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';


import styles from './footer.module.css'


const Footer = () => {
  return (
    <footer className="bg-[#191D31] text-white py-12 w-screen ">
    <div className="container-fluid mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand and Social Media Links */}
        <div className="flex flex-col items-start">
          <Image src="/logo.png" alt="Talnetics Logo" width={100} height={50} className="mb-4" />
          <h2 className="text-2xl font-bold mb-4">Talnetics</h2>
          <div className="flex space-x-4">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></Link>
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></Link>
          </div>
        </div>
        
        {/* Core Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Core Links</h3>
          <ul className="space-y-2">
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/showcase" className="hover:underline">Showcase</Link></li>
            <li><Link href="/discover" className="hover:underline">Discover</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        
        {/* Sub Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sub Links</h3>
          <ul className="space-y-2">
            <li><Link href="/promotion" className="hover:underline">Promotion</Link></li>
            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link href="/engage" className="hover:underline">Engage</Link></li>
            <li><Link href="/partners" className="hover:underline">Partners</Link></li>
            <li><Link href="/stories" className="hover:underline">Stories</Link></li>
          </ul>
        </div>
        
        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email" className="input  w-full mb-4" />
            <button type="submit" className="btn bg-orange-600 w-full border-none text-white hover:text-black">Subscribe</button>
          </form>
        </div>
        
      </div>

      <div className="mt-12">
        <ul className="flex flex-wrap justify-center space-x-4 mb-4">
          <li><Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
          <li><Link href="/privacy-statements" className="hover:underline">Privacy Statements</Link></li>
          <li><Link href="/service-agreements" className="hover:underline">Talnetics Agreements</Link></li>
          <li><Link href="/distribution-agreements" className="hover:underline">Digital Distribution Agreement</Link></li>
        </ul>
        <hr className="border-gray-600 mb-4" />
        <p className="text-center">&copy; 2024 Talnetics Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer