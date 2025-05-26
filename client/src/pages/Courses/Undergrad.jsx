import React from 'react';
import Layout from '../../components/Layout';
// You might want an image for the UG hero section, similar to your campus image.
// import ugHeroImage from '../assets/undergrad-hero.png'; // Example: create this image

const undergraduateCourses = [
  {
    id: 1,
    title: 'B.Tech - Computer Science Engineering (CSE)',
    duration: '4 Years',
    highlights: [
      'Focus on AI, Machine Learning, Data Science & Cloud Computing',
      'Hands-on lab experience with modern infrastructure',
      'Strong industry collaborations for projects and internships',
      'Experienced faculty with research expertise',
    ],
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
  },
  {
    id: 2,
    title: 'B.Tech - Electronics & Communication Engineering (ECE)',
    duration: '4 Years',
    highlights: [
      'Specialization in IoT, Embedded Systems & VLSI Design',
      'Advanced digital and analog electronics labs',
      'Projects in communication systems and signal processing',
      'Opportunities in telecom, defense & IT sectors',
    ],
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
  },
  {
    id: 3,
    title: 'B.Tech - Mechanical Engineering (ME)',
    duration: '4 Years',
    highlights: [
      'CAD/CAM, Robotics & Advanced Manufacturing techniques',
      'State-of-the-art workshops and design studios',
      'Focus on sustainable energy and automotive design',
      'Industry visits and practical training',
    ],
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
  },
  {
    id: 4,
    title: 'B.Tech - Civil Engineering (CE)',
    duration: '4 Years',
    highlights: [
      'Sustainable infrastructure development and smart cities',
      'Surveying, structural analysis, and construction management',
      'Field visits to major construction sites',
      'Opportunities in government and private infrastructure projects',
    ],
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
  },
  {
    id: 5,
    title: 'Bachelor of Pharmacy (B.Pharma)',
    duration: '4 Years',
    highlights: [
      'Comprehensive study of pharmaceutical sciences',
      'Well-equipped labs for pharmaceutics, pharmacology, medicinal chemistry',
      'Clinical exposure and industry training',
      'Career paths in pharma R&D, manufacturing, quality control',
    ],
    eligibility: '10+2 with Physics, Chemistry, Biology/Maths or equivalent with min. 45%',
  },
  // Add more undergraduate courses as needed
];

const Undergrad = () => {
  return (
    <Layout>
      {/* Hero Section for Undergraduate Programs */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract shapes for design */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="80" r="15" fill="currentColor" />
            <circle cx="80" cy="20" r="20" fill="currentColor" />
            <rect x="50" y="50" width="30" height="30" transform="rotate(45 65 65)" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Ignite Your Future with <span className="text-yellow-300">Undergraduate Programs</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Embark on a journey of discovery and innovation with SSITM's diverse Bachelor's degree offerings. Build a strong foundation for a successful career.
          </p>
          <a
            href="/admission" // Link to your admission page
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
            <span className="border-l-4 border-orange-500 pl-4">EXPLORE OUR <span className="text-orange-500">PROGRAMS</span></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergraduateCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200
                           flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="p-6 sm:p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">Key Highlights:</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed mb-4 space-y-1">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-100 p-4 border-t border-orange-200 text-gray-800 font-medium text-sm">
                  <span className="font-semibold">Eligibility:</span> {course.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Call to Action */}
      <section className="bg-orange-600 py-12 sm:py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Begin Your Academic Journey?</h2>
          <p className="text-lg sm:text-xl mb-8">
            Admissions are open for our undergraduate programs. Take the first step towards a bright future.
          </p>
          <a
            href="/admission"
            className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg
                       transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Learn More About Admissions
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Undergrad;