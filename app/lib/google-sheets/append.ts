import { getSheetsClient, getSpreadsheetId } from './client';
import { GOOGLE_SHEET_NAMES, type FormType } from './config';
import { GoogleSheetsError } from './errors';

export { GoogleSheetsError } from './errors';

function submittedAt(): string {
  return new Date().toISOString();
}

function cell(value: string | number | undefined | null): string {
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

/** Escape sheet name for A1 notation (handles spaces e.g. "Product Request"). */
function sheetRange(sheetName: string): string {
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!A:A`;
}

export function buildNewsletterRow(email: string, source: string): string[] {
  return [submittedAt(), cell(email), cell(source)];
}

export function buildSupportRow(fullName: string, email: string, message: string): string[] {
  return [submittedAt(), cell(fullName), cell(email), cell(message)];
}

export function buildProductRequestRow(data: {
  name: string;
  email: string;
  company?: string;
  productType: string;
  description: string;
  useCase: string;
  priority: string;
}): string[] {
  return [
    submittedAt(),
    cell(data.name),
    cell(data.email),
    cell(data.company),
    cell(data.productType),
    cell(data.description),
    cell(data.useCase),
    cell(data.priority),
  ];
}

export function buildFeedbackRow(data: {
  name: string;
  email: string;
  feedbackType: string;
  subject?: string;
  message: string;
  rating: number;
  easeOfUse?: number;
  recommend?: string;
  product?: string;
}): string[] {
  return [
    submittedAt(),
    cell(data.name),
    cell(data.email),
    cell(data.feedbackType),
    cell(data.subject),
    cell(data.message),
    data.rating > 0 ? String(data.rating) : '',
    data.easeOfUse && data.easeOfUse > 0 ? String(data.easeOfUse) : '',
    cell(data.recommend),
    cell(data.product),
  ];
}

export function sheetNameForForm(formType: FormType): string {
  return GOOGLE_SHEET_NAMES[formType];
}

export async function appendToGoogleSheet(sheetName: string, row: string[]): Promise<void> {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetRange(sheetName),
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });
  } catch (error) {
    if (error instanceof GoogleSheetsError) {
      throw error;
    }

    const message = error instanceof Error ? error.message : 'Unknown Google Sheets error';
    console.error('Google Sheets API error:', error);
    throw new GoogleSheetsError(`Failed to save to Google Sheets: ${message}`);
  }
}
