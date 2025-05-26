import React from 'react';
import Layout from '../components/Layout';
import campusImage from '../assets/ssitm-campus.png'; // Import your demo image
import Recruiters from './Recruiters';
import Courses from './Courses'; // Assuming Courses component is in a file named Courses.jsx
import Placement from './Placement';
import WhyChooseUs from './WhyChooseUs.jsx';

function Home() {
  return (
    <Layout>
      <section className="bg-orange-50 bg-opacity-70 py-8 sm:py-12"> {/* Consistent section background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading - Consistent Styling */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
            <span className="border-l-4 border-orange-500 pl-4">ABOUT <span className="text-orange-500">SSITM</span></span>
          </h1>

          {/* Main Content: Text on left, Image & Highlights on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 md:order-1"> {/* Order changed for mobile-first: text below image, then text left */}
              <p className="text-gray-700 text-base leading-relaxed mb-4"> {/* Adjusted text size and leading */}
                Shivdan Singh Institute of Technology & Management (SSITM) stands tall
                among North India's premier institutions, renowned for its NAAC 'A'
                accredited excellence and 45-acre eco-friendly smart campus. Offering
                cutting-edge programs in Engineering, Pharmacy, and Management,
                SSITM combines academic rigor with industry-ready training through 25+ modern labs,
                6 innovation hubs, and faculty with 15+ years average industry experience.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                SSITM is committed to nurturing future leaders and innovators. Our holistic
                approach emphasizes not just academic excellence, but also personal growth,
                critical thinking, and problem-solving skills, preparing students for a
                dynamic global landscape.
              </p>

              <a
                href="#"
                className="inline-block text-orange-600 font-semibold text-lg hover:underline transition-colors duration-300"
              >
                Learn More About Our Vision <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Right Column - Image & Highlights */}
            <div className="order-1 md:order-2"> {/* Order changed for mobile-first: image first, then image right */}
              {/* Campus Image */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-xl border border-orange-200"> {/* Stronger shadow, subtle border */}
                <img
                  src={campusImage}
                  alt="SSITM Campus View"
                  className="w-full h-56 sm:h-72 md:h-80 object-cover object-center" // Responsive height
                />
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4"> {/* gap-4 for consistency */}
                <div className="bg-orange-100 p-4 rounded-lg shadow-sm border border-orange-200 text-center"> {/* Lighter orange background, border, shadow */}
                  <h3 className="font-bold text-2xl text-orange-700 mb-1">100%</h3> {/* Larger, bolder number */}
                  <p className="text-sm text-gray-700">Placement Rate</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg shadow-sm border border-orange-200 text-center">
                  <h3 className="font-bold text-2xl text-orange-700 mb-1">30+</h3>
                  <p className="text-sm text-gray-700">Student Clubs</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg shadow-sm border border-orange-200 text-center">
                  <h3 className="font-bold text-2xl text-orange-700 mb-1">NBA</h3>
                  <p className="text-sm text-gray-700">Accredited Programs</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg shadow-sm border border-orange-200 text-center">
                  <h3 className="font-bold text-2xl text-orange-700 mb-1">80+</h3>
                  <p className="text-sm text-gray-700">Industry Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters and Courses sections */}

      <Courses />
      < Placement />
      <Recruiters />
      <WhyChooseUs />

    </Layout>
  );
}

export default Home;