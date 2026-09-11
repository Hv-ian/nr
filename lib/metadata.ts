import type { Metadata } from "next";
import { translations, type Locale } from "@/lib/translations";
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
  SITE_URL,
  type PageKey,
} from "@/lib/routing";
import type { Category, Post } from "@/lib/blog";

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

/** Metadata for the blog index in one locale. */
export function blogMetadata(locale: Locale): Metadata {
  const meta = translations[locale].meta.blog;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: blogUrl(locale),
      languages: alternatesFor(blogPath),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: blogUrl(locale),
      siteName: "ReloPartner Armenia",
      locale,
      type: "website",
    },
  };
}

/** Metadata for a category listing. Titles are built from the category label. */
export function blogCategoryMetadata(locale: Locale, category: Category): Metadata {
  const t = translations[locale].blog;
  const label = t.categories[category];
  const title = `${label} | ${t.heading}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: translations[locale].meta.blog.description,
    alternates: {
      canonical: blogCategoryUrl(locale, category),
      languages: alternatesFor((other) => blogCategoryPath(other, category)),
    },
    openGraph: {
      title,
      description: translations[locale].meta.blog.description,
      url: blogCategoryUrl(locale, category),
      siteName: "ReloPartner Armenia",
      locale,
      type: "website",
    },
  };
}

/** Metadata for one article, including the published time and cover image. */
export function blogPostMetadata(post: Post): Metadata {
  const url = blogPostUrl(post.locale, post.slug);

  return {
    metadataBase: new URL(SITE_URL),
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: alternatesFor((other) => blogPostPath(other, post.slug)),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "ReloPartner Armenia",
      locale: post.locale,
      type: "article",
      publishedTime: post.date,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}
