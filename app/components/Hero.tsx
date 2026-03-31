"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 1. Import komponen Image dari Next.js

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-ocean overflow-hidden pt-20">
      {/* Elemen Latar Belakang */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="z-10 max-w-4xl px-6 text-center flex flex-col items-center">
        {/* 2. Bagian Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
          className="relative mb-10"
        >
          {/* Efek pendaran cahaya (glow) di belakang foto */}
          <div className="absolute inset-0 rounded-full bg-ocean-aqua opacity-20 blur-2xl transform scale-110"></div>

          {/* Bingkai foto */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-ocean-aqua/50 p-1 bg-ocean-base shadow-[0_0_20px_rgba(100,255,218,0.2)] overflow-hidden">
            <Image
              src="/images/foto-profil.jpeg" // Ganti dengan nama file foto Anda yang asli
              alt="Foto Profil Anshari"
              width={160} // Tentukan lebar mental (untuk layar besar)
              height={160} // Tentukan tinggi mental
              className="rounded-full object-cover w-full h-full" // Object-cover agar foto tidak gepeng
              priority // Prioritaskan pemuatan gambar ini karena berada di atas
            />
          </div>
        </motion.div>

        {/* Teks Deskripsi (Tetap sama, hanya penyesuaian delay animasi) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-ocean-aqua font-mono mb-4 text-sm md:text-base"
        >
          Halo, selamat datang di perairan saya. Nama saya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-ocean-sand mb-4"
        >
          Anshari.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
        >
          Saya membangun arsitektur digital.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base"
        >
          Seorang Software & Network Engineer dengan fokus pada pengembangan
          sistem yang *scalable*, aman, dan efisien. Mari menyelam lebih dalam
          ke karya-karya saya.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="inline-block px-8 py-4 border border-ocean-aqua text-ocean-aqua rounded hover:bg-ocean-aqua/10 transition-colors font-mono text-sm"
        >
          Jelajahi Portofolio
        </motion.a>
      </div>
    </section>
  );
}
