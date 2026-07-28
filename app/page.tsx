"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PrincipleTile from "@/components/PrincipleTile";
import StepTile from "@/components/StepTile";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {t.hero.headlinePre}
              <span className="text-accent">{t.hero.headlineAccent}</span>
              {t.hero.headlineSuffix}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              {t.hero.sub}
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              {t.hero.subSecondary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/ararat.avif"
              alt="View of Mount Ararat from Yerevan, Armenia"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
            <Image
              src="/images/repSquare.avif"
              alt="Republic Square in Yerevan, Armenia"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
          <div className="lg:order-1">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{t.servicesOverview.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.servicesOverview.heading}
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:text-accent-dark"
          >
            {t.servicesOverview.viewAll} &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.servicesOverview.items.map((item) => (
            <Link
              key={item.slug}
              href={`/contact?service=${item.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-5 py-4 text-sm font-medium transition-colors hover:border-accent/40 hover:bg-surface"
            >
              {item.title}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 flex-none text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              >
                <path
                  d="M7.5 4.5 13 10l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                ctaLabel={t.services.getConsultation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="eyebrow">{t.principles.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.principles.heading}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.items.map((principle) => (
            <PrincipleTile key={principle.title} principle={principle} />
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="eyebrow">{t.howWeWork.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.howWeWork.heading}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.howWeWork.steps.map((step, index) => (
              <StepTile key={step.title} index={index + 1} title={step.title} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl text-center text-background">
          <Image
            src="https://images.unsplash.com/photo-1597742826856-5efeb4a599cc?auto=format&fit=crop&w=1600&q=80"
            alt="Republic Square in Yerevan at night"
            fill
            className="object-cover"
            sizes="1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/85 to-foreground/50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl px-8 py-16 sm:px-12 sm:py-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.cta.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-background/80">
              {t.cta.sub}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
