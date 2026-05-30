'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Send } from 'lucide-react';

import { easeOut } from '../components/animations';
import ButtonLoader from '../components/ButtonLoader';
import { formInputClass, formTextareaClass } from '../lib/form-input';
import { submitForm } from '../lib/submit-form';
import CustomSelect from '../components/CustomSelect';
import PageHero from '../components/PageHero';
import SitePageLayout from '../components/SitePageLayout';

const productTypeOptions = [
  { value: 'software', label: 'Software / Web Application' },
  { value: 'mobile', label: 'Mobile Application' },
  { value: 'hardware', label: 'Hardware Device' },
  { value: 'ai', label: 'AI-Powered Tool' },
  { value: 'automation', label: 'Automation / Robotics' },
  { value: 'enterprise', label: 'Enterprise System' },
  { value: 'education', label: 'Educational Platform' },
  { value: 'other', label: 'Other' },
];

const priorityOptions = [
  { value: 'low', label: 'Low — Just an idea' },
  { value: 'medium', label: 'Medium — Planning phase' },
  { value: 'high', label: 'High — Need it soon' },
  { value: 'urgent', label: 'Urgent — Need it ASAP' },
];

export default function ProductRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productType: '',
    description: '',
    useCase: '',
    priority: 'medium',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const result = await submitForm('productRequest', { ...formData });

    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      productType: '',
      description: '',
      useCase: '',
      priority: 'medium',
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setField = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SitePageLayout>
      <PageHero
        eyebrow="Products"
        title="Request a"
        titleAccent="Product."
        description="We're always building something new. Tell us what you're looking for, and we'll make it happen."
        icon={Lightbulb}
      />

      <section className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
          className="bg-card/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-border/40"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={formInputClass}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={formInputClass}
                  placeholder="john@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={formInputClass}
                  placeholder="Your Company"
                />
              </div>

              <CustomSelect
                id="productType"
                name="productType"
                label="Product Type *"
                value={formData.productType}
                onChange={(value) => setField('productType', value)}
                options={productTypeOptions}
                placeholder="Select a category"
                required
              />

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                  Product Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={formTextareaClass}
                  placeholder="Describe the product you need. What problem does it solve? What features should it have?"
                />
              </div>

              {/* Use Case */}
              <div>
                <label htmlFor="useCase" className="block text-sm font-semibold text-foreground mb-2">
                  Use Case / Industry *
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={formTextareaClass}
                  placeholder="How will you use this product? What industry or field is it for?"
                />
              </div>

              <CustomSelect
                id="priority"
                name="priority"
                label="Priority Level"
                value={formData.priority}
                onChange={(value) => setField('priority', value)}
                options={priorityOptions}
              />

              {/* Submit Button */}
              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted || submitting}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-background rounded-full font-semibold text-lg transition-all duration-300 inline-flex flex-row flex-nowrap items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <ButtonLoader label="Sending..." variant="onPrimary" />
                  ) : submitted ? (
                    'Request Sent!'
                  ) : (
                    <span className="inline-flex flex-row flex-nowrap items-center gap-2">
                      Submit Request
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
                className="mt-6 p-4 bg-green-500/10 border border-green-500/40 rounded-xl text-center"
              >
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Thank you! We&apos;ve received your product request and will get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
              <p className="text-foreground/70">Response Time</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Custom Solutions</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/40 text-center">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <p className="text-foreground/70">Possibilities</p>
            </div>
          </motion.div>
      </section>
    </SitePageLayout>
  );
}
