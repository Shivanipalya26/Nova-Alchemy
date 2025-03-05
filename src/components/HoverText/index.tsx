"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
interface HoverTextProps {
  children: ReactNode;
  className?: string;
  scaleRatio?: number;
  href?: string;
}

const HoverText: FC<HoverTextProps> = ({
  children,
  className,
  scaleRatio = 1,
  href = "#",
}) => {
  return (
    <div
      className={`inline-block cursor-pointer transition-all duration-300 hover:bg-gray-600  ${className}`}
      style={{
        padding: "8px 16px",
        transition:
          "padding 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        const currentPaddingX = 16;
        e.currentTarget.style.padding = `8px ${currentPaddingX * scaleRatio}px`;
        e.currentTarget.style.borderRadius = "24px";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.padding = "8px 16px";
        e.currentTarget.style.borderRadius = "0px";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default HoverText;
