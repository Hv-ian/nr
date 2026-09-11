import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import JsonLd from "@/components/JsonLd";
import { blogIndexSchema } from "@/lib/blog-schema";
import { blogMetadata } from "@/lib/metadata";

export const metadata: Metadata = blogMetadata("en");

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogIndexSchema("en")} />
      <BlogIndex locale="en" />
    </>
  );
}
