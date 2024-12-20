import { useState } from "react";

export function RedBubble({
  size,
  color = "#748d92",
  hoverColor = "#124e66",
}: {
  size: number;
  color?: string;
  hoverColor?: string;
}) {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <svg
      fill={isHovered ? hoverColor : color}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path d="M22.177 21.766h-4.266c-0.234 0-0.427-0.193-0.427-0.427v-10.708c0-0.234 0.193-0.427 0.427-0.427h3.953c2.969 0 3.594 1.75 3.594 3.214 0 0.849-0.224 1.521-0.672 2.016 1.089 0.448 1.672 1.458 1.672 2.922 0 2.135-1.599 3.411-4.281 3.411zM15.984 21.766h-8.859c-0.234 0-0.427-0.193-0.427-0.427v-10.708c0-0.234 0.193-0.427 0.427-0.427h4.141c2.583 0 4.125 1.391 4.125 3.724 0 1.552-0.776 2.771-2.036 3.266l2.948 3.859c0.24 0.276 0.047 0.708-0.318 0.714zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16z" />
    </svg>
  );
}
