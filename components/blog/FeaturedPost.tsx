import Image from "next/image";
import Link from "next/link";
import { focusClass, type Post } from "@/lib/blog";
import { blogPostPath } from "@/lib/routing";
import { translations } from "@/lib/translations";

/** The spotlight article above the grid: image on the left, copy on the right. */
export default function FeaturedPost({ post }: { post: Post }) {
  const t = translations[post.locale].blog;

  return (
    <article className="group grid overflow-hidden rounded-2xl border border-border bg-background md:grid-cols-2">
      <Link
        href={blogPostPath(post.locale, post.slug)}
        className="relative block aspect-[16/10] md:aspect-auto md:h-full md:min-h-[19rem]"
      >
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover ${focusClass(post.imageFocus)} transition-transform duration-500 group-hover:scale-105`}
        />
      </Link>

      <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {t.categories[post.category]}
        </p>

        <h2 className="text-2xl leading-tight sm:text-3xl">
          <Link
            href={blogPostPath(post.locale, post.slug)}
            className="transition-colors hover:text-accent"
          >
            {post.title}
          </Link>
        </h2>

        <p className="leading-relaxed text-muted">{post.description}</p>

        <Link
          href={blogPostPath(post.locale, post.slug)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          {t.readArticle}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
