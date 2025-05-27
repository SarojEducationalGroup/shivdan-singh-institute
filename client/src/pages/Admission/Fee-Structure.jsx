
import React from 'react';
import Layout from '../../components/Layout';

const FeeStructure = () => {

    const pdfPath = '/SSITM-Fee-Structure.pdf';

    return (
        <Layout>
            <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
                        <span className="border-l-4 border-orange-500 pl-4">
                            <span> Fees <span className="text-orange-500">Structure</span> </span>
                        </span>
                    </h1>

                    <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">SSITM Academic Fee Structure</h2>
                        <p className="text-gray-700 mb-6">
                            Below is the comprehensive fee structure for various programs offered at SSITM. You can view the PDF document directly here or download it for your reference.
                        </p>



                        <div className=" mt-8">
                            <a
                                href={pdfPath}
                                download="SSITM-Fee-Structure.pdf"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300"
                            >
                                <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M.5 8.25a.75.75 0 01.75.75v3.66l.006.012a6.746 6.746 0 00.902.996l.332.298.006.006a6.757 6.757 0 00.996.902H18.75a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75V9A.75.75 0 01.5 8.25zM10 13.5a.75.75 0 00.75-.75V6.75h1.795a.75.75 0 00.559-1.28l-3.003-3a.75.75 0 00-1.124 0l-3.003 3a.75.75 0 00.559 1.28H9.25v6a.75.75 0 00.75.75z" clipRule="evenodd" />
                                </svg>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FeeStructure;