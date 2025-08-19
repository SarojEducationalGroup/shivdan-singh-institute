import React from 'react';

const HeaderCTA = () => {
  return (
    <div className="relative overflow-hidden py-2  bg-orange-600 sm:bg-orange-50 ">
      <div className="whitespace-nowrap text-center text-white sm:text-black text-sm tracking-tight transition-all duration-300 animate-[pulse_2s_infinite] whitespace-nowrap">
       Admissions closing soon! Secure your seat at SSITM 
      </div>


       <style jsx>{`
        @keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

      `}</style>
    </div>
  );
};

export default HeaderCTA;