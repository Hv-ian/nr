import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services | Yerevan Setup",
  description:
    "Company registration, accounting, residency, and consultation services in Armenia.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
