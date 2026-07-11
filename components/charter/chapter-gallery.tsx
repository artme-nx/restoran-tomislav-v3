"use client";

import { useRef } from "react";
import { WaxSeal } from "@/components/charter/wax-seal";
import { useCharterReveal } from "@/components/charter/use-charter-reveal";

const MOOD_PANELS = [
  { label: "Jadransko more", swatch: "linear-gradient(160deg, #1E5C69, #4C8A94)" },
  { label: "Vodička rivijera", swatch: "linear-gradient(160deg, #C7A874, #F3E8D0)" },
  { label: "Dalmatinski kamen", swatch: "linear-gradient(160deg, #8C6B3F, #E3CFA4)" },
  { label: "Večer u gradu", swatch: "linear-gradient(160deg, #A13820, #C25A3D)" },
];

export function ChapterGallery() {
  const ref = useRef<HTMLElement | null>(null);
  useCharterReveal(ref);

  return (
    <section
      ref={ref}
      id="ambijent"
      className="relative mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32 md:pl-20"
    >
      <div className="flex items-start gap-5">
        <span data-charter-seal className="shrink-0">
          <WaxSeal size={56} />
        </span>
        <div className="min-w-0">
          <p className="text-label text-muted-foreground">Poglavlje III</p>
          <h2
            data-charter-ink
            className="font-display mt-2 text-4xl leading-[1.05] tracking-[var(--tracking-display)] text-foreground md:text-6xl"
          >
            Ambijent
          </h2>
        </div>
      </div>

      <p data-charter-fade className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90">
        Vodice su grad sunca, kamena i mora — ton koji nosimo u boje i atmosferu
        restorana, u srcu gradske jezgre.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {MOOD_PANELS.map((panel) => (
          <div key={panel.label} data-charter-fade className="group">
            <div
              className="aspect-[3/4] w-full rounded-sm border border-border/70"
              style={{ backgroundImage: panel.swatch }}
              aria-hidden
            />
            <p className="text-label mt-2 text-muted-foreground">{panel.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
