"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Menggunakan useEffect agar random math hanya dieksekusi di client-side
  // untuk menghindari error hydration mismatch di Next.js
  useEffect(() => {
    const generateBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5, // Ukuran random antara 5px - 20px
      left: Math.random() * 100, // Posisi horizontal random (0% - 100%)
      duration: Math.random() * 15 + 10, // Kecepatan naik (10s - 25s)
      delay: Math.random() * 5, // Jeda waktu sebelum mulai naik
    }));
    setBubbles(generateBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-30px] rounded-full border border-ocean-aqua/20 bg-ocean-aqua/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
          }}
          animate={{
            y: ["0vh", "-120vh"], // Naik sampai melewati atas layar
            x: ["0px", "15px", "-15px", "0px"], // Efek bergoyang ke kiri & kanan
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            },
          }}
        />
      ))}
    </div>
  );
}
