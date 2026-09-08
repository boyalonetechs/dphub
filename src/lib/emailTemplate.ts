export function buildContactEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const esc = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = esc(name);
  const safeEmail = esc(email);
  const safeMessage = esc(message).replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Contact Message</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0B0D10;font-family:400 16px/1.6 'Space Grotesk', Helvetica, Arial, sans-serif;-webkit-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D10;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#12151A;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color:#12151A;padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" style="font-size:0;">
                      <span style="display:inline-block;font-size:20px;font-weight:700;color:#E8EAED;letter-spacing:0.5px;">DP<span style="color:#3DDC97;">Hub</span></span>
                    </td>
                    <td align="right" style="font-size:0;">
                      <span style="display:inline-block;font-size:11px;font-weight:600;color:#8B919A;letter-spacing:0.12em;text-transform:uppercase;background-color:rgba(61,220,151,0.1);border:1px solid rgba(61,220,151,0.25);padding:5px 10px;border-radius:4px;">New message</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 8px 0;font-size:24px;font-weight:700;color:#E8EAED;line-height:1.3;">You have a new contact form submission</h1>
                <p style="margin:0 0 28px 0;font-size:15px;color:#8B919A;">A visitor reached out through the DP Hub contact form.</p>

                <!-- Sender details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                  <tr>
                    <td style="padding:0 0 14px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D10;border:1px solid rgba(255,255,255,0.08);border-radius:8px;">
                        <tr>
                          <td style="padding:18px 20px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-bottom:12px;">
                                  <span style="font-size:11px;font-weight:600;color:#8B919A;letter-spacing:0.1em;text-transform:uppercase;">Name</span>
                                  <div style="font-size:16px;font-weight:600;color:#E8EAED;margin-top:3px;">${safeName}</div>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom:12px;">
                                  <span style="font-size:11px;font-weight:600;color:#8B919A;letter-spacing:0.1em;text-transform:uppercase;">Email</span>
                                  <div style="font-size:16px;font-weight:600;color:#3DDC97;margin-top:3px;">${safeEmail}</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 0 10px 0;">
                      <span style="font-size:11px;font-weight:600;color:#8B919A;letter-spacing:0.1em;text-transform:uppercase;">Message</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#0B0D10;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:18px 20px;">
                      <p style="margin:0;font-size:15px;color:#E8EAED;line-height:1.7;">${safeMessage}</p>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                  <tr>
                    <td align="center">
                      <a href="mailto:${safeEmail}" style="display:inline-block;background-color:#3DDC97;color:#0B0D10;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.3px;">Reply to sender</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
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
