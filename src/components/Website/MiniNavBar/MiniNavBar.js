import styles from './miniNavBar.module.css'
import Link from 'next/link'


const MiniNavBar = () => {
  return (
    <div className={`${styles.miniNav} h-[100px] md:h-[115px]`}>
      <div className="flex text-xs sm:text-sm justify-end mr-4 mt-6 md:px-8 py-11 md:py-12  ">
            <Link href="/#features" className="text-black hover:bg-white  rounded-xl p-1 px-4 ">Features</Link>
            <Link href="/#solutions" className="text-black hover:bg-white  rounded-xl p-1 px-4">Showcase</Link>     
            <Link href="/#discover" className="text-black  hover:bg-white  rounded-xl p-1 px-4">Discover</Link>
            <Link href="/#events" className="text-black  hover:bg-white  rounded-xl p-1 px-4">Events</Link>
            <Link href="/stories" className="text-black  hover:bg-white  rounded-xl p-1 px-4">Stories</Link>
         </div>
    </div>
  )
}

export default MiniNavBar