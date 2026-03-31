"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020c1b] relative pt-32 pb-8 px-6 flex flex-col justify-between min-h-[70vh]"
    >
      {/* Efek gradasi transisi dari section sebelumnya ke dasar laut */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ocean-base to-[#020c1b] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto text-center z-10 flex-grow flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ocean-aqua font-mono mb-4 text-sm md:text-base flex items-center justify-center gap-2">
            <span>03.</span> Apa Selanjutnya?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-ocean-sand mb-6">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-400 leading-relaxed mb-12 text-sm md:text-base">
            Meskipun saat ini saya fokus pada peran saya sebagai Software &
            Network Engineer, kotak masuk saya selalu terbuka. Baik Anda
            memiliki pertanyaan, tawaran menarik, atau sekadar ingin menyapa,
            saya akan berusaha sebaik mungkin untuk membalasnya!
          </p>

          <motion.a
            href="mailto:codewithanshari@gmail.com" // Ganti dengan email asli Anda nanti
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(100,255,218,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 border border-ocean-aqua text-ocean-aqua rounded hover:bg-ocean-aqua/10 transition-all duration-300 font-mono text-sm tracking-wider"
          >
            Kirim Pesan dalam Botol
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Bawah Laut */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24 text-center"
      >
        <a
          href="https://github.com/cwa16" // Ganti dengan link GitHub Anda
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-ocean-aqua transition-colors font-mono text-xs flex flex-col items-center gap-2"
        >
          <span>Dibuat dengan Next.js & Tailwind CSS v4</span>
          <span>
            © {new Date().getFullYear()} Anshari. Terinspirasi dari kedalaman
            laut.
          </span>
        </a>
      </motion.footer>
    </section>
  );
}
