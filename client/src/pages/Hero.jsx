
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../assets/hero3.jpg'; // Assuming this image is still relevant or you'll replace it
import { Link } from 'react-router-dom';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden" // Changed background to white
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute inset-0 opacity-5" // Reduced opacity for subtle effect
          style={{
            backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)', // Light gray dots
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Removed floating tech words as they don't seem to fit the new aesthetic */}
      </div>

      <motion.div
        className="container px-4 sm:px-6 lg:px-8 mx-auto  py-8 flex flex-col lg:flex-row items-center justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 relative z-20 text-center lg:text-left" // Centered text for smaller screens
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight" // Darker text for headings
            whileHover={{ scale: 1.02 }}
          >
          
            WELCOME TO<br />
            <span className="text-orange-500">SSITM</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-700" // Darker text for paragraph
            variants={itemVariants}
          >
            Empowering future leaders with quality education and cutting-edge technology.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" // Centered buttons for smaller screens
            variants={itemVariants}
          >
            <Link to="/courses/AllCourses">
              <motion.button
                className="px-6 py-2 sm:px-8 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-semibold hover:shadow-lg transition-all duration-300
" // Solid blue button
                whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
              </motion.button>
            </Link>

<Link to= "/contact-us">
            <motion.button
              className="px-6 py-2 sm:px-8 sm:py-2 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300" // Bordered button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={itemVariants}
          >
            {[
              { value: '25+', label: 'Courses' },
              { value: '1500+', label: 'Students' },
              { value: '50+', label: 'Faculty' },
              { value: '100%', label: 'Placement' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-3 rounded-lg shadow-md text-center border border-gray-200" // Lighter background for stats, subtle border
                whileHover={{ y: -5 }}
              >
                <p className="text-xl font-bold text-blue-600">{stat.value}</p> {/* Blue text for values */}
                <p className="text-xs text-gray-600">{stat.label}</p> {/* Darker gray for labels */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end relative z-20"
          variants={itemVariants}
        >
          {/* Keeping the image and floating elements for now, adjust as needed based on actual image content */}
          <div className="relative w-full max-w-lg">
            <motion.img
              src={heroImage}
              alt="University Admission" // Changed alt text
              className="w-full h-auto max-h-[700px] border-2px shadow-lg" // Added rounded corners and shadow
              whileHover={{ scale: 1.02 }}
            />

            {/* Keeping these floating elements, adjust colors to fit new theme */}
            <motion.div
              className="absolute -top-6 -left-6 bg-blue-600 p-2 rounded-xl shadow-lg z-30 text-white" // Blue background, white text
              variants={floatingVariants}
              animate="float"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div> {/* Adjusted green */}
                <p className="font-bold text-xs">Admissions Open</p> {/* Changed text */}
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-gray-100 p-2 rounded-xl shadow-lg z-30 border border-gray-200" // Light background, border
              variants={floatingVariants}
              animate="float"
            >
              <p className="font-bold text-sm text-gray-800">Established 1999</p> {/* Darker text */}
              <p className="text-xs text-gray-600">Leading Institution</p> {/* Darker text */}
            </motion.div>

            <motion.div
              className="absolute -left-16 top-1/3 hidden xl:block"
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-blue-100 p-2 rounded-lg shadow-md w-32 border border-blue-200 text-blue-800"> {/* Light blue background */}
                <p className="text-xs font-semibold">New Program:</p>
                <p className="text-xs font-bold">Innovation & Design</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-16 bottom-1/3 hidden xl:block"
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-blue-100 p-2 rounded-lg shadow-md w-32 border border-blue-200 text-blue-800"> {/* Light blue background */}
                <p className="text-xs font-semibold">Recognized for:</p>
                <p className="text-xs font-bold">Research Excellence</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Kept the marquee, adjusted colors to fit new theme */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-m py-2 overflow-hidden z-20" // Solid blue for the marquee
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
        >
          <span className="mx-4">🚀 Admissions Open for 2024-25 Batch | </span>
          <span className="mx-4">💡 New AI & Robotics Lab Inaugurated | </span>
          <span className="mx-4">🏆 Ranked #1 in Technical Education | </span>
          <span className="mx-4">🌐 Industry 4.0 Ready Curriculum</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;