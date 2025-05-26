import React from 'react';
import Layout from '../../components/Layout';

const Eligibility = () => {
  const coursesEligibility = [
    {
      course: 'B.Tech - Computer Science Engineering (CSE)',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics with a minimum of 45% aggregate marks. JEE Main qualified candidates will be given preference.',
    },
    {
      course: 'B.Tech - Electronics & Communication Engineering (ECE)',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics with a minimum of 45% aggregate marks. JEE Main qualified candidates will be given preference.',
    },
    {
      course: 'B.Tech - Mechanical Engineering (ME)',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics with a minimum of 45% aggregate marks. JEE Main qualified candidates will be given preference.',
    },
    {
      course: 'B.Tech - Civil Engineering (CE)',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics with a minimum of 45% aggregate marks. JEE Main qualified candidates will be given preference.',
    },
    {
      course: 'Bachelor of Pharmacy (B.Pharma)',
      eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics with a minimum of 45% aggregate marks.',
    },
    {
      course: 'Master of Technology (M.Tech) - Computer Science & Engineering',
      eligibility: 'B.Tech/BE in Computer Science or related field with a minimum of 60% marks or equivalent CGPA.',
    },
    {
      course: 'Master of Business Administration (MBA)',
      eligibility: 'Bachelor\'s degree in any discipline with a minimum of 50% marks. Candidates with a valid CAT/MAT/CMAT score will be preferred.',
    },
    {
      course: 'Master of Pharmacy (M.Pharma)',
      eligibility: 'B.Pharma with a minimum of 55% marks.',
    },
    {
      course: 'Master of Computer Applications (MCA)',
      eligibility: 'Bachelor\'s degree with Mathematics as one of the subjects at 10+2 level or at graduation level with a minimum of 50% marks.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Navy Blue Background */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 20,0 0,20" fill="currentColor" opacity="0.5" />
            <polygon points="100,100 80,100 100,80" fill="currentColor" opacity="0.5" />
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Unlock Your Potential: <span className="text-orange-300">Eligibility Criteria</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Find detailed eligibility requirements for all undergraduate and postgraduate programs offered at SSITM.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-500 pl-4">COURSE <span className="text-orange-500">ELIGIBILITY</span></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesEligibility.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{item.course}</h3>
                  <p className="text-gray-700">{item.eligibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions regarding the eligibility criteria or the admission process, please don't hesitate to contact us.
            </p>
            <ul className="text-gray-700 text-lg space-y-3">
              <li>
                <span className="font-semibold text-blue-800">Email:</span>
                <a href="mailto:admissions@ssitm.ac.in" className="text-orange-600 hover:underline">
                  admissions@ssitm.ac.in
                </a>
              </li>
              <li>
                <span className="font-semibold text-blue-800">Phone:</span>
                <a href="tel:+919876543210" className="text-orange-600 hover:underline">
                  +91-9876543210
                </a>
              </li>
              <li>
                <span className="font-semibold text-blue-800">Toll Free:</span> 1800-180-7686
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eligibility;