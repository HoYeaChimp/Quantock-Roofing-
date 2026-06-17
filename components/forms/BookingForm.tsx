"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { submitLead } from "@/lib/utils";
import {
  trackBookingClick,
  trackFormError,
  trackFormStart,
  trackFormSubmit,
  trackLead,
} from "@/lib/tracking";
import { FormField } from "@/components/forms/FormField";
import { FormError } from "@/components/forms/FormError";
import { SuccessMessage } from "@/components/forms/SuccessMessage";
import { Button } from "@/components/ui/Button";

/** Booking / callback enquiry form */
export function BookingForm() {
  const [values, setValues] = useState({
    service: "",
    date: "",
    time: "",
    preferredContact: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
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
      trackFormStart("booking_form");
    }
    setValues((prev) => ({ ...prev, [key]: v }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!values.name.trim()) {
      setError("Please tell us your name.");
      trackFormError("booking_form", "missing_name");
      return;
    }
    if (!values.phone.trim() && !values.email.trim()) {
      setError("Please add a phone number or email so we can confirm your callback.");
      trackFormError("booking_form", "missing_contact");
      return;
    }
    if (!values.consent) {
      setError("Please confirm you're happy for us to contact you about this booking.");
      trackFormError("booking_form", "missing_consent");
      return;
    }

    setSubmitting(true);
    const result = await submitLead({
      formType: "booking_form",
      ...values,
      company_website: values.honeypot,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);

    if (result.ok) {
      trackFormSubmit("booking_form");
      trackBookingClick("booking_form");
      trackLead({ lead_type: "booking", form: "booking_form" });
      setSuccess(true);
    } else {
      setError(result.error || "Something went wrong — please try again.");
      trackFormError("booking_form", "api_error");
    }
  };

  if (success) {
    return (
      <SuccessMessage
        title="Callback request received"
        message="We'll confirm your time as soon as practical, or suggest the closest available slot."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium space-y-5 p-7 sm:p-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Book a callback</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Pick a time that suits you — we&apos;ll call you. {site.defaultReassurance}
        </p>
      </div>

      {error ? <FormError message={error} /> : null}

      <FormField
        label="Which service is this about?"
        name="service"
        type="select"
        value={values.service}
        onChange={set("service")}
        options={[
          ...services.map((s) => ({ value: s.slug, label: s.name })),
          { value: "not-sure", label: "Not sure yet — need advice" },
        ]}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Preferred date"
          name="date"
          type="date"
          value={values.date}
          onChange={set("date")}
        />
        <FormField
          label="Preferred time"
          name="time"
          type="select"
          value={values.time}
          onChange={set("time")}
          options={[
            { value: "morning", label: "Morning (8am – 12pm)" },
            { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
            { value: "evening", label: "Evening (5pm – 7pm)" },
            { value: "any", label: "Any time" },
          ]}
        />
      </div>
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
        ]}
      />
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
        label="Anything we should know?"
        name="notes"
        type="textarea"
        rows={3}
        value={values.notes}
        onChange={set("notes")}
      />
      <FormField
        label="I'm happy to be contacted to arrange this callback."
        name="consent"
        type="checkbox"
        value={values.consent}
        onChange={set("consent")}
        required
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
        {submitting ? "Sending…" : "Request my callback"}
      </Button>
    </form>
  );
}
