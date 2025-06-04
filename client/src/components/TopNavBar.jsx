import React from "react";
import { BookOpen, PhoneCall, Facebook, Instagram } from "lucide-react";

const TopNav = () => {
  return (
    // The main container now uses 'justify-center' to center all its direct children.
    // 'gap-4' ensures spacing between all items.
    <div className="hidden md:flex p-3 bg-orange-500 text-md gap-4 justify-center items-center">
      <div className="flex items-center text-white font-bold">
        <PhoneCall className="w-4 h-4 mr-2" />
        <span>Toll Free No: 1800-180-7686</span>
      </div>

      {/* Social Media Icons */}
      {/* Removed 'ml-auto' to allow this div to be centered with other elements */}
      <div className="flex items-center gap-4">
        <a 
          href="https://www.facebook.com/sarojeducationalgroup" // Replace with actual Facebook URL
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/sarojeducationalgroup/" // Replace with actual Instagram URL
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <a
        href="https://seglko.in8.nopaperforms.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-orange-700 rounded-full shadow-lg group transition-all hover:scale-105 hover:shadow-xl"
      >
        <div className="bg-orange-800 p-2 px-3 rounded-full text-white group-hover:bg-orange-900">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="text-white font-bold text-base py-2 pr-4 pl-2">
          Apply Now
        </span>
      </a>
    </div>
  );
};

export default TopNav;