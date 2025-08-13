import React, { useEffect, useState } from 'react';

const HelpDesk = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative bg-gray-100 flex items-center justify-center">
      <div className="fixed bottom-4 flex flex-row items-end space-y-1 z-50">
        {/* Help Desk Component */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center p-3 rounded-full shadow-lg max-w-sm">
          {/* Headphone Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v3z"></path>
            <path d="M12 11V5M12 5H9.5M12 5H14.5"></path>
          </svg>
          <div className="flex flex-col font-medium">
            <span className='text-xs'>Admission Help Desk</span>
            <span className="text-md">Call Us: 1800-180-7686</span>
          </div>
        </div>

        {/* Scroll to top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
            aria-label="Scroll to top"
          >
            {/* Up arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
   
    </div>
  );
};

export default HelpDesk;
