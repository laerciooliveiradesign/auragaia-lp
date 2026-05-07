"use client";

import { motion } from "motion/react";

const LINES = [
  "A musica conduz o ambiente.",
  "O corpo desacelera naturalmente.",
  "As conexoes se tornam mais reais.",
  "O excesso da lugar a presenca.",
];

export function Sensorial() {
  return (
    <section className="relative py-36 md:py-48 bg-[var(--color-violeta-deep)] overflow-hidden">
      {/* halo atmosférico sutil */}
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      <div className="relative container mx-auto px-8 md:px-16 max-w-5xl">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">II</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-creme)]/70">
            Essencia
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.02em] text-[var(--color-creme)] max-w-4xl mb-20"
        >
          Existe algo que voce so{" "}
          <span className="font-display italic text-gradient-gold">
            entende quando vive.
          </span>
        </motion.h2>

        {/* Linhas poéticas */}
        <div className="space-y-6 md:space-y-8 max-w-3xl">
          {LINES.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6"
            >
              <span className="font-sans text-xs tracking-[0.3em] text-[var(--color-dourado)] tabular-nums">
                0{i + 1}
              </span>
              <div className="h-[1px] flex-1 max-w-[60px] bg-[var(--color-dourado)]/40" />
              <p className="font-display italic text-2xl md:text-3xl text-[var(--color-creme)]/90">
                {line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 max-w-2xl"
        >
          <div className="h-px w-20 bg-[var(--color-dourado)] mb-8" />
          <p className="font-display text-2xl md:text-3xl leading-tight text-[var(--color-creme)]">
            Aqui, voce nao precisa fugir da vida.{" "}
            <span className="italic text-[var(--color-dourado-claro)]">
              Voce volta para ela com mais sentido.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
