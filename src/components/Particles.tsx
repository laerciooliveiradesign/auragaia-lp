"use client";

import { useEffect, useState } from "react";

interface ParticlesProps {
  count?: number;
}

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  dx: number;
  dy: number;
  dur: number;
  delay: number;
};

const COLORS = ["#FFBF31", "#BA3467", "#2DA997", "#F6F1E6", "#E2B87A"];

export function Particles({ count = 24 }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      dx: (Math.random() - 0.5) * 80,
      dy: -(Math.random() * 220 + 120),
      dur: Math.random() * 10 + 8,
      delay: Math.random() * 6,
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div aria-hidden className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            ["--dx" as string]: `${p.dx}px`,
            ["--dy" as string]: `${p.dy}px`,
            ["--dur" as string]: `${p.dur}s`,
            ["--delay" as string]: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
