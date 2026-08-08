import type { Locale } from "@/lib/translations";

/**
 * Locales that live behind a URL prefix. English is served from the site
 * root, so it is deliberately absent here.
 */
export const INTL_LOCALES = ["ru", "hy"] as const;

export type IntlLocale = (typeof INTL_LOCALES)[number];

export function isIntlLocale(value: string): value is IntlLocale {
  return (INTL_LOCALES as readonly string[]).includes(value);
}

/** Widens an intl locale to the full Locale union. */
export function toLocale(value: IntlLocale): Locale {
  return value;
}
