import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../assets/hero.png';

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

  // Animation variants
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
      className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Circuit board pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
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
        
        {/* Floating tech icons */}
        {['AI', 'ML', 'IoT', 'VR', 'Cloud'].map((tech, index) => (
          <motion.div
            key={tech}
            className={`absolute text-blue-200 font-mono text-lg opacity-30 ${index % 2 === 0 ? 'font-bold' : ''}`}
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

      {/* Main content container */}
      <motion.div
        className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Text Content - Left Side */}
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 relative z-20"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            WELCOME TO SSITM
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-600"
            variants={itemVariants}
          >
            Empowering future leaders with quality education and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button 
              className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
            </motion.button>
            <motion.button 
              className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
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
                className="bg-white p-4 rounded-lg shadow-md text-center"
                whileHover={{ y: -5 }}
              >
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Image and Tech Elements */}
        <motion.div 
          className="lg:w-1/2 flex justify-center relative z-20"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-lg">
            {/* Main Image */}
            <motion.img 
              src={heroImage} 
              alt="SSITM Campus" 
              className="rounded-2xl shadow-2xl object-cover w-full h-auto z-20"
              whileHover={{ scale: 1.02 }}
            />
            
            {/* Floating Tech Badges */}
            <motion.div
              className="absolute -top-8 -left-8 bg-white p-3 rounded-xl shadow-lg z-30"
              variants={floatingVariants}
              animate="float"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <p className="font-bold text-sm">AI Courses</p>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-30"
              variants={floatingVariants}
              animate="float"
            >
              <p className="font-bold text-blue-600">Since 1999</p>
              <p className="text-sm text-gray-500">Quality Education</p>
            </motion.div>

            {/* Animated Course Highlights */}
            <motion.div
              className="absolute -left-20 top-1/3 hidden xl:block"
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-white p-3 rounded-lg shadow-md w-40">
                <p className="text-xs font-semibold text-blue-600">New Course:</p>
                <p className="text-sm font-bold">AI & Machine Learning</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-20 bottom-1/3 hidden xl:block"
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="bg-white p-3 rounded-lg shadow-md w-40">
                <p className="text-xs font-semibold text-purple-600">Featured:</p>
                <p className="text-sm font-bold">Cloud Computing</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling announcement bar */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white
         font-semibold hover:shadow-lg transition-all duration-300 text-white py-4 
         overflow-hidden z-20"
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