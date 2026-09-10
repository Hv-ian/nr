import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = pageMetadata("en", "services");

export default function ServicesPage() {
  return (
    <>
      <StructuredData locale="en" page="services" />
      <ServicesContent />
    </>
  );
}
