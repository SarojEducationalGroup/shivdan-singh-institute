import React from 'react';
import Layout from '.././components/Layout'; // Assuming you have a Layout component
import { Download, ExternalLink } from 'lucide-react'; // Icons for download and external link
import SSITMQR from '../assets/SSITMQR.png'; // Import the SSITMQR image
import SSITMCampus from '../assets/SSITMCampus.jpg'

// Reusable component for each college's payment card
const CollegePaymentCard = ({ instituteName, location, code, contactEmail, onlinePortalUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-600 p-6 flex flex-col items-center text-center md:text-left md:items-start">
      {/* Institute Name and Logo (placeholder) */}
      <div className="flex items-center mb-4">
        {/* Placeholder for a small institute logo/icon */}
        <img
          src= {SSITMCampus} // Placeholder logo
          alt="Institute Logo"
          className="w-10 h-10 rounded-full mr-3"
        />
        <h2 className="text-xl md:text-2xl font-bold text-blue-800">{instituteName}</h2>
      </div>

      {/* Location and Code */}
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">{location}</span> • Code : {code}
      </p>

      {/* Payment Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Payment QR Code Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Payment QR Code</h3>
          {/* Using the imported SSITMQR image for the QR Code display */}
          <img
            src={SSITMQR} // Use the imported SSITMQR image directly
            alt={`${instituteName} QR Code`}
            className="w-36 h-36 border border-gray-300 rounded-lg mb-3"
          />
          <a
            href={SSITMQR} // Use the imported SSITMQR image for the download link
            download // This attribute prompts the browser to download the file
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <Download className="w-4 h-4 mr-1" /> Download QR Code
          </a>
        </div>

        {/* Payment Options Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Payment Options</h3>
          <a
            href={onlinePortalUrl || "#"} // Use the provided online portal URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-800 transition-colors w-full max-w-[200px]"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Online Payment Portal
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-center md:text-left w-full">
        <p className="text-gray-600 text-sm">For payment issues, contact :</p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  );
};


const FeePaymentPage = () => {
  return (
    <Layout>
      {/* Overall page background - light blue theme */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">

        {/* Main page title and subtitle */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">
             <span className='border-l-4 border-orange-500 pl-4'> FEE PAYMENT</span>
             <span className='text-orange-600'> PORTAL</span>
          </h1>
          <p className="text-xl text-blue-600 font-semibold">
            Secure online payment for all affiliated institutions
          </p>
        </div>

        {/* Shivdan Singh Institute (SSITM) Card - Centered when alone */}
        <div className="max-w-md mx-auto">
          <CollegePaymentCard
            instituteName="SHIVDAN SINGH INSTITUTE OF TECHNOLOGY & MANAGEMENT"
            location="ALIGARH"
            code="007"
            contactEmail="admission.cell@seglko.org"
            // The onlinePortalUrl is now passed directly as a prop
            onlinePortalUrl="https://smartpay.easebuzz.in/75653/Application"
          />
        </div>

      </div>
    </Layout>
  );
};

export default FeePaymentPage;