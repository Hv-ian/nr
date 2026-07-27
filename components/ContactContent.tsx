"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? undefined;
  const { contacts } = t.contactPage;

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
          <h2 className="text-lg font-semibold">{t.contactPage.directHeading}</h2>
          <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-surface p-6 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {contacts.addressLabel}
              </p>
              <p className="mt-1">{contacts.addressValue}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {contacts.phoneLabel}
              </p>
              <a
                href={`tel:${contacts.phoneValue.replace(/\s/g, "")}`}
                className="mt-1 block text-accent hover:text-accent-dark"
              >
                {contacts.phoneValue}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {contacts.emailLabel}
              </p>
              <a
                href={`mailto:${contacts.emailValue}`}
                className="mt-1 block text-accent hover:text-accent-dark"
              >
                {contacts.emailValue}
              </a>
            </div>
            <div className="flex gap-6 pt-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {contacts.whatsappLabel}
                </p>
                <a
                  href={contacts.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-accent hover:text-accent-dark"
                >
                  {contacts.whatsappValue}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {contacts.telegramLabel}
                </p>
                <a
                  href={contacts.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-accent hover:text-accent-dark"
                >
                  {contacts.telegramValue}
                </a>
              </div>
            </div>
          </div>

          <h2 className="mt-8 text-lg font-semibold">{t.contactPage.faqHeading}</h2>
          <div className="mt-4">
            <FaqAccordion faqs={t.contactPage.faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
