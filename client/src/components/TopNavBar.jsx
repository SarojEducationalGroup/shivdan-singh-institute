import React from "react";
import { BookOpen, PhoneCall } from "lucide-react";

const TopNav = () => {
  return (
    <div className="hidden md:flex p-3 bg-orange-500 text-md gap-4 justify-center items-center">
      <div className="flex items-center text-white font-bold">
        <PhoneCall className="w-4 h-4 mr-2" />
        <span>Toll Free No: 1800-180-7686</span>
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
