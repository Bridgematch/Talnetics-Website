
'use client'


import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from './navbar.module.css'







const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState('home')
  const router = useRouter();
  console.log(router.passHref)


  const submitInterest = async (event)=>{
    event.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(event.currentTarget);
      const data ={
        name: formData.get('name'),
        email: formData.get('email')
      };
      
     
      console.log(data)
  // submit the email to db

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      throw new Error(error)
      
    }
  }




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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
      <li><Link passHref href="/" className={`text-white hover:bg-orange-500 ${router.pathname == '/' ? 'bg-orange-600':'bg-transparent'}`} >Home</Link></li>
        <li><Link passHref href="/showcase" className={`text-white hover:bg-orange-500 ${router.pathname =="/showcase" ? 'bg-orange-600':'bg-transparent'}`} >Showcase</Link></li>
        <li><Link passHref href="/discover" className={`text-white hover:bg-orange-500 ${router.pathname =="/discover" ? 'bg-orange-600':'bg-transparent'}`} >Discover</Link></li>
        <li><Link passHref href="/events" className={`text-white hover:bg-orange-500 ${router.pathname =="/events" ? 'bg-orange-600':'bg-transparent'}`} >Events</Link></li>
        <li><Link passHref href="/blog" className={`text-white hover:bg-orange-500 ${router.pathname =="/blog" ? 'bg-orange-600':'bg-transparent'}`} >Blog</Link></li>
    
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
    <Image src="/logo.png" alt="Logo" className="h-12"  width={48} height={52}/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
    <li><Link passHref href="/" className={`text-white hover:bg-orange-500 ${router.pathname == '/' ? 'bg-orange-600':'bg-transparent'}`} >Home</Link></li>
        <li><Link passHref href="/showcase" className={`text-white hover:bg-orange-500 ${router.pathname =="/showcase" ? 'bg-orange-600':'bg-transparent'}`} >Showcase</Link></li>
        <li><Link passHref href="/discover" className={`text-white hover:bg-orange-500 ${router.pathname =="/discover" ? 'bg-orange-600':'bg-transparent'}`} >Discover</Link></li>
        <li><Link passHref href="/events" className={`text-white hover:bg-orange-500 ${router.pathname =="/events" ? 'bg-orange-600':'bg-transparent'}`} >Events</Link></li>
        <li><Link passHref href="/blog" className={`text-white hover:bg-orange-500 ${router.pathname =="/blog" ? 'bg-orange-600':'bg-transparent'}`} >Blog</Link></li>
    
    </ul>
  </div>
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Reserve a Spot</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-[75%] md:w-[50%]  max-w-2xl">
    <h3 className="font-bold text-lg">Interested? Join our waitlist</h3>
    <p className="py-4">Enter your name and email address to be on the waitlist. Be the first to know and partner with us in driving this vision</p>
    
     {/* Insterested Form */}
     <div>
          <h3 className="text-xl font-bold mb-4">Early Adpoters</h3>
          <p className="mb-4">** Be sure to get free access</p>
          <form onSubmit={submitInterest}>
            <input type="text" placeholder="Enter your fullname" name="name" className="input  w-full mb-4" />
            <input type="email" placeholder="Enter your email" name="email" className="input  w-full mb-4" />
            <button type="submit" className="btn bg-orange-600 w-full border-none text-white hover:text-black"> 
              {isLoading ? <span className="loading loading-spinner loading-md"></span> : 'Submit Interest'}
              </button>
          </form>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  <div className="navbar-end gap-4 mx-6 ">
    <Link href="/signup" className="btn btn-sm bg-gray-800 text-white">Sign Up</Link>
    <Link href="/login" className="btn btn-sm bg-orange-500 text-white">Sign In</Link>
  </div>

</div>


  )
}

export default Navbar