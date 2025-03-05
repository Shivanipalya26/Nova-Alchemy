"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "motion/react";

interface TextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const TextRotating: FC<TextProps> = ({
  texts,
  className,
  interval = 2000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {texts[index]}
    </motion.div>
  );
};
