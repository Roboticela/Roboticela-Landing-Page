'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function formatDate(date: Date): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export default function PrivacyPage() {
  const effectiveDate = new Date();
  const lastUpdated = new Date();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <Navbar />
      
      <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/30 dark:border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Privacy Policy & Terms of Data Processing
            </h1>

            <div className="text-sm text-slate-600 dark:text-gray-400 mb-8 space-y-1">
              <p><strong>Effective Date: {formatDate(effectiveDate)}</strong></p>
              <p><strong>Last Updated: {formatDate(lastUpdated)}</strong></p>
            </div>

            <hr className="border-white/20 dark:border-white/10 mb-8" />

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed space-y-6">
                
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    Preamble & Acceptance
                  </h2>
                  <p>
                    By accessing, using, or interacting with any services, websites, applications, platforms, or digital properties operated by or associated with Roboticela (collectively, the <strong>"Services"</strong>), you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and Terms of Data Processing (this <strong>"Policy"</strong>). If you do not agree with any part of this Policy, you must immediately discontinue all use of the Services and exit any websites or applications associated with Roboticela.
                  </p>
                  <p>
                    <strong>Roboticela</strong> (referred to as <strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>, or <strong>"Company"</strong>) reserves the right to modify this Policy at any time, in our sole discretion, without prior notice. Your continued use of the Services after any modifications constitutes your acceptance of the modified Policy. It is your responsibility to review this Policy periodically for changes.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    1. Scope & Definitions
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    1.1 Applicability
                  </h3>
                  <p>
                    This Policy applies to all interactions, communications, transactions, and engagements between you and Roboticela, regardless of the medium, platform, device, or method of interaction. This includes, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>All websites, web applications, mobile applications, and digital platforms operated by Roboticela</li>
                    <li>All services, products, solutions, and offerings provided by Roboticela across any industry or sector</li>
                    <li>All communications, whether electronic, written, or verbal</li>
                    <li>All data processing activities conducted by or on behalf of Roboticela</li>
                    <li>All third-party integrations, partnerships, and collaborations</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    1.2 Definitions
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 mt-4">
                    <li><strong>"Personal Information"</strong> means any information that can be used to identify, contact, or locate an individual, directly or indirectly, including but not limited to names, addresses, email addresses, phone numbers, identification numbers, location data, online identifiers, and any other information that may be considered personal data under applicable laws.</li>
                    <li><strong>"Non-Personal Information"</strong> means information that cannot be used to identify an individual, including aggregated data, anonymized data, statistical data, and de-identified information.</li>
                    <li><strong>"Services"</strong> means all services, products, platforms, websites, applications, and offerings provided by Roboticela, without limitation.</li>
                    <li><strong>"Third Parties"</strong> means any entity, individual, organization, or service provider that is not directly controlled by Roboticela.</li>
                    <li><strong>"You"</strong> or <strong>"User"</strong> means any individual, entity, organization, or representative who accesses, uses, or interacts with the Services.</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    2. Information Collection & Processing
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    2.1 General Collection Practices
                  </h3>
                  <p>
                    Roboticela may collect, process, store, transmit, and use information in various forms and from various sources. By using the Services, you expressly consent to the collection and processing of information as described in this Policy, and you acknowledge that such collection and processing may occur without additional notice to you.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    2.2 Types of Information Collected
                  </h3>
                  <p>
                    Roboticela may collect, without limitation, the following categories of information:
                  </p>
                  
                  <p className="mt-4"><strong>A. Directly Provided Information:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Contact details (names, addresses, email addresses, phone numbers, social media handles)</li>
                    <li>Account credentials and authentication information</li>
                    <li>Payment and financial information</li>
                    <li>Communications and correspondence</li>
                    <li>Content, files, documents, and data you upload, submit, or transmit</li>
                    <li>Preferences, settings, and configurations</li>
                    <li>Feedback, reviews, and survey responses</li>
                    <li>Employment, educational, and professional information</li>
                    <li>Any other information you voluntarily provide</li>
                  </ul>

                  <p className="mt-4"><strong>B. Automatically Collected Information:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Device information (hardware, software, operating systems, browsers)</li>
                    <li>Network information (IP addresses, connection types, service providers)</li>
                    <li>Usage data (pages visited, features used, time spent, interactions)</li>
                    <li>Location data (approximate or precise, derived from various sources)</li>
                    <li>Log files, error reports, and diagnostic information</li>
                    <li>Cookies, web beacons, pixels, and similar tracking technologies</li>
                    <li>Device identifiers, advertising identifiers, and unique identifiers</li>
                    <li>Behavioral data, patterns, and analytics</li>
                  </ul>

                  <p className="mt-4"><strong>C. Information from Third Parties:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Information from service providers, partners, and vendors</li>
                    <li>Information from social media platforms and networks</li>
                    <li>Information from public records and publicly available sources</li>
                    <li>Information from data brokers and information aggregators</li>
                    <li>Information from government agencies and regulatory bodies</li>
                    <li>Information from other users or entities who may provide information about you</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    2.3 Collection Methods
                  </h3>
                  <p>
                    Roboticela may collect information through various methods, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Direct submission through forms, applications, or interfaces</li>
                    <li>Automated collection through cookies, tracking technologies, and analytics tools</li>
                    <li>Integration with third-party services and platforms</li>
                    <li>Public records and publicly available information</li>
                    <li>Communications and correspondence</li>
                    <li>Transactions and interactions</li>
                    <li>Any other lawful method of collection</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    3. Use of Information
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.1 Permitted Uses
                  </h3>
                  <p>
                    Roboticela may use collected information for any lawful purpose, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Providing, operating, maintaining, and improving the Services</li>
                    <li>Processing transactions, requests, and communications</li>
                    <li>Authenticating users and managing accounts</li>
                    <li>Personalizing experiences and content</li>
                    <li>Communicating with users (marketing, administrative, transactional)</li>
                    <li>Conducting research, analysis, and analytics</li>
                    <li>Developing new products and services</li>
                    <li>Detecting, preventing, and addressing fraud, security threats, and illegal activities</li>
                    <li>Complying with legal obligations, regulations, and court orders</li>
                    <li>Enforcing terms of service, policies, and agreements</li>
                    <li>Protecting rights, property, and safety</li>
                    <li>Business operations, management, and administration</li>
                    <li>Marketing, advertising, and promotional activities</li>
                    <li>Sharing with third parties as described in this Policy</li>
                    <li>Any other purpose disclosed at the time of collection or with your consent</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.2 No Limitation on Use
                  </h3>
                  <p>
                    Roboticela reserves the right to use information in any manner not expressly prohibited by applicable law. The uses described in this Policy are illustrative and not exhaustive. Roboticela may use information for purposes not specifically described in this Policy, provided such use is lawful.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.3 De-identified and Aggregated Information
                  </h3>
                  <p>
                    Roboticela may create, use, share, and commercialize de-identified, anonymized, or aggregated information for any purpose without restriction or obligation to you.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    4. Information Sharing & Disclosure
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.1 General Sharing Practices
                  </h3>
                  <p>
                    Roboticela may share, disclose, transfer, or provide access to information to third parties for any lawful purpose, without limitation, including but not limited to:
                  </p>
                  
                  <p className="mt-4"><strong>A. Service Providers & Vendors:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Cloud service providers, hosting providers, and infrastructure providers</li>
                    <li>Analytics providers, including Google Analytics and Microsoft Clarity, for website usage analysis, user behavior tracking, and service improvement</li>
                    <li>Data processors and technology vendors</li>
                    <li>Payment processors, financial institutions, and transaction processors</li>
                    <li>Marketing and advertising partners</li>
                    <li>Customer support and service providers</li>
                    <li>Security and fraud prevention providers</li>
                    <li>Any other third-party service provider engaged by Roboticela</li>
                  </ul>

                  <p className="mt-4"><strong>B. Business Partners & Affiliates:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Affiliated companies, subsidiaries, and related entities</li>
                    <li>Joint venture partners and strategic partners</li>
                    <li>Business partners and collaborators</li>
                    <li>Referral partners and marketing partners</li>
                  </ul>

                  <p className="mt-4"><strong>C. Legal & Regulatory Disclosures:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Government agencies, regulatory bodies, and law enforcement</li>
                    <li>Courts, tribunals, and legal proceedings</li>
                    <li>In response to subpoenas, warrants, court orders, or legal process</li>
                    <li>To comply with applicable laws, regulations, and legal obligations</li>
                    <li>To protect rights, property, safety, and security</li>
                    <li>In connection with legal claims, disputes, and investigations</li>
                  </ul>

                  <p className="mt-4"><strong>D. Business Transfers:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>In connection with mergers, acquisitions, sales, or transfers of assets</li>
                    <li>In connection with financing, investment, or corporate transactions</li>
                    <li>To successors, assigns, or transferees of business operations</li>
                  </ul>

                  <p className="mt-4"><strong>E. With Your Consent:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>As directed by you or with your explicit consent</li>
                    <li>As disclosed at the time of collection</li>
                    <li>As otherwise permitted by you</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.2 No Limitation on Sharing
                  </h3>
                  <p>
                    Roboticela reserves the right to share information with any third party for any lawful purpose, subject only to applicable legal restrictions. The categories of third parties described in this Policy are illustrative and not exhaustive.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.3 Third-Party Services
                  </h3>
                  <p>
                    The Services may integrate with, link to, or incorporate third-party services, platforms, and applications. When you interact with third-party services, your information may be collected, processed, and used by such third parties in accordance with their own privacy policies and terms. Roboticela is not responsible for the privacy practices, data collection, or data use of third parties. Your interactions with third-party services are at your own risk.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    5. Data Security & Protection
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.1 Security Measures
                  </h3>
                  <p>
                    Roboticela implements various technical, administrative, and organizational measures intended to protect information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet, method of electronic storage, or security measure is completely secure or impenetrable.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.2 No Guarantee of Security
                  </h3>
                  <p>
                    YOU ACKNOWLEDGE AND AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Roboticela cannot and does not guarantee the absolute security of any information</li>
                    <li>Information transmission and storage involve inherent risks</li>
                    <li>Unauthorized access, use, disclosure, alteration, or destruction may occur despite security measures</li>
                    <li>You use the Services and transmit information at your own risk</li>
                    <li>Roboticela is not liable for any security breaches, unauthorized access, or data loss</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.3 Your Responsibilities
                  </h3>
                  <p>
                    You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>Using secure networks and devices when accessing the Services</li>
                    <li>Not sharing your account information with others</li>
                    <li>Promptly notifying Roboticela of any suspected security breaches</li>
                    <li>Taking appropriate measures to protect your own information</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    6. Data Retention & Deletion
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.1 Retention Period
                  </h3>
                  <p>
                    Roboticela may retain information for as long as necessary or useful for business purposes, legal compliance, dispute resolution, or as required or permitted by applicable law. Roboticela is not obligated to delete information upon request if retention is required by law, necessary for business operations, or for other legitimate purposes.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.2 Deletion Requests
                  </h3>
                  <p>
                    While you may request deletion of certain information, Roboticela reserves the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Retain information as required by law or regulation</li>
                    <li>Retain information necessary for business operations</li>
                    <li>Retain information for legal compliance, dispute resolution, or enforcement</li>
                    <li>Retain de-identified, anonymized, or aggregated information</li>
                    <li>Retain information that has been shared with third parties (which may be beyond our control)</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.3 Backup and Archive Systems
                  </h3>
                  <p>
                    Information may be stored in backup systems, archives, or other systems that may not be immediately accessible or deletable. Roboticela is not obligated to delete information from such systems.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    7. Your Rights & Choices
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.1 Limited Rights
                  </h3>
                  <p>
                    Depending on your jurisdiction and applicable laws, you may have certain rights regarding your information, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>The right to access information</li>
                    <li>The right to correct or update information</li>
                    <li>The right to request deletion of information</li>
                    <li>The right to object to certain processing</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.2 Exercise of Rights
                  </h3>
                  <p>
                    To exercise any rights you may have, contact Roboticela using the information provided in the "Contact Information" section below. Roboticela will respond to requests in accordance with applicable law, but reserves the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Verify your identity before processing requests</li>
                    <li>Charge reasonable fees for excessive or repetitive requests</li>
                    <li>Deny requests that are not required by law or that would compromise others' rights</li>
                    <li>Take reasonable time to process requests</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.3 Opt-Out Options
                  </h3>
                  <p><strong>Marketing Communications:</strong> You may opt out of marketing communications by following unsubscribe instructions in communications or by contacting us. Opting out may not affect transactional or administrative communications.</p>
                  <p className="mt-4"><strong>Cookies and Tracking:</strong> Most browsers allow you to control cookies and tracking technologies through browser settings. However, disabling cookies may affect functionality of the Services. We use third-party analytics services, including Google Analytics and Microsoft Clarity, which use cookies and similar technologies to analyze website usage, track user behavior, and improve user experience. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at: https://tools.google.com/dlpage/gaoptout. For Microsoft Clarity, you can manage your preferences through your browser settings or by contacting us.</p>
                  <p className="mt-4"><strong>Do Not Track:</strong> Roboticela does not currently respond to "Do Not Track" signals. We use third-party analytics services (including Google Analytics and Microsoft Clarity) that may continue to track your activities even if you have enabled DNT in your browser settings. These services collect information about your use of the Services in accordance with their respective privacy policies.</p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.4 No Guarantee of Rights
                  </h3>
                  <p>
                    Roboticela makes no guarantee that your rights will be honored beyond what is required by applicable law. Your rights may vary by jurisdiction and may be limited by business needs, legal obligations, or technical constraints.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    8. International Data Transfers
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    8.1 Global Operations
                  </h3>
                  <p>
                    Roboticela operates globally, and information may be transferred to, stored in, and processed in countries other than your country of residence. By using the Services, you consent to such transfers.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    8.2 Different Legal Standards
                  </h3>
                  <p>
                    Data protection laws vary by jurisdiction. Information transferred to other countries may be subject to different legal standards and protections than those in your country. Roboticela is not responsible for ensuring that transferred information receives the same level of protection as in your country.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    9. Children's Privacy
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    9.1 Age Restrictions
                  </h3>
                  <p>
                    The Services are not intended for individuals under the age of 13 (or the applicable age of majority in your jurisdiction). Roboticela does not knowingly collect information from children under 13. If you are under 13, do not use the Services or provide any information to Roboticela.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    9.2 Parental Responsibility
                  </h3>
                  <p>
                    If you are a parent or guardian and believe your child has provided information to Roboticela, contact us immediately. However, Roboticela is not responsible for information provided by minors without proper authorization.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    10. Third-Party Links & Services
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    10.1 Third-Party Content
                  </h3>
                  <p>
                    The Services may contain links to third-party websites, services, or content. Roboticela is not responsible for the privacy practices, content, or data collection of third parties. Your interactions with third parties are solely between you and such third parties.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    10.2 No Endorsement
                  </h3>
                  <p>
                    The inclusion of links or references to third-party services does not constitute endorsement by Roboticela. Roboticela disclaims all liability for third-party services, content, and practices.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    11. Changes to This Policy
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.1 Modification Rights
                  </h3>
                  <p>
                    Roboticela reserves the right to modify, update, or change this Policy at any time, in our sole discretion, without prior notice. Changes will be effective immediately upon posting or as otherwise indicated.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.2 Your Responsibility
                  </h3>
                  <p>
                    It is your responsibility to review this Policy periodically for changes. Your continued use of the Services after changes constitutes acceptance of the modified Policy.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.3 No Notice Required
                  </h3>
                  <p>
                    Roboticela is not obligated to provide individual notice of changes, except as required by applicable law.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    12. Disclaimers & Limitations
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.1 No Warranties
                  </h3>
                  <p>
                    ROBOTICELA PROVIDES THE SERVICES AND PROCESSES INFORMATION "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.2 Limitation of Liability
                  </h3>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ROBOTICELA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO THIS POLICY, THE SERVICES, OR THE COLLECTION, USE, OR DISCLOSURE OF INFORMATION, REGARDLESS OF THE THEORY OF LIABILITY.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.3 Maximum Liability
                  </h3>
                  <p>
                    If Roboticela is found liable for any damages, our total liability shall not exceed the amount you paid to Roboticela in the six (6) months preceding the claim, or fifty U.S. dollars ($50), whichever is greater.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.4 Indemnification
                  </h3>
                  <p>
                    You agree to indemnify, defend, and hold harmless Roboticela, its affiliates, officers, directors, employees, agents, and representatives from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services, violation of this Policy, or violation of any rights of another.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    13. Governing Law & Dispute Resolution
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.1 Governing Law
                  </h3>
                  <p>
                    This Policy shall be governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.2 Jurisdiction
                  </h3>
                  <p>
                    Any disputes arising out of or related to this Policy or the Services shall be subject to the exclusive jurisdiction of the courts located in Pakistan.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.3 Class Action Waiver
                  </h3>
                  <p>
                    You agree that any disputes will be resolved individually, and you waive any right to participate in class actions, collective actions, or representative proceedings.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    14. Severability & Waiver
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.1 Severability
                  </h3>
                  <p>
                    If any provision of this Policy is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.2 Waiver
                  </h3>
                  <p>
                    No waiver of any provision of this Policy shall be effective unless in writing and signed by Roboticela. Failure to enforce any provision shall not constitute a waiver.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    15. Entire Agreement
                  </h2>
                  <p>
                    This Policy, together with any other agreements or terms you have with Roboticela, constitutes the entire agreement between you and Roboticela regarding privacy and data processing, superseding all prior agreements or understandings.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    16. Contact Information
                  </h2>
                  <p>
                    For questions, concerns, or requests regarding this Policy or Roboticela's data practices, you may contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> <a href="mailto:contact@roboticela.com" className="text-teal-600 dark:text-teal-400 hover:underline">contact@roboticela.com</a>
                  </p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
                    <strong>Note:</strong> Roboticela reserves the right to respond to inquiries in a reasonable time frame and is not obligated to respond to every inquiry. Responses may be limited by legal, business, or technical constraints.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    17. Acknowledgment
                  </h2>
                  <p>
                    BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS POLICY, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS. IF YOU DO NOT AGREE, YOU MUST IMMEDIATELY DISCONTINUE USE OF THE SERVICES.
                  </p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
                    <strong>This Policy is effective as of the date stated above and applies to all information collected, processed, or used by Roboticela, regardless of when such information was collected.</strong>
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <p className="text-sm text-slate-600 dark:text-gray-400 italic mt-8">
                  This Privacy Policy is provided for informational purposes. It does not create any contractual or legal obligations beyond what is required by applicable law. Roboticela reserves all rights not expressly granted herein.
                </p>

              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

