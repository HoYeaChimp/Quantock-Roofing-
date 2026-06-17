import { NextResponse } from "next/server";

const RATE_LIMIT = 8;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > RATE_LIMIT;
}

const clean = (v: unknown, max = 2000): string =>
  String(v ?? "")
    .replace(/[\x00-\x1f]/g, " ")
    .trim()
    .slice(0, max);

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }

  if (clean(body.company_website) || clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone || body.contact, 120);
  const email = clean(body.email, 160);

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Please tell us your name." },
      { status: 400 },
    );
  }

  if (!phone && !email) {
    return NextResponse.json(
      { ok: false, error: "Please include a phone number or email so we can reply." },
      { status: 400 },
    );
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    formType: clean(body.formType, 40) || "website_form",
    service: clean(body.service, 120),
    details: clean(body.details || body.message || body.notes, 2000),
    area: clean(body.area, 120),
    postcode: clean(body.postcode, 30),
    urgency: clean(body.urgency, 80),
    budget: clean(body.budget, 120),
    date: clean(body.date, 40),
    time: clean(body.time, 40),
    preferredContact: clean(body.preferredContact, 60),
    name,
    phone,
    email,
    consent: body.consent === true,
    page: clean(body.page, 300),
  };

  const location = [lead.area, lead.postcode].filter(Boolean).join(" ") || "not given";
  const subject = `New Quantock Roofing ${lead.formType}: ${lead.service || "enquiry"} - ${location}`;
  const textBody = Object.entries(lead).map(([key, value]) => `${key}: ${value}`).join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.LEAD_NOTIFICATION_EMAIL ??
    process.env.LEAD_TO_EMAIL ??
    "quantockroofing@gmail.com";
  const fromEmail =
    process.env.LEAD_FROM_EMAIL ?? "Website Leads <website@quantockroofing.co.uk>";
  const formspreeId = process.env.FORMSPREE_FORM_ID;

  try {
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email || undefined,
          subject,
          text: textBody,
        }),
      });

      if (!res.ok) {
        console.error("Lead email failed:", await res.text());
        return NextResponse.json(
          { ok: false, error: "Email delivery failed. Please call or WhatsApp us." },
          { status: 502 },
        );
      }
    } else if (formspreeId) {
      const endpoint = formspreeId.startsWith("http")
        ? formspreeId
        : `https://formspree.io/f/${formspreeId}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...lead,
          _replyto: email || undefined,
          _subject: subject,
        }),
      });

      if (!res.ok) {
        console.error("Formspree delivery failed:", await res.text());
        return NextResponse.json(
          { ok: false, error: "Delivery failed. Please call or WhatsApp us." },
          { status: 502 },
        );
      }
    } else {
      console.log(`New lead (no delivery configured): ${subject}\n${textBody}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead handler error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error. Please call or WhatsApp us." },
      { status: 500 },
    );
  }
}
