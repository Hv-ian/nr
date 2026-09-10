import { translations, type Locale } from "@/lib/translations";
import { localeUrl, SITE_URL, type PageKey } from "@/lib/routing";

/**
 * JSON-LD structured data for every page, built from the same `translations`
 * dictionary that renders the visible copy. Keeping one source means the
 * questions and service descriptions search engines read are always the exact
 * text a visitor sees on the page, which is what Google requires of FAQ and
 * Service markup.
 */

/** BCP 47 tags, which structured data expects, rather than the bare locale codes used in URLs. */
const IN_LANGUAGE: Record<Locale, string> = {
  en: "en",
  ru: "ru-RU",
  hy: "hy-AM",
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

function organization(locale: Locale): JsonLdNode {
  const t = translations[locale];
  const contacts = t.contactPage.contacts;

  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: t.brand,
    url: localeUrl(locale, "home"),
    description: t.meta.organization,
    email: contacts.emailValue,
    telephone: contacts.phoneValue,
    areaServed: { "@type": "Country", name: t.meta.countryName },
    address: {
      "@type": "PostalAddress",
      addressLocality: contacts.addressValue,
      addressCountry: "AM",
    },
    sameAs: [contacts.whatsappHref, contacts.telegramHref],
  };
}

function website(locale: Locale): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: localeUrl(locale, "home"),
    name: translations[locale].brand,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: IN_LANGUAGE[locale],
  };
}

function webPage(locale: Locale, page: PageKey, type: "WebPage" | "ContactPage"): JsonLdNode {
  const meta = translations[locale].meta[page];
  const url = localeUrl(locale, page);

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    ...(type === "ContactPage" ? { mainEntity: { "@id": ORGANIZATION_ID } } : {}),
    inLanguage: IN_LANGUAGE[locale],
  };
}

/** Turns the FAQ items rendered on a page into a FAQPage node with the same wording. */
function faqPage(
  locale: Locale,
  page: PageKey,
  items: { question: string; answer: string }[]
): JsonLdNode {
  const url = localeUrl(locale, page);

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: IN_LANGUAGE[locale],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** One Service node per service card on the services page, anchored by its slug. */
function services(locale: Locale): JsonLdNode[] {
  const t = translations[locale];
  const url = localeUrl(locale, "services");

  return t.services.items.map((service) => ({
    "@type": "Service",
    "@id": `${url}#${service.slug}`,
    name: service.title,
    description: service.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: t.meta.countryName },
    url,
  }));
}

export function pageSchema(locale: Locale, page: PageKey): JsonLdNode {
  const t = translations[locale];

  const graph: JsonLdNode[] = [organization(locale), website(locale)];

  if (page === "home") {
    graph.push(
      webPage(locale, "home", "WebPage"),
      {
        "@type": "Service",
        "@id": `${localeUrl(locale, "home")}#relocation-service`,
        name: t.servicesPage.heading,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: t.meta.countryName },
        url: localeUrl(locale, "services"),
      },
      faqPage(locale, "home", t.homeFaq.items)
    );
  } else if (page === "services") {
    graph.push(
      webPage(locale, "services", "WebPage"),
      ...services(locale),
      faqPage(locale, "services", t.servicesPage.faqs)
    );
  } else {
    graph.push(
      webPage(locale, "contact", "ContactPage"),
      faqPage(locale, "contact", t.contactPage.faqs)
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
