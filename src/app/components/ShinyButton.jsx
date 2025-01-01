"use client";

import { motion } from "framer-motion";

const ShinyButton = ({ children, onClick, className }) => {
  return (
    <a href="#" className={`inline-block ${className}`} onClick={onClick}>
      <motion.button
        initial={{ "--x": "200%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="relative inline-flex items-center justify-center px-6 py-2 text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-md overflow-hidden shadow-lg group"
      >
        <span className="relative z-10 tracking-wide font-light">
          {children}
        </span>
        <span className="absolute inset-0 rounded-md p-px bg-gradient-to-r from-pink-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </a>
  );
};

export default ShinyButton;
