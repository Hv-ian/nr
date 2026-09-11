import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { BLOG_CATEGORIES, locales, type BlogCategory, type Locale } from "@/lib/translations";

/**
 * Blog posts are Markdown files committed to the repository, one folder per
 * locale, which is the layout Sveltia CMS writes when it saves an entry:
 *
 *   content/blog/<locale>/<slug>.md
 *
 * Everything here runs at build time only, so the exported HTML already
 * contains the full article for crawlers.
 */

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");

/** Category keys a post may be filed under, defined alongside their per-locale labels. */
export const CATEGORIES = BLOG_CATEGORIES;

export type Category = BlogCategory;

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

/**
 * Which part of the cover image to keep when it is cropped to fit a card.
 * Photographs with the subject near the top, such as a flag or a mountain
 * peak, need "top" or they lose it.
 */
export type ImageFocus = "top" | "center" | "bottom";

const IMAGE_FOCUS: Record<ImageFocus, string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export function focusClass(focus: ImageFocus): string {
  return IMAGE_FOCUS[focus];
}

export type PostFrontmatter = {
  title: string;
  description: string;
  category: Category;
  date: string;
  image: string;
  imageFocus: ImageFocus;
  featured?: boolean;
  draft?: boolean;
};

export type Heading = {
  /** Anchor target, numbered rather than derived from the text so it works in every script. */
  id: string;
  text: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  locale: Locale;
  /** Article body, already rendered from Markdown to HTML. */
  html: string;
  /** Top-level sections, used to build the table of contents. */
  headings: Heading[];
  readingMinutes: number;
};

/**
 * Renders Markdown to HTML, numbering every `##` heading with an anchor so the
 * table of contents can link to it. Ids are positional because headings are
 * written in Armenian, Russian and English and slugifying them is unreliable.
 */
function render(markdown: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const renderer = new marked.Renderer();

  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    if (depth !== 2) return `<h${depth}>${text}</h${depth}>`;

    const id = `section-${headings.length + 1}`;
    headings.push({ id, text: text.replace(/<[^>]+>/g, "") });
    return `<h2 id="${id}">${text}</h2>`;
  };

  const html = marked.parse(markdown, { async: false, renderer });
  return { html, headings };
}

function localeDir(locale: Locale): string {
  return path.join(CONTENT_ROOT, locale);
}

/** Rough reading time, used for the byline. 200 words per minute. */
function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Frontmatter dates arrive as a YAML timestamp when unquoted, which is what
 * the CMS writes, and as a plain string when quoted. Normalise both to an
 * ISO date so sorting and `<time>` output stay consistent.
 */
function normalizeDate(value: unknown): string | null {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && value.trim()) return value.trim().slice(0, 10);
  return null;
}

function parse(locale: Locale, slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  const front = data as Partial<PostFrontmatter>;
  const date = normalizeDate(data.date);

  if (!front.title || !front.description || !date) {
    throw new Error(`content/blog/${locale}/${slug}.md is missing title, description or date`);
  }
  if (!front.category || !isCategory(front.category)) {
    throw new Error(
      `content/blog/${locale}/${slug}.md has category "${front.category}", expected one of ${CATEGORIES.join(", ")}`
    );
  }

  return {
    slug,
    locale,
    title: front.title,
    description: front.description,
    category: front.category,
    date,
    image: front.image ?? "/images/ararat.avif",
    imageFocus: front.imageFocus && front.imageFocus in IMAGE_FOCUS ? front.imageFocus : "center",
    featured: front.featured ?? false,
    draft: front.draft ?? false,
    ...render(content),
    readingMinutes: readingTime(content),
  };
}

/**
 * Every published post for a locale, newest first. Drafts are skipped, so a
 * post can sit in the repository unfinished without appearing on the site.
 */
export function getPosts(locale: Locale): Post[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parse(locale, file.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, file), "utf8")))
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): Post | null {
  const file = path.join(localeDir(locale), `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const post = parse(locale, slug, fs.readFileSync(file, "utf8"));
  return post.draft ? null : post;
}

/** The post to spotlight at the top of the index: the newest one flagged `featured`, else the newest. */
export function getFeaturedPost(locale: Locale): Post | null {
  const posts = getPosts(locale);
  return posts.find((post) => post.featured) ?? posts[0] ?? null;
}

export function getPostsByCategory(locale: Locale, category: Category): Post[] {
  return getPosts(locale).filter((post) => post.category === category);
}

/**
 * Slugs published in every locale. A post only gets URLs once all three
 * translations exist, which keeps its hreflang cluster complete.
 */
export function getTranslatedSlugs(): string[] {
  const perLocale = locales.map((locale) => new Set(getPosts(locale).map((post) => post.slug)));
  const [first, ...rest] = perLocale;
  return [...first].filter((slug) => rest.every((set) => set.has(slug))).sort();
}

/** Categories that actually have posts in every locale, so category pages are never empty. */
export function getActiveCategories(): Category[] {
  const translated = new Set(getTranslatedSlugs());
  const used = new Set<Category>();

  for (const locale of locales) {
    for (const post of getPosts(locale)) {
      if (translated.has(post.slug)) used.add(post.category);
    }
  }

  return CATEGORIES.filter((category) => used.has(category));
}

/** Formats a post date in the reader's language, e.g. "12 March 2026". */
export function formatDate(date: string, locale: Locale): string {
  const tag = locale === "ru" ? "ru-RU" : locale === "hy" ? "hy-AM" : "en-GB";
  return new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date)
  );
}
