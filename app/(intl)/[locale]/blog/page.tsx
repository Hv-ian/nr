import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import JsonLd from "@/components/JsonLd";
import { blogIndexSchema } from "@/lib/blog-schema";
import { blogMetadata } from "@/lib/metadata";
import { INTL_LOCALES, isIntlLocale } from "@/lib/intl-locales";

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return blogMetadata(locale);
}

export default async function IntlBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();

  return (
    <>
      <JsonLd data={blogIndexSchema(locale)} />
      <BlogIndex locale={locale} />
    </>
  );
}
