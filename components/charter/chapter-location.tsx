"use client";

import { useRef } from "react";
import { WaxSeal } from "@/components/charter/wax-seal";
import { useCharterReveal } from "@/components/charter/use-charter-reveal";

export function ChapterLocation() {
  const ref = useRef<HTMLElement | null>(null);
  useCharterReveal(ref);

  return (
    <section
      ref={ref}
      id="lokacija"
      className="relative mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32 md:pl-20"
    >
      <div className="flex items-start gap-5">
        <span data-charter-seal className="shrink-0">
          <WaxSeal size={56} />
        </span>
        <div className="min-w-0">
          <p className="text-label text-muted-foreground">Poglavlje IV</p>
          <h2
            data-charter-ink
            className="font-display mt-2 text-4xl leading-[1.05] tracking-[var(--tracking-display)] text-foreground md:text-6xl"
          >
            Lokacija
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div data-charter-fade className="space-y-4 text-lg leading-relaxed text-foreground/90">
          <p>
            Restoran se nalazi u središtu Vodica, na adresi Ulica Artina 3 —
            lako dostupan pješice iz gradske jezgre.
          </p>
          <address className="text-label not-italic text-muted-foreground">
            Ulica Artina 3, 22211 Vodice, Hrvatska
          </address>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Restoran+Tomislav+Ulica+Artina+3+Vodice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label inline-flex items-center gap-2 border-b border-wax text-wax transition-colors duration-(--duration-micro) hover:text-[var(--button-primary-hover-bg)]"
          >
            Otvori u Google kartama →
          </a>
        </div>

        <div data-charter-fade className="space-y-3 border-t border-border/70 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <p className="text-label text-muted-foreground">Kontakt</p>
          <a href="tel:+385984923358" className="font-display block text-2xl tracking-[var(--tracking-display)] text-foreground hover:text-wax">
            +385 98 492 358
          </a>
          <a href="tel:+38522443118" className="font-display block text-2xl tracking-[var(--tracking-display)] text-foreground hover:text-wax">
            +385 22 443 118
          </a>
        </div>
      </div>
    </section>
  );
}
