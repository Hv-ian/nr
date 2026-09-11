import type { ReactNode } from "react";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Display face for blog headings. Cyrillic is included for the Russian articles. */
const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

/**
 * The document shell shared by every locale's root layout. Each locale has
 * its own root layout so `<html lang>` is correct in the prerendered HTML.
 */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
