const VisionAndMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 overflow-hidden">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in">
            Vision & Mission
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600 animate-fade-in animate-delay-100">
            Our guiding principles and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card with Animation */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl animate-slide-in-left">
            <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-3 rounded-md animate-pulse">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Vision</h2>
              </div>
            </div>
            <div className="px-6 py-8 sm:p-10">
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animate-delay-200">
                To emerge as a premier institution that nurtures innovation, excellence, and ethical values, 
                producing globally competent professionals who contribute meaningfully to societal development 
                and technological advancement.
              </p>
            </div>
          </div>

          {/* Mission Card with Animation */}
          <div className="bg-white overflow-hidden shadow-xl rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl animate-slide-in-right">
            <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-green-600 to-green-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-3 rounded-md animate-bounce animate-delay-300">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Mission</h2>
              </div>
            </div>
            <div className="px-6 py-8 sm:p-10">
              <ul className="space-y-4 text-gray-600">
                {[
                  "To provide quality education through innovative teaching-learning processes.",
                  "To foster research, innovation, and entrepreneurship among students.",
                  "To develop industry-relevant skills and professional ethics.",
                  "To establish strong industry-institute collaboration.",
                  "To contribute to society through community engagement."
                ].map((item, index) => (
                  <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values with Animation */}
        <div className="mt-16 bg-white shadow-xl rounded-lg overflow-hidden animate-fade-in animate-delay-500">
          <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-purple-600 to-purple-800">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white p-3 rounded-md animate-spin-slow">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="ml-4 text-2xl font-bold text-white">Our Core Values</h2>
            </div>
          </div>
          <div className="px-6 py-8 sm:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Excellence", desc: "Commitment to highest standards in education and research" },
                { title: "Integrity", desc: "Adherence to ethical principles and professional conduct" },
                { title: "Innovation", desc: "Fostering creativity and embracing new technologies" },
                { title: "Collaboration", desc: "Working together with all stakeholders" },
                { title: "Responsibility", desc: "Commitment to sustainable development" },
                { title: "Inclusivity", desc: "Providing equal opportunities for all" }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles for the animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default VisionAndMission;