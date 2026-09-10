import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = pageMetadata("en", "home");

export default function HomePage() {
  return (
    <>
      <StructuredData locale="en" page="home" />
      <HomeContent />
    </>
  );
}
