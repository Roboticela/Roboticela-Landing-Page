import { NextRequest, NextResponse } from 'next/server';

interface ContactBody {
  fullName: string;
  email: string;
  message: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Optional: send email when SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;

    if (smtpHost && smtpUser && smtpPass) {
      const nodemailer = await import('nodemailer');
      const port = Number(process.env.SMTP_PORT) || 587;
      const secure = process.env.SMTP_SECURE === 'true';
      const toEmail = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER;
      const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port,
        secure,
        auth: { user: smtpUser, pass: smtpPass },
      });

      const subject = `Roboticela Contact: from ${fullName}`;
      const text = [
        `From: ${fullName}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n');

      const html = [
        '<p><strong>From:</strong> ' + escapeHtml(fullName) + '</p>',
        '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
        '<p><strong>Message:</strong></p>',
        '<pre style="white-space:pre-wrap;font-family:inherit;">' + escapeHtml(message) + '</pre>',
      ].join('\n');

      await transporter.sendMail({
        from,
        to: toEmail,
        replyTo: email,
        subject,
        text,
        html,
      });
    }
    // If SMTP is not configured, we still return success so the form doesn't break in dev

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send message.', message },
      { status: 500 }
    );
  }
}
