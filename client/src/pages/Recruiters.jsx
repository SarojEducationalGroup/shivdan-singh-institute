import React from 'react';

// Import logos
import microsoftLogo from '../assets/microsoft-logo.jpeg';
import flipkartLogo from '../assets/flipcart-logo.png';
import ibmLogo from '../assets/ibm-logo.jpeg';
import deloitteLogo from '../assets/deloitte-logo.png';
import niitLogo from '../assets/niit-logo.png';
import tcsLogo from '../assets/tcss-logo.png';
import immvaultLogo from '../assets/immvault.png';
import credLogo from '../assets/cred.png';
import daffodilLogo from '../assets/daffodil.png';

const Recruiters = () => {
  const logos = [
    microsoftLogo,
    flipkartLogo,
    ibmLogo,
    deloitteLogo,
    niitLogo,
    tcsLogo,
    immvaultLogo,
    credLogo,
    daffodilLogo,
  ];

  // Duplicate logos for seamless loop effect
  const allLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-6 overflow-hidden">
      <div className="whitespace-nowrap animate-scroll flex gap-12">
        {allLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-10 sm:h-14 object-contain"
          />
        ))}
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Recruiters;
