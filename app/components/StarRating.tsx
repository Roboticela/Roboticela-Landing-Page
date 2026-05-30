'use client';

import { Star } from 'lucide-react';

type StarRatingProps = {
  id?: string;
  name: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
  hint?: string;
};

export default function StarRating({
  id = 'rating',
  name,
  label,
  value,
  onChange,
  required = false,
  hint,
}: StarRatingProps) {
  const labels = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

  return (
    <div>
      <label id={`${id}-label`} className="block text-sm font-semibold text-foreground mb-2">
        {label}
        {required && ' *'}
      </label>
      {hint && <p className="text-sm text-foreground/60 mb-3">{hint}</p>}

      <input type="hidden" name={name} value={value || ''} required={required} />

      <div
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        className="flex flex-wrap items-center gap-2"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} out of 5 — ${labels[star - 1]}`}
            onClick={() => onChange(star)}
            className="p-1 rounded-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Star
              className={`w-9 h-9 md:w-10 md:h-10 transition-colors ${
                star <= value
                  ? 'fill-primary text-primary'
                  : 'fill-transparent text-foreground/25 hover:text-foreground/40'
              }`}
              strokeWidth={1.5}
            />
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 text-sm font-medium text-primary">{labels[value - 1]}</span>
        )}
      </div>
    </div>
  );
}
