import type { MetadataRoute } from "next";
import { locales } from "@/lib/translations";
import { alternateLanguages, localeUrl, type PageKey } from "@/lib/routing";

type PageConfig = {
  page: PageKey;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const PAGES: PageConfig[] = [
  { page: "home", changeFrequency: "weekly", priority: 1.0 },
  { page: "services", changeFrequency: "monthly", priority: 0.9 },
  { page: "contact", changeFrequency: "yearly", priority: 0.8 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // One entry per language version of each page, each carrying the full
  // hreflang cluster so search engines can group them.
  return PAGES.flatMap(({ page, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: localeUrl(locale, page),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: alternateLanguages(page) },
    }))
  );
}
