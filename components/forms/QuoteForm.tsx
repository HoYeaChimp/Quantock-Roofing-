"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { submitLead } from "@/lib/utils";
import { createWhatsAppLink, quoteWhatsAppMessage } from "@/lib/whatsapp";
import {
  trackFormError,
  trackFormStart,
  trackFormSubmit,
  trackLead,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { FormField } from "@/components/forms/FormField";
import { FormError } from "@/components/forms/FormError";
import { SuccessMessage } from "@/components/forms/SuccessMessage";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const STEPS = [
  "What do you need?",
  "Where are you based?",
  "How soon?",
  "How should we contact you?",
  "Review & send",
];

/**
 * Progressive 5-step quote form.
 * Short steps + progress indicator = far less intimidating than one long form.
 */
export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    service: "",
    details: "",
    area: "",
    postcode: "",
    urgency: "",
    budget: "",
    name: "",
    contact: "",
    preferredContact: "",
    consent: false,
    honeypot: "",
  });
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const set = (key: keyof typeof values) => (v: string | boolean) => {
    if (!started) {
      setStarted(true);
      trackFormStart("quote_form");
    }
    setValues((prev) => ({ ...prev, [key]: v }));
  };

  const validateStep = (): string => {
    if (step === 0 && !values.service)
      return "Please choose a service (or 'Not sure yet').";
    if (step === 1 && !values.area)
      return "Please choose your area (or 'Somewhere else / not listed').";
    if (step === 2 && !values.urgency) return "Please choose a rough timescale.";
    if (step === 3) {
      if (!values.name.trim()) return "Please tell us your name.";
      if (!values.contact.trim())
        return "Please add a phone number or email so we can send your quote.";
    }
    if (step === 4 && !values.consent)
      return "Please confirm you're happy for us to contact you about your quote.";
    return "";
  };

  const next = () => {
    const message = validateStep();
    if (message) {
      setError(message);
      trackFormError("quote_form", `step_${step + 1}_invalid`);
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = validateStep();
    if (message) {
      setError(message);
      trackFormError("quote_form", "consent_missing");
      return;
    }

    setSubmitting(true);
    const result = await submitLead({
      formType: "quote_form",
      ...values,
      company_website: values.honeypot,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);

    if (result.ok) {
      trackFormSubmit("quote_form");
      trackQuoteClick("quote_form");
      trackLead({ lead_type: "quote", form: "quote_form" });
      setSuccess(true);
    } else {
      setError(result.error || "Something went wrong — please try again.");
      trackFormError("quote_form", "api_error");
    }
  };

  if (success) {
    return (
      <SuccessMessage
        title="Quote request received"
        message="We'll review your details and come back with a clear quote, inspection option or practical next step."
      />
    );
  }

  const serviceLabel =
    services.find((s) => s.slug === values.service)?.name ||
    (values.service === "not-sure" ? "Not sure yet" : "—");
  const areaLabel =
    serviceAreas.find((a) => a.slug === values.area)?.name ||
    (values.area === "other" ? "Somewhere else" : "—");

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium p-7 sm:p-8">
      {/* Progress */}
      <div className="mb-7">
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
          <span aria-live="polite">
            Step {step + 1} of {STEPS.length}
          </span>
          <span>{STEPS[step]}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {error ? (
        <div className="mb-5">
          <FormError message={error} />
        </div>
      ) : null}

      {/* Step 1 — what */}
      <div className={cn("space-y-5", step !== 0 && "hidden")}>
        <FormField
          label="What do you need help with?"
          name="service"
          type="select"
          value={values.service}
          onChange={set("service")}
          required
          options={[
            ...services.map((s) => ({ value: s.slug, label: s.name })),
            { value: "not-sure", label: "Not sure yet — I'd like advice" },
          ]}
        />
        <FormField
          label="Any details that would help?"
          name="details"
          type="textarea"
          rows={3}
          value={values.details}
          onChange={set("details")}
          placeholder="A sentence or two is plenty — photos can come later by WhatsApp."
        />
      </div>

      {/* Step 2 — where */}
      <div className={cn("space-y-5", step !== 1 && "hidden")}>
        <FormField
          label="Which area are you in?"
          name="area"
          type="select"
          value={values.area}
          onChange={set("area")}
          required
          options={[
            ...serviceAreas.map((a) => ({ value: a.slug, label: a.name })),
            { value: "other", label: "Somewhere else / not listed" },
          ]}
        />
        <FormField
          label="Postcode"
          name="postcode"
          value={values.postcode}
          onChange={set("postcode")}
          autoComplete="postal-code"
          hint="Helps us confirm coverage and response times."
        />
      </div>

      {/* Step 3 — when */}
      <div className={cn("space-y-5", step !== 2 && "hidden")}>
        <FormField
          label="How soon do you need help?"
          name="urgency"
          type="select"
          value={values.urgency}
          onChange={set("urgency")}
          required
          options={[
            { value: "asap", label: "As soon as possible / urgent" },
            { value: "weeks", label: "In the next few weeks" },
            { value: "months", label: "In the next 1–3 months" },
            { value: "exploring", label: "Just exploring options" },
          ]}
        />
        <FormField
          label="Rough budget or timeline in mind?"
          name="budget"
          value={values.budget}
          onChange={set("budget")}
          placeholder="Totally fine to leave blank"
        />
      </div>

      {/* Step 4 — contact */}
      <div className={cn("space-y-5", step !== 3 && "hidden")}>
        <FormField
          label="Your name"
          name="name"
          value={values.name}
          onChange={set("name")}
          required
          autoComplete="name"
        />
        <FormField
          label="Phone or email"
          name="contact"
          value={values.contact}
          onChange={set("contact")}
          required
          placeholder="Whichever you prefer"
          hint="Only used to send your quote — never for spam."
        />
        <FormField
          label="How should we contact you?"
          name="preferredContact"
          type="select"
          value={values.preferredContact}
          onChange={set("preferredContact")}
          options={[
            { value: "phone", label: "Phone call" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "email", label: "Email" },
            { value: "any", label: "Whatever is easiest" },
          ]}
        />
      </div>

      {/* Step 5 — review */}
      <div className={cn("space-y-5", step !== 4 && "hidden")}>
        <div className="rounded-2xl border border-border bg-surface-elevated p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Quick review
          </h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Service</dt>
              <dd className="font-semibold">{serviceLabel}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Area</dt>
              <dd className="font-semibold">{areaLabel}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Timing</dt>
              <dd className="font-semibold">{values.urgency || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Contact</dt>
              <dd className="font-semibold">
                {values.name} · {values.contact}
              </dd>
            </div>
          </dl>
        </div>
        <FormField
          label="I'm happy to be contacted about this quote."
          name="consent"
          type="checkbox"
          value={values.consent}
          onChange={set("consent")}
          required
          hint="We only use your details to respond to this enquiry."
        />
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={values.honeypot}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, honeypot: e.target.value }))
            }
          />
        </label>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={back}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next}>
            Continue
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" size="lg" disabled={submitting}>
            {submitting ? "Sending…" : "Send my quote request"}
          </Button>
        )}
      </div>

      <p className="mt-5 text-center text-xs text-muted-foreground">
        {site.defaultReassurance}
      </p>
      <p className="mt-2 text-center text-sm">
        Prefer not to fill in a form?{" "}
        <a
          href={createWhatsAppLink({
            message: quoteWhatsAppMessage(),
            page: "quote_form",
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-success underline"
          onClick={() => trackWhatsAppClick("quote_form")}
        >
          Send a quick WhatsApp instead
        </a>
      </p>
    </form>
  );
}
