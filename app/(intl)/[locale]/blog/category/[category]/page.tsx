import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import JsonLd from "@/components/JsonLd";
import { getActiveCategories, isCategory } from "@/lib/blog";
import { blogIndexSchema } from "@/lib/blog-schema";
import { blogCategoryMetadata } from "@/lib/metadata";
import { INTL_LOCALES, isIntlLocale } from "@/lib/intl-locales";

export function generateStaticParams() {
  const categories = getActiveCategories();
  return INTL_LOCALES.flatMap((locale) => categories.map((category) => ({ locale, category })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isIntlLocale(locale) || !isCategory(category)) notFound();
  return blogCategoryMetadata(locale, category);
}

export default async function IntlBlogCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (!isIntlLocale(locale) || !isCategory(category)) notFound();

  return (
    <>
      <JsonLd data={blogIndexSchema(locale, category)} />
      <BlogIndex locale={locale} category={category} />
    </>
  );
}
