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

/** Full contact form with preferred contact method + consent */
export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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
      trackFormStart("contact_form");
    }
    setValues((prev) => ({ ...prev, [key]: v }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!values.name.trim()) {
      setError("Please tell us your name.");
      trackFormError("contact_form", "missing_name");
      return;
    }
    if (!values.phone.trim() && !values.email.trim()) {
      setError("Please add a phone number or email so we can reply.");
      trackFormError("contact_form", "missing_contact");
      return;
    }
    if (!values.message.trim()) {
      setError("Please add a short message so we know how to help.");
      trackFormError("contact_form", "missing_message");
      return;
    }
    if (!values.consent) {
      setError("Please confirm you're happy for us to contact you about this enquiry.");
      trackFormError("contact_form", "missing_consent");
      return;
    }

    setSubmitting(true);
    const result = await submitLead({
      formType: "contact_form",
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
      preferredContact: values.preferredContact,
      consent: values.consent,
      company_website: values.honeypot,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);

    if (result.ok) {
      trackFormSubmit("contact_form");
      trackLead({ lead_type: "form", form: "contact_form" });
      setSuccess(true);
    } else {
      setError(result.error || "Something went wrong — please try again.");
      trackFormError("contact_form", "api_error");
    }
  };

  if (success) return <SuccessMessage />;

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium space-y-5 p-7 sm:p-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Send us a message</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {site.defaultReassurance}
        </p>
      </div>

      {error ? <FormError message={error} /> : null}

      <FormField
        label="Your name"
        name="name"
        value={values.name}
        onChange={set("name")}
        required
        autoComplete="name"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
          hint="Phone or email — at least one."
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
        />
      </div>
      <FormField
        label="Your message"
        name="message"
        type="textarea"
        value={values.message}
        onChange={set("message")}
        required
        placeholder="Tell us what you need — a sentence or two is plenty."
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
      <FormField
        label="I'm happy to be contacted about this enquiry."
        name="consent"
        type="checkbox"
        value={values.consent}
        onChange={set("consent")}
        required
        hint="We only use your details to respond to this enquiry."
      />

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

      <Button type="submit" fullWidth size="lg" disabled={submitting}>
        {submitting ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
