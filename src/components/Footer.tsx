"use client";

import { motion } from "motion/react";
import { AuraIcon } from "./AuraIcon";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-violeta-deep)] text-[var(--color-creme)] overflow-hidden border-t border-[var(--color-dourado)]/15">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      <div className="relative container mx-auto px-8 md:px-16 py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <AuraIcon size={88} animated={false} variant="aurora" />
            <h3 className="font-display text-3xl mt-6 mb-3 text-[var(--color-creme)]">
              Aura Gaia <span className="italic text-[var(--color-dourado-claro)]">Festival</span>
            </h3>
            <p className="font-display italic text-[var(--color-creme)]/60 max-w-sm">
              Onde a arte encontra a floresta. Edicao MMXXVI.
            </p>
          </motion.div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-dourado)] mb-6">
              Navegacao
            </h4>
            <ul className="space-y-3 font-display text-lg text-[var(--color-creme)]/80">
              <li><a href="#experiencias" className="hover:text-[var(--color-dourado-claro)] transition-colors">Experiencias</a></li>
              <li><a href="#ingressos" className="hover:text-[var(--color-dourado-claro)] transition-colors">Ingressos</a></li>
              <li><a href="#faq" className="hover:text-[var(--color-dourado-claro)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--color-dourado)] mb-6">
              Contato
            </h4>
            <ul className="space-y-3 font-sans text-base text-[var(--color-creme)]/80">
              <li>contato@auragaia.com.br</li>
              <li>@auragaiafestival</li>
              <li>15 . 16 . 17 nov  ·  Parque da Lagoa / BH</li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-dourado)]/40 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[var(--color-creme)]/50">
          <span className="font-sans tracking-[0.28em] uppercase">
            © MMXXVI  ·  AURA GAIA FESTIVAL
          </span>
          <span className="font-display italic">
            Que a aura encontre a sua gaia.
          </span>
        </div>
      </div>
    </footer>
  );
}
