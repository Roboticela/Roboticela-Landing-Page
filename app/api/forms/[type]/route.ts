import { NextRequest, NextResponse } from 'next/server';

import {
  EmailError,
  isEmailConfigured,
  sendFeedbackEmail,
  sendNewsletterEmail,
  sendProductRequestEmail,
  sendSupportEmail,
} from '../../../lib/email';
import {
  appendToGoogleSheet,
  buildFeedbackRow,
  buildNewsletterRow,
  buildProductRequestRow,
  buildSupportRow,
  GoogleSheetsError,
  sheetNameForForm,
} from '../../../lib/google-sheets/append';
import { isFormType } from '../../../lib/google-sheets/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  const { type } = await context.params;

  if (!isFormType(type)) {
    return NextResponse.json({ error: 'Invalid form type.' }, { status: 404 });
  }

  try {
    const body = await request.json();

    if (type === 'newsletter') {
      const email = typeof body.email === 'string' ? body.email.trim() : '';
      const source =
        typeof body.source === 'string' && body.source.trim()
          ? body.source.trim()
          : 'website';

      if (!email || !EMAIL_RE.test(email)) {
        return badRequest('A valid email is required.');
      }

      await appendToGoogleSheet(
        sheetNameForForm('newsletter'),
        buildNewsletterRow(email, source)
      );
      await sendNewsletterEmail({ email, source });
    }

    if (type === 'support') {
      const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
      const email = typeof body.email === 'string' ? body.email.trim() : '';
      const supportFor = typeof body.supportFor === 'string' ? body.supportFor.trim() : '';
      const message = typeof body.message === 'string' ? body.message.trim() : '';

      if (!fullName || !email || !supportFor || !message) {
        return badRequest('Full name, email, support for, and message are required.');
      }
      if (!EMAIL_RE.test(email)) {
        return badRequest('A valid email is required.');
      }

      await appendToGoogleSheet(
        sheetNameForForm('support'),
        buildSupportRow(fullName, email, supportFor, message)
      );
      await sendSupportEmail({ fullName, email, supportFor, message });
    }

    if (type === 'productRequest') {
      const name = typeof body.name === 'string' ? body.name.trim() : '';
      const email = typeof body.email === 'string' ? body.email.trim() : '';
      const company = typeof body.company === 'string' ? body.company.trim() : '';
      const productType = typeof body.productType === 'string' ? body.productType.trim() : '';
      const description = typeof body.description === 'string' ? body.description.trim() : '';
      const useCase = typeof body.useCase === 'string' ? body.useCase.trim() : '';
      const priority =
        typeof body.priority === 'string' && body.priority.trim()
          ? body.priority.trim()
          : 'medium';

      if (!name || !email || !productType || !description || !useCase) {
        return badRequest('Name, email, product type, description, and use case are required.');
      }
      if (!EMAIL_RE.test(email)) {
        return badRequest('A valid email is required.');
      }

      await appendToGoogleSheet(
        sheetNameForForm('productRequest'),
        buildProductRequestRow({
          name,
          email,
          company,
          productType,
          description,
          useCase,
          priority,
        })
      );
      await sendProductRequestEmail({
        name,
        email,
        company,
        productType,
        description,
        useCase,
        priority,
      });
    }

    if (type === 'feedback') {
      const name = typeof body.name === 'string' ? body.name.trim() : '';
      const email = typeof body.email === 'string' ? body.email.trim() : '';
      const feedbackType = typeof body.feedbackType === 'string' ? body.feedbackType.trim() : '';
      const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
      const message = typeof body.message === 'string' ? body.message.trim() : '';
      const rating = typeof body.rating === 'number' ? body.rating : Number(body.rating);
      const easeOfUse =
        typeof body.easeOfUse === 'number' ? body.easeOfUse : Number(body.easeOfUse) || 0;
      const recommend = typeof body.recommend === 'string' ? body.recommend.trim() : '';
      const product = typeof body.product === 'string' ? body.product.trim() : '';

      if (!name || !email || !feedbackType || !message) {
        return badRequest('Name, email, feedback type, and message are required.');
      }
      if (!EMAIL_RE.test(email)) {
        return badRequest('A valid email is required.');
      }
      if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
        return badRequest('Overall rating (1–5) is required.');
      }

      await appendToGoogleSheet(
        sheetNameForForm('feedback'),
        buildFeedbackRow({
          name,
          email,
          feedbackType,
          subject,
          message,
          rating,
          easeOfUse,
          recommend,
          product,
        })
      );
      await sendFeedbackEmail({
        name,
        email,
        feedbackType,
        subject,
        message,
        rating,
        easeOfUse,
        recommend,
        product,
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: isEmailConfigured(),
    });
  } catch (error) {
    if (error instanceof GoogleSheetsError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    if (error instanceof EmailError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    console.error(`Form submission error (${type}):`, error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again later.' },
      { status: 500 }
    );
  }
}
