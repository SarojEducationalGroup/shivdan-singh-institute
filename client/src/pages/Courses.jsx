import React, { useState } from 'react';

const CourseCard = ({ title, description, image, link }) => (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                {/* Description is hidden on hover for a cleaner look, can be modified */}
                {/* <p className="text-sm">{description}</p> */}
                <a href={link} className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Read More
                </a>
            </div>
        </div>
    </div>
);

const Courses = () => {
    const [activeTab, setActiveTab] = useState('undergraduate');

    const courses = {
        undergraduate: [
            {
                title: 'B.Tech./B.Arch.',
                description: 'Undergraduate engineering and architecture programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=B.Tech./B.Arch.', // Placeholder image
                link: '#',
            },
            {
                title: 'Integrated M.Sc.',
                description: 'Integrated Master of Science programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=Integrated+M.Sc.', // Placeholder image
                link: '#',
            },
        ],
        postgraduate: [
            {
                title: 'Dual Degree',
                description: 'Dual degree programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=Dual+Degree', // Placeholder image
                link: '#',
            },
            {
                title: 'B.Sc. - B.Ed.',
                description: 'Bachelor of Science - Bachelor of Education programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=B.Sc.-B.Ed.', // Placeholder image
                link: '#',
            },
        ],
        research: [
            {
                title: 'Joint M.Sc.-Ph.D',
                description: 'Joint Master of Science - Ph.D programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=Joint+M.Sc.-Ph.D', // Placeholder image
                link: '#',
            },
            {
                title: 'BS + MS',
                description: 'Bachelor of Science + Master of Science programs.',
                image: 'https://via.placeholder.com/400x250/FFA500/FFFFFF?text=BS+MS', // Placeholder image
                link: '#',
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
                    <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300">
                       <a href="/courses/undergrad" >VIEW ALL COURSES </a>
                    </button>
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
                        className={`text-lg font-medium pb-2 transition-colors duration-300 ${activeTab === 'research'
                                ? 'text-orange-600 border-b-2 border-orange-600'
                                : 'text-gray-600 hover:text-orange-500'
                            }`}
                        onClick={() => setActiveTab('research')}
                    >
                        RESEARCH
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses[activeTab].map((course) => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                            link={course.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;