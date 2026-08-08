import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "services");

export default function ServicesPage() {
  return <ServicesContent />;
}
