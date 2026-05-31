'use client';

import { useSyncExternalStore } from 'react';

export type ThemeMode = 'light' | 'dark';

/** Dark is the site default; only `data-theme="light"` selects light mode. */
function readTheme(): ThemeMode {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function subscribe(onStoreChange: () => void): () => void {
  const obs = new MutationObserver(onStoreChange);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => obs.disconnect();
}

/**
 * Subscribes to `data-theme` on `<html>`.
 * Server snapshot is always `dark` so hydration matches SSR even when the
 * layout script applies a saved theme from localStorage before React loads.
 */
export function useTheme(): ThemeMode {
  return useSyncExternalStore(subscribe, readTheme, () => 'dark');
}
