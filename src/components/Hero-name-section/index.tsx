"use client";
import { motion } from "framer-motion";

const HeroNameSection = () => {
  return (
    <section className="relative h-screen w-full bg-[#1a1a1a] overflow-hidden text-white">
      <div className="absolute inset-0 flex justify-center items-center text-[40vw] font-bold text-gray-300/10">
        NOVA
      </div>

      <div className="absolute bottom-1/2 left-0 w-full overflow-hidden bg-black py-2">
        <motion.div
          className="flex whitespace-nowrap text-sm md:text-lg uppercase font-mono tracking-wide"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
        >
          <span className="px-6">OUR EACH DESIGN ELEMENT IS AN EXTENSION</span>
          <span className="px-6">OF THE INTERFACE FUNCTION</span>
          <span className="px-6">CONTEMPORARY ENGINEERING</span>
          <span className="px-6">TECHNOLOGICAL SOLUTIONS</span>
          <span className="px-6">PUREST EXPRESSION OF PERSONALITY</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNameSection;
