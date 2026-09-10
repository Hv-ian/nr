import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ContactContent from "@/components/ContactContent";
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
  return pageMetadata(locale, "contact");
}

export default async function IntlContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();

  return (
    <>
      <StructuredData locale={locale} page="contact" />
      <Suspense fallback={null}>
        <ContactContent />
      </Suspense>
    </>
  );
}
