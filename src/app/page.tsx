import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* aurora background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(45,169,151,.22), transparent 60%)," +
            "radial-gradient(ellipse 50% 35% at 80% 25%, rgba(186,52,103,.26), transparent 60%)," +
            "radial-gradient(ellipse 55% 40% at 60% 85%, rgba(255,191,49,.16), transparent 60%)," +
            "linear-gradient(180deg, var(--color-violeta-deep) 0%, var(--color-violeta) 100%)",
        }}
      />
      {/* subtle noise */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
      {/* halos concêntricos */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1]"
        style={{
          width: "min(74vmin, 840px)",
          aspectRatio: 1,
          border: "1px solid rgba(196,136,61,.1)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1]"
        style={{
          width: "min(62vmin, 700px)",
          aspectRatio: 1,
          border: "1px solid rgba(196,136,61,.18)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1] animate-[halo-pulse_6s_var(--ease-soft)_infinite]"
        style={{
          width: "min(50vmin, 560px)",
          aspectRatio: 1,
          border: "1px solid rgba(196,136,61,.3)",
        }}
      />
      {/* halo glow central */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1] animate-[halo-pulse_10s_var(--ease-soft)_infinite]"
        style={{
          width: "min(72vmin, 820px)",
          aspectRatio: 1,
          background:
            "radial-gradient(circle at 50% 50%, rgba(186,52,103,.28), rgba(45,169,151,.18) 45%, rgba(255,191,49,.14) 65%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* conteúdo central */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <Image
          src="/brand/marca-vertical-oficial-positivo.svg"
          alt="Aura Gaia Festival"
          width={380}
          height={460}
          priority
          className="w-[min(72vw,360px)] h-auto drop-shadow-[0_30px_80px_rgba(186,52,103,0.35)]"
        />

        <div
          className="mt-10 mx-auto h-px w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-dourado-claro), transparent)",
          }}
        />

        <p
          className="mt-7 font-[var(--font-display)] italic text-[var(--color-dourado-claro)] tracking-[.42em] uppercase"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(13px, 1.6vw, 18px)",
            fontWeight: 500,
          }}
        >
          em breve
        </p>
      </div>

      <style>{`
        @keyframes halo-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .75; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
