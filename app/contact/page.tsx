import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Get a Consultation | ReloPartner Armenia",
  description:
    "Request a consultation for relocation, residence permits, business registration, or accounting support in Armenia.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}
