import React from 'react'

const TopNav = () => {
  return (

   
    <div className=" md:flex p-3 bg-orange-500 text-sm gap-4 hidden
    justify-center items-center ">
        <span className="text-white"> Why SEG?</span>
        <a href="#" className="text-white">Alumni</a>
        <a href="#" className="text-white">Career</a>
        <span className="text-white">Toll Free No: 1800-180-7686</span>
        <a href="#" className="px-2 text-orange-500 bg-white-600 rounded">
          Pay Fee Online
        </a>  
     
    </div>
    
  );
};

export default TopNav;
