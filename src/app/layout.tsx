import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Gaia Festival — Em breve",
  description:
    "Aura Gaia Festival · Música, natureza e experiências que reorganizam o corpo, a mente e as conexões humanas. Em breve.",
  openGraph: {
    title: "Aura Gaia Festival — Em breve",
    description: "Aura Gaia Festival · Em breve.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[var(--color-violeta-deep)] text-[var(--color-creme)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
