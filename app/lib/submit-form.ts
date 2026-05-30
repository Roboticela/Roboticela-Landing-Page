import type { FormType } from './google-sheets/config';

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitForm(
  type: FormType,
  data: Record<string, unknown>
): Promise<SubmitResult> {
  try {
    const res = await fetch(`/api/forms/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        error:
          (typeof payload.error === 'string' && payload.error) ||
          'Something went wrong. Please try again.',
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
