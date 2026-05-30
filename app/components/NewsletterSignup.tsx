'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Send } from 'lucide-react';

import { formInputCardClass, formInputClass } from '../lib/form-input';
import { submitForm } from '../lib/submit-form';
import ButtonLoader from './ButtonLoader';

type NewsletterSignupProps = {
  className?: string;
  size?: 'default' | 'large';
  /** Where the signup came from — stored in the Newsletter sheet. */
  source?: string;
};

export default function NewsletterSignup({
  className = '',
  size = 'default',
  source = 'footer',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const result = await submitForm('newsletter', { email: email.trim(), source });

    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    size === 'large'
      ? `flex-1 px-6 py-4 rounded-full text-lg ${formInputClass}`
      : `flex-1 px-6 py-3 rounded-full ${formInputCardClass}`;

  const buttonClass =
    'inline-flex flex-row flex-nowrap items-center justify-center gap-2 shrink-0 whitespace-nowrap bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300 disabled:opacity-50 ' +
    (size === 'large' ? 'px-10 py-4 text-lg' : 'px-8 py-3');

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className={inputClass}
          required
          disabled={submitted || submitting}
        />
        <motion.button
          type="submit"
          disabled={submitted || submitting}
          className={buttonClass}
          whileTap={{ scale: 0.98 }}
        >
          {submitting ? (
            <ButtonLoader variant="onPrimary" size={size === 'large' ? 'md' : 'sm'} />
          ) : submitted ? (
            <span className="inline-flex flex-row flex-nowrap items-center gap-2">
              <Check className="w-5 h-5 shrink-0" />
              Subscribed!
            </span>
          ) : (
            <span className="inline-flex flex-row flex-nowrap items-center gap-2">
              Subscribe
              {size === 'large' && <Send className="w-5 h-5 shrink-0" />}
            </span>
          )}
        </motion.button>
      </form>

      {error && (
        <p className="flex items-center justify-center gap-2 text-sm text-red-600 mt-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </p>
      )}

      {submitted && !error && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-primary font-medium mt-4"
        >
          You&apos;re on the list. Welcome to the Empire.
        </motion.p>
      )}
    </div>
  );
}
