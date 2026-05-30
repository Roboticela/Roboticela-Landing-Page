'use client';

import { Search, X } from 'lucide-react';

import { formInputCardClass } from '../lib/form-input';

type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
};

export default function ProductSearch({
  value,
  onChange,
  placeholder = 'Search products...',
  className = 'mb-12',
  ariaLabel = 'Search products',
}: ProductSearchProps) {
  return (
    <div className={`relative max-w-xl mx-auto ${className}`}>
      <Search
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 w-5 h-5 text-foreground/50 pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="text"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={`relative w-full pl-12 pr-12 py-4 rounded-full backdrop-blur-sm ${formInputCardClass}`}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
