import { NextResponse } from "next/server";
import { transporter, fromAddress, toAddress } from "@/lib/mailer";
import { buildContactEmailHtml } from "@/lib/emailTemplate";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: {
    type?: string;
    name?: string;
    email?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const type = body.type === "newsletter" ? "newsletter" : "contact";
  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const message = body.message?.trim() || "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (type === "contact") {
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }
  }

  try {
    if (type === "newsletter") {
      await transporter.sendMail({
        from: `"DP Hub" <${fromAddress}>`,
        to: toAddress,
        subject: "New newsletter subscription",
        text: `A new subscriber joined the DP Hub newsletter:\n\n${email}`,
        html: buildNewsletterEmailHtml(email),
      });
    } else {
      await transporter.sendMail({
        from: `"DP Hub" <${fromAddress}>`,
        to: toAddress,
        replyTo: email,
        subject: `New contact message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: buildContactEmailHtml({ name, email, message }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}

function buildNewsletterEmailHtml(email: string) {
  const esc = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeEmail = esc(email);

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Newsletter Subscription</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0B0D10;font-family:'Space Grotesk', Helvetica, Arial, sans-serif;-webkit-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D10;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#12151A;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
                <span style="font-size:20px;font-weight:700;color:#E8EAED;letter-spacing:0.5px;">DP<span style="color:#3DDC97;">Hub</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 8px 0;font-size:24px;font-weight:700;color:#E8EAED;line-height:1.3;">New newsletter subscription</h1>
                <p style="margin:0 0 24px 0;font-size:15px;color:#8B919A;">A new subscriber has joined the DP Hub newsletter.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D10;border:1px solid rgba(255,255,255,0.08);border-radius:8px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <span style="font-size:11px;font-weight:600;color:#8B919A;letter-spacing:0.1em;text-transform:uppercase;">Subscriber email</span>
                      <div style="font-size:16px;font-weight:600;color:#3DDC97;margin-top:3px;">${safeEmail}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#0B0D10;padding:20px 32px;border-top:1px solid rgba(255,255,255,0.08);">
                <p style="margin:0;font-size:12px;color:#8B919A;text-align:center;">DP Hub — Digital Productivity Hub, Aba, Abia State, Nigeria.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}