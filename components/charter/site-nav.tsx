"use client";

import { useEffect, useState } from "react";
import { WaxSeal } from "@/components/charter/wax-seal";

const NAV_LINKS = [
  { href: "#pocetak", label: "Početak" },
  { href: "#o-nama", label: "O nama" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#ambijent", label: "Ambijent" },
  { href: "#lokacija", label: "Lokacija" },
];

/**
 * IMPORTANT: the mobile nav overlay is rendered as a DOM SIBLING of <header>,
 * not nested inside it. A backdrop-blur header with overflow/stacking of its
 * own can trap and clip a fixed-position child nav on mobile — keeping the
 * nav as a sibling avoids that bug entirely.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#pocetak" aria-label="Restoran Tomislav — početak" className="flex items-center gap-3">
            <WaxSeal size={34} />
            <span className="font-display text-xl leading-none tracking-[var(--tracking-display)]">
              Tomislav
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-muted-foreground transition-colors duration-(--duration-micro) hover:text-wax"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+385984923358"
            className="text-label hidden rounded-sm bg-primary px-5 py-2.5 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] md:inline-flex"
          >
            Pozovi restoran
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otvori izbornik"
            aria-expanded={open}
            aria-controls="charter-mobile-nav"
            className="flex flex-col items-end gap-1.5 p-2 md:hidden"
          >
            <span className="block h-px w-7 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-7 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Sibling of <header>, fixed to the viewport — never nested inside the
          header's backdrop-blur box, so it can never be clipped by it. */}
      <div
        id="charter-mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-parchment-texture transition-opacity duration-(--duration-base) md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="flex items-center gap-3">
            <WaxSeal size={30} />
            <span className="font-display text-lg tracking-[var(--tracking-display)]">Tomislav</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Zatvori izbornik"
            className="p-2 text-2xl leading-none text-foreground"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl tracking-[var(--tracking-display)] text-foreground transition-colors duration-(--duration-micro) hover:text-wax"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+385984923358"
            onClick={() => setOpen(false)}
            className="text-label mt-4 rounded-sm bg-primary px-6 py-3 text-primary-foreground"
          >
            Pozovi restoran
          </a>
        </nav>
      </div>
    </>
  );
}
