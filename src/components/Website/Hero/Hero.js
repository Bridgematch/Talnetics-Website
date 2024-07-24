'use client'



import BackgroundVideo from 'next-video/background-video'
import styles from  './hero.module.css'
//  import videod from '/videos/bgvideo2.mp4'
import Stats from '../Statistics/Stats'
import Link from 'next/link'
import {motion} from 'framer-motion'



const Hero = () => {


  return (
  
      <div className="container-fluid mx-auto px-0 text-center ">
         <div  className={`${styles.heropage2} container-fluid  bg-black relative`}>
       
      

       <video src='/videos/bgvideo2.mp4' autoPlay muted loop  className={`object-fill opacity-30 w-screen max-h-[100vh] `} /> 
       
     
   
        
          <div className={`${styles.herooverlay}  bg-opacity-60`}></div>  
          <div className={`${styles.herocontentbody3} w-full    flex flex-row justify-center items-center absolute top-0 mx-auto `}>
        <div className={`${styles.herocontent2} flex  flex-col pt-0 md:py-10 pb-10 gap-2 md:gap-4  items-center relative   w-full md:w-[80%] xl:w-[70%] h-[90vh] `}>
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
             className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-bold  text-white  mt-8 pt-8">
              Talent Showcasing</motion.h1>
            <p className="text-white text-xs sm:text-sm md:text-md lg:text-lg  text-center w-[85%] md:w-[75%] "> The Bridge to achiving your dreams, showcase your talents and attract potential hire and collaboration. 
            We Get Discovered today by participating in event challenges building your achievement story</p>
            <p className='mt-0 md:mt-2 text-lg xl:text-3xl md:text-2xl  text-orange-400 font-bold'>Connecting Talents, Empowering dreams</p>
            
            <div className="flex flex-row gap-4 mt-0 md:mt-4 xs:flex-row">
                <Link href="\signup" target="_blank" className="btn p-1 px-2 bg-[url('/images/button/googleplay.png')] bg-cover bg-no-repeat text-transparent border-none object-cover ">Download iOS App App</Link>
                <Link href="\signup" target="_blank"  className="btn  p-1 px-2 bg-[url('/images/button/appstore.png')] bg-cover text-transparent border-none object-cover">Download iOS App App </Link>
            </div>
           
            <div className={`${styles.herostats}  `}>
              <Stats /> 
            </div>
             
        </div>  
        </div>  
  
    </div>
   
   </div>
  
      
  )
}

export default Hero