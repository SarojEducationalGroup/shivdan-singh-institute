import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      url: "https://www.instagram.com/ssitmalg/p/DMKXnFLie3z/",
      caption: "",
    },
    {
      url: "https://www.instagram.com/ssitmalg/p/DMJ8IYatsJj/",
      caption: "",
    },
    {
      url: "https://www.instagram.com/ssitmalg/p/DMHXX60C7dq/",
      caption: "",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-8 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/20 mb-4">
            <FiInstagram className="text-2xl text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-purple-500 mb-3">
           SSITM Campus Chronicles
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Explore vibrant moments from our university life
          </p>
        </motion.div>

                {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-4 mb-6"
        >
          <a
            href="https://www.instagram.com/ssitmalg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            <FiInstagram className="mr-2 text-lg" />
            Follow @ssitmalg
          </a>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
        >
          {instagramPosts.map((post, index) => (
            <motion.div key={index} variants={item} className="group relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-700 hover:border-purple-500/30">
                <InstagramEmbed
                  url={post.url}
                  width="100%"
                  height="100%"
                  captioned={false}
                />
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-2xl">
                <p className="text-white font-medium line-clamp-2">
                  {post.caption}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm text-purple-300 hover:text-white transition-colors"
                >
                  <FiInstagram className="mr-2" />
                  View on Instagram
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default InstagramFeed;