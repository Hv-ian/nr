import type { Category, Post } from "@/lib/blog";
import { getPosts, getTranslatedSlugs } from "@/lib/blog";
import {
  blogCategoryUrl,
  blogPostUrl,
  blogUrl,
  SITE_URL,
} from "@/lib/routing";
import { translations, type Locale } from "@/lib/translations";

/**
 * Structured data for the blog. The agency's Schema Markup document covers the
 * home, services and contact pages only, so these graphs are generated here.
 * They reference the same Organization and WebSite node ids that document uses,
 * which is what ties the blog into the rest of the site's graph.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const IN_LANGUAGE: Record<Locale, string> = {
  en: "en",
  ru: "ru-RU",
  hy: "hy-AM",
};

type JsonLdNode = Record<string, unknown>;

function breadcrumbs(items: { name: string; url: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Blog index, or a category listing when `category` is given. */
export function blogIndexSchema(locale: Locale, category: Category | null = null): JsonLdNode {
  const t = translations[locale];
  const translated = new Set(getTranslatedSlugs());
  const posts = getPosts(locale)
    .filter((post) => translated.has(post.slug))
    .filter((post) => !category || post.category === category);

  const url = category ? blogCategoryUrl(locale, category) : blogUrl(locale);
  const name = category ? t.blog.categories[category] : t.blog.heading;

  const crumbs = [
    { name: t.nav.home, url: `${SITE_URL}${locale === "en" ? "/" : `/${locale}/`}` },
    { name: t.nav.blog, url: blogUrl(locale) },
  ];
  if (category) crumbs.push({ name, url });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        url,
        name,
        description: t.meta.blog.description,
        inLanguage: IN_LANGUAGE[locale],
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${blogPostUrl(post.locale, post.slug)}#article`,
          headline: post.title,
          url: blogPostUrl(post.locale, post.slug),
          datePublished: post.date,
        })),
      },
      breadcrumbs(crumbs),
    ],
  };
}

/** A single article. */
export function blogPostSchema(post: Post): JsonLdNode {
  const t = translations[post.locale];
  const url = blogPostUrl(post.locale, post.slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: post.date,
        dateModified: post.date,
        image: `${SITE_URL}${post.image}`,
        articleSection: t.blog.categories[post.category],
        inLanguage: IN_LANGUAGE[post.locale],
        isPartOf: { "@id": `${blogUrl(post.locale)}#blog` },
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
      },
      breadcrumbs([
        { name: t.nav.home, url: `${SITE_URL}${post.locale === "en" ? "/" : `/${post.locale}/`}` },
        { name: t.nav.blog, url: blogUrl(post.locale) },
        { name: t.blog.categories[post.category], url: blogCategoryUrl(post.locale, post.category) },
        { name: post.title, url },
      ]),
    ],
  };
}
