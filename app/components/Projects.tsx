"use client";

import { motion } from "framer-motion";

// Contoh data proyek - Anda bisa mengubahnya sesuai dengan detail aslinya nanti
const projectsData = [
  {
    id: 1,
    title: "SaaS Point of Sales (POS)",
    description:
      "Aplikasi kasir berbasis cloud untuk manajemen transaksi dan inventaris secara real-time yang scalable.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "Offline-First P2P File Transfer",
    description:
      "Progressive Web App (PWA) untuk transfer file peer-to-peer yang dapat berfungsi secara stabil meskipun tanpa koneksi internet.",
    tech: ["React", "WebRTC", "Service Workers"],
    link: "#",
  },
  {
    id: 3,
    title: "HR Competency Management",
    description:
      "Sistem komprehensif untuk mengelola data dan kompetensi karyawan, dilengkapi dengan modul CRUD dan dashboard.",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "#",
  },
  {
    id: 4,
    title: "Rubber Processing Traceability",
    description:
      "Sistem pelacakan (traceability) untuk memantau alur pemrosesan karet dari petani hingga menjadi produk akhir.",
    tech: ["Nest.js", "PostgreSQL", "Docker"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-sand mb-2 flex items-center">
            <span className="text-ocean-aqua font-mono text-xl mr-3">01.</span>
            Karya di Kedalaman
          </h2>
          <div className="w-full h-[1px] bg-ocean-light mb-12 mt-4 relative">
            <div className="absolute left-0 top-0 h-full w-24 bg-ocean-aqua opacity-50"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }} // Efek mengapung saat di-hover
              className="bg-ocean-base border border-ocean-light p-6 rounded-lg hover:border-ocean-aqua/50 transition-colors group relative overflow-hidden"
            >
              {/* Efek pendaran cahaya (glow) samar di latar belakang kartu */}
              <div className="absolute -inset-4 bg-ocean-aqua/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <svg
                    className="w-10 h-10 text-ocean-aqua"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                  <a
                    href={project.link}
                    className="text-slate-400 hover:text-ocean-aqua transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-ocean-sand mb-3 group-hover:text-ocean-aqua transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="text-ocean-aqua font-mono text-xs px-2 py-1 bg-ocean-deep/50 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
