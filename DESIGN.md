# Design System — "CHARTER OF THE COAST"

Restoran Tomislav, Vodice. Sadržaj se predstavlja kao **povelja koja se odmotava** —
vertikalni pergament s vosčanim pečatima na svakom poglavlju. Ovo je čisto
vizualni/tipografski uređaj (elegantna prezentacija dokumenta), NE tvrdnja o
povijesnoj vezi s kraljem Tomislavom — ime je samo osobno ime vlasnika/restorana.

## 1. Koncept

Stranica je organizirana kao **poglavlja povelje** (Poglavlje I–IV), svako
uvedeno vosčanim pečatom koji se "utisne" pri ulasku u prikaz. Fiksna traka
uz lijevi rub (`ScrollSpine`) odmotava se razmjerno napretku scrolla —
metafora pergamenta koji se odmotava dok se čita. Nasljeđe test-premium
projekta: tehnički GSAP/Lenis setup i format tokena (primitive → semantic →
component), NE hero/nav/layout/motion sekvenca.

## 2. Boje (tokeni) — iz stvarnog materijala

Paleta dolazi iz nađenih činjenica (pergament/dokument tema restorana-povelje)
i stvarnog dalmatinskog karaktera Vodica (kamen, more, sunce) — ne forsirani
"kraljevski zlatni" kliše.

| Token             | Hex       | Uloga                                    |
|--------------------|-----------|-------------------------------------------|
| `--parchment-50`  | `#FBF6EA` | Kartice, najsvjetlija površina papira     |
| `--parchment-100` | `#F3E8D0` | Pozadina — boja starog pergamenta         |
| `--parchment-500` | `#C7A874` | Rubovi, linije, ostarjeli rub             |
| `--ink-900`       | `#241A0F` | Primarni tekst — sepia crna, ne čisto crna|
| `--ink-500`       | `#5B4A32` | Sekundarni tekst                          |
| `--adriatic-500`  | `#1E5C69` | Akcent — Jadransko more                   |
| `--wax-500`       | `#A13820` | JEDINI topli akcent — vosčani pečat, CTA  |

## 3. Tipografija

| Uloga   | Font                      | Karakter                              |
|---------|---------------------------|----------------------------------------|
| Display | **Cormorant Garamond**    | Elegantan, visok kontrast, manuskript  |
| Body    | **EB Garamond**           | Čitljiv knjižni serif                  |
| Label   | **IBM Plex Mono**         | Kickeri, meta, brojevi poglavlja       |

## 4. Motion

- Smooth scroll: **Lenis** (`lerp: 0.1`).
- `ScrollSpine`: scroll-scrub odmotavanje trake uz lijevi rub cijele stranice.
- `HeroCharter`: pečat se utisne (stamp, overshoot ease) → puca (crack) →
  naslov se odmotava clip-path rezom (ink reveal), redom u timeline-u pri
  učitavanju — NE scroll-scrub parallax kao u test-premium heroju.
- Svako poglavlje (`useCharterReveal`): pečat se utisne, naslov se "piše"
  clip-path rezom, tijelo teksta fade-up — jednom, pri ulasku u viewport.
- `prefers-reduced-motion`: sve animacije se gase, sadržaj odmah vidljiv.

## 5. Implementacija (tri sloja tokena)

- `design/tokens.json` — izvor istine (primitive → semantic → component).
- `app/tokens.css` — auto-generirano, ne uređivati ručno.
- `app/globals.css` — mapira semantic tokene u Tailwind `@theme`.
- `components/charter/` — `wax-seal.tsx`, `scroll-spine.tsx`, `site-nav.tsx`,
  `hero-charter.tsx`, `chapter-*.tsx`, `seal-footer.tsx`, `use-charter-reveal.ts`.

## 6. Sadržajna pravila

Samo potvrđene činjenice: naziv, adresa (Ulica Artina 3, Vodice), telefon,
kategorije kuhinje (pizza, riba i plodovi mora, meso/roštilj, tjestenine),
središnja lokacija u Vodicama. Bez izmišljenih godina osnivanja, jela,
nagrada ili tvrdnji o kraljevskoj povijesti.
