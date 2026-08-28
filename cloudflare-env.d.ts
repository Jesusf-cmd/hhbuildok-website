declare global {
  interface CloudflareEnv {
    EMAIL?: {
      send(message: {
        to:
          | string
          | { email: string; name?: string }
          | Array<string | { email: string; name?: string }>;
        from: { email: string; name?: string };
        subject: string;
        text?: string;
        html?: string;
        replyTo?: string | { email: string; name?: string };
        attachments?: Array<{
          filename: string;
          type: string;
          content: string | ArrayBuffer | ArrayBufferView;
          disposition: "attachment" | "inline";
          contentId?: string;
        }>;
      }): Promise<{ messageId?: string }>;
    };
    RESEND_API_KEY?: string;
    CONTACT_TO_EMAIL?: string;
    CONTACT_FROM_EMAIL?: string;
  }
}

export {};
