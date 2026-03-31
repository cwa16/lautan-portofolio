"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Kursor sembunyi di awal

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Begitu mouse digerakkan, kursor langsung dimunculkan
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Jangan render kursor kustom jika mouse belum pernah digerakkan (misal: di HP)
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center hidden md:flex"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 16),
        y: mousePosition.y - (isHovering ? 24 : 16),
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering ? "rgba(100,255,218,0.1)" : "transparent",
        }}
        className="rounded-full border border-ocean-aqua shadow-[0_0_15px_rgba(100,255,218,0.3)] flex items-center justify-center transition-colors duration-300"
      >
        <div className="w-1.5 h-1.5 bg-ocean-aqua rounded-full shadow-[0_0_10px_rgba(100,255,218,1)]"></div>
      </motion.div>
    </motion.div>
  );
}
