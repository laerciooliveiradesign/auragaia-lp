"use client";

import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";

const GATILHOS = ["Capacidade controlada", "Crescimento por lotes", "Experiencia imersiva"];

export function Fechamento() {
  return (
    <section id="comprar" className="relative py-40 md:py-56 bg-[var(--color-violeta-deep)] overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-95" />
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      <div className="relative container mx-auto px-8 md:px-16 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">IX</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-creme)]/70">
            Fechamento
          </span>
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-[var(--color-creme)] mb-8"
        >
          As vagas sao limitadas.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display italic text-3xl md:text-4xl text-gradient-gold max-w-3xl mx-auto mb-16"
        >
          E essa experiencia nao e para multidoes.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {GATILHOS.map((g, i) => (
            <motion.span
              key={g}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--color-dourado)]/30 text-[var(--color-creme)]/80 font-sans text-xs tracking-[0.28em] uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-dourado)]" />
              {g}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9 }}
          className="inline-block"
        >
          <CtaButton href="#comprar">Garantir minha vaga agora</CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
