import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    <a href="#projects" className="inline-block">
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
        className="px-6 py-2 rounded-md relative radial-gradient"
      >
        <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        🍕
        </span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </a>
  );
};

export default ShinyButton;
