"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Software Engineering",
    icon: (
      <svg
        className="w-6 h-6 text-ocean-aqua"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: [
      "Laravel",
      "Next.js",
      "Nest.js",
      "AdonisJS",
      "Flutter",
      "JavaScript",
      "Docker",
      "MySQL",
    ],
  },
  {
    title: "Network & Infrastructure",
    icon: (
      <svg
        className="w-6 h-6 text-ocean-aqua"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    skills: [
      "MikroTik",
      "FortiGate",
      "Network Security",
      "Routing & Switching",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-ocean-base relative overflow-hidden"
    >
      {/* Ornamen ombak SVG sebagai pembatas bagian atas (Opsional) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-ocean-deep"
          ></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-sand mb-2 flex items-center">
            <span className="text-ocean-aqua font-mono text-xl mr-3">02.</span>
            Arus Keahlian
          </h2>
          <div className="w-full h-[1px] bg-ocean-light mb-8 mt-4 relative">
            <div className="absolute left-0 top-0 h-full w-32 bg-ocean-aqua opacity-50"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bagian Kiri: Pengalaman / Karir */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl font-bold text-ocean-sand mb-6">
              Perjalanan Menyelam
            </h3>
            <div className="border-l-2 border-ocean-light pl-6 relative">
              <div className="absolute w-4 h-4 rounded-full bg-ocean-aqua -left-[9px] top-0 shadow-[0_0_10px_rgba(100,255,218,0.5)]"></div>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-xl font-bold text-ocean-sand">
                  IT Assistant Manager
                </h4>
              </div>
              <p className="text-ocean-aqua font-mono text-sm mb-4">
                6+ Tahun Pengalaman
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Memadukan keahlian pengembangan perangkat lunak dan
                infrastruktur jaringan. Berpengalaman merancang arsitektur
                aplikasi dari awal hingga *deployment*, sekaligus memastikan
                jaringan perusahaan beroperasi dengan optimal, aman, dan
                *scalable*.
              </p>
            </div>
          </motion.div>

          {/* Bagian Kanan: Grid Skills */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-ocean-deep/50 p-6 rounded-lg border border-ocean-light/50 hover:border-ocean-aqua/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-bold text-ocean-sand">
                    {category.title}
                  </h4>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.li
                      key={sIdx}
                      whileHover={{ x: 5, color: "#64ffda" }}
                      className="text-slate-400 text-sm flex items-center gap-2 cursor-default transition-colors"
                    >
                      <span className="text-ocean-aqua text-xs">▹</span> {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
