"use client"

import { motion } from "framer-motion"
import { Quote, GraduationCap, Users, Award } from "lucide-react"
// import ChairmanImg from "../../assets/ChairmanImg.jpg"
import { Layout } from "../components/Layout"

export default function ChairmanMessage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-8"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white text-center py-16 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 relative z-10"
            >
              Chairman's Message
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl opacity-90 relative z-10"
            >
              Saroj Educational Group
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-white/50 mx-auto mt-6 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Message Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-bold text-blue-800 mb-8">
                Dear Students, Educators, and Stakeholders,
              </motion.div>

              <motion.div variants={itemVariants} className="text-lg leading-relaxed text-gray-700 space-y-6">
                <p>
                  It gives me immense pleasure to welcome you to the{" "}
                  <span className="font-semibold text-blue-800">Saroj Educational Group (SEG)</span>, a beacon of
                  knowledge and a nurturing ground for future leaders. Since our inception, SEG has remained steadfast
                  in its mission to impart quality education, develop practical skills, and instill a sense of
                  responsibility in our students.
                </p>

                <p>
                  Education at SEG is not just about obtaining degrees; it is about shaping character, developing
                  critical thinking, and preparing individuals for real-world challenges. Our dedicated faculty,
                  state-of-the-art facilities, and industry-driven curriculum aim to provide a holistic learning
                  experience that prepares students for a successful future.
                </p>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600 relative overflow-hidden"
              >
                <Quote className="absolute top-4 right-4 text-blue-200 w-12 h-12" />
                <p className="text-xl italic text-blue-800 font-medium leading-relaxed">
                  "Education is the key to empowerment, and at SEG, we strive to ignite the spark of curiosity,
                  creativity, and courage in every learner."
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
                <p>
                  I firmly believe that education is the key to empowerment, and at SEG, we strive to ignite the spark
                  of curiosity, creativity, and courage in every learner. I invite you to be a part of this remarkable
                  journey of knowledge, growth, and transformation.
                </p>
              </motion.div>

              {/* Signature Section */}
              <motion.div variants={itemVariants} className="mt-12 pt-8 border-t-2 border-gray-200">
                <p className="text-lg italic text-gray-600 mb-6">Warm Regards,</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 rounded-full"
                ></motion.div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-800">Mr. Sunil Singh</h3>
                  <p className="text-gray-600 font-medium">Chairman, Saroj Educational Group</p>
                </div>
              </motion.div>
            </div>

            {/* Chairman Profile */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg h-full">
                <motion.div variants={imageVariants} whileHover={{ scale: 1.05 }} className="text-center mb-8">
                  <div className="relative inline-block">
                    <img
                      src={ChairmanImg}
                      alt="Mr. Sunil Singh - Chairman"
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-xl mx-auto"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                    >
                      <Award className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800">Mr. Sunil Singh</h3>
                  <p className="text-blue-600 font-semibold">Chairman & Founder</p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
                  ></motion.div>

                  <p className="text-gray-700 leading-relaxed">
                    Leading SEG with vision, dedication, and commitment to excellence in education for over two decades.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-xl shadow-md text-center">
                      <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-800">20+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-xl shadow-md text-center">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-800">10K+</p>
                      <p className="text-sm text-gray-600">Students Guided</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

       
      </motion.div>
    </div>
    </Layout>
  )
}