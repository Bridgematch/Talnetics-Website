import { Inter } from 'next/font/google'


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BridgeMatch - Empowering Talents, Connecting Creativity',
  description: 'Discover BridgeMatch, your platform for showcasing talents, connecting with sponsors, and promoting creativity. Join our vibrant community today!',
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