"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The charter's binding edge — a slim vertical strip fixed along the left
 * side of the viewport. A ribbon fill unrolls downward as the page scrolls,
 * mirroring a physical scroll being read top to bottom. Purely decorative,
 * hidden on small screens so it never competes with content.
 */
export function ScrollSpine() {
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          fillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          }
        );
      });

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-[var(--charter-spine-width)] bg-border/70 md:block"
    >
      <div
        ref={fillRef}
        className="h-full w-full origin-top bg-wax"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
