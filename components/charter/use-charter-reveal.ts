"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SELECTOR = "[data-charter-seal], [data-charter-ink], [data-charter-fade]";

/**
 * Shared chapter-reveal choreography for the parchment-charter layout:
 * headings unroll like ink writing itself (clip-path), wax seals stamp in
 * with a slight overshoot, and body copy fades up softly. Respects
 * prefers-reduced-motion.
 *
 * Safety net: scroll-triggered reveals set an inline "hidden" starting style
 * the instant they mount, which relies on ScrollTrigger firing to reveal the
 * content again. If that never happens for any reason (layout shift from
 * late-loading webfonts, a stalled ticker, etc.) the content would stay
 * permanently invisible. A short fallback timer force-clears any leftover
 * hidden inline styles so real content is never stuck at opacity/clip 0.
 */
export function useCharterReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-charter-seal]", {
          scale: 0,
          rotate: -30,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });

        gsap.from("[data-charter-ink]", {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });

        gsap.from("[data-charter-fade]", {
          autoAlpha: 0,
          y: 22,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    });

    // Fallback: force-clear any leftover hidden inline styles so content can
    // never get permanently stuck invisible.
    const unstick = window.setTimeout(() => {
      if (!container) return;
      gsap.set(container.querySelectorAll(SELECTOR), { clearProps: "all" });
    }, 2500);

    return () => {
      window.clearTimeout(unstick);
      mm.revert();
    };
  }, [containerRef]);
}
