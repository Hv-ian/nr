import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Get a Quote | Yerevan Setup",
  description:
    "Request a tailored quote for company registration, accounting, or residency support in Armenia.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}
