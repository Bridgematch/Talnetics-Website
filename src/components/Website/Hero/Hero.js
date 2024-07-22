'use client'



import BackgroundVideo from 'next-video/background-video'
import styles from  './hero.module.css'
 import videod from '/videos/bgvideo2.mp4'
import Stats from '../Statistics/Stats'
import Link from 'next/link'



const Hero = () => {


  return (
   
     
     
      <div className="container-fluid mx-auto px-0 text-center ">
         <div  className={`${styles.heropage} container-fluid `}>
       
      
      <BackgroundVideo src={videod} autoPlay muted loop  className={styles.video} />      
     
   
        
          <div className={`${styles.herooverlay}  bg-opacity-60`}></div>  
          <div className={`${styles.herocontentbody} xl:w-[70%]`}>
        <div className={`${styles.herocontent} flex flex-col gap-5 justify-center mt-8 py-8 `}>
            <h1 className="text-5xl font-bold text-bold  text-white mt-8 pt-8">Talent Showcasing</h1>
            <p className="text-white text-sm md:text-xl text-center "> The Bridge to achiving your dreams, showcase your talents and attract potential hire and collaboration. 
            We Get Discovered today by participating in event challenges building your achievement story</p>
            <p className='mt-2 text-xl xl:text-3xl md:text-2xl  text-orange-400 font-bold'>Connecting Talents, Empowering dreams</p>
            
            <div className="flex flex-col gap-4 mt-4 sm:flex-row">
                <Link href="\signup" target="_blank" className="btn p-1 px-2 bg-[url('/images/button/googleplay.png')] bg-cover bg-no-repeat text-transparent border-none ">Download iOS App App</Link>
                <Link href="\signup" target="_blank"  className="btn  p-1 px-2 bg-[url('/images/button/appstore.png')] bg-cover text-transparent border-none ">Download iOS App App </Link>
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