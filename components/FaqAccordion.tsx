"use client";

import { useState } from "react";
import type { FaqItem as Faq } from "@/lib/translations";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-background">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold">{faq.question}</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 flex-none text-muted transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
