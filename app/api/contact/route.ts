import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  CONTACT_FORM_MAX_FILE_BYTES,
  CONTACT_FORM_MAX_FILES,
  CONTACT_FORM_MAX_TOTAL_ATTACHMENT_BYTES,
  sanitizeContactForm,
  validateContactAttachments,
  validateContactForm,
  type ContactFormAttachment,
  type ContactFormValues,
} from "@/lib/contact-form";
import { sendContactEmails } from "@/lib/send-contact-email";

function parseFormValues(formData: FormData): ContactFormValues {
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    description: String(formData.get("description") ?? ""),
    website: String(formData.get("website") ?? ""),
  };
}

async function parseAttachments(formData: FormData): Promise<ContactFormAttachment[]> {
  const files = formData
    .getAll("projectDocs")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  const attachmentError = validateContactAttachments(files);
  if (attachmentError) {
    throw new Error(attachmentError);
  }

  return Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      type: file.type || "application/octet-stream",
      content: await file.arrayBuffer(),
    })),
  );
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const body = parseFormValues(formData);

    if (body.website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const values = sanitizeContactForm(body);
    const errors = validateContactForm(values);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    let attachments: ContactFormAttachment[] = [];

    try {
      attachments = await parseAttachments(formData);
    } catch (error) {
      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "Unable to process uploaded files.",
        },
        { status: 400 },
      );
    }

    const totalAttachmentBytes = attachments.reduce(
      (total, attachment) => total + attachment.content.byteLength,
      0,
    );

    if (attachments.length > CONTACT_FORM_MAX_FILES) {
      return NextResponse.json(
        { error: `Upload up to ${CONTACT_FORM_MAX_FILES} files.` },
        { status: 400 },
      );
    }

    if (totalAttachmentBytes > CONTACT_FORM_MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: "Combined file size must be under 4 MB." },
        { status: 400 },
      );
    }

    for (const attachment of attachments) {
      if (attachment.content.byteLength > CONTACT_FORM_MAX_FILE_BYTES) {
        return NextResponse.json(
          { error: `"${attachment.filename}" is too large. Each file must be under 4 MB.` },
          { status: 400 },
        );
      }
    }

    const { env } = await getCloudflareContext({ async: true });
    await sendContactEmails(env, values, attachments);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
