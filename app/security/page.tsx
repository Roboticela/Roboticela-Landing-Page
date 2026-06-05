'use client';

import LegalPageLayout from '../components/LegalPageLayout';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  const effectiveDate = new Date();
  const lastUpdated = new Date();

  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Your trust is built into the architecture."
      description="We don't treat security as a feature. We treat it as a foundation."
      icon={Shield}
      effectiveDate={effectiveDate}
      lastUpdated={lastUpdated}
    >
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8 first:mt-0">
          Our Commitment
        </h2>
        <p>
          Roboticela takes the security of our users, customers, and partners seriously. We design our products and infrastructure with security in mind from the start, and we continuously work to reduce risk as threats and technologies evolve.
        </p>
        <p>
          This Security Overview describes our general approach to protecting information and systems. It is intended to provide transparency—not to serve as a contractual agreement. For terms governing your use of our Services, see our{' '}
          <Link href="/terms" className="text-primary font-medium hover:underline">
            Terms of Service
          </Link>
          . For how we handle personal information, see our{' '}
          <Link href="/privacy" className="text-primary font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          1. Scope
        </h2>
        <p>This overview applies to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Roboticela websites, applications, and digital platforms we operate</li>
          <li>Data processed in connection with our products and services</li>
          <li>Internal systems and workflows used to develop and support our offerings</li>
        </ul>
        <p className="mt-4">
          Third-party services, integrations, or links may be governed by their own security practices. We evaluate partners carefully and require appropriate safeguards where we share or receive data.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          2. Data Protection
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-6">
          2.1 Encryption
        </h3>
        <p>
          We use industry-standard encryption to help protect data in transit and at rest, where applicable. Communications between your browser or device and our services typically use TLS (HTTPS). Stored data may be encrypted depending on the system, sensitivity of the information, and operational requirements.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-6">
          2.2 Access Controls
        </h3>
        <p>
          Access to production systems and sensitive data is limited to authorized personnel who need it to perform their roles. We apply principles of least privilege and review access periodically.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-6">
          2.3 Privacy by Design
        </h3>
        <p>
          Security and privacy work together. We aim to collect only what we need, retain it only as long as necessary, and build features that respect user control over their information.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          3. Infrastructure & Operations
        </h2>
        <p>Our operational security practices include, where appropriate:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Monitoring systems for unusual activity and potential incidents</li>
          <li>Regular updates and patching of software dependencies</li>
          <li>Secure development practices and code review</li>
          <li>Backups and recovery planning for critical services</li>
          <li>Vendor due diligence for cloud and service providers we rely on</li>
        </ul>
        <p className="mt-4 text-sm text-foreground/60">
          Specific architectures and providers may vary by product and may change over time without notice in this document.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          4. Application Security
        </h2>
        <p>We work to reduce vulnerabilities in the software we ship by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Following secure coding guidelines and common best practices</li>
          <li>Testing applications before release and after significant changes</li>
          <li>Addressing reported security issues based on severity and impact</li>
          <li>Using authentication and session management appropriate to each product</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          5. Compliance & Standards
        </h2>
        <p>
          We design our practices with applicable privacy and security regulations in mind, including requirements that may apply under laws such as the GDPR and CCPA, where relevant to our operations and the data we process.
        </p>
        <p className="mt-4">
          Formal certifications, audits, or attestations may apply to specific products or engagements and are communicated separately when applicable. This page does not constitute a guarantee of certification unless expressly stated in writing.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          6. Incident Response
        </h2>
        <p>
          If we become aware of a security incident that affects personal information or the integrity of our Services, we maintain procedures to investigate, contain, and remediate the issue. Where required by law or contract, we will notify affected parties and regulators in a timely manner.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          7. Your Role in Security
        </h2>
        <p>You can help keep your account and data safe by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Using strong, unique passwords and enabling multi-factor authentication when offered</li>
          <li>Keeping your devices and software up to date</li>
          <li>Not sharing credentials or sensitive access with others</li>
          <li>Reporting suspicious activity to us promptly</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          8. Reporting Security Issues
        </h2>
        <p>
          If you believe you have discovered a security vulnerability in any Roboticela product or service, please report it responsibly. We appreciate good-faith efforts to disclose issues privately so we can investigate and address them.
        </p>
        <p className="mt-4">
          <Link href="/support" className="text-primary font-medium hover:underline">
            Contact our support team
          </Link>{' '}
          with the subject line &ldquo;Security&rdquo; and include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>A description of the vulnerability and steps to reproduce it</li>
          <li>The affected URL, product, or system</li>
          <li>Your contact information (optional, but helpful for follow-up)</li>
        </ul>
        <p className="mt-4 text-sm text-foreground/60">
          Please do not publicly disclose vulnerabilities until we have had a reasonable opportunity to respond.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          9. Updates to This Overview
        </h2>
        <p>
          We may update this Security Overview from time to time to reflect changes in our practices, technologies, or legal requirements. The effective and last updated dates at the top of this page indicate the current version. Continued use of our Services after updates constitutes acceptance of the revised overview where applicable.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <p className="text-sm text-foreground/60 italic mt-8">
        Security is a shared responsibility. Thank you for trusting Roboticela with your data and your work.
      </p>
    </LegalPageLayout>
  );
}
