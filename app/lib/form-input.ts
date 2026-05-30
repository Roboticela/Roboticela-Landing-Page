/** Shared form field styles — autofill colors come from globals.css theme variables */

const base =
  'border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors';

/** Standard inputs on `bg-background` (default autofill surface) */
export const formInputClass = `w-full px-4 py-3 bg-background ${base}`;

/** Inputs on card-tinted surfaces (footer newsletter, search, etc.) */
export const formInputCardClass = `w-full bg-card/60 autofill-surface-card ${base}`;

export const formTextareaClass = `${formInputClass} resize-none`;
