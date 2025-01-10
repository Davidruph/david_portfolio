import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              I'm an experienced software engineer with a proven track record of
              delivering innovative, high-performance solutions. My expertise
              spans across front-end and back-end development, with a focus on
              creating scalable and maintainable applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <FaCode className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Front-end Development
              </h3>
              <p className="text-gray-600 text-center">
                Proficient in React, TypeScript, and modern CSS frameworks like
                Tailwind.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <FaServer className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Back-end Development
              </h3>
              <p className="text-gray-600 text-center">
                Experienced with Node.js, PHP (Laravel/CodeIgniter), and
                database management.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <FaLaptopCode className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Full-stack Solutions
              </h3>
              <p className="text-gray-600 text-center">
                Capable of delivering end-to-end solutions, from concept to
                deployment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
