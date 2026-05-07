"use client";

import { motion } from "motion/react";
import { MusicIcon, LeafIcon, FlameIcon, FamilyIcon, PlateIcon, DrinkIcon } from "./Glyphs";

const PILLARS = [
  {
    icon: MusicIcon,
    title: "Musica ao vivo + DJs",
    lines: ["4 a 5 apresentacoes por dia", "Curadoria focada em conexao e qualidade"],
  },
  {
    icon: LeafIcon,
    title: "Experiencias e vivencias",
    lines: ["Praticas de bem-estar", "Atividades sensoriais e artisticas", "Espacos de reconexao"],
  },
  {
    icon: FlameIcon,
    title: "Ambiente consciente",
    lines: ["Evento sem alcool", "Mais presenca, mais clareza, mais conexao"],
  },
  {
    icon: FamilyIcon,
    title: "Ambiente para familias",
    lines: ["Criancas bem-vindas", "Espaco seguro e integrado"],
  },
  {
    icon: PlateIcon,
    title: "Alimentacao livre",
    lines: ["Food trucks disponiveis", "Escolha livre de consumo"],
  },
  {
    icon: DrinkIcon,
    title: "Bebidas",
    lines: ["Drinks nao alcoolicos", "Kombuchas, sucos, elixirs"],
  },
];

export function Experiencias() {
  return (
    <section id="experiencias" className="relative py-36 md:py-48 bg-[var(--color-creme)] text-[var(--color-violeta)] overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" style={{ mixBlendMode: "multiply" }} />

      <div className="relative container mx-auto px-8 md:px-16 max-w-7xl">
        {/* cabecalho editorial */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">III</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-violeta)]/70">
            O que voce vai encontrar
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-4xl mb-20"
        >
          Uma experiencia construida para{" "}
          <span className="italic text-gradient-gold">te atravessar</span>{" "}
          — em varios niveis.
        </motion.h2>

        {/* grid de pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative mb-8 h-20 w-20 flex items-center justify-center">
                  {/* halo gradient no hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-turquesa)]/0 via-[var(--color-magenta)]/0 to-[var(--color-ambar)]/0 blur-xl transition-all duration-700 group-hover:from-[var(--color-turquesa)]/30 group-hover:via-[var(--color-magenta)]/30 group-hover:to-[var(--color-ambar)]/30" />
                  <Icon className="relative z-10 h-14 w-14 text-[var(--color-violeta)] transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-sans text-[11px] tracking-[0.35em] text-[var(--color-dourado)] tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-[var(--color-dourado)]/30" />
                </div>

                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-5 text-[var(--color-violeta)]">
                  {p.title}
                </h3>

                <ul className="space-y-2 font-sans text-base text-[var(--color-violeta)]/70">
                  {p.lines.map((l) => (
                    <li key={l}>· {l}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
