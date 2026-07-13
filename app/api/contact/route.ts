import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  sanitizeContactForm,
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contact-form";
import { sendContactEmails } from "@/lib/send-contact-email";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormValues;

    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const values = sanitizeContactForm(body);
    const errors = validateContactForm(values);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const { env } = await getCloudflareContext({ async: true });
    await sendContactEmails(env, values);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
