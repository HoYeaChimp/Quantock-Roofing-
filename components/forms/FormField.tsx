"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type?:
    | "text"
    | "email"
    | "tel"
    | "textarea"
    | "select"
    | "date"
    | "time"
    | "checkbox";
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  required?: boolean;
  error?: string;
  hint?: string;
  placeholder?: string;
  options?: Option[];
  autoComplete?: string;
  rows?: number;
  className?: string;
}

/** Accessible labelled field with error + hint wiring (aria-describedby) */
export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  error,
  hint,
  placeholder,
  options = [],
  autoComplete,
  rows = 4,
  className,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const baseInput = cn(
    "w-full rounded-2xl border bg-surface px-4 py-3 text-[0.9375rem] text-foreground placeholder:text-muted-foreground/70 transition-colors",
    "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
    error ? "border-danger" : "border-border"
  );

  if (type === "checkbox") {
    return (
      <div className={className}>
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={error ? true : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-border accent-[var(--primary)]"
          />
          <span className="text-muted-foreground">
            {label}
            {required ? <span aria-hidden="true"> *</span> : null}
          </span>
        </label>
        {hint ? (
          <p id={hintId} className="mt-1.5 pl-8 text-xs text-muted-foreground">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="mt-1.5 pl-8 text-xs font-medium text-danger">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      {hint ? (
        <p id={hintId} className="mb-1.5 text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          rows={rows}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={baseInput}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={cn(baseInput, "appearance-none")}
        >
          <option value="">Please choose…</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={baseInput}
        />
      )}

      {error ? (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
