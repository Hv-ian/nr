import type { MetadataRoute } from "next";
import { locales } from "@/lib/translations";
import {
  alternateLanguages,
  alternatesFor,
  blogCategoryPath,
  blogCategoryUrl,
  blogPath,
  blogPostPath,
  blogPostUrl,
  blogUrl,
  localeUrl,
  type PageKey,
} from "@/lib/routing";
import { getActiveCategories, getPost, getTranslatedSlugs } from "@/lib/blog";

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
  const staticPages = PAGES.flatMap(({ page, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: localeUrl(locale, page),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: alternateLanguages(page) },
    }))
  );

  const blogIndex = locales.map((locale) => ({
    url: blogUrl(locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: { languages: alternatesFor(blogPath) },
  }));

  const categories = getActiveCategories().flatMap((category) =>
    locales.map((locale) => ({
      url: blogCategoryUrl(locale, category),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: { languages: alternatesFor((other) => blogCategoryPath(other, category)) },
    }))
  );

  // Articles report their own publication date rather than the build time.
  const posts = getTranslatedSlugs().flatMap((slug) =>
    locales.map((locale) => ({
      url: blogPostUrl(locale, slug),
      lastModified: new Date(getPost(locale, slug)?.date ?? lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: alternatesFor((other) => blogPostPath(other, slug)) },
    }))
  );

  return [...staticPages, ...blogIndex, ...categories, ...posts];
}
