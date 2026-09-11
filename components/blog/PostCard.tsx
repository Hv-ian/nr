import Image from "next/image";
import Link from "next/link";
import { focusClass, type Post } from "@/lib/blog";
import { blogPostPath } from "@/lib/routing";
import { translations } from "@/lib/translations";

/** One article in the blog grid: cover image, category, title, excerpt, read link. */
export default function PostCard({ post }: { post: Post }) {
  const t = translations[post.locale].blog;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg">
      <Link href={blogPostPath(post.locale, post.slug)} className="relative block aspect-[16/10]">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className={`object-cover ${focusClass(post.imageFocus)} transition-transform duration-500 group-hover:scale-105`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {t.categories[post.category]}
        </p>

        <h3 className="mt-3 text-xl leading-snug">
          <Link
            href={blogPostPath(post.locale, post.slug)}
            className="transition-colors hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>

        <Link
          href={blogPostPath(post.locale, post.slug)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          {t.readMore}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
