import { WaxSeal } from "@/components/charter/wax-seal";

export function SealFooter() {
  return (
    <footer className="relative mx-auto max-w-5xl border-t border-border/70 px-4 py-14 md:px-8 md:pl-20">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div className="flex items-center gap-4">
          <WaxSeal size={44} />
          <div>
            <p className="font-display text-xl tracking-[var(--tracking-display)] text-foreground">
              Restoran Tomislav
            </p>
            <p className="text-label mt-1 text-muted-foreground">Vodice, Dalmacija</p>
          </div>
        </div>

        <div className="text-label space-y-1 text-muted-foreground sm:text-right">
          <p>Ulica Artina 3, 22211 Vodice</p>
          <p>+385 98 492 358</p>
        </div>
      </div>

      <p className="text-label mt-10 text-muted-foreground/80">
        © {new Date().getFullYear()} Restoran Tomislav — Vodice.
      </p>
    </footer>
  );
}
