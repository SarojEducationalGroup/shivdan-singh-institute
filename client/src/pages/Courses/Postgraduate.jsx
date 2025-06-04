import React from 'react';
import Layout from '../../components/Layout';

const postgraduateCourses = [
  {
    id: 1,
    title: 'Master of Technology (M.Tech) - Computer Science & Engineering',
    duration: '2 Years',
    // Removed highlights
    eligibility: 'B.Tech/BE in CSE or IT with min. 60% or equivalent',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Royalty-free image for M.Tech/CSE
  },
  {
    id: 2,
    title: 'Master of Business Administration (MBA)',
    duration: '2 Years',
    // Removed highlights
    eligibility: 'Bachelor\'s Degree in any discipline with min. 50%',
    image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFjaGVsb3IlMjBvZiUyMEJ1c2luZXNzJTIwQWRtaW5pc3RyYXRpb258ZW58MHx8MHx8fDA%3D'
  
  },
  {
    id: 3,
    title: 'Master of Computer Applications (MCA)',
    duration: '2 Years',
    // Removed highlights
    eligibility: 'Bachelor\'s Degree with Maths at 10+2 or Graduation Level with min. 50%',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Royalty-free image for MCA
  },
  // Add more postgraduate courses as needed
];

const Postgrad = () => {
  return (
    <Layout>
      {/* Hero Section for Postgraduate Programs */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract shapes for design */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 20,0 0,20" fill="currentColor" opacity="0.5" />
            <polygon points="100,100 80,100 100,80" fill="currentColor" opacity="0.5" />
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Elevate Your Career with <span className="text-yellow-300">Postgraduate Excellence</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Gain specialized knowledge and advanced skills through SSITM's cutting-edge Master's programs, designed for industry leadership and research.
          </p>
          <a
            href="https://seglko.in8.nopaperforms.com/" // Link to your admission page
            className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg
                               transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Apply Now <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - Consistent Styling */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-500 pl-4">ADVANCED <span className="text-orange-500">PROGRAMS</span></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postgraduateCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200
                               flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Image added here */}
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover object-center" />

                <div className="p-6 sm:p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  {/* Removed Key Highlights section */}
                </div>
                <div className="bg-yellow-100 p-4 border-t border-orange-200 text-gray-800 font-medium text-sm">
                  <span className="font-semibold">Eligibility:</span> {course.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Postgrad;