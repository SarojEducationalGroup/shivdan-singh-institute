import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../assets/bg2.png';
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
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
        
        {['AI', 'ML', 'IoT', 'VR', 'Cloud'].map((tech, index) => (
          <motion.div
            key={tech}
            className={`absolute text-purple-300 font-mono text-lg opacity-20 ${index % 2 === 0 ? 'font-bold' : ''}`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 py-8 flex flex-col lg:flex-row items-center relative z-10" // Changed py-10 to py-8
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="lg:w-1/2 mb-8 lg:mb-0 relative z-20" // Changed mb-10 to mb-8
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            WELCOME TO SSITM
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-lg sm:text-xl text-gray-300" // Changed mt-6 to mt-4
            variants={itemVariants}
          >
            Empowering future leaders with quality education and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row gap-4" // Changed mt-8 to mt-6
            variants={itemVariants}
          >

            <Link to="/courses/AllCourses" >
            <motion.button 
              className="px-6 py-2 sm:px-8 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300" // Changed py-3 to py-2
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
            </motion.button>
            </ Link>

            <motion.button 
              className="px-6 py-2 sm:px-8 sm:py-2 border-2 border-blue-400 text-blue-300 rounded-full font-semibold hover:bg-blue-900/30 transition-all duration-300" // Changed py-3 to py-2
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" // Changed mt-12 to mt-8
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
                className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg shadow-md text-center border border-gray-700" // Changed p-4 to p-3
                whileHover={{ y: -5 }}
              >
                <p className="text-xl font-bold text-blue-300">{stat.value}</p> {/* Changed text-2xl to text-xl */}
                <p className="text-xs text-gray-300">{stat.label}</p> {/* Changed text-sm to text-xs */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex justify-center relative z-20"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-lg">
            <motion.img 
              src={heroImage} 
              alt="SSITM Campus" 
              className="object-cover w-full h-112 z-20" // Changed h-128 to h-112
              whileHover={{ scale: 1.02 }}
            />
            
            <motion.div
              className="absolute -top-6 -left-6 bg-gray-800 p-2 rounded-xl shadow-lg z-30 border border-gray-700" // Changed p-3 to p-2
              variants={floatingVariants}
              animate="float"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div> {/* Changed w-3 to w-2 */}
                <p className="font-bold text-xs text-white">AI Courses</p> {/* Changed text-sm to text-xs */}
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gray-800 p-2 rounded-xl shadow-lg z-30 border border-gray-700" // Changed p-4 to p-2
              variants={floatingVariants}
              animate="float"
            >
              <p className="font-bold text-sm text-blue-300">Since 1999</p> {/* Changed text size */}
              <p className="text-xs text-gray-400">Quality Education</p>
            </motion.div>

            <motion.div
              className="absolute -left-16 top-1/3 hidden xl:block" // Changed -left-20 to -left-16
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-gray-800 p-2 rounded-lg shadow-md w-32 border border-gray-700"> {/* Changed p-3 to p-2, w-40 to w-32 */}
                <p className="text-xs font-semibold text-blue-300">New Course:</p>
                <p className="text-xs font-bold text-white">AI & Machine Learning</p> {/* Changed text-sm to text-xs */}
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-16 bottom-1/3 hidden xl:block" // Changed -right-20 to -right-16
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-gray-800 p-2 rounded-lg shadow-md w-32 border border-gray-700"> {/* Changed p-3 to p-2, w-40 to w-32 */}
                <p className="text-xs font-semibold text-purple-300">Featured:</p>
                <p className="text-xs font-bold text-white">Cloud Computing</p> {/* Changed text-sm to text-xs */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white
         font-semibold hover:shadow-lg transition-all duration-300 py-2 
         overflow-hidden z-20" // Changed py-4 to py-2
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
          <span className="mx-2">🚀 Admissions Open for 2024-25 Batch | </span> {/* Changed mx-4 to mx-2 */}
          <span className="mx-2">💡 New AI & Robotics Lab Inaugurated | </span>
          <span className="mx-2">🏆 Ranked #1 in Technical Education | </span>
          <span className="mx-2">🌐 Industry 4.0 Ready Curriculum</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;