import React from 'react';

import umeshImage from '../assets/umesh-mishra.jpeg';
import pramuditImage from '../assets/pramudit-shukla.jpeg';
import shaloniImage from '../assets/shaloni-devi.jpeg';
import amanImage from '../assets/aman-verma.png';  
import squareitLogo from '../assets/squareit-logo.png';
import techmechLogo from '../assets/techmech-logo.png';
import maxHealthcareLogo from '../assets/maxhealthcare-logo.png';
import concentrixLogo from '../assets/Concentrix.png';  

const placementsData = [
 
  {
    id: 1,
    name: 'Umesh Mishra',
    company: 'Square IT Solutions',
    lpa: '₹10 LPA',
    studentImage: umeshImage,
    role: 'Web Developer',
    companyLogo: squareitLogo,
  },
  {
    id: 2,
    name: 'Pramudit Shukla',
    company: 'TechMech',
    lpa: '₹12 LPA',
    studentImage: pramuditImage,
    role: 'Full Stack Developer',
    companyLogo: techmechLogo,
  },
  {
    id: 3,
    name: 'Shaloni Devi',
    company: 'Max Healthcare',
    lpa: '₹18 LPA',
    studentImage: shaloniImage,
    role: 'Executive',
    companyLogo: maxHealthcareLogo,
  },
  {
    id: 4,
    name: 'Aman Verma',
    company: 'Concentrix',
    lpa: '₹9 LPA',
    studentImage: amanImage,
    role: 'Data Analyst',
    companyLogo: concentrixLogo,
  },
   
  
];

const Placement = () => {
  return (
    <section className="bg-orange-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
          <span className="border-l-4 border-orange-500 pl-4">RECENT <span className="text-orange-500">PLACEMENTS</span></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementsData.map((placement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg border border-orange-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={placement.studentImage}
                  alt={placement.name}
                  className="w-20 h-20 rounded-full border-4 border-orange-200 mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{placement.name}</h3>
                <p className="text-sm text-gray-500 mb-2">Placed at {placement.company}</p>
              </div>

              <div className="text-center mt-3 mb-4">
                <p className="text-xl font-bold text-gray-800">{placement.lpa}</p>
                <p className="text-xs text-gray-600">Annual Package</p>
              </div>

              <div className="flex justify-center items-center mt-auto pt-3 border-t border-orange-100">
                <img
                  src={placement.companyLogo}
                  alt="company logo"
                  className="h-6 sm:h-8 object-contain"
                />
              </div>

              <p className="text-center text-sm text-gray-700 mt-2 font-medium">
                Role: {placement.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;
