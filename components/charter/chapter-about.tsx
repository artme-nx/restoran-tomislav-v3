"use client";

import { useRef } from "react";
import { WaxSeal } from "@/components/charter/wax-seal";
import { useCharterReveal } from "@/components/charter/use-charter-reveal";

export function ChapterAbout() {
  const ref = useRef<HTMLElement | null>(null);
  useCharterReveal(ref);

  return (
    <section
      ref={ref}
      id="o-nama"
      className="relative mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32 md:pl-20"
    >
      <div className="flex items-start gap-5">
        <span data-charter-seal className="shrink-0">
          <WaxSeal size={56} />
        </span>
        <div className="min-w-0">
          <p className="text-label text-muted-foreground">Poglavlje I</p>
          <h2
            data-charter-ink
            className="font-display mt-2 text-4xl leading-[1.05] tracking-[var(--tracking-display)] text-foreground md:text-6xl"
          >
            O restoranu
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div data-charter-fade className="space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            Restoran Tomislav nalazi se u središtu Vodica, korak od žive gradske
            jezgre — mjesto gdje se šetnja lako pretvori u dugu večeru.
          </p>
          <p>
            Jelovnik spaja dalmatinsku i mediteransku kuhinju: pizze, svježa riba
            i plodovi mora, lignje, tjestenine i jela s roštilja dijele isti stol.
          </p>
        </div>

        <div
          data-charter-fade
          className="relative border-l-2 border-wax/60 bg-parchment-card px-6 py-5 text-base italic leading-relaxed text-muted-foreground"
        >
          <span aria-hidden className="font-display absolute -top-3 left-4 bg-background px-2 text-3xl text-wax">
            “
          </span>
          Opuštena atmosfera i ljubazna posluga, u samom srcu grada.
        </div>
      </div>
    </section>
  );
}
