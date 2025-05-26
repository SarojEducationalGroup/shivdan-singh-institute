import React from 'react';
import Layout from '../../components/Layout';
// You might want an image for the PG hero section, similar to your campus image.
// import pgHeroImage from '../assets/postgrad-hero.png'; // Example: create this image

const postgraduateCourses = [
  {
    id: 1,
    title: 'Master of Technology (M.Tech) - Computer Science & Engineering',
    duration: '2 Years',
    highlights: [
      'Advanced research in AI, Machine Learning & Data Analytics',
      'Specialized modules in Cloud Computing & Cybersecurity',
      'Dissertation-focused curriculum with industry mentorship',
      'Preparation for R&D roles and academia',
    ],
    eligibility: 'B.Tech/BE in CSE or IT with min. 60% or equivalent',
  },
  {
    id: 2,
    title: 'Master of Business Administration (MBA)',
    duration: '2 Years',
    highlights: [
      'Dual specialization options (e.g., Marketing, Finance, HR, Operations)',
      'Case-study based learning and industry simulations',
      'Leadership and entrepreneurial skill development',
      'Summer internships and live projects',
    ],
    eligibility: 'Bachelor\'s Degree in any discipline with min. 50%',
  },
  {
    id: 3,
    title: 'Master of Pharmacy (M.Pharma)',
    duration: '2 Years',
    highlights: [
      'Specializations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry',
      'Advanced research facilities and instrumentation',
      'Focus on drug discovery, development & regulatory affairs',
      'Opportunities in pharmaceutical industry and research',
    ],
    eligibility: 'B.Pharma with min. 55%',
  },
  {
    id: 4,
    title: 'Master of Computer Applications (MCA)',
    duration: '2 Years',
    highlights: [
      'Industry-aligned curriculum in latest IT technologies',
      'Focus on Web Development, Mobile Apps & Data Science',
      'Hands-on projects and capstone experience',
      'Career in software development, system analysis & IT consulting',
    ],
    eligibility: 'Bachelor\'s Degree with Maths at 10+2 or Graduation Level with min. 50%',
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
            href="/admission" // Link to your admission page
            className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg
                       transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Explore Admissions <span className="ml-2">&rarr;</span>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Advance Your Expertise?</h2>
          <p className="text-lg sm:text-xl mb-8">
            Our postgraduate programs are designed to transform you into a leader in your field. Apply today!
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

export default Postgrad;