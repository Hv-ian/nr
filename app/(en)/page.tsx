import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "home");

export default function HomePage() {
  return <HomeContent />;
}
