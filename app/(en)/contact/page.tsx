import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}
