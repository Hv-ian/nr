import type { Metadata } from "next";
import { translations, type Locale } from "@/lib/translations";
import { alternateLanguages, localeUrl, SITE_URL, type PageKey } from "@/lib/routing";

/**
 * Builds the metadata for one page in one locale: the localized title and
 * description, a self-referencing canonical, and the hreflang cluster
 * linking all three language versions plus x-default.
 */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const meta = translations[locale].meta[page];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localeUrl(locale, page),
      languages: alternateLanguages(page),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localeUrl(locale, page),
      siteName: "ReloPartner Armenia",
      locale,
      type: "website",
    },
  };
}
