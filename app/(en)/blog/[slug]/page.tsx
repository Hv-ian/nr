import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import JsonLd from "@/components/JsonLd";
import { getPost, getTranslatedSlugs } from "@/lib/blog";
import { blogPostSchema } from "@/lib/blog-schema";
import { blogPostMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getTranslatedSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();
  return blogPostMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      <BlogPost post={post} />
    </>
  );
}
