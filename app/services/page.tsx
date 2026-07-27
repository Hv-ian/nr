import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services | ReloPartner Armenia",
  description:
    "Residence permits, citizenship, business registration, and accounting services in Armenia.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
