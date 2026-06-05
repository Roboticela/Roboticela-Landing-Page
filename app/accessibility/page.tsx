'use client';

import LegalPageLayout from '../components/LegalPageLayout';
import { Accessibility } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const effectiveDate = new Date();
  const lastUpdated = new Date();

  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Built for everyone, without exception."
      description="Technology that excludes people isn't finished. Ours is designed for every ability, every context, every person."
      icon={Accessibility}
      effectiveDate={effectiveDate}
      lastUpdated={lastUpdated}
    >
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8 first:mt-0">
          Our Commitment
        </h2>
        <p>
          Roboticela is committed to ensuring that our websites, applications, products, and digital experiences are accessible to people of all abilities. We believe technology should adapt to people—not the other way around—and accessibility is a core part of how we design, build, and improve everything we ship.
        </p>
        <p>
          This Accessibility Statement describes our approach, the standards we aim to meet, and how you can request assistance or report barriers when using our Services.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          1. Scope
        </h2>
        <p>This statement applies to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Websites and landing pages operated by Roboticela</li>
          <li>Web and mobile applications we publish or maintain</li>
          <li>Digital content, documentation, and marketing materials we control</li>
          <li>New features and products as they are released</li>
        </ul>
        <p className="mt-4">
          Some third-party content, integrations, or linked services may not fully meet the same standards. Where we do not control those experiences, we work with partners when possible to improve accessibility over time.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          2. Standards & Conformance
        </h2>
        <p>
          We aim to conform to the{' '}
          <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> published by the World Wide Web Consortium (W3C), where applicable to our digital properties.
        </p>
        <p className="mt-4">Our design and engineering practices include, where reasonably possible:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Semantic HTML and meaningful structure for assistive technologies</li>
          <li>Sufficient color contrast and support for theme preferences</li>
          <li>Keyboard-accessible navigation and visible focus indicators</li>
          <li>Text alternatives for meaningful non-text content</li>
          <li>Responsive layouts that work across screen sizes and zoom levels</li>
          <li>Clear labels, instructions, and error messages in forms</li>
        </ul>
        <p className="mt-4 text-sm text-foreground/60">
          Complete conformance across every page and product is an ongoing goal. We prioritize fixes that have the greatest impact for users with disabilities.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          3. Visual Accessibility
        </h2>
        <p>We design for users with visual impairments, including low vision and color-vision differences, by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Supporting high-contrast themes and system-level appearance settings where feasible</li>
          <li>Avoiding information conveyed by color alone</li>
          <li>Using readable type sizes and scalable layouts</li>
          <li>Testing compatibility with common screen readers and browser zoom</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          4. Hearing & Audio
        </h2>
        <p>For users who are deaf or hard of hearing, we strive to provide:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Captions or transcripts for video and audio content we produce</li>
          <li>Visual alternatives to sound-only notifications where appropriate</li>
          <li>Text-based communication options through our support channels</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          5. Motor & Navigation
        </h2>
        <p>We support users who navigate without a mouse or use alternative input devices by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Ensuring core flows are operable via keyboard</li>
          <li>Providing sufficiently large touch targets on mobile interfaces</li>
          <li>Minimizing reliance on complex gestures for essential tasks</li>
          <li>Allowing users adequate time to complete interactions where timeouts apply</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          6. Cognitive Accessibility
        </h2>
        <p>We aim to make our experiences understandable and predictable by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Using clear language and consistent navigation patterns</li>
          <li>Organizing content with descriptive headings and labels</li>
          <li>Helping users recover from errors with actionable guidance</li>
          <li>Avoiding unnecessary distraction in critical user flows</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          7. Assistive Technologies
        </h2>
        <p>
          We test our experiences with commonly used assistive technologies and modern browsers, including screen readers, voice control, and platform accessibility APIs. Because configurations vary, we cannot guarantee identical behavior in every environment, but we welcome reports when something does not work as expected.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          8. Known Limitations
        </h2>
        <p>
          Despite our efforts, some areas of our Services may not yet be fully accessible. Examples may include legacy pages, embedded third-party widgets, user-generated content, or features under active development. We document and prioritize remediation as we become aware of issues.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          9. Feedback & Assistance
        </h2>
        <p>
          If you encounter an accessibility barrier on any Roboticela property, or if you need content in an alternative format, please contact us. We take accessibility feedback seriously and will work in good faith to provide a reasonable response.
        </p>
        <p className="mt-4">
          <Link href="/support" className="text-primary font-medium hover:underline">
            Contact our support team
          </Link>{' '}
          and include &ldquo;Accessibility&rdquo; in your message, along with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>The page or product where you experienced the issue</li>
          <li>A description of the barrier</li>
          <li>Your browser, device, and assistive technology (if applicable)</li>
        </ul>
      </section>

      <hr className="border-border/40 my-8" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          10. Continuous Improvement
        </h2>
        <p>
          Accessibility is not a one-time project. We train our teams on inclusive design, include accessibility in our review processes, and update this statement as our practices evolve. We may revise this Accessibility Statement at any time; the effective and last updated dates at the top of this page indicate the current version.
        </p>
      </section>

      <hr className="border-border/40 my-8" />

      <p className="text-sm text-foreground/60 italic mt-8">
        Thank you for helping us build products that work beautifully—for everyone.
      </p>
    </LegalPageLayout>
  );
}
