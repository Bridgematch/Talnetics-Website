
'use client'


import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from './navbar.module.css'
import { joinWaitlist } from "@/lib/api-actions"
import { useRecoilState } from "recoil"
import { waitlistForm } from "@/atom/contentState"







const Navbar = () => {
  
  const [active, setActive] = useState('home')

  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)
  const router = useRouter();
  //console.log(router.passHref)





  return (
//    <div className="navbar bg-gray-900 p-3 ">
//     <div className="container mx-auto flex justify-between items-center">
//         <div>
//             <Image src="/logo.png" alt="Logo" className="h-8"  width={42} height={42}/>
//         </div>
//         <div className="hidden md:flex space-x-4">
//             <Link href="/" className="">Home</Link>
//             <Link href="/showcase" className="">Showcase</Link>
//             <Link href="/discover" className="">Discover</Link>
//             <Link href="/events" className="">Events</Link>
//             <Link href="/blog" className="">Blog</Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//             <button className="btn btn-primary">Sign Up</button>
//             <button className="btn btn-secondary">Sign In</button>
//         </div>
//         <button className="md:hidden ">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//         </button>
//     </div>

   
// </div> 

 
<div className={`${styles.toTop} navbar sticky bg-black bg-opacity-1 ` }>
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 ml-0 z-[1] p-2 shadow rounded-box w-52  bg-gray-800 gap-4 pb-8 pt-8">
      <a className="btn btn-ghost text-xl">
    <Image src="/logo.png" alt="Logo" className="h-12"  width={48} height={52}/>
    </a>
      <li><Link passHref href="/" className={`text-white md:text-md hover:bg-orange-500 ${router.pathname == '/' ? 'bg-orange-600':'bg-transparent'}`} >Home</Link></li>
        {/* <li><Link passHref href="/showcase" className={`text-white text-xl hover:bg-orange-500 ${router.pathname =="/showcase" ? 'bg-orange-600':'bg-transparent'}`} >Showcase</Link></li>
        <li><Link passHref href="/discover" className={`text-white text-xl hover:bg-orange-500 ${router.pathname =="/discover" ? 'bg-orange-600':'bg-transparent'}`} >Discover</Link></li>
        <li><Link passHref href="/events" className={`text-white text-xl hover:bg-orange-500 ${router.pathname =="/events" ? 'bg-orange-600':'bg-transparent'}`} >Events</Link></li>
        <li><Link passHref href="/blog" className={`text-white text-xl hover:bg-orange-500 ${router.pathname =="/blog" ? 'bg-orange-600':'bg-transparent'}`} >Blog</Link></li>
     */}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
    <Image src="/logo.png" alt="Logo" className="h-12"  width={48} height={52}/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2 ">
    <li><Link passHref href="/" className={`text-white  hover:bg-orange-500 ${router.pathname == '/' ? 'bg-orange-600':'bg-transparent'}`} >Home</Link></li>
        {/* <li><Link passHref href="/showcase" className={`text-white hover:bg-orange-500 ${router.pathname =="/showcase" ? 'bg-orange-600':'bg-transparent'}`} >Showcase</Link></li>
        <li><Link passHref href="/discover" className={`text-white hover:bg-orange-500 ${router.pathname =="/discover" ? 'bg-orange-600':'bg-transparent'}`} >Discover</Link></li>
        <li><Link passHref href="/events" className={`text-white hover:bg-orange-500 ${router.pathname =="/events" ? 'bg-orange-600':'bg-transparent'}`} >Events</Link></li>
        <li><Link passHref href="/blog" className={`text-white hover:bg-orange-500 ${router.pathname =="/blog" ? 'bg-orange-600':'bg-transparent'}`} >Blog</Link></li>
     */}
    </ul>
  </div>
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn ml-4" onClick={()=>document.getElementById('my_modal_4').showModal()}>Reserve a Spot</button> */}
<button className="btn ml-5 bg-orange-600 text-white border-none px-8 hover:text-black" onClick={()=> setShowWaitlist(true)}>Reserve a Spot</button>

  {/* <div className="navbar-end gap-4 mx-6 ">
    {/* <Link href="/login" className="hidden md:flex btn btn-sm bg-gray-800 text-white">Sign Up</Link>
    <Link href="/login" className="btn btn-sm bg-orange-500 text-white">Sign In</Link> 
    <div onClick={()=> setShowWaitlist(true)} className="hidden md:flex btn btn-sm bg-gray-800 text-white">Sign Up</div>
    <div onClick={()=> setShowWaitlist(true)} className="hidden md:flex btn btn-sm bg-orange-500 text-white">Sign In</div>
  </div>
   */}

</div>


  )
}

export default Navbar