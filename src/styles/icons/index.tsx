import { FC } from "react";

interface IconProp {
  size?: number;
  color?: string;
  className?: string;
}

export const HomeArrow: FC<IconProp> = ({ size = 256, color, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={` ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NavIcon: FC<IconProp> = ({ size = 24, color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-fan"
  >
    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
    <path d="M12 12v.01" />
  </svg>
);
