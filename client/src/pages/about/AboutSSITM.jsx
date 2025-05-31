import React  from "react";
import Layout from "../../components/Layout"
import campusImage from "../../assets/HERO-IMAGE.jpg"
import WhyChooseUs from "../WhyChooseUs";

const About = ()=>{
    return (
   <Layout>
    <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                <span className="border-l-4 border-orange-500 pl-4">ABOUT</span> <span className="text-orange-600">SSITM</span>
              </h1>
              <p className="text-gray-700 mb-4">
                Shivdan Singh Institute of Technology & Management (SSITM) stands tall among
                North India’s premier institutions, renowned for its NAAC ‘A’ accredited excellence
                through cutting-edge programs in Pharmacy, and Management. SSITM combines academic
                rigor with industry-ready training through 25+ modern labs, 6 innovation hubs, and
                faculty with 15+ years average industry experience.
              </p>
              <p className="text-gray-700">
                SSITM’s commitment to nurturing future leaders and innovators. Our holistic approach
                emphasizes not just academic excellence, personal growth, critical thinking, and
                problem-solving skills, preparing students for a dynamic global landscape.
              </p>
            </div>

            {/* Image + Highlights Section */}
            <div>
              <div className="rounded-lg overflow-hidden border-2 border-orange-300 mb-6">
                <img
                  src={campusImage}
                  alt="SSITM Campus"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-orange-100 p-4 rounded text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-orange-600">100%</h3>
                  <p className="text-sm text-gray-700">Placement Rate</p>
                </div>
                <div className="bg-orange-100 p-4 rounded text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-orange-600">30+</h3>
                  <p className="text-sm text-gray-700">Student Clubs</p>
                </div>
                <div className="bg-orange-100 p-4 rounded text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-orange-600">NBA</h3>
                  <p className="text-sm text-gray-700">Accredited Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />

    </Layout>
    );
}

export default About; 