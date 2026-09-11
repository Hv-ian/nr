import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/blog/ShareButton";
import { focusClass, formatDate, getPosts, getTranslatedSlugs, type Post } from "@/lib/blog";
import { blogCategoryPath, blogPath, blogPostPath, localePath } from "@/lib/routing";
import { translations } from "@/lib/translations";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-4 w-4 flex-none"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-4 w-4 flex-none"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Faint mountain motif behind the sidebar call to action. */
function MountainMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M2 38 L28 10 L44 28 L60 6 L84 38 Z M70 38 L94 14 L118 38 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A single article. The layout follows the approved design: a full-bleed cover
 * with the title card overlapping it, then the body beside a sticky sidebar
 * holding the table of contents, related reading and the call to action.
 */
export default function BlogPost({ post }: { post: Post }) {
  const t = translations[post.locale].blog;

  const translated = new Set(getTranslatedSlugs());
  const related = getPosts(post.locale)
    .filter((other) => other.slug !== post.slug && translated.has(other.slug))
    .sort((a, b) => {
      // Same-category articles first, then newest.
      const sameA = a.category === post.category ? 0 : 1;
      const sameB = b.category === post.category ? 0 : 1;
      return sameA - sameB || b.date.localeCompare(a.date);
    })
    .slice(0, 4);

  return (
    <div data-theme="blog">
      <article>
        <header className="relative">
          {/*
            Sized by aspect ratio rather than a fixed height. A short, full-bleed
            band forces `object-cover` to magnify the photo enormously on wide
            screens; capping the width and holding a ~2.5:1 ratio keeps the crop
            close to the picture's own proportions at every size.
          */}
          <div className="relative mx-auto aspect-[3/2] w-full max-w-[100rem] sm:aspect-[2/1] lg:aspect-[5/2]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className={`object-cover ${focusClass(post.imageFocus)}`}
            />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="relative -mt-28 max-w-2xl rounded-tr-2xl bg-background p-8 sm:-mt-32 sm:p-10">
              <Link
                href={blogPath(post.locale)}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <span aria-hidden="true">&larr;</span>
                {t.backToBlog}
              </Link>

              <Link
                href={blogCategoryPath(post.locale, post.category)}
                className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-accent"
              >
                {t.categories[post.category]}
              </Link>

              <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{post.title}</h1>

              <p className="mt-4 leading-relaxed text-muted">{post.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarIcon />
                  <time dateTime={post.date}>{formatDate(post.date, post.locale)}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <ClockIcon />
                  {t.readingTime(post.readingMinutes)}
                </span>
                <ShareButton title={post.title} label={t.share} copiedLabel={t.shareCopied} />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div
              className="article-body pt-10"
              // Markdown authored by the site owners through the CMS and committed
              // to the repository, rendered at build time. No visitor input here.
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <aside className="mt-12 space-y-10 lg:mt-0 lg:pt-10">
              <div className="lg:sticky lg:top-24 lg:space-y-10">
                {post.headings.length > 1 && (
                  <nav className="rounded-2xl border border-border bg-surface p-6">
                    <h2 className="flex items-center gap-2 text-base">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                        className="h-4 w-4 flex-none text-accent"
                      >
                        <path d="M4 6h.01M4 12h.01M4 18h.01M9 6h11M9 12h11M9 18h11" />
                      </svg>
                      {t.tocHeading}
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {post.headings.map((heading) => (
                        <li key={heading.id} className="flex gap-2.5">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                          <a
                            href={`#${heading.id}`}
                            className="text-sm leading-snug text-muted transition-colors hover:text-accent"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {related.length > 0 && (
                  <section>
                    <h2 className="text-xl">{t.relatedHeading}</h2>
                    <ul className="mt-5 divide-y divide-border border-t border-border">
                      {related.map((other) => (
                        <li key={other.slug} className="flex gap-4 py-4">
                          <Link
                            href={blogPostPath(other.locale, other.slug)}
                            className="relative aspect-[4/3] w-24 flex-none overflow-hidden rounded-lg"
                          >
                            <Image
                              src={other.image}
                              alt=""
                              fill
                              sizes="6rem"
                              className={`object-cover ${focusClass(other.imageFocus)}`}
                            />
                          </Link>
                          <div className="min-w-0">
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent">
                              {t.categories[other.category]}
                            </p>
                            <h3 className="mt-1 text-sm leading-snug">
                              <Link
                                href={blogPostPath(other.locale, other.slug)}
                                className="transition-colors hover:text-accent"
                              >
                                {other.title}
                              </Link>
                            </h3>
                            <p className="mt-1 text-xs text-muted">
                              {t.readingTime(other.readingMinutes)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className="relative overflow-hidden rounded-2xl border border-border bg-surface p-7">
                  <MountainMark className="absolute -top-1 left-5 h-8 w-24 text-accent/15" />
                  <MountainMark className="absolute bottom-2 right-4 h-8 w-24 text-accent/15" />

                  <h2 className="relative text-xl leading-snug">{t.ctaHeading}</h2>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{t.ctaSub}</p>
                  <Link
                    href={localePath(post.locale, "contact")}
                    className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-dark px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
                  >
                    {t.ctaButton}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
