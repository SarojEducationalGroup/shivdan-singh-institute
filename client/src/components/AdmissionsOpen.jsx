import React from 'react';
import { createRoot } from 'react-dom/client';

// AdmissionsBatch component displays a single admissions card with a tag on top.
const AdmissionsBatch = ({ category, programs }) => {
  return (
  
    <div className="relative flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 m-4 min-w-[20rem] max-w-sm flex-shrink-0 border border-gray-200 items-stretch min-h-[300px]">
      
      {/* The "Admissions Batch" tag on top of the card. */}
      {/* Positioned absolutely and centered using top, left, and translate. */}
     <div className="absolute top-0  left-1/2 -translate-x-1/2 -translate-y-1/2  text-orange-600 border border-orange-600 bg-orange-50 text-sm font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
         {category} 
      </div>

      {/* List of programs and their status. */}
      <ul className="list-none p-0 m-0 space-y-3 flex-grow">
        {programs.map((program, index) => (
          <li key={index} className="flex justify-between items-center text-sm text-gray-600 border-b border-dashed border-gray-200 pb-2 last:border-b-0">
            <span>{program.name}</span>
            {/* Conditional styling for the status tag based on the status string. */}
            {program.status && (
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                program.status.toLowerCase() === 'open'
                  ? 'bg-green-100 text-green-700'
                  : program.status.toLowerCase() === 'limited seats'
                  ? 'bg-yellow-100 text-yellow-700'
                  : program.status.toLowerCase() === 'upcoming'
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {program.status}
              </span>
            )}
          </li>
        ))}
      </ul>
      
      {/* The "Apply Now" button. */}
      <a href="https://seglko.in8.nopaperforms.com/"  className="mt-6 w-full py-2 px-4 bg-orange-600 text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Apply Now
      
      </a>
      
    </div>
  );
};

// AdmissionsHorizontalScroll component is the main container for the cards.
const AdmissionsOpen = () => {
  // Sample data for different programs/batches.
  const admissionsData = [
    {
      category: 'Artificial Intelligence',
      programs: [
        { name: 'Computer Science and Engineering (Artificial Intelligence)(B.Tech)', status: 'Open' },
        { name: 'Computer Science and Engineering (Artificial Intelligence & Machine Learning)(B.Tech)', status: 'Limited Seats' },

      ],
    },
    {
      category: 'Pharmacy',
      programs: [
        { name: 'Diploma in Pharmacy (D.Pharma)', status: 'Open' },
         { name: 'Bachelor of Pharmacy (B.Pharma)', status: 'Open' },
         
      ],
    },
    {
      category: 'Undergraduate',
      programs: [
        { name: 'Bachelor of Computer Applications (BCA)', status: 'Open' },
        { name: 'Computer Science and Engineering', status: 'Open' }, 
        { name: 'Electronics & Communication Engineering (ECE)', status: 'Open' },
        { name: 'Civil Engineering (B.Tech)', status: 'Open' },  
        // { name: '', status: 'Open' },
      ]
    },
    {
      category: 'Postgraduate',
      programs: [
        { name: '(M.Tech) - Computer Science & Engineering', status: 'Open' },
        { name: 'Master of Business Administration (MBA)', status: 'Open' },
        { name: 'Master of Computer Applications (MCA)', status: 'Open' },

      ],
    },
    // {
    //   category: 2028,
    //   programs: [
    //     { name: 'AI & Machine Learning', status: 'Upcoming' },
    //   ],
    // },
  ];

  return (
    <div className="hidden lg:block font-sans bg-gray-50 text-gray-800 p-8 min-h-[600px]">
      <div className="text-center mb-10 mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          UG/PG/Diploma Admissions Open for 2025-26
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the various programs and their admission status for the upcoming batches.
        </p>
      </div>

      {/* The horizontal scrolling container. */}
      {/* flex and overflow-x-auto are key for horizontal scrolling. */}
      {/* pb-4 is for a space at the bottom for the scrollbar. */}
      {/* scroll-snap-type for the smooth snapping effect. */}
      {/* Scrollbar customization is not standard in Tailwind, so we'll rely on the default scroll behavior here. */}
      <div className="flex items-center justify-center overflow-x-auto space-x-4 p-4 scroll-snap-x scroll-mandatory pb-6 sm:pb-0">
        {admissionsData.map((batch, index) => (
          <AdmissionsBatch
            key={index}
            category={batch.category}
            programs={batch.programs}
          />
        ))}
      </div>
    </div>
  );
};

export default AdmissionsOpen



