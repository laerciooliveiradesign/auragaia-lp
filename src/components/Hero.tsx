"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AuraIcon } from "./AuraIcon";
import { CtaButton } from "./CtaButton";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const iconY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const iconScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-aurora"
    >
      {/* textura de ruído */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />

      {/* partículas flutuantes */}
      <Particles count={28} />

      {/* topo: marca monocromática + link utilitário */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-10 bg-[var(--color-dourado)]" />
          <span className="font-sans text-xs tracking-[0.35em] text-[var(--color-dourado)] uppercase">
            Aura Gaia
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.28em] uppercase text-[var(--color-creme)]/70">
          <a href="#experiencias" className="hover:text-[var(--color-dourado)] transition-colors">
            Experiencias
          </a>
          <a href="#ingressos" className="hover:text-[var(--color-dourado)] transition-colors">
            Ingressos
          </a>
          <a href="#faq" className="hover:text-[var(--color-dourado)] transition-colors">
            FAQ
          </a>
        </nav>
        <span className="font-display italic text-sm text-[var(--color-dourado-claro)]">
          MMXXVI
        </span>
      </header>

      {/* Grid principal */}
      <div className="relative z-10 container mx-auto grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center px-8 md:px-16 pt-16 pb-24">
        {/* TEXTO ESQUERDA */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-center max-w-2xl"
        >
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-14 bg-[var(--color-dourado)]" />
            <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-dourado)]">
              Festival imersivo  ·  15 . 16 . 17  nov
            </span>
          </motion.div>

          {/* Título display */}
          <h1 className="font-display text-[54px] md:text-[78px] leading-[0.98] tracking-[-0.02em] text-[var(--color-creme)] mb-10">
            <RevealLine delay={0.3}>Um festival</RevealLine>
            <RevealLine delay={0.5}>que voce nao vai</RevealLine>
            <RevealLine delay={0.7}>
              <span className="font-display italic text-gradient-gold">apenas assistir.</span>
            </RevealLine>
            <RevealLine delay={0.95}>
              <span className="font-display italic text-[var(--color-dourado-claro)]">Voce vai viver.</span>
            </RevealLine>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-sans text-base md:text-lg text-[var(--color-creme)]/80 leading-relaxed max-w-xl mb-10"
          >
            Musica, natureza e experiencias que reorganizam o corpo, a mente e as
            conexoes humanas.
          </motion.p>

          {/* CTA + urgência */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <CtaButton href="#ingressos">GARANTIR INGRESSO AGORA</CtaButton>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-creme)]/60">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-turquesa)] animate-pulse" />
              Lote 1 disponivel
            </div>
          </motion.div>
        </motion.div>

        {/* ÍCONE DIREITA */}
        <motion.div
          style={{ y: iconY, scale: iconScale }}
          className="relative flex items-center justify-center"
        >
          {/* halos concêntricos */}
          <motion.div
            style={{ scale: haloScale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute h-[560px] w-[560px] rounded-full border border-[var(--color-dourado)]/20 animate-halo" />
            <div className="absolute h-[680px] w-[680px] rounded-full border border-[var(--color-dourado)]/10" />
            <div className="absolute h-[820px] w-[820px] rounded-full border border-[var(--color-dourado)]/5" />
          </motion.div>

          {/* glow principal */}
          <div className="absolute h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[var(--color-magenta)]/30 via-[var(--color-turquesa)]/20 to-[var(--color-ambar)]/25 blur-3xl animate-halo" />

          {/* icone */}
          <div className="relative z-10 animate-float">
            <AuraIcon size={560} className="animate-shimmer drop-shadow-[0_10px_60px_rgba(186,52,103,0.35)]" />
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--color-creme)]/50">
          role para descobrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-[var(--color-dourado)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
