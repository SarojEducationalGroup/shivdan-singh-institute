import React from 'react';

function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section of the Footer */}
      <div className="relative py-10 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">

          {/*Locations, Mail Us, Quick Contact, Social Icons */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Other Colleges</h3>
            <ul className="space-y-2 text-md ">
              <li className="flex items-start space-x-2 hover:text-orange-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Saroj Institute of Technology & Management</span>
              </li>

              <li className="flex items-start space-x-2 hover:text-orange-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Shivdan Singh Institute of Technology & Management</span>
              </li>


              <li className="flex items-start space-x-2 hover:text-orange-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Saroj College Of Pharmacy</span>
              </li>
            </ul>


            {/* Mail */}
            <h3 className="font-bold text-lg mt-4 mb-2">Mail Us</h3>
            <div className="flex items-center space-x-2 text-md hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span>admission.cell@seglko.org</span>
            </div>


            {/* Contact number */}
            <h3 className="font-bold text-lg mt-4 mb-2">Quick Contact</h3>
            <div className="space-y-2 text-md ">

              <div className='hover:text-orange-500'>
                <p className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4.18 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>09555699988</span>
                </p>
              </div>

              <div className='hover:text-orange-500'>
                <p className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4.18 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>09810054878</span>
                </p>
              </div>

            </div>



            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/segindia/" className="text-gray-800 hover:text-pink-600 transition-colors duration-200">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.5" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/saroj-educational-group/" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.facebook.com/SEGofficial" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>

            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-2">Courses</h3>
            <div className="grid grid-cols-2 gap-x-4 text-md"> {/* Nested grid for two columns of programs */}
              <ul className="space-y-1">

                <div>
                  <a href="/courses/undergrad">Undergraduate Programs</a>
                </div>

                <div>
                  <a href="/courses/postgrad">Postgraduate Programs</a>
                </div>

              </ul>
            </div>
          </div>

          {/* Admissions & Campus */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Admissions</h3>

              <ul className="space-y-1 text-md">
                <div className='hover:text-orange-500'>
                  <a href="/admission/admission-process">Admission Process</a>
                </div>
                <div className='hover:text-orange-500'>
                  <a href="/admission/eligibility">Eligibility Criteria</a>
                </div>
                <div className='hover:text-orange-500'>
                  <a href="/">Fee Structure</a>
                </div>
              </ul>

            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Campus</h3>
              <ul className="space-y-1 text-md">
                <li>Lecture Halls</li>
                <li>Library</li>
                <li>Gallery</li>
                <li>Computer Lab</li>
                <li>Cafeteria</li>
              </ul>
            </div>

          </div>

          {/* Privacy Policy and Terms and Conditions */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
              <ul className="space-y-1 text-md">
              <div className='hover:text-orange-500'>
                <a href="/privacy-policy">Privacy Policy</a>
              </div>

              <div className='hover:text-orange-500'>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </div>
            </ul>
          </div>
         </div>
      </div>

      {/* Bottom Section (Copyright) */}
      <div className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm md:text-base font-bold">
          © {new Date().getFullYear()} Saroj Educational Group (SEG). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
