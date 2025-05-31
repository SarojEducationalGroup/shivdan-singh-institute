import React from 'react';

const VisionAndMission = () => {
  return (
    <div className=" bg-orange-50 py-11 px-4 sm:px-6 lg:px-8 pb-30">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-14 overflow-hidden">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
          <span className="border-l-4 border-orange-500 pl-4">VISION <span className="text-orange-500">& MISSION</span></span>
        </h1>
          <p className="mt-1 max-w-xl mx-auto text-xl text-gray-600">
            Our guiding principles and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl">
            <div className="px-6 py-8 sm:p-5 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex items-center">

                <h2 className="text-xl font-bold text-white">Our Vision</h2>
              </div>
            </div>

            <div className="px-6 py-8 sm:p-10">
              <p className="text-md leading-relaxed">
                To emerge as a premier institution that nurtures innovation, excellence, and ethical values,
                producing globally competent professionals who contribute meaningfully to societal development
                and technological advancement.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl">
            <div className="px-6 py-6 sm:p-5 bg-gradient-to-r from-green-600 to-green-800">
              <div className="flex items-center">
                {/* Icon removed */}
                <h2 className="text-xl font-bold text-white">Our Mission</h2>
              </div>
            </div>

            <div className="px-6 py-8 sm:p-6">
              <ul className="space-y-4">
                {[
                  "To provide quality education through innovative teaching-learning processes.",
                  "To foster research, innovation, and entrepreneurship among students.",
                  "To develop industry-relevant skills and professional ethics.",
                  "To establish strong industry-institute collaboration.",
                  "To contribute to society through community engagement."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* Tick Icon removed */}
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



      </div>

      {/* All animation styles have been removed */}
    </div>
  );
};

export default VisionAndMission;