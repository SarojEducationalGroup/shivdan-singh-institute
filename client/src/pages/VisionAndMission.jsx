import React from 'react';
import { Layout } from '../components/Layout';

const VisionMission = () => {
  return (
  <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Vision & Mission
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Guiding Principles of Saroj College of Engineering and Polytechnic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-3 rounded-md">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Vision</h2>
              </div>
            </div>
            <div className="px-6 py-8 sm:p-10">
              <p className="text-lg text-gray-600 leading-relaxed">
                To emerge as a premier institution of technical education that nurtures innovation, 
                excellence, and ethical values, producing globally competent engineers and technocrats 
                who can contribute meaningfully to societal development and technological advancement.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-green-600 to-green-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-3 rounded-md">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Mission</h2>
              </div>
            </div>
            <div className="px-6 py-8 sm:p-10">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">To provide quality technical education through innovative teaching-learning processes.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">To foster research, innovation, and entrepreneurship among students and faculty.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">To develop industry-relevant skills and professional ethics in students.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">To establish strong industry-institute collaboration for mutual growth.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">To contribute to society through extension activities and community engagement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-purple-600 to-purple-800">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white p-3 rounded-md">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-white">Our Core Values</h2>
            </div>
          </div>
          <div className="px-6 py-8 sm:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">Commitment to highest standards in education, research, and service.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">Adherence to ethical principles and professional conduct.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Fostering creativity and embracing new ideas and technologies.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">Working together with students, faculty, industry, and community.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Social Responsibility</h3>
                <p className="text-gray-600">Commitment to sustainable development and community service.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Inclusivity</h3>
                <p className="text-gray-600">Providing equal opportunities and respecting diversity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default VisionMission;