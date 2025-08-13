import React from 'react';
import Layout from '../../components/Layout';

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      id: 1,
      title: 'Online Registration',
      description: 'Go to the registration link – Online Registration. A registration form will appear.',
    },
    {
      id: 2,
      title: 'Fill & Submit Details',
      description: 'Fill in all the required details and click on "Submit".',
    },
    {
      id: 3,
      title: 'Make Payment',
      description: 'After submitting the registration form, you will be directed to the Payment page. Click on the "Make Payment" option.',
    },
    {
      id: 4,
      title: 'Registration Fee Submission',
      description: 'Candidates are required to submit the registration fees before proceeding.',
    },
    {
      id: 5,
      title: 'Receive Login Credentials & Print Form',
      description: 'After successful payment of the registration fee, a temporary Login Id and Password will be sent to the respective Email Ids of the candidates. Students/ Candidates can also take a printout of their Registration form.',
    },
    {
      id: 6,
      title: 'Login to Your Account',
      description: 'For logging into your account, click on the Student Login. Fill in the login credentials sent to your Email Id and click on Login.',
    },
    {
      id: 7,
      title: 'Complete Application Form',
      description: 'Students/ Candidates can then proceed to fill the Complete Admission Form.',
    },
    {
      id: 8,
      title: 'Receive Permanent Login ID',
      description: 'After filling the form, a permanent Login Id will be sent to the Email Id of the student/ candidate.',
    },
    {
      id: 9,
      title: 'Print Admission Form',
      description: 'Take a printout of the admission form after successfully submitting the form online.',
    },
  ];

  
  const requiredDocuments = [
    'Academic Transcripts (10th, 12th, Graduation if applicable)',
    'Identity Proof (Aadhar Card, Passport, etc.)',
    'Photographs (Passport size)',
    'Transfer/Migration Certificate',
    'Character Certificate',
    'Category/Domicile Certificate (if applicable)',
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
            href="https://seglko.in8.nopaperforms.com/" // This is the link from your screenshot for the application page
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg
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
                  <div className='w-10 h-10 text-xl sm:text-2xl bg-orange-600 rounded-full flex items-center justify-center text-white m-3'>
                    {step.id}. </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      <section className="py-12 sm:py-16 bg-blue-900 bg-opacity-95 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-400 pl-4">REQUIRED <span className="text-orange-300">DOCUMENTS</span></span>
          </h2>
          <div className="bg-blue-50 p-8 rounded-lg shadow-2xl">
            <ul className="list-disc list-inside text-base text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-black">●</span> {/* Custom bullet point */}
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates & Contact Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Admission Assistance</h3>
            <p className="text-gray-700 mb-4">
              Have questions about the admission process? Our team is here to help!
            </p>
            <ul className="text-gray-700 text-md space-y-3">
              <li><span className="font-semibold text-blue-800">Contact No:</span> 09555699988, 09810054878</li>
              <li><span className="font-semibold text-blue-800">Email:</span> admission.cell@seglko.org</li>
            </ul>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionProcess;