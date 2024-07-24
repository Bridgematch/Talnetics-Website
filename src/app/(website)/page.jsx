'use client'
import Hero from "@/components/Website/Hero/Hero";
import Features from "@/components/Website/Features/Features";
import Solutions from "@/components/Website/Solutions/Solutions";
import Events from "@/components/Website/Events/Events";
import Stories from "@/components/Website/Stories/Stories";
import Discover from "@/components/Website/Discover/Discover";
import Partners from "@/components/Website/Partners/Partners";
import Stats from "@/components/Website/StatsSection/Stats";
import { useRecoilState } from "recoil"
import { waitlistForm } from "@/atom/contentState"
import { joinWaitlist } from "@/lib/api-actions";
import { useState } from "react";

const Home = () => {

  const [showWaitlist, setShowWaitlist] = useRecoilState(waitlistForm)
  const  [waitlistMessage, setWaitListMessage] = useState()
  const [isLoading, setIsLoading] = useState(false)



  const submitInterest = async (event)=>{
    event.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(event.currentTarget);
      const data ={
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        category: "TALENTEDUSER"
      };
  // submit the email to db
      const join = await joinWaitlist(data);
      setWaitListMessage(join)
      console.log(join)
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      setWaitListMessage()
      throw new Error(error)
      
      
    }
  }

  const clearWaitlist =()=>{
    setWaitListMessage()
    document.getElementById('waitlistForm').reset() 

  }


  return <div className="">
    
    

      
       <Hero />  
       
      <div className="w-screen">
     
        <Features />
        <Solutions />
        <Events />
         <Stories /> 
        <Discover />
        <Partners />
        <Stats />
      </div>
      
      {
        showWaitlist && (
      <div className="bg-black">
      <div id="my_modal_4" className="bg-black opacity-[80%]  fixed top-0 w-screen h-screen flex justify-center items-center">
        </div>
 <div id="my_modal_4" className="  fixed top-0 w-screen h-screen flex justify-center items-center">
  <div className="modal-box opacity-[100%] w-[75%] md:w-[50%]  max-w-2xl">
    <h3 className="font-bold text-lg">Interested? Join our waitlist</h3>
    <p className="py-4">Enter your name and email address to be on the waitlist. Be the first to know and partner with us in driving this vision</p>
    
     {/* Insterested Form */}
     <div>
          <h3 className="text-xl font-bold mb-4">Early Adopters</h3>
          <p className="mb-4">** Be sure to get free access</p>
          <form onSubmit={submitInterest} id="waitlistForm">
            <input type="text" placeholder="Enter your fullname" name="fullname" className="input  w-full mb-4" />
            <input type="email" placeholder="Enter your email" name="email" className="input  w-full mb-4" />
            <button type="submit" className="btn bg-orange-600 w-full border-none text-white hover:text-black"> 
              {isLoading ? <span className="loading loading-spinner loading-md"></span> : 'Submit Interest'}
              </button>
              {
                  waitlistMessage &&
                  (<div className="text-xl text-orange-600 mt-2" > {waitlistMessage} </div>) 
              }
          </form>
        </div>
    <div className="modal-action">
    <div className="btn" onClick={clearWaitlist}>Clear</div>
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn" onClick={()=> setShowWaitlist(false)}>Close</button>
      </form>
      
    </div>
  </div>
</div>
      </div> 
        )
     
      }
    
  </div>;
};

export default Home;