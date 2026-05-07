"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, MouseEvent } from "react";

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export function CtaButton({ href, onClick, children, variant = "primary" }: CtaButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.18);
    y.set((e.clientY - cy) * 0.28);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const primaryClasses = `
    group relative inline-flex items-center justify-center gap-3 overflow-hidden
    px-8 py-5 rounded-full
    font-sans text-[11px] tracking-[0.32em] uppercase font-medium
    text-[var(--color-violeta-deep)] bg-[var(--color-creme)]
    transition-all duration-500
    hover:text-[var(--color-creme)]
    shadow-[0_20px_60px_-20px_rgba(196,136,61,0.55)]
  `;

  const ghostClasses = `
    group relative inline-flex items-center gap-3
    px-8 py-4 rounded-full border border-[var(--color-dourado)]/50
    font-sans text-[11px] tracking-[0.32em] uppercase font-medium
    text-[var(--color-creme)] hover:border-[var(--color-dourado)]
    transition-all duration-400
  `;

  const content = (
    <motion.span
      style={{ x: sx, y: sy }}
      className="relative z-10 flex items-center gap-3"
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  );

  if (variant === "primary") {
    const Tag = href ? "a" : "button";
    return (
      <Tag
        ref={ref as never}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className={primaryClasses}
      >
        {/* preenchimento gradient no hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-magenta)] via-[var(--color-dourado)] to-[var(--color-turquesa)] opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />
        {content}
      </Tag>
    );
  }

  const Tag = href ? "a" : "button";
  return (
    <Tag
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={ghostClasses}
    >
      {content}
    </Tag>
  );
}
