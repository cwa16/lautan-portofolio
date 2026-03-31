"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Karya", url: "#projects", number: "01." },
  { name: "Keahlian", url: "#skills", number: "02." },
  { name: "Kontak", url: "#contact", number: "03." },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Mencegah halaman bisa di-scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-ocean-deep/80 backdrop-blur-md border-b border-ocean-light/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
          {/* Logo/Inisial */}
          <Link
            href="/"
            className="text-ocean-aqua font-bold text-2xl tracking-widest relative group flex items-center"
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              A
            </span>
            <span className="text-ocean-sand">.</span>
            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-ocean-aqua transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/* Menu Desktop (Sembunyi di Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={link.url}
                  className="text-ocean-sand hover:text-ocean-aqua transition-colors text-sm flex items-center gap-1 group"
                >
                  <span className="text-ocean-aqua font-mono text-xs">
                    {link.number}
                  </span>
                  <span className="group-hover:-translate-y-1 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#"
              className="px-4 py-2 text-ocean-aqua border border-ocean-aqua rounded hover:bg-ocean-aqua/10 transition-colors font-mono text-sm ml-4"
            >
              Resume
            </motion.a>
          </div>

          {/* Ikon Menu Mobile (Hamburger ke X) */}
          <div
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50"
            onClick={toggleMenu}
          >
            <span
              className={`block w-8 h-[2px] bg-ocean-aqua transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[10px]" : ""}`}
            ></span>
            <span
              className={`block w-8 h-[2px] bg-ocean-aqua transition-all duration-300 ease-in-out mt-[6px] ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-8 h-[2px] bg-ocean-aqua transition-all duration-300 ease-in-out mt-[6px] ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            ></span>
          </div>
        </div>
      </motion.nav>

      {/* Laci Menu Mobile & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Latar belakang blur (Backdrop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-ocean-deep/90 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Panel Laci (Drawer) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[75vw] max-w-sm bg-ocean-base shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] z-40 flex flex-col justify-center items-center md:hidden"
            >
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                  >
                    <Link
                      href={link.url}
                      onClick={toggleMenu} // Tutup menu saat link diklik
                      className="text-ocean-sand hover:text-ocean-aqua transition-colors text-2xl flex flex-col items-center gap-2"
                    >
                      <span className="text-ocean-aqua font-mono text-sm">
                        {link.number}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="#"
                  onClick={toggleMenu}
                  className="mt-8 px-8 py-4 text-ocean-aqua border border-ocean-aqua rounded hover:bg-ocean-aqua/10 transition-colors font-mono text-lg"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
