"use client";

import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";

const INCLUDES = [
  { title: "Ingresso base", desc: "Acesso aos 2 dias de festival", extra: "Shows + experiencias abertas" },
  { title: "Hospedagem", desc: "Barraca (camping) OU quarto coletivo", extra: "Mais conforto, estrutura compartilhada" },
  { title: "Alimentacao livre", desc: "Food trucks no local", extra: "Escolha livre de consumo (nao incluso)" },
  { title: "Bebidas", desc: "Drinks nao alcoolicos", extra: "Consumo a parte" },
];

const LOTES = [
  { n: "01", label: "Lote 1 — disponivel agora", valor: "menor valor", status: "active" },
  { n: "02", label: "Lote 2 — proximo", valor: "valor maior", status: "soon" },
  { n: "03", label: "Lote 3 — final", valor: "ultimas vagas", status: "soon" },
];

export function Ingressos() {
  return (
    <section id="ingressos" className="relative py-36 md:py-48 bg-[var(--color-creme)] text-[var(--color-violeta)] overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        {/* cabecalho */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[1px] w-12 bg-[var(--color-dourado)]" />
          <span className="font-display italic text-xl text-[var(--color-dourado)]">V</span>
          <span className="font-sans text-[11px] tracking-[0.45em] uppercase text-[var(--color-violeta)]/70">
            Estrutura de ingressos
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-4xl mb-20"
        >
          Escolha como voce quer viver o{" "}
          <span className="italic text-gradient-gold">Aura Gaia.</span>
        </motion.h2>

        {/* o que está incluso — grid de 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {INCLUDES.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="relative pt-8 border-t border-[var(--color-dourado)]/40"
            >
              <span className="absolute -top-3 left-0 font-sans text-[11px] tracking-[0.3em] text-[var(--color-dourado)] bg-[var(--color-creme)] pr-4">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{it.title}</h3>
              <p className="font-sans text-base leading-relaxed text-[var(--color-violeta)]/80 mb-2">
                {it.desc}
              </p>
              <p className="font-sans text-sm text-[var(--color-violeta)]/60">{it.extra}</p>
            </motion.div>
          ))}
        </div>

        {/* Lotes */}
        <div className="relative rounded-3xl bg-[var(--color-violeta-deep)] p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-80" />
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-10 bg-[var(--color-dourado)]" />
              <span className="font-display italic text-base text-[var(--color-dourado)]">VI</span>
              <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-[var(--color-creme)]/60">
                Lotes
              </span>
            </div>

            <h3 className="font-display text-4xl md:text-5xl leading-tight text-[var(--color-creme)] mb-12 max-w-3xl">
              Quanto antes voce entra,{" "}
              <span className="italic text-gradient-gold">menos voce paga.</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-dourado)]/20 mb-12 rounded-xl overflow-hidden">
              {LOTES.map((l, i) => (
                <motion.div
                  key={l.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.9, delay: i * 0.1 }}
                  className={`p-8 ${
                    l.status === "active"
                      ? "bg-gradient-to-br from-[var(--color-violeta)] to-[var(--color-violeta-deep)]"
                      : "bg-[var(--color-violeta-deep)]/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display italic text-3xl text-[var(--color-dourado)]">{l.n}</span>
                    {l.status === "active" && (
                      <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[var(--color-turquesa)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-turquesa)] animate-pulse" />
                        ativo
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-2xl leading-tight text-[var(--color-creme)] mb-3">
                    {l.label}
                  </h4>
                  <p className="font-sans text-sm text-[var(--color-creme)]/70 uppercase tracking-wider">
                    {l.valor}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <p className="font-display italic text-base text-[var(--color-creme)]/70 max-w-md">
                A virada de lote acontece automaticamente ao atingir o limite.
              </p>
              <CtaButton href="#comprar">Garantir no lote atual</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
