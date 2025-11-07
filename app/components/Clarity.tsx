'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: (...args: any[]) => void;
  }
}

export default function Clarity() {
  useEffect(() => {
    // Replace with your actual Clarity project ID
    const clarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID || '';

    if (!clarityId) {
      console.warn('Clarity project ID not found. Please set NEXT_PUBLIC_MICROSOFT_CLARITY_ID environment variable.');
      return;
    }

    // Clarity script
    (function (c: any, l: any, a: any, r: any, i: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      const t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', clarityId);
  }, []);

  return null;
}

