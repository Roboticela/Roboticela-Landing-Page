import { google } from 'googleapis';

import { GoogleSheetsError } from './errors';

type ServiceAccountCredentials = {
  client_email: string;
  private_key: string;
};

function parsePrivateKey(key: string): string {
  return key.replace(/\\n/g, '\n');
}

function getCredentials(): ServiceAccountCredentials {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (json) {
    try {
      const parsed = JSON.parse(json) as ServiceAccountCredentials;
      if (!parsed.client_email || !parsed.private_key) {
        throw new Error('Missing client_email or private_key');
      }
      return {
        client_email: parsed.client_email,
        private_key: parsePrivateKey(parsed.private_key),
      };
    } catch {
      throw new GoogleSheetsError(
        'GOOGLE_SERVICE_ACCOUNT_JSON is invalid. Paste the full service account JSON.'
      );
    }
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.trim();

  if (!clientEmail || !privateKey) {
    throw new GoogleSheetsError(
      'Google Sheets is not configured. Set GOOGLE_SPREADSHEET_ID and either GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY.'
    );
  }

  return {
    client_email: clientEmail,
    private_key: parsePrivateKey(privateKey),
  };
}

export function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SPREADSHEET_ID?.trim();
  if (!id) {
    throw new GoogleSheetsError('GOOGLE_SPREADSHEET_ID is not set.');
  }
  return id;
}

export function getSheetsClient() {
  const credentials = getCredentials();

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}
