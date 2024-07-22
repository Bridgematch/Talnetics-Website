import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


    const eventTypes = [
      { title: 'Music Concerts', count: '50+', imgSrc: '/images/music-concert.jpg' },
      { title: 'Art Exhibitions', count: '40+', imgSrc: '/images/art-exhibition.jpg' },
      { title: 'Film Festivals', count: '30+', imgSrc: '/images/film-festival.jpg' },
      { title: 'Dance Competitions', count: '25+', imgSrc: '/images/dance-competition.jpg' },
      { title: 'Theater Plays', count: '20+', imgSrc: '/images/theater-play.jpg' },
      { title: 'Literary Events', count: '15+', imgSrc: '/images/literary-event.jpg' },
      { title: 'Fashion Shows', count: '10+', imgSrc: '/images/fashion-show.jpg' },
      { title: 'And many more...', count: '100+', imgSrc: '/images/and-more.png' },
    ];



const EventCategory = () => {
  return (
    <section className="py-12 pb-16 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mt-8 mb-12">Types of Events on BridgeMatch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((event, index) => (
            <Link href="/signup" key={index} className="group relative block w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={event.imgSrc}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <p className="text-lg">{event.count}</p>
                </div>
             
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventCategory;