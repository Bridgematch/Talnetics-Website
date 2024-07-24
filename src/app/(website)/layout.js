"use client"
import Navbar from "@/components/Website/Navbar/Navbar"
import Footer from "@/components/Website/Footer/Footer"

import Link from "next/link"
import Hero from "@/components/Website/Hero/Hero"
import MiniNavBar from "@/components/Website/MiniNavBar/MiniNavBar"
import { RecoilRoot } from "recoil"


export const WebsiteLayout = ({children}) => {

  

  return (
   

    <div className="flex flex-col justify-between items-start text-base-content">

         <RecoilRoot>
        
          <Navbar /> 
         <MiniNavBar />   
         <div>

          {children}
          </div>  
         <Footer /> 
           </RecoilRoot>
    </div>

  )
}

export default WebsiteLayout