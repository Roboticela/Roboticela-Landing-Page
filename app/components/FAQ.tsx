'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly does Roboticela do?',
    answer: 'Everything. We don\'t limit ourselves to one industry or product type. If it can improve your life, we\'re working on it. From software to hardware, research to experiences—we build it all.',
  },
  {
    question: 'How is Roboticela different from other companies?',
    answer: 'We don\'t choose between digital and physical, software and hardware. We build it all, and we build it beautifully. The future doesn\'t fit in boxes, and neither do we.',
  },
  {
    question: 'Can I use Roboticela products for my business?',
    answer: 'Absolutely. We serve individuals, startups, and enterprises with solutions that scale. Whatever your size or needs, we have tools designed to help you succeed.',
  },
  {
    question: 'How do I stay updated on new releases?',
    answer: 'Subscribe to our newsletter or follow us on social media for the latest updates. We\'re constantly innovating and releasing new products and features.',
  },
  {
    question: 'Do you offer enterprise solutions?',
    answer: 'Yes. We provide enterprise-grade solutions with bank-level security, scalable architecture, and dedicated support. Our systems are built to grow with your business.',
  },
  {
    question: 'What makes Roboticela products special?',
    answer: 'Every product is crafted with care. We pour attention into every detail because you deserve products that feel personal, not mass-produced. Beautiful by design, crafted with care.',
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/40 backdrop-blur-md rounded-xl border border-border/40 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/70 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-foreground/70">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about Roboticela
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
