"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PlusIcon } from "./Glyphs";

const ITEMS = [
  {
    q: "Preciso levar barraca?",
    a: "Depende da hospedagem escolhida. Quem optar por camping leva a propria barraca; quartos coletivos ja vem equipados.",
  },
  {
    q: "Posso escolher hospedagem depois?",
    a: "Sim. O ingresso base garante sua entrada; a hospedagem pode ser adicionada ate 30 dias antes, sujeita a disponibilidade.",
  },
  {
    q: "Tem alimentacao inclusa?",
    a: "Nao. Food trucks estarao disponiveis no local com opcoes variadas — voce escolhe livremente o que consumir.",
  },
  {
    q: "Pode levar crianca?",
    a: "Sim. O ambiente foi pensado para familias, com espaco seguro e atividades integradas.",
  },
  {
    q: "Tem bebida alcoolica?",
    a: "Nao. O Aura Gaia e um festival sem alcool — privilegiamos presenca, clareza e conexao real.",
  },
  {
    q: "Posso comprar depois?",
    a: "Pode, mas o valor sobe. Lotes viram automaticamente ao atingir o limite. Quanto antes, menos voce paga.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-36 md:py-48 bg-[var(--color-creme)] text-[var(--color-violeta)] overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">X</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-violeta)]/70">
            Perguntas
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] mb-20"
        >
          Duvidas{" "}
          <span className="italic text-gradient-gold">frequentes.</span>
        </motion.h2>

        <div className="divide-y divide-[var(--color-dourado)]/25">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-7 text-left group"
                >
                  <span className="font-sans text-xs tracking-[0.3em] text-[var(--color-dourado)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-display text-2xl md:text-3xl leading-tight text-[var(--color-violeta)] group-hover:text-[var(--color-dourado)] transition-colors">
                    {it.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-dourado)]/50 text-[var(--color-dourado)]"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pl-[calc(1.5rem+1.8rem)] pr-4 pb-8 font-sans text-base md:text-lg leading-relaxed text-[var(--color-violeta)]/75 max-w-2xl">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
