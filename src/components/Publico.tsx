"use client";

import { motion } from "motion/react";
import { CheckIcon } from "./Glyphs";
import { AuraIcon } from "./AuraIcon";

const ITEMS = [
  "Pessoas que querem viver algo alem do comum",
  "Quem valoriza natureza, presenca e conexao real",
  "Quem sente que desacelerar tambem e evolucao",
  "Familias que buscam experiencias com significado",
];

export function Publico() {
  return (
    <section className="relative py-36 md:py-48 overflow-hidden bg-[var(--color-violeta-deep)]">
      <div className="absolute inset-0 bg-aurora opacity-90" />
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      {/* ícone fantasma no fundo direito */}
      <div className="absolute -right-40 top-20 opacity-[0.06] pointer-events-none">
        <AuraIcon size={800} animated={false} />
      </div>

      <div className="relative container mx-auto px-8 md:px-16 max-w-6xl grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
            <span className="font-display italic text-xl text-[var(--color-dourado)]">IV</span>
            <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-creme)]/70">
              Para quem faz sentido
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-[var(--color-creme)]"
          >
            Pensado para quem busca{" "}
            <span className="italic text-gradient-gold">mais que entretenimento.</span>
          </motion.h2>
        </div>

        <ul className="space-y-7 lg:pt-8">
          {ITEMS.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-6 border-b border-[var(--color-dourado)]/15 pb-7"
            >
              <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-[var(--color-dourado)]/40 flex items-center justify-center transition-colors duration-500 group-hover:bg-[var(--color-dourado)] group-hover:border-[var(--color-dourado)]">
                <CheckIcon className="h-5 w-5 text-[var(--color-dourado)] transition-colors duration-500 group-hover:text-[var(--color-violeta-deep)]" />
              </div>
              <p className="font-display text-2xl md:text-[28px] text-[var(--color-creme)] leading-snug">
                {t}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
