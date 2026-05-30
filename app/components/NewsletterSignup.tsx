'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';

type NewsletterSignupProps = {
  className?: string;
  size?: 'default' | 'large';
};

export default function NewsletterSignup({
  className = '',
  size = 'default',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    size === 'large'
      ? 'flex-1 px-6 py-4 bg-background border border-border/40 rounded-full text-foreground text-lg placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors'
      : 'flex-1 px-6 py-3 bg-card/60 border border-border/40 rounded-full text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors';

  const buttonClass =
    size === 'large'
      ? 'px-10 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shrink-0 disabled:opacity-50'
      : 'px-8 py-3 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold transition-all duration-300 shrink-0 disabled:opacity-50';

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
          disabled={submitted}
        />
        <motion.button
          type="submit"
          disabled={submitted}
          className={buttonClass}
          whileTap={{ scale: 0.98 }}
        >
          {submitted ? (
            <>
              <Check className="w-5 h-5" />
              Subscribed!
            </>
          ) : (
            <>
              Subscribe
              {size === 'large' && <Send className="w-5 h-5" />}
            </>
          )}
        </motion.button>
      </form>

      {submitted && (
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
