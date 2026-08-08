import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { INTL_LOCALES, isIntlLocale } from "@/lib/intl-locales";
import "../../globals.css";

export function generateStaticParams() {
  return INTL_LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function IntlRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();

  return <SiteShell locale={locale}>{children}</SiteShell>;
}
