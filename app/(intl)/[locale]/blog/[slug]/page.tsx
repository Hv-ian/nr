import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import JsonLd from "@/components/JsonLd";
import { getPost, getTranslatedSlugs } from "@/lib/blog";
import { blogPostSchema } from "@/lib/blog-schema";
import { blogPostMetadata } from "@/lib/metadata";
import { INTL_LOCALES, isIntlLocale } from "@/lib/intl-locales";

/** Every translated slug, for each prefixed locale. */
export function generateStaticParams() {
  const slugs = getTranslatedSlugs();
  return INTL_LOCALES.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isIntlLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();
  return blogPostMetadata(post);
}

export default async function IntlBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isIntlLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      <BlogPost post={post} />
    </>
  );
}
