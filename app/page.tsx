"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import BenefitTile from "@/components/BenefitTile";
import Testimonial from "@/components/Testimonial";
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
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.headline} <span className="text-accent">{t.hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              {t.hero.sub}
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

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold text-accent-dark">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1615808462014-eb2fd6407106?auto=format&fit=crop&w=1400&q=80"
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

      {/* Benefits */}
      <section className="border-t border-border bg-surface">
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="eyebrow">{t.benefits.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.benefits.heading}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((benefit) => (
              <BenefitTile key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.services.heading}
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:text-accent-dark"
          >
            {t.services.viewAll} &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              ctaLabel={t.services.requestQuote}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface">
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.testimonials.heading}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.items.map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="relative grid gap-8 overflow-hidden rounded-3xl bg-foreground px-8 py-12 text-background sm:px-12 lg:grid-cols-2 lg:items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.cta.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70">
              {t.cta.sub}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
            >
              {t.cta.button}
            </Link>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1605362814200-8efc2d015560?auto=format&fit=crop&w=900&q=80"
              alt="Working remotely on a laptop"
              fill
              className="object-cover"
              sizes="440px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
