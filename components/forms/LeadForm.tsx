"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { submitLead } from "@/lib/utils";
import {
  trackFormError,
  trackFormStart,
  trackFormSubmit,
  trackLead,
} from "@/lib/tracking";
import { FormField } from "@/components/forms/FormField";
import { FormError } from "@/components/forms/FormError";
import { SuccessMessage } from "@/components/forms/SuccessMessage";
import { Button } from "@/components/ui/Button";

interface LeadFormProps {
  /** analytics name, e.g. "service_lead_form" */
  formName?: string;
  /** extra context sent with the lead (service/area name) */
  context?: string;
  title?: string;
}

/**
 * Short lead form (3 fields) used on service and area pages.
 * Low friction: name, one contact detail, optional message.
 */
export function LeadForm({
  formName = "lead_form",
  context,
  title = "Get your free quote",
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const markStarted = () => {
    if (!started) {
      setStarted(true);
      trackFormStart(formName);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !contact.trim()) {
      setError("Please add your name and a phone number or email.");
      trackFormError(formName, "missing_required");
      return;
    }

    setSubmitting(true);
    const result = await submitLead({
      formType: formName,
      name,
      contact,
      message,
      context,
      company_website: honeypot, // honeypot
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);

    if (result.ok) {
      trackFormSubmit(formName);
      trackLead({ lead_type: "form", form: formName });
      setSuccess(true);
    } else {
      setError(result.error || "Something went wrong — please try again.");
      trackFormError(formName, "api_error");
    }
  };

  if (success) return <SuccessMessage />;

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium space-y-5 p-7 sm:p-8">
      <div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {site.defaultReassurance}
        </p>
      </div>

      {error ? <FormError message={error} /> : null}

      <FormField
        label="Your name"
        name="name"
        value={name}
        onChange={(v) => {
          markStarted();
          setName(String(v));
        }}
        required
        autoComplete="name"
        placeholder="e.g. Alex Smith"
      />
      <FormField
        label="Phone or email"
        name="contact"
        value={contact}
        onChange={(v) => {
          markStarted();
          setContact(String(v));
        }}
        required
        autoComplete="tel"
        placeholder="Whichever you prefer"
        hint="We only use this to reply to your enquiry."
      />
      <FormField
        label="What do you need help with?"
        name="message"
        type="textarea"
        rows={3}
        value={message}
        onChange={(v) => {
          markStarted();
          setMessage(String(v));
        }}
        placeholder="A sentence or two is plenty"
      />

      {/* honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <Button type="submit" fullWidth size="lg" disabled={submitting}>
        {submitting ? "Sending…" : "Send my enquiry"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Tell us what you need. We&apos;ll point you in the right direction. See
        our <a href="/privacy" className="underline">privacy policy</a>.
      </p>
    </form>
  );
}
