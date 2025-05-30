import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import your recruiter logos. Ensure these paths are correct.
import microsoftLogo from '../assets/microsoft-logo.jpeg';
import flipkartLogo from '../assets/flipkart-logo.png';
import ibmLogo from '../assets/ibm-logo.jpeg';
// Note: Deloitte and Practo were in your original code but not in the data provided in the prompt.
// Adding them back for completeness if you have the images.
import deloitteLogo from '../assets/deloitte-logo.jpeg';
import niitLogo from '../assets/niit-logo.png';
import tcsLogo from '../assets/tcss-logo.png';
import immvaultLogo from '../assets/immvault.png'; // Make sure this image exists
import credLogo from '../assets/cred.png';         // Make sure this image exists
import daffodilLogo from '../assets/daffodil.png'; // Make sure this image exists


const Recruiters = () => {
  const recruiters = [
    { name: 'NIIT', logo: niitLogo },
    { name: 'TCS', logo: tcsLogo },
    { name: 'IMMVault', logo: immvaultLogo },
    { name: 'CRED', logo: credLogo },
    { name: 'Daffodil', logo: daffodilLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Flipkart', logo: flipkartLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'Deloitte', logo: deloitteLogo }, // Assuming you have this logo
    // Add more recruiters if needed.
  ];

  return (

    <section className="bg-orange-50 bg-opacity-70 py-8 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        {/* Main Heading - Consistent Styling based on image_cf1d69.png and image_cebb12.png */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 relative pb-2">
          <span className="border-l-4 border-orange-500 pl-4">OUR LEADING <span className='text-orange-500'>RECRUITERS</span></span>
        </h2>
      </div>

      {/* Swiper Slider Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={3} // Number of slides visible at once for mobile
          autoplay={{
            delay: 2500, // Autoplay delay in ms
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{ clickable: true }} // Enable clickable pagination dots
          navigation={true} // Enable navigation arrows
          modules={[Autoplay, Pagination, Navigation]}
          loop={true} // Infinite loop
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6, // Show more logos on larger screens
              spaceBetween: 50,
            },
          }}
          className="mySwiper py-8" // Added py-8 for space for pagination dots
        >
          {recruiters.map((recruiter, index) => (
            <SwiperSlide key={`${recruiter.name}-${index}`}>
              <div
                className="bg-white p-3 flex justify-center items-center h-24 sm:h-28 border border-orange-200 rounded-lg shadow-md
                           transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <img
                  src={recruiter.logo}
                  alt={`${recruiter.name} Logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* static para */}
        <div className=" mt-8 ">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our strong network of industry partners ensures that our students gain exposure to top-tier companies and secure promising career opportunities. We are committed to fostering talent that meets the demands of the global market.
            Through dedicated placement assistance, career counseling, and skill development workshops, we prepare our graduates to excel in their chosen fields. These collaborations are a testament to the quality of education and the caliber of students nurtured at our institution.
          </p>

        </div>
      </div>
    </section>


  );
};

export default Recruiters;