"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/clouds-of-paint-underwater.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />

      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-[glow-pulse_4s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/8 blur-[100px] animate-[glow-pulse_6s_ease-in-out_infinite_1s] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl space-y-8 text-center">
          <Reveal delay={0.2}>
            <p className="inline-flex items-center gap-3 text-accent text-[11px] tracking-[0.3em] uppercase">
              <span className="w-8 h-px bg-accent" />
              Beach Collection 2026
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
              Natural Soap.
              <br />
              <span
                className="italic bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent text-glow-accent"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Nothing Harsh.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="text-base md:text-lg text-white/70 max-w-md mx-auto leading-relaxed">
              Handmade in small batches with ingredients you can trust.
              Full INCI transparency. Nothing synthetic.
            </p>
          </Reveal>

          <Reveal delay={0.8} className="flex flex-wrap items-center justify-center gap-5 pt-2">
            <Link
              href="/shop"
              className="group relative px-10 py-4 bg-accent text-background text-sm tracking-[0.15em] uppercase rounded-lg font-medium transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_0_30px_-4px_rgba(199,154,86,0.5)]"
            >
              <span className="relative z-10">Shop All</span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-10 py-4 border border-white/40 text-white text-sm tracking-[0.15em] uppercase font-medium rounded-lg transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent hover:shadow-[0_0_30px_-4px_rgba(199,154,86,0.35)]"
            >
              Our Story
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
