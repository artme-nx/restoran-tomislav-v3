import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Restoran Tomislav — Vodice",
  description:
    "Restoran Tomislav, u središtu Vodica: pizza iz krušne peći, svježa riba i plodovi mora, tjestenine i jela s roštilja. Ulica Artina 3, Vodice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${cormorant.variable} ${ebGaramond.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment-texture">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
