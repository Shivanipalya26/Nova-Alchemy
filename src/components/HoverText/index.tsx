"use client";
import { FC, ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./HoverText.module.css";

interface HoverTextProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const HoverText: FC<HoverTextProps> = ({
  children,
  className = "",
  href = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        styles.hoverPadding
      } inline-block cursor-pointer hover:bg-gray-600 transition-all duration-300 ${
        isHovered ? styles.hovered : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default HoverText;
