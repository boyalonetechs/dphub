import nodemailer from "nodemailer";

const smtpConfig = {
  host: process.env.SMTP_HOST || "",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== "false",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
};

export const transporter = nodemailer.createTransport(smtpConfig);

export const fromAddress = process.env.SMTP_USER || "";
export const toAddress = process.env.CONTACT_TO_EMAIL || "";
