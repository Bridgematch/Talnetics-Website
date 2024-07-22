import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

const talentCategories = [
  { name: 'Singers', count: '200+', image: '/images/singers.jpg' },
  { name: 'Dancers', count: '200+', image: '/images/dancers.jpg' },
  { name: 'Actors', count: '200+', image: '/images/actors.jpg' },
  { name: 'Musicians', count: '200+', image: '/images/musicians.jpg' },
  { name: 'Writers', count: '200+', image: '/images/writers.jpg' },
  { name: 'Painters', count: '200+', image: '/images/painters.jpg' },
  { name: 'Photographers', count: '200+', image: '/images/photographers.jpg' },
  { name: 'And many more...', count: '', image: '/images/and-more.png' },
];

const TalentCategories = () => {
  return (
    <section className="py-12  pb-12">
      <div className="container-fluid mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Discover Talented <span className="text-[#E55607]">Individuals</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {talentCategories.map((category, index) => (
            <Link href="/signup" key={index} className="group relative block">
                <div className="overflow-hidden rounded-lg w-[100%] md:w-[25%] h-[250px]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectfit="cover"
                    className="transform transition duration-500 group-hover:scale-105 rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  {category.count && (
                    <p className="text-xl text-white">{category.count}</p>
                  )}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TalentCategories