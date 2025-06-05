import React, { useState } from 'react';
import Layout from '../../components/Layout'; // Assuming you have a Layout component
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Example for accordion icons. Install if not present: npm install @heroicons/react

const Diploma= () => {
    
const diplomaCourses = [
  {
    "title": "D.Pharma (Diploma in Pharmacy)",
    "duration": "2 Years",
    "eligibility": {
      "academic": "Passed 10+2 examination with Physics, Chemistry, and Biology/Mathematics from a recognized board. Minimum 50% marks required.",
      "age": "No specific age limit mentioned, typically 17 years and above.",
      "entrance": "Admission based on merit in 10+2 or college-level entrance exam if applicable."
    },
    "image": "https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_1280.jpg",
    "careerOpportunities": [
      "Pharmacist Assistant",
      "Drug Store Operator",
      "Medical Representative",
      "Production Assistant in Pharma Industry",
      "Quality Control Assistant"
    ]
  },
  {
    "title": "Diploma in Engineering (Various Branches)",
    "duration": "3 Years (after 10th) or 2 Years (after 12th/ITI)",
    "eligibility": {
      "academic": "Passed 10th standard with a minimum of 35-45% aggregate marks (varies by branch/institution). Science and Mathematics are mandatory subjects. Or 10+2 (PCM) / ITI passed.",
      "age": "Typically no specific age limit mentioned, but check specific institution guidelines.",
      "entrance": "Admission based on merit in 10th/12th or state-level polytechnic entrance examinations."
    },
    "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "careerOpportunities": [
      "Junior Engineer",
      "Supervisor",
      "Technician",
      "Draftsman",
      "Lab Assistant"
    ]
  },
  {
    "title": "Diploma in Civil Engineering",
    "duration": "3 Years",
    "eligibility": {
      "academic": "Passed 10th standard with a minimum of 35-45% aggregate marks (varies by institution). Science and Mathematics are mandatory subjects.",
      "age": "Typically no specific age limit mentioned, but check specific institution guidelines.",
      "entrance": "Admission based on merit in 10th or state-level polytechnic entrance examinations."
    },
    "image": "https://plus.unsplash.com/premium_photo-1681823749585-7dedb5a91dc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "careerOpportunities": [
      "Junior Engineer (Civil)",
      "Site Supervisor",
      "Draftsman (Civil)",
      "Surveyor",
      "Quality Control Assistant (Construction)"
    ]
  },
  {
    "title": "Diploma in Mechanical Engineering",
    "duration": "3 Years",
    "eligibility": {
      "academic": "Passed 10th standard with a minimum of 35-45% aggregate marks (varies by institution). Science and Mathematics are mandatory subjects.",
      "age": "Typically no specific age limit mentioned, but check specific institution guidelines.",
      "entrance": "Admission based on merit in 10th or state-level polytechnic entrance examinations."
    },
    "image": "https://plus.unsplash.com/premium_photo-1726880460027-fab1b079b37a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lY2hhbmljYWwlMjBlbmdpbmVlcnN8ZW58MHx8MHx8fDA%3D",
    "careerOpportunities": [
      "Junior Engineer (Mechanical)",
      "Production Supervisor",
      "Maintenance Technician",
      "CAD/CAM Operator",
      "Quality Inspector"
    ]
  },
  {
    "title": "Diploma in Electrical Engineering",
    "duration": "3 Years",
    "eligibility": {
      "academic": "Passed 10th standard with a minimum of 35-45% aggregate marks (varies by institution). Science and Mathematics are mandatory subjects.",
      "age": "Typically no specific age limit mentioned, but check specific institution guidelines.",
      "entrance": "Admission based on merit in 10th or state-level polytechnic entrance examinations."
    },
    "image": "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300",
    "careerOpportunities": [
      "Junior Engineer (Electrical)",
      "Electrician",
      "Maintenance Technician (Electrical)",
      "Panel Board Designer",
      "Field Service Engineer"
    ]
  },
  {
    "title": "Diploma in Agricultural Engineering",
    "duration": "3 Years",
    "eligibility": {
      "academic": "Passed 10th standard with a minimum of 35-45% aggregate marks (varies by institution). Science and Mathematics are mandatory subjects.",
      "age": "Typically no specific age limit mentioned, but check specific institution guidelines.",
      "entrance": "Admission based on merit in 10th or state-level polytechnic entrance examinations."
    },
    "image": "https://plus.unsplash.com/premium_photo-1664475377531-79df49523409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFncmljdWx0dXJlJTIwZW5naW5lZXJzfGVufDB8fDB8fHww",
    "careerOpportunities": [
      "Agricultural Supervisor",
      "Farm Machinery Technician",
      "Irrigation Technician",
      "Soil and Water Conservation Assistant",
      "Horticulture Supervisor"
    ]
  }
]

    const [openAccordion, setOpenAccordion] = useState(null); // State to manage which accordion is open

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <Layout>
            <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-4">
                        <span className="border-l-4 border-orange-500 pl-4">
                            OUR <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">DIPLOMA COURSES</span>
                        </span>
                    </h1>

                    {/* Course Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {diplomaCourses.map((course, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-103">
                                <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h2>
                                    <div className="mb-4">
                                        <p className="font-semibold text-gray-700">Duration: <span className="font-normal">{course.duration}</span></p>
                                    </div>

                                    {/* Eligibility Accordion */}
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="flex justify-between items-center w-full text-left font-semibold text-lg text-orange-600 hover:text-orange-800 transition-colors duration-200 focus:outline-none"
                                        >
                                            Admission Eligibility Criteria
                                            {openAccordion === index ? (
                                                <ChevronUpIcon className="w-5 h-5 ml-2" />
                                            ) : (
                                                <ChevronDownIcon className="w-5 h-5 ml-2" />
                                            )}
                                        </button>
                                        {openAccordion === index && (
                                            <div className="mt-3 text-gray-600 text-sm">
                                                <p className="mb-1"><strong>Academic Requirements:</strong> {course.eligibility.academic}</p>
                                                <p className="mb-1"><strong>Age Limit:</strong> {course.eligibility.age}</p>
                                                <p className="mb-1"><strong>Entrance Examination:</strong> {course.eligibility.entrance}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Career Opportunities */}
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <h3 className="font-semibold text-lg text-gray-700 mb-2">Career Opportunities:</h3>
                                        <ul className="list-disc list-inside text-gray-600 text-sm">
                                            {course.careerOpportunities.map((opportunity, opIndex) => (
                                                <li key={opIndex}>{opportunity}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Enroll Now Button - similar to TopNav button */}
                                    <a
                                        href="https://seglko.in8.nopaperforms.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                          mt-6 inline-flex items-center justify-center w-full
                                          bg-orange-600 text-white font-bold py-3 px-6
                                          rounded-full shadow-lg
                                          hover:bg-orange-700 hover:scale-105
                                          transition-all duration-300 ease-in-out
                                          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
                                        "
                                    >
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Information Section, inspired by the image */}
                    <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-3">Additional Information for Diploma Admissions:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>All candidates must submit original documents for verification at the time of admission.</li>
                            <li>International students must have equivalent qualifications as recognized by the relevant Indian authorities.</li>
                            <li>5% relaxation in marks may be provided for reserved category candidates as per government norms.</li>
                            <li>Admission is subject to availability of seats in the chosen program.</li>
                            <li>Candidates may need to qualify a basic aptitude test or interview conducted by the institution.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Diploma;