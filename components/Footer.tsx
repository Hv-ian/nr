"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/80 transition-colors hover:border-accent hover:bg-accent hover:text-background"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const { contacts } = t.contactPage;

  return (
    <footer className="bg-foreground text-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-background">
            ReloPartner<span className="text-accent"> Armenia</span>
          </p>
          <p className="mt-2 max-w-xs text-sm">{t.footer.tagline}</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-medium text-accent hover:text-background"
          >
            {t.footer.getConsultation} &rarr;
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a href={`mailto:${contacts.emailValue}`} className="hover:text-background">
              {contacts.emailValue}
            </a>
            <a
              href={`tel:${contacts.phoneValue.replace(/\s/g, "")}`}
              className="hover:text-background"
            >
              {contacts.phoneValue}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <IconButton href={`mailto:${contacts.emailValue}`} label={contacts.emailLabel}>
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                <path
                  d="M4 6h16v12H4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="m4.5 6.5 7.5 6 7.5-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <IconButton
              href={`tel:${contacts.phoneValue.replace(/\s/g, "")}`}
              label={contacts.phoneLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                <path
                  d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.1 2.1z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <IconButton href={contacts.whatsappHref} label={contacts.whatsappLabel}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.5.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3C8.4 21.6 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
              </svg>
            </IconButton>
            <IconButton href={contacts.telegramHref} label={contacts.telegramLabel}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                <path d="M21.9 3.5 2.4 11.2c-1.2.5-1.2 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.5 0 .7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.6.2 1.8-.8l3.3-15.6c.3-1.3-.5-1.8-1.4-1.4ZM8.2 13.6l9.5-6c.4-.3.8 0 .5.4l-7.7 7-.3 3.1-1.4-3.1Z" />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} ReloPartner Armenia. {t.footer.rights}
      </div>
    </footer>
  );
}
