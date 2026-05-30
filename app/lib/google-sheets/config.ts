export const GOOGLE_SHEET_NAMES = {
  newsletter: 'Newsletter',
  support: 'Support',
  productRequest: 'Product Request',
  feedback: 'Feedback',
} as const;

export type FormType = keyof typeof GOOGLE_SHEET_NAMES;

/** Column headers — row 1 in each tab of the "Roboticela" spreadsheet. */
export const SHEET_HEADERS = {
  [GOOGLE_SHEET_NAMES.newsletter]: ['Submitted At', 'Email', 'Source'],
  [GOOGLE_SHEET_NAMES.support]: ['Submitted At', 'Full Name', 'Email', 'Message'],
  [GOOGLE_SHEET_NAMES.productRequest]: [
    'Submitted At',
    'Name',
    'Email',
    'Company',
    'Product Type',
    'Description',
    'Use Case',
    'Priority',
  ],
  [GOOGLE_SHEET_NAMES.feedback]: [
    'Submitted At',
    'Name',
    'Email',
    'Feedback Type',
    'Subject',
    'Message',
    'Overall Rating',
    'Ease Of Use',
    'Would Recommend',
    'Product Or Page',
  ],
} as const;

export const FORM_TYPES = Object.keys(GOOGLE_SHEET_NAMES) as FormType[];

export function isFormType(value: string): value is FormType {
  return FORM_TYPES.includes(value as FormType);
}
