import { NextRequest, NextResponse } from 'next/server';

import { EmailError, sendSupportEmail } from '../../lib/email';
import {
  appendToGoogleSheet,
  buildSupportRow,
  GoogleSheetsError,
  sheetNameForForm,
} from '../../lib/google-sheets/append';

interface ContactBody {
  fullName: string;
  email: string;
  message: string;
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

    await appendToGoogleSheet(
      sheetNameForForm('support'),
      buildSupportRow(fullName, email, message)
    );

    await sendSupportEmail({ fullName, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof GoogleSheetsError || error instanceof EmailError) {
      return NextResponse.json(
        { error: error.message },
        { status: 503 }
      );
    }
    console.error('Contact form error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send message.', message },
      { status: 500 }
    );
  }
}
