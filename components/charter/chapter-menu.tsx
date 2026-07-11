"use client";

import { useRef } from "react";
import { WaxSeal } from "@/components/charter/wax-seal";
import { useCharterReveal } from "@/components/charter/use-charter-reveal";

const ARTICLES = [
  {
    no: "Članak I",
    title: "Pizze",
    text: "Pizze pripremljene po narudžbi, klasične i s dodacima po izboru.",
  },
  {
    no: "Članak II",
    title: "More i plodovi mora",
    text: "Svježa riba, lignje i drugi plodovi mora, po dnevnoj ponudi.",
  },
  {
    no: "Članak III",
    title: "S roštilja",
    text: "Meso s roštilja i steakovi, uz prilog po izboru.",
  },
  {
    no: "Članak IV",
    title: "Tjestenine i prilozi",
    text: "Tjestenine, salate i topli prilozi uz glavno jelo.",
  },
];

export function ChapterMenu() {
  const ref = useRef<HTMLElement | null>(null);
  useCharterReveal(ref);

  return (
    <section
      ref={ref}
      id="jelovnik"
      className="relative mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32 md:pl-20"
    >
      <div className="flex items-start gap-5">
        <span data-charter-seal className="shrink-0">
          <WaxSeal size={56} />
        </span>
        <div className="min-w-0">
          <p className="text-label text-muted-foreground">Poglavlje II</p>
          <h2
            data-charter-ink
            className="font-display mt-2 text-4xl leading-[1.05] tracking-[var(--tracking-display)] text-foreground md:text-6xl"
          >
            Jelovnik
          </h2>
        </div>
      </div>

      <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
        {ARTICLES.map((article) => (
          <li key={article.no} data-charter-fade className="group py-7">
            <div className="grid gap-2 md:grid-cols-[7rem_1fr] md:items-baseline md:gap-8">
              <span className="text-label text-wax">{article.no}</span>
              <div>
                <h3 className="font-display text-2xl tracking-[var(--tracking-display)] text-foreground md:text-3xl">
                  {article.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {article.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p data-charter-fade className="text-label mt-6 text-muted-foreground">
        Cijene i dnevna ponuda dostupne su u restoranu.
      </p>
    </section>
  );
}
