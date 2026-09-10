import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeContent from "@/components/HomeContent";
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
  return pageMetadata(locale, "home");
}

export default async function IntlHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();

  return (
    <>
      <StructuredData locale={locale} page="home" />
      <HomeContent />
    </>
  );
}
