import React from 'react';
import umeshImage from '../assets/umesh-mishra.jpeg';
import pramuditImage from '../assets/pramudit-shukla.jpeg';
import shaloniImage from '../assets/shaloni-devi.jpeg';
import squareitLogo from '../assets/squareit-logo.png'; // Placeholder, replace with actual logo if available
import tendertpalmLogo from '../assets/tender-logo.png'; // Placeholder
import maxHealthcareLogo from '../assets/maxhealthcare-logo.png'; // Placeholder


const placementsData = [
  {
    id: 1,
    name: 'Umesh Mishra',
    course: 'B.Tech CSE 4th Year batch',
    company: 'Square IT Solutions Pvt.Ltd',
    role: 'Web Developer',
    lpa: '10.00LPA',
    studentImage: umeshImage,
    companyLogo: squareitLogo,
  },
  {
    id: 2,
    name: 'Pramudit Shukla',
    course: 'Diploma in CSE',
    company: 'TechMech',
    role: 'Full Stack Developer',
    lpa: '12.00LPA',
    studentImage: pramuditImage,
    companyLogo: tendertpalmLogo,
  },
  {
    id: 3,
    name: 'Shaloni Devi',
    course: 'B. Pharma 4th Year',
    company: 'Max Healthcare',
    role: 'Executive',
    lpa: '18.00LPA',
    studentImage: shaloniImage,
    companyLogo: maxHealthcareLogo,
  },
];

const Placement = () => {
  return (
    <section className="bg-orange-50 bg-opacity-70 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
       <span className="border-l-4 border-orange-500 pl-4">RECENT <span className="text-orange-500">PLACEMENTS</span></span>
       </h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {placementsData.map((placement) => (
            <div
              key={placement.id}
              className="bg-yellow-100 rounded-lg shadow-xl overflow-hidden border border-orange-200 flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl" >
              <div className="relative">
                <img src={placement.studentImage} alt={placement.name} className="w-full h-56 object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <p className="font-semibold text-md mb-2">
                  {placement.name}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                  We feel immensely proud to announce that our student, {placement.name}, from the {placement.course},
                  has been successfully placed at <span className="font-semibold">{placement.company}</span> as a <span className="font-semibold">{placement.role}</span>!
                </p>

                {/* LPA and Company Logo */}
                <div className="flex items-center justify-between bg-yellow-300 p-3 rounded-md mt-auto">
                  <span className= "text-xl">
                    {placement.lpa}
                  </span>
                  {placement.companyLogo && (
                    <img
                      src={placement.companyLogo}
                      alt={`${placement.company} Logo`}
                      className="h-8 sm:h-8 max-w-[100px] object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="bg-yellow-200 p-3 text-center text-gray-800 font-medium text-sm">
                Best Wishes, SSITM
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Placement;