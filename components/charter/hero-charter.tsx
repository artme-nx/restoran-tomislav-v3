"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WaxSeal } from "@/components/charter/wax-seal";

const TITLE_LINES = ["Restoran", "Tomislav"];

/**
 * Opening chapter of the charter: the wax seal "stamps" down, then cracks
 * open, then the parchment heading unrolls line by line (clip-path, like
 * ink being written) — distinct from a conventional hero banner.
 */
export function HeroCharter() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sealRef = useRef<HTMLDivElement | null>(null);
  const crackRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        sealRef.current,
        { scale: 1.4, rotate: -14, autoAlpha: 0 },
        { scale: 1, rotate: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.6)" }
      )
        .to(sealRef.current, { scale: 1.06, duration: 0.12, ease: "power1.out" })
        .to(sealRef.current, { scale: 1, duration: 0.18, ease: "power2.in" })
        .fromTo(
          crackRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.15 },
          "-=0.1"
        )
        .to(crackRef.current, { autoAlpha: 0, duration: 0.6, ease: "power1.out" }, "+=0.05")
        .fromTo(
          "[data-hero-line]",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power3.out", stagger: 0.15 },
          "-=0.45"
        )
        .fromTo(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.08 },
          "-=0.35"
        );
    }, sectionRef);

    // Safety net: if the intro timeline is ever interrupted, force-clear any
    // leftover hidden inline styles so the hero content can never get stuck
    // invisible.
    const unstick = window.setTimeout(() => {
      if (!sectionRef.current) return;
      gsap.set(sectionRef.current.querySelectorAll("[data-hero-line], [data-hero-fade]"), {
        clearProps: "all",
      });
    }, 2500);

    return () => {
      window.clearTimeout(unstick);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pocetak"
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-parchment-texture px-4 pt-28 pb-20 text-center md:px-8"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[image:var(--charter-vignette)]" />

      <div ref={sealRef} className="relative">
        <WaxSeal size={112} />
        <svg
          ref={crackRef}
          aria-hidden
          viewBox="0 0 112 112"
          className="absolute inset-0"
        >
          <path d="M20 40 L48 52 L38 60 L60 68 L50 78" stroke="var(--foreground)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M92 44 L66 54 L78 62 L58 70" stroke="var(--foreground)" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      <p data-hero-fade className="text-label mt-8 text-muted-foreground">
        Vodice · Dalmacija
      </p>

      <h1 className="font-display mt-3 text-[length:clamp(3.2rem,13vw,8rem)] leading-[0.95] font-semibold tracking-[var(--tracking-display)] text-foreground">
        {TITLE_LINES.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span data-hero-line className="inline-block">
              {line}
            </span>
          </span>
        ))}
      </h1>

      <p
        data-hero-fade
        className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
      >
        Dalmatinski stol u srcu Vodica — pizze, svježa riba i plodovi mora, tjestenine
        i jela s roštilja, na jednom jelovniku.
      </p>

      <div data-hero-fade className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="tel:+385984923358"
          className="text-label rounded-sm bg-primary px-7 py-3.5 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)]"
        >
          Pozovi restoran
        </a>
        <a
          href="#jelovnik"
          className="text-label rounded-sm border border-[var(--button-ghost-border)] px-7 py-3.5 text-foreground transition-colors duration-(--duration-micro) hover:border-[var(--button-ghost-hover-border)] hover:text-adriatic"
        >
          Pogledaj jelovnik
        </a>
      </div>

      <div
        data-hero-fade
        className="text-label mt-14 flex w-full max-w-3xl flex-col items-center justify-between gap-2 border-t border-border/70 pt-5 text-muted-foreground sm:flex-row"
      >
        <span>Ulica Artina 3, Vodice</span>
        <span>Pizza · More · Roštilj</span>
        <span>+385 98 492 358</span>
      </div>
    </section>
  );
}
