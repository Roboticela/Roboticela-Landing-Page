'use client';

import { useState } from 'react';
import PageHero from '../components/PageHero';
import SitePageLayout from '../components/SitePageLayout';
import CustomSelect from '../components/CustomSelect';
import StarRating from '../components/StarRating';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';
import ButtonLoader from '../components/ButtonLoader';
import { formInputClass, formTextareaClass } from '../lib/form-input';
import { submitForm } from '../lib/submit-form';

const feedbackTypeOptions = [
  { value: 'general', label: 'General feedback' },
  { value: 'question', label: 'Question' },
  { value: 'bug', label: 'Bug or issue' },
  { value: 'feature', label: 'Feature idea' },
  { value: 'product', label: 'Product experience' },
  { value: 'website', label: 'Website feedback' },
  { value: 'other', label: 'Other' },
];

const recommendOptions = [
  { value: 'definitely', label: 'Definitely — I\'d recommend Roboticela' },
  { value: 'probably', label: 'Probably' },
  { value: 'unsure', label: 'Not sure yet' },
  { value: 'probably-not', label: 'Probably not' },
  { value: 'no', label: 'No' },
];

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    subject: '',
    message: '',
    rating: 0,
    easeOfUse: 0,
    recommend: '',
    product: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const setField = (name: keyof typeof formData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setField(e.target.name as keyof typeof formData, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) return;

    setError('');
    setSubmitting(true);

    const result = await submitForm('feedback', { ...formData });

    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      feedbackType: '',
      subject: '',
      message: '',
      rating: 0,
      easeOfUse: 0,
      recommend: '',
      product: '',
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Feedback"
        title="We'd Love to"
        titleAccent="Hear From You."
        description="Rate your experience, ask a question, or tell us what we can do better. Every response helps us build better products."
        icon={MessageSquare}
      />

        <section className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
            className="bg-card/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-border/40"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <StarRating
                label="Overall experience"
                name="rating"
                value={formData.rating}
                onChange={(value) => setField('rating', value)}
                required
                hint="How would you rate your experience with Roboticela so far?"
              />

              <StarRating
                id="easeOfUse"
                label="Ease of use (optional)"
                name="easeOfUse"
                value={formData.easeOfUse}
                onChange={(value) => setField('easeOfUse', value)}
                hint="How easy was it to find what you needed on our site or products?"
              />

              <CustomSelect
                id="feedbackType"
                name="feedbackType"
                label="Feedback type *"
                value={formData.feedbackType}
                onChange={(value) => setField('feedbackType', value)}
                options={feedbackTypeOptions}
                placeholder="What is this about?"
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={formInputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={formInputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-foreground mb-2">
                  Product or page (optional)
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className={formInputClass}
                  placeholder="e.g. OSI Simulator, Products page, Newsletter"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={formInputClass}
                  placeholder="Short summary of your feedback"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your feedback or question *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={formTextareaClass}
                  placeholder="Share details, steps to reproduce a bug, or the question you’d like us to answer..."
                />
              </div>

              <CustomSelect
                id="recommend"
                name="recommend"
                label="Would you recommend us? (optional)"
                value={formData.recommend}
                onChange={(value) => setField('recommend', value)}
                options={recommendOptions}
                placeholder="Select an option"
              />

              <p className="text-sm text-foreground/50 leading-relaxed">
                Need urgent help? Visit our{' '}
                <Link href="/support" className="text-primary hover:underline">
                  contact page
                </Link>
                . For product ideas, you can also{' '}
                <Link href="/product-request" className="text-primary hover:underline">
                  request a product
                </Link>
                .
              </p>

              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted || submitting || formData.rating === 0}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 inline-flex flex-row flex-nowrap items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <ButtonLoader label="Sending..." variant="onPrimary" />
                  ) : submitted ? (
                    'Thank you — feedback sent!'
                  ) : (
                    <span className="inline-flex flex-row flex-nowrap items-center gap-2">
                      Submit feedback
                      <Send className="w-5 h-5 shrink-0" />
                    </span>
                  )}
                </button>
              </div>
            </form>

            {submitted && !error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-xl text-center"
              >
                <p className="text-foreground font-medium">
                  We&apos;ve received your feedback and appreciate you taking the time to help us improve.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
    </SitePageLayout>
  );
}
