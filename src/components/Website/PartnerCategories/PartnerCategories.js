import React from 'react'
import { FaRecordVinyl, FaFilm, FaUserTie, FaGlobe, FaUsers, FaChartLine, FaBuilding, FaIndustry } from 'react-icons/fa';

const partnerCategories = [
    { name: 'Record Labels', icon: <FaRecordVinyl size={32} />, count: '50+' },
    { name: 'TV/Film Producers', icon: <FaFilm size={32} />, count: '70+' },
    { name: 'Directors', icon: <FaUserTie size={32} />, count: '60+' },
    { name: 'Talent Scouters', icon: <FaGlobe size={32} />, count: '80+' },
    { name: 'Event Managers', icon: <FaUsers size={32} />, count: '100+' },
    { name: 'Mentors', icon: <FaChartLine size={32} />, count: '40+' },
    { name: 'Investors', icon: <FaBuilding size={32} />, count: '30+' },
    { name: 'Companies and Brands', icon: <FaIndustry size={32} />, count: '100+' },
  ];

const PartnerCategories = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Trusted by Leading <span className="text-[#E55607]">Industry Partners</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#E55607] mb-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-xl text-gray-700">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCategories