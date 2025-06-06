import React from 'react';
import Layout from '../../components/Layout';
// You might want an image for the UG hero section, similar to your campus image.
// import ugHeroImage from '../assets/undergrad-hero.png'; // Example: create this image

const undergraduateCourses = [
   
  {
    id: 1,
    title: 'B.Tech - Computer Science and Engineering (Artificial Intelligence)', // Changed from CSE
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111795_640.jpg',
  }, 

  {
    id: 2,
    title: 'B.Tech - Computer Science and Engineering (Artificial Intelligence & Machine Learning)', // Changed from CSE
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://cdn.pixabay.com/photo/2023/01/14/16/50/ai-generated-7718607_640.jpg',
  },

  {
    id: 3,
    title: 'B.Tech - Computer Science and Engineering', // Changed from CSE
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'B.Tech - Electronics & Communication Engineering (ECE)',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://media.istockphoto.com/id/1287582736/photo/robot-humanoid-use-laptop-and-sit-at-table-for-big-data-analytic.webp?a=1&b=1&s=612x612&w=0&k=20&c=F20ufOpQFFYfnJNNNiAbSFmP2JC5fc9WlNNz3ICih-Q=' // Example image for ECE
  },
  {
    id: 5,
    title: 'B.Tech - Mechanical Engineering (ME)',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://media.istockphoto.com/id/1705357580/photo/robotic-team-boost-software-machine-ensure-efficiency-troubleshooting-upgrade-for-optimal.webp?a=1&b=1&s=612x612&w=0&k=20&c=iyllNLvGhsg8FpvQ4l55jE4DvK3tQV19G25eOPvbgyE='
  },
  {
    id: 6,
    title: 'B.Tech - Civil Engineering (CE)',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://plus.unsplash.com/premium_photo-1661490867606-1ac837f9748e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l2aWwlMjAlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 7,
    title: 'Bachelor of Pharmacy (B.Pharma)',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Biology/Maths or equivalent with min. 45%',
    image: 'https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_1280.jpg'
  },
  {
    id: 8,
    title: 'Bachelor of Business Administration (BBA)',
    duration: '3 Years',
    eligibility: '10+2 in any stream or equivalent with min. 45%',
    image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFjaGVsb3IlMjBvZiUyMEJ1c2luZXNzJTIwQWRtaW5pc3RyYXRpb258ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 9,
    title: 'Bachelor of Computer Applications (BCA)',
    duration: '3 Years',
    eligibility: '10+2 in any stream with Maths/Computer Science or equivalent with min. 45%',
    image: 'https://media.istockphoto.com/id/1998660059/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.webp?a=1&b=1&s=612x612&w=0&k=20&c=b38xp_lw0-upEvjodUgwq9NNC8Lw4uDAS-SATyfr1hI='
  },
  // --- New Courses with 'Computer Science and Engineering' updated ---
  {
    id: 10,
    title: 'B.Tech - Computer Science and Engineering (Cyber Security)', // Changed from CSE
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://cdn.pixabay.com/photo/2018/05/18/11/03/cyber-security-3410923_640.jpg', 
  },

  {
    id: 11,
    title: 'B.Tech - Computer Science and Engineering (Data Science)', // Changed from CSE
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
  },
  {
    id: 12,
    title: 'B.Tech - Agricultural Engineering',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths/Biology or equivalent with min. 45%',
    image: 'https://plus.unsplash.com/premium_photo-1663011236143-62855453066b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFncmljdWx0dXJlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 13,
    title: 'B.Tech - Biotechnology',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Biology/Maths or equivalent with min. 45%',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
  },
  {
    id: 14,
    title: 'B.Tech - Electrical and Electronics Engineering',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
    image: 'https://cdn.pixabay.com/photo/2023/04/03/19/37/soldering-7897827_640.jpg',
  },
  {
    id: 15,
    title: 'B.Tech - Electrical Engineering',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3MlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },

];

const Undergrad = () => {
  return (
    <Layout>
      {/* Hero Section for Undergraduate Programs */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract shapes for design */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="80" r="15" fill="currentColor" />
            <circle cx="80" cy="20" r="20" fill="currentColor" />
            <rect x="50" y="50" width="30" height="30" transform="rotate(45 65 65)" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Ignite Your Future with <span className="text-yellow-300">Undergraduate Programs</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Embark on a journey of discovery and innovation with SSITM's diverse Bachelor's degree offerings. Build a strong foundation for a successful career.
          </p>
          <a
            href="https://seglko.in8.nopaperforms.com/" // Link to your admission page
            className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg
                             transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Apply Now <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - Consistent Styling */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-500 pl-4">EXPLORE OUR <span className="text-orange-500">PROGRAMS</span></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergraduateCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200
                               flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Image added here */}
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover object-center" />

                <div className="p-6 sm:p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  {/* Removed Key Highlights section */}
                </div>
                <div className="bg-yellow-100 p-4 border-t border-orange-200 text-gray-800 font-medium text-sm">
                  <span className="font-semibold">Eligibility:</span> {course.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Undergrad;