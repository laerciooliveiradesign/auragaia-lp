"use client";

import { motion } from "motion/react";

const PILLARS = [
  { n: "01", label: "Envolvimento real", desc: "Artistas, terapeutas e comunidade construindo juntos" },
  { n: "02", label: "Desenvolvimento por etapas", desc: "Cada edicao amadurece a partir da anterior" },
  { n: "03", label: "Construcao verdadeira", desc: "Sem roteiro artificial — so o que faz sentido permanece" },
];

export function Construcao() {
  return (
    <section className="relative py-36 md:py-48 bg-[var(--color-violeta-deep)] overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      <div className="relative container mx-auto px-8 md:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">VII</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-creme)]/70">
            Construcao do projeto
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-[var(--color-creme)] max-w-5xl mb-20"
        >
          Um festival sendo{" "}
          <span className="italic text-gradient-gold">construido com intencao.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display italic text-5xl text-[var(--color-dourado)]">{p.n}</span>
                <div className="h-[1px] flex-1 bg-[var(--color-dourado)]/30" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-creme)] leading-tight mb-4">
                {p.label}
              </h3>
              <p className="font-sans text-base text-[var(--color-creme)]/70 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
