import { FaUsers, FaHandshake, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';

const statistics = [
  { icon: <FaUsers size={40} className="text-blue-500" />, count: '10K+', label: 'Total Users' },
  { icon: <FaHandshake size={40} className="text-green-500" />, count: '105+', label: 'Total Partners' },
  { icon: <FaFileAlt size={40} className="text-red-500" />, count: '20K+', label: 'Total Contents' },
  { icon: <FaCalendarAlt size={40} className="text-yellow-500" />, count: '50+', label: 'Total Events' },
];
const Stats = () => {
  return (
    <section className="py-16 px-12 text-base-content ">
    <div className="container-fluid mx-auto text-center">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-base-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
            <p className="">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Stats