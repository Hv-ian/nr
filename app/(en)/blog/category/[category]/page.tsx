import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import JsonLd from "@/components/JsonLd";
import { getActiveCategories, isCategory } from "@/lib/blog";
import { blogIndexSchema } from "@/lib/blog-schema";
import { blogCategoryMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getActiveCategories().map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) notFound();
  return blogCategoryMetadata("en", category);
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  return (
    <>
      <JsonLd data={blogIndexSchema("en", category)} />
      <BlogIndex locale="en" category={category} />
    </>
  );
}
