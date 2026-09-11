import Image from "next/image";
import Link from "next/link";
import CategoryTabs from "@/components/blog/CategoryTabs";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostCard from "@/components/blog/PostCard";
import {
  getActiveCategories,
  getFeaturedPost,
  getPosts,
  getTranslatedSlugs,
  type Category,
} from "@/lib/blog";
import { localePath } from "@/lib/routing";
import { translations, type Locale } from "@/lib/translations";

/**
 * The blog index, also used for category pages. When `category` is set the
 * grid is filtered and the featured spotlight is dropped, since a filtered
 * view should lead with the filtered results.
 */
export default function BlogIndex({
  locale,
  category = null,
}: {
  locale: Locale;
  category?: Category | null;
}) {
  const t = translations[locale].blog;

  // Only posts translated into all three languages are published, so every
  // article has a complete hreflang cluster.
  const translated = new Set(getTranslatedSlugs());
  const all = getPosts(locale).filter((post) => translated.has(post.slug));

  const featured = category ? null : getFeaturedPost(locale);
  const posts = category
    ? all.filter((post) => post.category === category)
    : all.filter((post) => post.slug !== featured?.slug);

  const heading = category ? t.categories[category] : t.heading;

  return (
    <div data-theme="blog">
      <header className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src="/images/ararat.avif"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">{heading}</h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted">{t.intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {featured && (
          <div className="mb-12">
            <FeaturedPost post={featured} />
          </div>
        )}

        <CategoryTabs locale={locale} categories={getActiveCategories()} active={category} />

        {posts.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted">{t.empty}</p>
        )}
      </div>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl">{t.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">{t.ctaSub}</p>
          <Link
            href={localePath(locale, "contact")}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
          >
            {t.ctaButton}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
