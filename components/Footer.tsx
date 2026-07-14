"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-background">
            Yerevan<span className="text-accent">.</span>Setup
          </p>
          <p className="mt-1 text-sm">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="mailto:hello@yerevansetup.com" className="hover:text-background">
            hello@yerevansetup.com
          </a>
          <a href="tel:+37400000000" className="hover:text-background">
            +374 00 000 000
          </a>
          <Link href="/contact" className="font-medium text-accent hover:text-background">
            {t.footer.requestQuote} &rarr;
          </Link>
        </div>
      </div>
      <div className="border-t border-background/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} Yerevan Setup. {t.footer.rights}
      </div>
    </footer>
  );
}
