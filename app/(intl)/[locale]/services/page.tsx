import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesContent from "@/components/ServicesContent";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";
import { INTL_LOCALES, isIntlLocale } from "@/lib/intl-locales";

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  return pageMetadata(locale, "services");
}

export default async function IntlServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();

  return (
    <>
      <StructuredData locale={locale} page="services" />
      <ServicesContent />
    </>
  );
}
