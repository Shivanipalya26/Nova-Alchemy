"use client";
import * as T from "@/styles/typography";
import { motion } from "motion/react";
import { TextRotating } from "../TextRotating";

const HomeDesignSection = () => {
  return (
    <section className="bg-gray-600 h-screen flex flex-col items-center justify-center text-center relative text-white">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-[100px] md:text-[120px] font-thin"
      >
        (
      </motion.span>

      <div className="text-white font-light leading-tight text-[50px] md:text-[120px]">
        <T.H1>DESIGN</T.H1>
        <T.H1>
          <TextRotating
            texts={[
              "THAT AMAZES",
              "THAT EDUCATES",
              "THAT FUNCTIONS",
              "THAT INSPIRES",
            ]}
          />
        </T.H1>
      </div>

      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-[100px] md:text-[120px] font-thin"
      >
        )
      </motion.span>

      <div className="flex justify-between w-full max-w-2xl mt-8 text-xs md:text-sm font-light text-gray-300">
        <span>PRECISE. INNOVATIVE.</span>
        <div className=" bg-[#313030] px-2 py-1 rounded-lg flex items-center gap-4 text-white cursor-pointer hover:bg-[#1a1a1a] transition">
          <span className="text-xl">&gt;&gt;&gt;</span>
          <div className="w-3 h-3 rounded-full border border-white"></div>
          <div className="w-3 h-3 rounded-full border border-white"></div>
        </div>
        <span>FUTURISTIC. EXPRESSIVE.</span>
      </div>
    </section>
  );
};

export default HomeDesignSection;
