"use client";

// Glyphs lineares — estilo hairline editorial — desenhados pra casar com a marca

type Props = { className?: string };

export const MusicIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 34V10l20-4v24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="14" cy="34" rx="4" ry="3" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="34" cy="30" rx="4" ry="3" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="24" cy="4" r="1" fill="currentColor" />
    <circle cx="44" cy="22" r="1" fill="currentColor" />
  </svg>
);

export const LeafIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8 40c0-18 12-32 32-32 0 18-12 32-32 32z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 40l24-24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M18 24c1.5 2 3 3.2 5.5 4M22 18c1.5 2 3 3.2 5.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const FlameIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M24 4c0 8-10 10-10 20a10 10 0 0020 0c0-8-4-12-4-16 0 0-3 2-6 0z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M20 32a4 4 0 008 0c0-3-2-4-2-7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const FamilyIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="34" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="24" cy="28" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 40c0-5 4-8 8-8s8 3 8 8M26 40c0-5 4-8 8-8s8 3 8 8M19 42c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const PlateIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <path d="M24 8v3M24 37v3M8 24h3M37 24h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M20 20l8 8M28 20l-8 8" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

export const DrinkIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 10h28l-3 22a4 4 0 01-4 3.5H17a4 4 0 01-4-3.5L10 10z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M14 16c4 2 8-2 12 0s6 0 8-2" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
    <path d="M24 36v6M18 42h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const CheckIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M7 12l3.5 3.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlusIcon = ({ className = "" }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
