import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Eligibility = () => {
    const [activeTab, setActiveTab] = useState('undergraduate'); // State to manage active tab
    const [openAccordion, setOpenAccordion] = useState(null); // State to manage open accordion

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    // Data structured to match the image's content for Undergraduate tab
    const undergraduateEligibilitySections = [
        {
            id: 'academic',
            title: 'Academic Requirements',
            content: 'Minimum 60% marks in 10+2 examination from a recognized board. Science stream required for technical courses.',
        },
        {
            id: 'age',
            title: 'Age Limit',
            content: 'Candidates must be between 17-21 years of age at the time of admission.',
        },
        {
            id: 'entrance',
            title: 'Entrance Examination',
            content: 'Must qualify the SEG Entrance Test (SEGET) with minimum 50th percentile.',
        },
    ];

    // You would define similar objects for Postgraduate and Diploma tabs
    // For now, they will show generic messages or similar content.
    const postgraduateEligibilitySections = [
        {
            id: 'pg_academic',
            title: 'Academic Requirements (PG)',
            content: 'Bachelor\'s degree in relevant discipline with minimum required marks. Specific requirements vary by program.',
        },
        {
            id: 'pg_entrance',
            title: 'Entrance Examination (PG)',
            content: 'Might require valid scores in GATE/GPAT/CAT/MAT/CMAT or university-specific tests.',
        },
    ];

    const diplomaEligibilitySections = [
        {
            id: 'diploma_academic',
            title: 'Academic Requirements (Diploma)',
            content: 'Minimum 10th pass or equivalent with required percentage. Specific requirements vary by program.',
        },
        {
            id: 'diploma_age',
            title: 'Age Limit (Diploma)',
            content: 'Candidates must meet specific age criteria as per AICTE/PCI norms.',
        },
    ];


    const additionalInformation = [
        'All candidates must submit original documents for verification',
        'International students must have equivalent qualifications',
        '5% relaxation in marks for reserved category candidates',
        'Admission subject to availability of seats',
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
                        Find detailed eligibility requirements for all programs offered at SSITM.
                    </p>
                </div>
            </section>

            {/* Main Eligibility Content Section */}
            <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8 sm:mb-12 border-b border-gray-300">
                        <button
                            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300
                                ${activeTab === 'undergraduate' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                            onClick={() => setActiveTab('undergraduate')}
                        >
                            Undergraduate
                        </button>
                        <button
                            className={`ml-4 px-6 py-3 text-lg font-semibold transition-colors duration-300
                                ${activeTab === 'postgraduate' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                            onClick={() => setActiveTab('postgraduate')}
                        >
                            Postgraduate
                        </button>
                        <button
                            className={`ml-4 px-6 py-3 text-lg font-semibold transition-colors duration-300
                                ${activeTab === 'diploma' ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                            onClick={() => setActiveTab('diploma')}
                        >
                            Diploma
                        </button>
                    </div>

                    {/* Content based on Active Tab */}
                    {activeTab === 'undergraduate' && (
                        <div>
                            {undergraduateEligibilitySections.map((section) => (
                                <div key={section.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-xl font-semibold text-gray-800 focus:outline-none"
                                        onClick={() => toggleAccordion(section.id)}
                                    >
                                        <span>{section.title}</span>
                                        <span className="text-blue-600">
                                            {openAccordion === section.id ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    {openAccordion === section.id && (
                                        <div className="p-6 pt-0 text-gray-700">
                                            <p>{section.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'postgraduate' && (
                        <div>
                            {postgraduateEligibilitySections.map((section) => (
                                <div key={section.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-xl font-semibold text-gray-800 focus:outline-none"
                                        onClick={() => toggleAccordion(section.id)}
                                    >
                                        <span>{section.title}</span>
                                        <span className="text-blue-600">
                                            {openAccordion === section.id ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    {openAccordion === section.id && (
                                        <div className="p-6 pt-0 text-gray-700">
                                            <p>{section.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <p className="text-gray-600 mt-8 text-center">
                                *Specific eligibility criteria for each postgraduate program can be found on their respective program pages.
                            </p>
                        </div>
                    )}

                    {activeTab === 'diploma' && (
                        <div>
                            {diplomaEligibilitySections.map((section) => (
                                <div key={section.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-xl font-semibold text-gray-800 focus:outline-none"
                                        onClick={() => toggleAccordion(section.id)}
                                    >
                                        <span>{section.title}</span>
                                        <span className="text-blue-600">
                                            {openAccordion === section.id ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    {openAccordion === section.id && (
                                        <div className="p-6 pt-0 text-gray-700">
                                            <p>{section.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                        </div>
                    )}


                    {/* Additional Information Section */}
                    <div className="bg-blue-100 p-8 rounded-lg shadow-md mt-8 border border-blue-200">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">Additional Information</h2>
                        <ul className="list-disc list-inside text-gray-800 space-y-2">
                            {additionalInformation.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </section>
        </Layout>
    );
};

export default Eligibility;