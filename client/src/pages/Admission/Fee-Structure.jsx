import React from 'react';
import Layout from '../../components/Layout';

const FeeStructure = () => {
    const tableData = [
        { "S.No": 1, "Course": "B.Pharma", "Fees": "₹85,000.00", "Tuition Fee": "₹60,000.00" },
        { "S.No": 2, "Course": "D.Pharma", "Fees": "₹75,000.00", "Tuition Fee": "₹65,000.00" },
        { "S.No": 3, "Course": "Diploma", "Fees": "₹35,000.00", "Tuition Fee": "₹35,000.00" },
        { "S.No": 4, "Course": "BBA", "Fees": "₹45,000.00", "Tuition Fee": "₹30,000.00" },
        { "S.No": 5, "Course": "BCA", "Fees": "₹45,000.00", "Tuition Fee": "₹30,000.00" },
        { "S.No": 6, "Course": "B.Tech", "Fees": "₹85,000.00", "Tuition Fee": "₹60,000.00" },
        { "S.No": 7, "Course": "M.Tech", "Fees": "₹60,000.00", "Tuition Fee": "₹30,000.00" },
        { "S.No": 8, "Course": "MBA", "Fees": "₹60,000.00", "Tuition Fee": "₹30,000.00" },
        { "S.No": 9, "Course": "MCA", "Fees": "₹60,000.00", "Tuition Fee": "₹30,000.00" }
    ];

    return (
        <Layout>
            <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
                        <span className="border-l-4 border-orange-500 pl-4">
                            <span>Fee Structure<span className="text-orange-500"> for 2025-26</span> </span>
                        </span>
                    </h1>

                    <div className="bg-white rounded-lg shadow-xl p-5 sm:p-5">
                         <div className="overflow-x-auto mt-8">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100 border-b">
                                    <tr>
                                        {Object.keys(tableData[0]).map((key, index) => (
                                            <th
                                                key={index}
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()} {/* Adds space before capital letters for better readability */}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {tableData.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="hover:bg-gray-50">
                                            {Object.values(row).map((value, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                >
                                                    {value}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FeeStructure;