import React from 'react';
import Layout from '../../components/Layout';
// You might want an image for the Admissions hero section
// import admissionsHeroImage from '../assets/admissions-hero.png'; // Example: create this image

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      id: 1,
      title: 'Step 1: Application Submission',
      icon: '📝', // Emoji for visual appeal
      description: 'Fill out the online application form completely and accurately on our admissions portal. Ensure all required fields are filled and information is correct.',
    },
    {
      id: 2,
      title: 'Step 2: Document Upload',
      icon: '📁',
      description: 'Upload scanned copies of all necessary documents, including academic transcripts, identification proof, and photographs, as specified in the guidelines.',
    },
    {
      id: 3,
      title: 'Step 3: Entrance Exam/Interview',
      icon: '✍️',
      description: 'Depending on the program, candidates may be required to appear for an entrance examination or a personal interview. Details will be communicated via email.',
    },
    {
      id: 4,
      title: 'Step 4: Merit List & Counseling',
      icon: '📊',
      description: 'A merit list will be published based on eligibility criteria and entrance exam/interview performance. Successful candidates will be invited for counseling sessions.',
    },
    {
      id: 5,
      title: 'Step 5: Fee Payment & Enrollment',
      icon: '💳',
      description: 'Upon selection, pay the first installment of the academic fees to confirm your admission. You will then receive an official enrollment confirmation.',
    },
    {
      id: 6,
      title: 'Step 6: Document Verification',
      icon: '✅',
      description: 'Submit your original documents for verification at the time of reporting to the college. Ensure all documents match the uploaded copies.',
    },
  ];

  const requiredDocuments = [
    'Class 10th Marksheet & Passing Certificate',
    'Class 12th Marksheet & Passing Certificate',
    'Graduation Marksheet (for PG courses)',
    'Transfer Certificate (TC) & Migration Certificate',
    'Character Certificate',
    'Domicile Certificate (if applicable)',
    'Category Certificate (SC/ST/OBC, if applicable)',
    'Aadhar Card or other Photo ID proof',
    'Passport size photographs (4-6 copies)',
    'Entrance Exam Scorecard (if applicable)',
  ];

  return (
    <Layout>
      {/* Hero Section for Admission Process - Navy Blue Background */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract shapes for design in subtle white */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="0" y="0" width="10" height="10" fill="currentColor" transform="rotate(45 5 5) translate(10 10)" />
            <circle cx="90" cy="10" r="8" fill="currentColor" />
            <polygon points="50,0 60,20 40,20" fill="currentColor" transform="scale(0.8) translate(10 10)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Your Journey Starts Here: <span className="text-orange-300">Admission Process</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            A comprehensive guide to applying for your desired program at SSITM. We're here to help you every step of the way.
          </p>
          <a
            href="https://www.ssitm.ac.in/admission-form" // Replace with your actual online application link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white hover:bg-orange-600 font-bold py-3 px-8 rounded-full shadow-lg
                       transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Online Application <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Step-by-Step Process Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-500 pl-4">ADMISSION <span className="text-orange-500">STEPS</span></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200
                           flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4 text-orange-500">{step.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section - Navy Blue Card Background */}
      <section className="py-12 sm:py-16 bg-blue-900 bg-opacity-95 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-400 pl-4">REQUIRED <span className="text-orange-300">DOCUMENTS</span></span>
          </h2>
          <div className="bg-blue-800 p-8 rounded-lg shadow-2xl">
            <ul className="list-disc list-inside text-lg text-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-orange-400">●</span> {/* Custom bullet point */}
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates & Contact Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Important Dates */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Important Dates</h3>
            <ul className="text-gray-700 text-lg space-y-3">
              <li><span className="font-semibold text-blue-800">Application Start:</span> 15th May 2025</li>
              <li><span className="font-semibold text-blue-800">Application Deadline:</span> 30th July 2025</li>
              <li><span className="font-semibold text-blue-800">Entrance Exam (if applicable):</span> 10th August 2025</li>
              <li><span className="font-semibold text-blue-800">Counseling/Admission:</span> 20th - 30th August 2025</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Admission Assistance</h3>
            <p className="text-gray-700 mb-4">
              Have questions about the admission process? Our team is here to help!
            </p>
            <ul className="text-gray-700 text-lg space-y-3">
              <li><span className="font-semibold text-blue-800">Email:</span> <a href="mailto:admissions@ssitm.ac.in" className="text-orange-600 hover:underline">admissions@ssitm.ac.in</a></li>
              <li><span className="font-semibold text-blue-800">Phone:</span> <a href="tel:+919876543210" className="text-orange-600 hover:underline">+91-9876543210</a></li>
              <li><span className="font-semibold text-blue-800">Toll Free:</span> 1800-180-7686</li>
              <li><span className="font-semibold text-blue-800">Office Hours:</span> Mon-Fri, 9:00 AM - 5:00 PM</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              You can also visit our campus for a personalized counseling session.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionProcess;