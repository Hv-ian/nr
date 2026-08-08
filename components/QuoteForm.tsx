"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const WEB3FORMS_ACCESS_KEY = "1bf76840-fa7f-4bb6-8d11-f5cd519dfb5f";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function QuoteForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const { t } = useLanguage();
  const form_t = t.contactPage.form;

  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: defaultService,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = form_t.nameRequired;
    if (!form.email.trim()) {
      nextErrors.email = form_t.emailRequired;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = form_t.emailInvalid;
    }
    if (!form.service) nextErrors.service = form_t.serviceRequired;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const formEl = event.currentTarget;
    if ((new FormData(formEl).get("botcheck") as string)?.length > 0) {
      return;
    }

    const serviceTitle =
      t.services.items.find((service) => service.slug === form.service)
        ?.title ?? form.service;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New consultation request: ${serviceTitle}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: serviceTitle,
          message: form.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path
              d="m5 13 4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold">{form_t.successTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {form_t.successMessage(form.name.split(" ")[0])}
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-6 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-background"
        >
          {form_t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium">
            {form_t.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={form_t.namePlaceholder}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium">
            {form_t.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={form_t.emailPlaceholder}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-sm font-medium">
            {form_t.phoneLabel}{" "}
            <span className="font-normal text-muted">{form_t.optional}</span>
          </label>
          <input
            id="phone"
            type="text"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder={form_t.phonePlaceholder}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="service" className="text-sm font-medium">
            {form_t.serviceLabel}
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          >
            <option value="">{form_t.servicePlaceholder}</option>
            {t.services.items.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">{form_t.otherOption}</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600">{errors.service}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            {form_t.messageLabel}{" "}
            <span className="font-normal text-muted">{form_t.optional}</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder={form_t.messagePlaceholder}
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          />
        </div>
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-600">{form_t.submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? form_t.submitting : form_t.submit}
      </button>
    </form>
  );
}
