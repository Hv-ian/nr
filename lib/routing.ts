import type { Locale } from "@/lib/translations";

export const SITE_URL = "https://relopartner.org";

/** The default locale is served from the site root, without a path prefix. */
export const DEFAULT_LOCALE: Locale = "en";

export type PageKey = "home" | "services" | "contact";

const PAGE_PATHS: Record<PageKey, string> = {
  home: "",
  services: "/services",
  contact: "/contact",
};

/**
 * Builds an app-relative path for a page in a given locale.
 * English lives at the root ("/services/"); other locales are
 * prefixed ("/ru/services/"). Paths end in a slash to match the
 * `trailingSlash` export format.
 */
export function localePath(locale: Locale, page: PageKey): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const path = `${prefix}${PAGE_PATHS[page]}`;
  return path === "" ? "/" : `${path}/`;
}

/** Absolute URL for a page in a given locale, used for canonical/hreflang tags. */
export function localeUrl(locale: Locale, page: PageKey): string {
  return `${SITE_URL}${localePath(locale, page)}`;
}

/**
 * Swaps the locale on the current pathname, keeping the reader on the
 * same page when they change languages.
 */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  return localePath(nextLocale, pageKeyFromPathname(pathname));
}

export function pageKeyFromPathname(pathname: string): PageKey {
  const withoutLocale = pathname.replace(/^\/(ru|hy)(?=\/|$)/, "");
  if (withoutLocale.startsWith("/services")) return "services";
  if (withoutLocale.startsWith("/contact")) return "contact";
  return "home";
}

export function localeFromPathname(pathname: string): Locale {
  const match = pathname.match(/^\/(ru|hy)(?=\/|$)/);
  return (match?.[1] as Locale) ?? DEFAULT_LOCALE;
}

/** hreflang map for a page, including the required x-default entry. */
export function alternateLanguages(page: PageKey): Record<string, string> {
  return {
    en: localeUrl("en", page),
    ru: localeUrl("ru", page),
    hy: localeUrl("hy", page),
    "x-default": localeUrl("en", page),
  };
}
