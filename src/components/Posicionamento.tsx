"use client";

import { motion } from "motion/react";
import { AuraIcon } from "./AuraIcon";

export function Posicionamento() {
  return (
    <section className="relative py-40 md:py-56 bg-[var(--color-creme)] text-[var(--color-violeta)] overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-25" style={{ mixBlendMode: "multiply" }} />

      {/* ícone gigante sutil atrás */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <AuraIcon size={900} animated={false} />
      </div>

      <div className="relative container mx-auto px-8 md:px-16 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">VIII</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-violeta)]/70">
            Posicionamento
          </span>
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.02em] mb-10"
        >
          O <span className="italic text-gradient-gold">Aura Gaia</span> nao e so um evento.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display italic text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto text-[var(--color-violeta)]/80"
        >
          E uma experiencia cultural e humana que conecta musica, natureza e
          consciencia — e continua dentro de voce depois que termina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 h-px w-24 bg-[var(--color-dourado)] mx-auto origin-center"
        />
      </div>
    </section>
  );
}
