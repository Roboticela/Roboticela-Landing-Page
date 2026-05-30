'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomSelect from '../components/CustomSelect';
import StarRating from '../components/StarRating';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from '../components/animations';

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

const inputClass =
  'w-full px-4 py-3 bg-background border border-border/40 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40 transition-colors';

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

  const setField = (name: keyof typeof formData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setField(e.target.name as keyof typeof formData, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) return;

    console.log('Feedback:', formData);
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-24 px-4">
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-8 rounded-full bg-primary/15 blur-2xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 3.2, repeat: 1e10, ease: 'easeInOut' }}
                />
                <div className="relative bg-card/50 backdrop-blur-md border border-border/40 rounded-3xl p-6 md:p-8">
                  <MessageSquare className="w-14 h-14 md:w-16 md:h-16 text-primary mx-auto" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Feedback</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
                We&apos;d Love to
                <br />
                <span className="text-primary">Hear From You.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Rate your experience, ask a question, or tell us what we can do better. Every response helps us build better products.
              </p>
            </motion.div>
          </div>
        </section>

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
                    className={inputClass}
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
                    className={inputClass}
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
                  className={inputClass}
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
                  className={inputClass}
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
                  className={`${inputClass} resize-none`}
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted || formData.rating === 0}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    'Thank you — feedback sent!'
                  ) : (
                    <>
                      Submit feedback
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {submitted && (
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
      </main>

      <Footer />
    </div>
  );
}
