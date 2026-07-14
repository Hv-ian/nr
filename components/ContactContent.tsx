"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? undefined;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <span className="eyebrow">{t.contactPage.eyebrow}</span>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.contactPage.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {t.contactPage.sub}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <QuoteForm defaultService={defaultService} />

        <div>
          <h2 className="text-lg font-semibold">{t.contactPage.faqHeading}</h2>
          <div className="mt-4">
            <FaqAccordion faqs={t.contactPage.faqs} />
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold">{t.contactPage.directHeading}</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href="mailto:hello@yerevansetup.com"
                className="text-accent hover:text-accent-dark"
              >
                hello@yerevansetup.com
              </a>
              <a href="tel:+37400000000" className="text-accent hover:text-accent-dark">
                +374 00 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
