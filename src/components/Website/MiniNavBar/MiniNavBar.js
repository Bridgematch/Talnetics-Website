import styles from './miniNavBar.module.css'
import Link from 'next/link'


const MiniNavBar = () => {
  return (
    <div className={styles.miniNav}>
      <div className="flex text-sm justify-end mr-5 mt-6 px-8 py-12">
            <Link href="/#features" className="text-black hover:bg-orange-500  rounded-xl p-1 px-4 ">Features</Link>
            <Link href="/#solutions" className="text-black hover:bg-orange-500  rounded-xl p-1 px-4">Showcase</Link>     
            <Link href="/#discover" className="text-black  hover:bg-orange-500  rounded-xl p-1 px-4">Discover</Link>
            <Link href="/#events" className="text-black  hover:bg-orange-500  rounded-xl p-1 px-4">Events</Link>
            <Link href="/stories" className="text-black  hover:bg-orange-500  rounded-xl p-1 px-4">Stories</Link>
         </div>
    </div>
  )
}

export default MiniNavBar