export class GoogleSheetsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GoogleSheetsError';
  }
}
