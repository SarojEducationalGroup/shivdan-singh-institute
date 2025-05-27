import React, { useState } from 'react';

const CourseCard = ({ title, description, image }) => ( // Removed 'link' prop as it's no longer used for navigation
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
        {image ? (
            <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                No Image Available
            </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:bg-opacity-70">
            <div className="text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm px-2 mb-4 opacity-100 transition-opacity duration-300">
                    {description}
                </p>
                {/* Replaced 'Read More' with 'Enroll Now' or similar */}
               <a href="https://seglko.in8.nopaperforms.com/"> <button
                    className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                    Enroll Now
                </button></a>
            </div>
        </div>
    </div>
);

const Courses = () => {
    const [activeTab, setActiveTab] = useState('undergraduate');

    const courses = {
        undergraduate: [
            {
                title: 'B.Tech.',
                description: 'Undergraduate engineering and technology programs in various specializations, fostering innovation and problem-solving skills.',
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Engineering/Tech focus
            },
            {
                title: 'BBA.',
                description: 'Bachelor of Business Administration, focusing on core business concepts, management strategies, and leadership development.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ff88cd68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Business/Office focus
            },
            {
                title: 'BCA.',
                description: 'Bachelor of Computer Applications, a foundational program in computer science, software development, and IT applications.',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Coding/IT focus
            },
            {
                title: 'B.Pharma',
                description: 'Bachelor of Pharmacy, covering pharmaceutical sciences, drug development, and patient care.',
                image: 'https://images.unsplash.com/photo-1582719504825-78864789b940?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Pharmacy/Medicine focus
            },
        ],
        postgraduate: [
            {
                title: 'M.Tech.',
                description: 'Postgraduate engineering programs with advanced specialization, preparing students for research and high-level technical roles.',
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Advanced tech/engineering
            },
            {
                title: 'MBA',
                description: 'Master of Business Administration, designed for aspiring leaders and strategic management roles in a dynamic global environment.',
                image: 'https://images.unsplash.com/photo-1556761175-59744cb44edc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Professional business setting
            },
            {
                title: 'MCA.',
                description: 'Master of Computer Applications, an advanced program in software development, data science, and IT management.',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Advanced coding/development
            },
        ],
        diploma: [
            {
                title: 'D.Pharma',
                description: 'Diploma in Pharmacy, preparing students for roles in pharmaceutical dispensing, basic drug knowledge, and patient counseling.',
                image: 'https://images.unsplash.com/photo-1582719504825-78864789b940?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Reusing pharmacy image
            },
            {
                title: 'Diploma',
                description: 'Various diploma programs offering specialized vocational and technical training for immediate career entry.',
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Generic learning/hands-on
            },
        ],
    };

    return (
        <section className="bg-white-50 bg-opacity-70 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 md:mb-0">
                        <span className="border-l-4 border-orange-500 pl-4">OUR <span className="text-orange-500">COURSES</span></span>
                    </h2>

                 
                </div>

                <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${activeTab === 'undergraduate'
                                ? 'text-orange-600 border-b-2 border-orange-600'
                                : 'text-gray-600 hover:text-orange-500'
                            }`}
                        onClick={() => setActiveTab('undergraduate')}
                    >
                        UNDERGRADUATE
                    </button>
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${activeTab === 'postgraduate'
                                ? 'text-orange-600 border-b-2 border-orange-600'
                                : 'text-gray-600 hover:text-orange-500'
                            }`}
                        onClick={() => setActiveTab('postgraduate')}
                    >
                        POST GRADUATE
                    </button>
                    <button
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${activeTab === 'diploma'
                                ? 'text-orange-600 border-b-2 border-orange-600'
                                : 'text-gray-600 hover:text-orange-500'
                            }`}
                        onClick={() => setActiveTab('diploma')}
                    >
                        DIPLOMA
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses[activeTab].map((course) => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                            // 'link' prop is no longer needed here as the CourseCard handles its own internal action
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;