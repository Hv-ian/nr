import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function ContactPage() {
  return (
    <>
      <StructuredData locale="en" page="contact" />
      <Suspense fallback={null}>
        <ContactContent />
      </Suspense>
    </>
  );
}
