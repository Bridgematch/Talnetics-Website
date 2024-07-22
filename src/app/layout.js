import { Inter } from 'next/font/google'


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Talnetics - Empowering Talents, Connecting Creativity',
  description: 'Discover Talnetics, your platform for showcasing talents, connecting with sponsors, and promoting creativity. Join our vibrant community today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-orange-500 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-900">
      <body className={`${inter.className}`}>        
        <div className="">
          {children}
        </div>
       
      </body>
    </html>
  )
}