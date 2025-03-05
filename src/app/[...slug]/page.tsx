"use client";
import { motion } from "motion/react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Amazing Things Are Coming Soon!
      </motion.h1>
      
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg md:text-2xl text-center max-w-2xl"
      >
        We are crafting something extraordinary. Stay tuned for a revolutionary experience.
      </motion.p>
      
      {/* Call-to-Action Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-8 px-6 py-3 border border-white rounded-full"
      >
        <span className="text-sm uppercase tracking-widest">Coming Soon</span>
      </motion.div>
    </div>
  );
}
