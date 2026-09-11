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

/** Path to the blog index, e.g. "/blog/" or "/ru/blog/". */
export function blogPath(locale: Locale): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${prefix}/blog/`;
}

/** Path to a single post. Slugs are shared across locales so the URL differs only by prefix. */
export function blogPostPath(locale: Locale, slug: string): string {
  return `${blogPath(locale)}${slug}/`;
}

export function blogCategoryPath(locale: Locale, category: string): string {
  return `${blogPath(locale)}category/${category}/`;
}

export function blogUrl(locale: Locale): string {
  return `${SITE_URL}${blogPath(locale)}`;
}

export function blogPostUrl(locale: Locale, slug: string): string {
  return `${SITE_URL}${blogPostPath(locale, slug)}`;
}

export function blogCategoryUrl(locale: Locale, category: string): string {
  return `${SITE_URL}${blogCategoryPath(locale, category)}`;
}

/**
 * Swaps the locale on the current pathname, keeping the reader on the same
 * page when they change languages. Works for any route, including blog posts,
 * because only the locale prefix is rewritten.
 */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const withoutLocale = pathname.replace(/^\/(ru|hy)(?=\/|$)/, "") || "/";
  const prefix = nextLocale === DEFAULT_LOCALE ? "" : `/${nextLocale}`;
  const path = `${prefix}${withoutLocale}`;
  return path.endsWith("/") ? path : `${path}/`;
}

export function pageKeyFromPathname(pathname: string): PageKey {
  const withoutLocale = pathname.replace(/^\/(ru|hy)(?=\/|$)/, "");
  if (withoutLocale.startsWith("/services")) return "services";
  if (withoutLocale.startsWith("/contact")) return "contact";
  return "home";
}

/** hreflang cluster for any path shape, given a builder that returns the path for one locale. */
export function alternatesFor(build: (locale: Locale) => string): Record<string, string> {
  return {
    en: `${SITE_URL}${build("en")}`,
    ru: `${SITE_URL}${build("ru")}`,
    hy: `${SITE_URL}${build("hy")}`,
    "x-default": `${SITE_URL}${build("en")}`,
  };
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
