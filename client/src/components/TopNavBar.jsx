import React from 'react';

const TopNav = () => {
  return (
    <div className="md:flex p-3 bg-orange-500 text-sm gap-4 hidden
    justify-center items-center ">
      {/* <span className="text-white"> Why SEG?</span>
      <a href="#" className="text-white hover:underline">Alumni</a> */}
      {/* <a href="#" className="text-white hover:underline">Career</a> */}
      <span className="text-white font-bold">Toll Free No: 1800-180-7686</span>

      {/* Enroll Now Button - designed to look like an image button */}
      <a
        href="https://seglko.in8.nopaperforms.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center /* Use flex to align icon-like part and text */
          bg-orange-700 /* Darker orange for the whole button */
          rounded-full /* Pill shape */
          overflow-hidden /* Ensures inner elements are clipped to the rounded shape */
          shadow-lg
          group /* Enable group-hover effects */
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75
        "
      >
        {/* Icon-like section - simulate a badge with darker background and an icon */}
        <div className="
          bg-orange-800 /* Even darker orange for the icon background */
          p-2 px-3 /* Padding for the icon area */
          rounded-full /* Make it circular, might look like a flattened hexagon due to flex */
          flex items-center justify-center
          text-white /* Text color for the icon */
          group-hover:bg-orange-900 /* Darker on hover */
          transition-colors duration-300
        ">
          {/* An example icon (a simple 'plus' or 'admission' related icon) */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M16.5 6A2.25 2.25 0 0 0 14.25 3.75H13.5A2.25 2.25 0 0 0 11.25 6v.75H9V6a.75.75 0 0 0-.75-.75h-.75A.75.75 0 0 0 6.75 6v.75H6a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25h.75v3.625c0 .621.504 1.125 1.125 1.125h1.5a.75.75 0 0 0 .75-.75v-2.25h.75v2.25c0 .621.504 1.125 1.125 1.125h1.5a.75.75 0 0 0 .75-.75v-2.25h.75v.75A.75.75 0 0 0 16.5 16.5h.75a.75.75 0 0 0 .75-.75v-3h.75a2.25 2.25 0 0 0 2.25-2.25V9A2.25 2.25 0 0 0 18 6.75h-.75V6ZM12 12.75a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75v-.75H12v.75Z" />
          </svg>
        </div>
        {/* Text section */}
        <span className="
          text-white font-bold text-base /* Text style */
          py-2 pr-4 pl-2 /* Padding around the text to create spacing */
          group-hover:text-gray-100 /* Slightly lighter text on hover */
          transition-colors duration-300
        ">
          Enroll Now
        </span>
      </a>

    </div>
  );
};

export default TopNav;