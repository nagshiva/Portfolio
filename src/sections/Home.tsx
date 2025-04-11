import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Nagasiva Pulapa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Where finance meets tech, I thrive.
            </p>
            <p className="text-gray-300 mb-8 max-w-lg">
              I am a Computer Science & Engineering student specializing in Data
              Science at KL University. Passionate about technology and finance,
              Enthusiast in software development, Data Science, and stock market
              investments.
            </p>
            <motion.a
              href="resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src="portfolio_pic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
