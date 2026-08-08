"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations, type Locale, type Dictionary } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The active locale comes from the URL segment, so each language has its
 * own crawlable address rather than being a client-side toggle.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
