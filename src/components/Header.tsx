import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-gray-800"
        >
          AGBUGBA DAVID C.
        </motion.div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-600 hover:text-gray-800">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
