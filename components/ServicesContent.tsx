"use client";

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="eyebrow">{t.servicesPage.eyebrow}</span>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.servicesPage.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {t.servicesPage.sub}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              ctaLabel={t.services.requestQuote}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t.servicesPage.notSureHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            {t.servicesPage.notSureSub}
          </p>
          <Link
            href="/contact?service=consultation"
            className="mt-6 inline-flex rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
          >
            {t.services.requestQuote}
          </Link>
        </div>
      </section>
    </>
  );
}
