import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export class EmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmailError';
  }
}

export function isEmailConfigured(): boolean {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim() ?? process.env.SMTP_PASSWORD?.trim();
  return Boolean(host && user && pass);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getTransportOptions(): SMTPTransport.Options {
  const host = process.env.SMTP_HOST!.trim();
  const user = process.env.SMTP_USER!.trim();
  const pass = (process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD)!.trim();
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true';

  return {
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: !secure && port === 587,
    tls: {
      minVersion: 'TLSv1.2',
    },
  };
}

function getFromAddress(): string {
  const from = process.env.SMTP_FROM?.trim() || process.env.SMTP_USER!.trim();
  return `"Roboticela" <${from}>`;
}

function getToAddress(): string {
  return process.env.CONTACT_EMAIL?.trim() || process.env.SMTP_USER!.trim();
}

export async function sendNotificationEmail(options: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  if (!isEmailConfigured()) {
    return;
  }

  const transporter = nodemailer.createTransport(getTransportOptions());

  try {
    await transporter.verify();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'SMTP verification failed';
    console.error('SMTP verify failed:', error);
    throw new EmailError(
      `Email server connection failed. Check SMTP_HOST, SMTP_USER, and SMTP_PASS. (${message})`
    );
  }

  try {
    await transporter.sendMail({
      from: getFromAddress(),
      to: getToAddress(),
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Send failed';
    console.error('SMTP send failed:', error);
    throw new EmailError(`Failed to send email notification. (${message})`);
  }
}

export function linesToHtml(lines: Record<string, string | number | undefined>): string {
  return Object.entries(lines)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(
      ([key, value]) =>
        `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(String(value))}</p>`
    )
    .join('\n');
}

export function linesToText(lines: Record<string, string | number | undefined>): string {
  return Object.entries(lines)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

export async function sendSupportEmail(data: {
  fullName: string;
  email: string;
  message: string;
}): Promise<void> {
  const fields = {
    Name: data.fullName,
    Email: data.email,
    Message: data.message,
  };

  await sendNotificationEmail({
    subject: `Support — ${data.fullName}`,
    text: linesToText(fields),
    html: linesToHtml(fields),
    replyTo: data.email,
  });
}

export async function sendNewsletterEmail(data: { email: string; source: string }): Promise<void> {
  const fields = { Email: data.email, Source: data.source };

  await sendNotificationEmail({
    subject: `Newsletter signup — ${data.email}`,
    text: linesToText(fields),
    html: linesToHtml(fields),
    replyTo: data.email,
  });
}

export async function sendProductRequestEmail(data: {
  name: string;
  email: string;
  company?: string;
  productType: string;
  description: string;
  useCase: string;
  priority: string;
}): Promise<void> {
  const fields = {
    Name: data.name,
    Email: data.email,
    Company: data.company,
    'Product type': data.productType,
    Priority: data.priority,
    Description: data.description,
    'Use case': data.useCase,
  };

  await sendNotificationEmail({
    subject: `Product request — ${data.name}`,
    text: linesToText(fields),
    html: linesToHtml(fields),
    replyTo: data.email,
  });
}

export async function sendFeedbackEmail(data: {
  name: string;
  email: string;
  feedbackType: string;
  subject?: string;
  message: string;
  rating: number;
  easeOfUse?: number;
  recommend?: string;
  product?: string;
}): Promise<void> {
  const fields = {
    Name: data.name,
    Email: data.email,
    Type: data.feedbackType,
    Subject: data.subject,
    'Overall rating': data.rating,
    'Ease of use': data.easeOfUse && data.easeOfUse > 0 ? data.easeOfUse : undefined,
    Recommend: data.recommend,
    'Product / page': data.product,
    Message: data.message,
  };

  await sendNotificationEmail({
    subject: `Feedback — ${data.name} (${data.feedbackType})`,
    text: linesToText(fields),
    html: linesToHtml(fields),
    replyTo: data.email,
  });
}
