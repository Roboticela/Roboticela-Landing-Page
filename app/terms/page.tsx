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

export default function TermsPage() {
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
              Terms of Service & User Agreement
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
                    Preamble & Binding Agreement
                  </h2>
                  <p className="font-semibold text-slate-900 dark:text-white mb-4">
                    IMPORTANT - PLEASE READ CAREFULLY:
                  </p>
                  <p>
                    These Terms of Service and User Agreement (this <strong>"Agreement"</strong> or these <strong>"Terms"</strong>) constitute a legally binding contract between you (referred to as <strong>"User"</strong>, <strong>"you"</strong>, <strong>"your"</strong>, or <strong>"Customer"</strong>) and Roboticela (referred to as <strong>"Roboticela"</strong>, <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). By accessing, browsing, using, registering for, or otherwise interacting with any services, websites, applications, platforms, software, products, or offerings provided by or associated with Roboticela (collectively, the <strong>"Services"</strong>), you acknowledge that you have read, understood, and agree to be bound by all terms and conditions contained in this Agreement.
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    IF YOU DO NOT AGREE TO ALL TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MUST IMMEDIATELY DISCONTINUE ALL USE OF THE SERVICES AND EXIT ANY WEBSITES OR APPLICATIONS ASSOCIATED WITH ROBOTICELA.
                  </p>
                  <p className="mt-4">
                    This Agreement, together with our Privacy Policy and any other policies, guidelines, or agreements referenced herein, constitutes the entire agreement between you and Roboticela regarding your use of the Services and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings, whether written or oral.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    1. Acceptance & Modification of Terms
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    1.1 Acceptance
                  </h3>
                  <p>
                    By using the Services, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>You are at least 18 years of age (or the age of majority in your jurisdiction)</li>
                    <li>You have the legal capacity and authority to enter into this Agreement</li>
                    <li>You will comply with all applicable laws, regulations, and this Agreement</li>
                    <li>All information you provide is accurate, current, and complete</li>
                    <li>You are not prohibited from using the Services under applicable law</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    1.2 Modification Rights
                  </h3>
                  <p>
                    Roboticela reserves the right, in our sole and absolute discretion, to modify, amend, update, change, or revise this Agreement at any time, for any reason, without prior notice to you. Modifications will be effective immediately upon posting on our website or through the Services, or as otherwise indicated. Your continued use of the Services after any modifications constitutes your acceptance of the modified Agreement.
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    YOU ACKNOWLEDGE AND AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Roboticela has no obligation to notify you individually of changes</li>
                    <li>It is your sole responsibility to review this Agreement periodically</li>
                    <li>If you do not agree to modified terms, your only remedy is to discontinue use of the Services</li>
                    <li>Roboticela may modify, suspend, or discontinue any aspect of the Services at any time</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    1.3 Severability
                  </h3>
                  <p>
                    If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    2. Definitions & Interpretation
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    2.1 Key Definitions
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 mt-4">
                    <li><strong>"Services"</strong> means all services, products, platforms, websites, applications, software, tools, features, content, and offerings provided by Roboticela, without limitation, across any industry or sector.</li>
                    <li><strong>"User Content"</strong> means any content, data, information, materials, files, communications, or submissions that you upload, post, transmit, submit, provide, or make available through the Services.</li>
                    <li><strong>"Roboticela Content"</strong> means all content, materials, information, software, code, designs, graphics, text, images, audio, video, and other intellectual property owned or licensed by Roboticela.</li>
                    <li><strong>"Third-Party Services"</strong> means any services, products, platforms, websites, applications, or content provided by entities other than Roboticela.</li>
                    <li><strong>"Account"</strong> means any account, profile, or registration you create or maintain to access or use the Services.</li>
                    <li><strong>"Intellectual Property"</strong> means all intellectual property rights, including but not limited to copyrights, trademarks, trade secrets, patents, know-how, and proprietary information.</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    2.2 Interpretation
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Headings are for convenience only and do not affect interpretation</li>
                    <li>References to "including" mean "including without limitation"</li>
                    <li>The singular includes the plural and vice versa</li>
                    <li>References to "you" include your agents, representatives, and authorized users</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    3. Description of Services
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.1 General Description
                  </h3>
                  <p>
                    Roboticela provides a comprehensive range of services, products, and solutions across all industries and sectors, without limitation. The Services may include, but are not limited to, software applications, web platforms, mobile applications, cloud services, consulting services, data processing, analytics, artificial intelligence services, and any other services offered by Roboticela.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.2 Service Availability
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU ACKNOWLEDGE AND AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Services are provided "as is" and "as available"</li>
                    <li>Roboticela does not guarantee uninterrupted, error-free, or secure access to the Services</li>
                    <li>Services may be modified, suspended, or discontinued at any time without notice</li>
                    <li>Roboticela is not liable for any unavailability, interruption, or discontinuation of Services</li>
                    <li>Services may depend on third-party providers, networks, and infrastructure</li>
                    <li>Roboticela is not responsible for third-party service failures or limitations</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    3.3 No Guarantees
                  </h3>
                  <p>
                    Roboticela makes no representations, warranties, or guarantees regarding:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>The accuracy, completeness, reliability, or usefulness of the Services</li>
                    <li>The availability, performance, or functionality of the Services</li>
                    <li>The results or outcomes you may achieve through use of the Services</li>
                    <li>The compatibility of the Services with your systems, devices, or requirements</li>
                    <li>The security of data transmission or storage</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    4. Account Registration & Security
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.1 Account Creation
                  </h3>
                  <p>
                    To access certain features of the Services, you may be required to create an Account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your Account information</li>
                    <li>Maintain the security and confidentiality of your Account credentials</li>
                    <li>Accept responsibility for all activities that occur under your Account</li>
                    <li>Notify Roboticela immediately of any unauthorized access or use</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.2 Account Security
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU ARE SOLELY RESPONSIBLE FOR:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Maintaining the confidentiality of your password and Account information</li>
                    <li>All activities and transactions conducted under your Account</li>
                    <li>Ensuring that your Account is used only by authorized persons</li>
                    <li>Any loss or damage arising from unauthorized use of your Account</li>
                  </ul>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    ROBOTICELA IS NOT LIABLE FOR:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Any loss or damage resulting from unauthorized access to your Account</li>
                    <li>Any loss or damage resulting from your failure to maintain Account security</li>
                    <li>Any activities conducted under your Account, whether authorized or not</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    4.3 Account Termination
                  </h3>
                  <p>
                    Roboticela reserves the right, in our sole discretion, to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Suspend, restrict, or terminate your Account at any time, for any reason</li>
                    <li>Refuse service to anyone, for any reason</li>
                    <li>Delete or remove any Account or User Content</li>
                    <li>Take any action we deem necessary to protect the Services or other users</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    5. User Obligations & Restrictions
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.1 Acceptable Use
                  </h3>
                  <p>
                    You agree to use the Services only for lawful purposes and in accordance with this Agreement. You agree not to:
                  </p>
                  
                  <p className="mt-4 font-semibold text-slate-900 dark:text-white">A. Illegal Activities:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use the Services in violation of any applicable law, regulation, or legal obligation</li>
                    <li>Engage in any fraudulent, deceptive, or illegal activity</li>
                    <li>Violate any rights of others, including intellectual property rights</li>
                    <li>Transmit or facilitate transmission of illegal content</li>
                  </ul>

                  <p className="mt-4 font-semibold text-slate-900 dark:text-white">B. Unauthorized Access:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Attempt to gain unauthorized access to the Services, Accounts, or systems</li>
                    <li>Interfere with, disrupt, or damage the Services or servers</li>
                    <li>Use automated systems, bots, scrapers, or similar tools without authorization</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                  </ul>

                  <p className="mt-4 font-semibold text-slate-900 dark:text-white">C. Harmful Content:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Upload, transmit, or distribute viruses, malware, or harmful code</li>
                    <li>Transmit spam, unsolicited communications, or bulk messages</li>
                    <li>Post content that is defamatory, harassing, abusive, or offensive</li>
                    <li>Impersonate any person or entity or misrepresent your identity</li>
                  </ul>

                  <p className="mt-4 font-semibold text-slate-900 dark:text-white">D. Commercial Restrictions:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Resell, redistribute, or sublicense the Services without authorization</li>
                    <li>Use the Services to compete with Roboticela</li>
                    <li>Extract or scrape data from the Services for commercial purposes</li>
                    <li>Use the Services to develop competing products or services</li>
                  </ul>

                  <p className="mt-4 font-semibold text-slate-900 dark:text-white">E. Other Prohibited Activities:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Violate any terms of this Agreement or applicable policies</li>
                    <li>Interfere with other users' enjoyment of the Services</li>
                    <li>Use the Services in any manner that could damage, disable, or impair the Services</li>
                    <li>Engage in any activity that Roboticela, in its sole discretion, deems inappropriate</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.2 Content Standards
                  </h3>
                  <p>
                    You are solely responsible for all User Content. You represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>You own or have all necessary rights to User Content</li>
                    <li>User Content does not violate any law or third-party rights</li>
                    <li>User Content is accurate and not misleading</li>
                    <li>User Content does not contain prohibited data or information</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    5.3 Monitoring & Enforcement
                  </h3>
                  <p>
                    Roboticela reserves the right, but has no obligation, to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Monitor, review, edit, or remove any User Content</li>
                    <li>Investigate violations of this Agreement</li>
                    <li>Take any action we deem appropriate, including legal action</li>
                    <li>Cooperate with law enforcement and regulatory authorities</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    6. Intellectual Property Rights
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.1 Roboticela's Intellectual Property
                  </h3>
                  <p>
                    All rights, title, and interest in and to the Services, including all Roboticela Content, software, code, designs, trademarks, logos, and other intellectual property, are owned by Roboticela or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.2 Limited License
                  </h3>
                  <p>
                    Subject to your compliance with this Agreement, Roboticela grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal or internal business purposes, in accordance with this Agreement. This license does not include any right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Copy, modify, or create derivative works</li>
                    <li>Distribute, sublicense, or transfer the Services</li>
                    <li>Use the Services for commercial purposes beyond what is expressly permitted</li>
                    <li>Remove or alter any proprietary notices</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.3 User Content License
                  </h3>
                  <p>
                    By submitting User Content, you grant Roboticela a worldwide, perpetual, irrevocable, royalty-free, non-exclusive, transferable, sublicensable license to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Use, reproduce, distribute, modify, adapt, publish, translate, and create derivative works</li>
                    <li>Publicly perform, publicly display, and digitally perform User Content</li>
                    <li>Use User Content for any purpose, including commercial purposes</li>
                    <li>Store, archive, and retain User Content as necessary</li>
                  </ul>
                  <p className="mt-4">
                    You waive any moral rights or similar rights you may have in User Content.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.4 Feedback
                  </h3>
                  <p>
                    If you provide feedback, suggestions, or ideas about the Services, you grant Roboticela an unlimited, perpetual, irrevocable, royalty-free license to use, modify, and incorporate such feedback without any obligation to you.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    6.5 Reservation of Rights
                  </h3>
                  <p>
                    All rights not expressly granted are reserved by Roboticela. Nothing in this Agreement transfers ownership of any intellectual property.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    7. Payment Terms & Fees
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.1 Fees
                  </h3>
                  <p>
                    Certain Services may require payment of fees. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Pay all fees and charges in accordance with the pricing terms provided</li>
                    <li>Pay fees in the currency and method specified</li>
                    <li>Pay all applicable taxes, duties, and levies</li>
                    <li>Authorize Roboticela to charge your payment method</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.2 Payment Terms
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Fees are due as specified in the applicable agreement or pricing terms</li>
                    <li>All fees are non-refundable unless otherwise expressly stated</li>
                    <li>Roboticela may change fees at any time with notice</li>
                    <li>Failure to pay may result in suspension or termination of Services</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.3 Refunds
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    ROBOTICELA'S REFUND POLICY:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Fees are generally non-refundable</li>
                    <li>Refunds, if any, are at Roboticela's sole discretion</li>
                    <li>No refunds for partial use, dissatisfaction, or change of mind</li>
                    <li>Refunds, if granted, may be subject to processing fees</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    7.4 Taxes
                  </h3>
                  <p>
                    You are responsible for all taxes, duties, and levies associated with your use of the Services, except for taxes on Roboticela's income. Roboticela may collect and remit taxes as required by law.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    8. Privacy & Data Protection
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    8.1 Privacy Policy
                  </h3>
                  <p>
                    Your use of the Services is also governed by our Privacy Policy, which is incorporated into this Agreement by reference. By using the Services, you consent to the collection, use, and disclosure of information as described in the Privacy Policy.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    8.2 Data Processing
                  </h3>
                  <p>
                    You acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Roboticela may collect, process, store, and use data as described in the Privacy Policy</li>
                    <li>Data may be transferred to and processed in various jurisdictions</li>
                    <li>Roboticela is not responsible for data processed by third parties</li>
                    <li>You are responsible for backing up your own data</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    8.3 Data Security
                  </h3>
                  <p>
                    While Roboticela implements security measures, you acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>No system is completely secure</li>
                    <li>Roboticela cannot guarantee absolute security</li>
                    <li>You use the Services at your own risk</li>
                    <li>Roboticela is not liable for security breaches or data loss</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    9. Third-Party Services & Links
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    9.1 Third-Party Integration
                  </h3>
                  <p>
                    The Services may integrate with or link to third-party services, websites, or applications. You acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Roboticela does not control third-party services</li>
                    <li>Roboticela is not responsible for third-party services, content, or practices</li>
                    <li>Your use of third-party services is at your own risk</li>
                    <li>Third-party services are subject to their own terms and policies</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    9.2 No Endorsement
                  </h3>
                  <p>
                    The inclusion of links or references to third-party services does not constitute endorsement by Roboticela. Roboticela disclaims all liability for third-party services.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    9.3 Third-Party Content
                  </h3>
                  <p>
                    The Services may display or include third-party content. Roboticela does not endorse, verify, or assume responsibility for third-party content.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    10. Disclaimers & Warranties
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    10.1 No Warranties
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>WARRANTIES OF MERCHANTABILITY</li>
                    <li>WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>WARRANTIES OF NON-INFRINGEMENT</li>
                    <li>WARRANTIES OF ACCURACY, RELIABILITY, OR COMPLETENESS</li>
                    <li>WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE</li>
                    <li>WARRANTIES THAT DEFECTS WILL BE CORRECTED</li>
                    <li>WARRANTIES REGARDING RESULTS OR OUTCOMES</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    10.2 Your Acknowledgment
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU ACKNOWLEDGE AND AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>You use the Services at your own risk</li>
                    <li>Roboticela does not guarantee any specific results</li>
                    <li>The Services may contain errors, bugs, or limitations</li>
                    <li>Roboticela is not responsible for any loss or damage resulting from use of the Services</li>
                    <li>You are solely responsible for evaluating the suitability of the Services for your needs</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    10.3 Jurisdiction-Specific Disclaimers
                  </h3>
                  <p>
                    Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you. However, to the maximum extent permitted by applicable law, all disclaimers apply.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    11. Limitation of Liability
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.1 Limitation of Liability
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ROBOTICELA, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SUPPLIERS BE LIABLE FOR ANY:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                    <li>LOSS OF PROFITS, REVENUE, DATA, OR USE</li>
                    <li>LOSS OF BUSINESS OPPORTUNITIES</li>
                    <li>COST OF SUBSTITUTE SERVICES</li>
                    <li>PERSONAL INJURY OR PROPERTY DAMAGE</li>
                    <li>ANY OTHER DAMAGES ARISING OUT OF OR RELATED TO THE SERVICES</li>
                  </ul>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF ROBOTICELA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.2 Maximum Liability
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    IF ROBOTICELA IS FOUND LIABLE FOR ANY DAMAGES, OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>THE AMOUNT YOU PAID TO ROBOTICELA IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR</li>
                    <li>ONE HUNDRED U.S. DOLLARS ($100)</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.3 Exclusions
                  </h3>
                  <p>
                    The limitations and exclusions in this section apply to the maximum extent permitted by applicable law and shall survive termination of this Agreement.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    11.4 Your Acknowledgment
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU ACKNOWLEDGE AND AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>The limitations of liability are reasonable and necessary</li>
                    <li>You would not use the Services without these limitations</li>
                    <li>These limitations are an essential basis of the Agreement</li>
                  </ul>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    12. Indemnification
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.1 Your Indemnification Obligation
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS ROBOTICELA, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SUPPLIERS FROM AND AGAINST ANY AND ALL:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>CLAIMS, DEMANDS, ACTIONS, SUITS, OR PROCEEDINGS</li>
                    <li>DAMAGES, LOSSES, COSTS, AND EXPENSES (INCLUDING REASONABLE ATTORNEYS' FEES)</li>
                    <li>LIABILITIES AND OBLIGATIONS</li>
                  </ul>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    ARISING OUT OF OR RELATED TO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Your use of the Services</li>
                    <li>Your violation of this Agreement</li>
                    <li>Your violation of any law or third-party rights</li>
                    <li>Your User Content</li>
                    <li>Your negligence or willful misconduct</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.2 Defense and Control
                  </h3>
                  <p>
                    Roboticela reserves the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification. You agree to cooperate with Roboticela's defense and not to settle any matter without Roboticela's prior written consent.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    12.3 Survival
                  </h3>
                  <p>
                    Your indemnification obligations shall survive termination of this Agreement and your use of the Services.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    13. Termination
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.1 Termination by You
                  </h3>
                  <p>
                    You may stop using the Services at any time. You may terminate your Account by contacting Roboticela or using available account management features.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.2 Termination by Roboticela
                  </h3>
                  <p>
                    Roboticela may, in our sole discretion, suspend, restrict, or terminate your access to the Services or your Account, at any time, for any reason, without notice or liability, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Violation of this Agreement</li>
                    <li>Violation of applicable law</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Non-payment of fees</li>
                    <li>Any reason Roboticela deems necessary</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.3 Effect of Termination
                  </h3>
                  <p>
                    Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Your right to use the Services immediately ceases</li>
                    <li>Roboticela may delete or disable your Account and User Content</li>
                    <li>You remain liable for all fees and charges incurred</li>
                    <li>All provisions that by their nature should survive shall survive</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    13.4 Survival
                  </h3>
                  <p>
                    The following provisions shall survive termination: Sections 6 (Intellectual Property), 7 (Payment Terms), 10 (Disclaimers), 11 (Limitation of Liability), 12 (Indemnification), 14 (Dispute Resolution), 15 (Governing Law), and any other provisions that by their nature should survive.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    14. Dispute Resolution & Arbitration
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.1 Informal Resolution
                  </h3>
                  <p>
                    Before initiating any formal proceeding, you and Roboticela agree to attempt to resolve disputes informally by contacting the other party and engaging in good faith negotiations.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.2 Binding Arbitration
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU AND ROBOTICELA AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES SHALL BE RESOLVED EXCLUSIVELY BY BINDING ARBITRATION IN ACCORDANCE WITH THE ARBITRATION ACT, 1940 (PAKISTAN), AS AMENDED.
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white mt-4">
                    KEY TERMS:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Arbitration shall be conducted in Mardan, Khyber Pakhtunkhwa, Pakistan</li>
                    <li>Arbitration shall be conducted in English</li>
                    <li>Arbitration shall be before a sole arbitrator</li>
                    <li>The arbitrator's decision shall be final and binding</li>
                    <li>Arbitration shall be conducted on an individual basis (no class actions)</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.3 Class Action Waiver
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU AND ROBOTICELA AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>All disputes must be resolved on an individual basis</li>
                    <li>No class actions, representative actions, or consolidated proceedings are permitted</li>
                    <li>You waive any right to participate in class actions or collective proceedings</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.4 Exceptions
                  </h3>
                  <p>
                    The following disputes are not subject to arbitration and may be brought in court:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Claims for injunctive or equitable relief</li>
                    <li>Intellectual property disputes</li>
                    <li>Small claims court actions (within jurisdictional limits)</li>
                    <li>Matters not capable of being settled by arbitration under applicable law</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    14.5 Governing Law for Arbitration
                  </h3>
                  <p>
                    All arbitration proceedings shall be governed by the Arbitration Act, 1940 (Pakistan), regardless of any other choice of law provision in this Agreement.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    15. Governing Law & Jurisdiction
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    15.1 Governing Law
                  </h3>
                  <p>
                    This Agreement shall be governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    15.2 Jurisdiction
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    FOR ANY DISPUTES NOT SUBJECT TO ARBITRATION, YOU AND ROBOTICELA IRREVOCABLY AGREE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>The exclusive jurisdiction shall be the courts located in Mardan, Khyber Pakhtunkhwa, Pakistan</li>
                    <li>You consent to the personal jurisdiction of such courts</li>
                    <li>You waive any objection to venue in such courts</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    15.3 Waiver of Jury Trial
                  </h3>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    YOU AND ROBOTICELA WAIVE ANY RIGHT TO A JURY TRIAL IN ANY PROCEEDING ARISING OUT OF OR RELATED TO THIS AGREEMENT.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    16. General Provisions
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.1 Entire Agreement
                  </h3>
                  <p>
                    This Agreement, together with the Privacy Policy and any other policies referenced herein, constitutes the entire agreement between you and Roboticela regarding the Services and supersedes all prior agreements.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.2 Assignment
                  </h3>
                  <p>
                    You may not assign or transfer this Agreement or your rights hereunder without Roboticela's prior written consent. Roboticela may assign or transfer this Agreement without restriction.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.3 Waiver
                  </h3>
                  <p>
                    No waiver of any provision of this Agreement shall be effective unless in writing and signed by the waiving party. Failure to enforce any provision shall not constitute a waiver.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.4 Force Majeure
                  </h3>
                  <p>
                    Roboticela shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.5 Notices
                  </h3>
                  <p>
                    Notices to you may be provided through the Services, by email, or by other means. Notices to Roboticela must be sent to the contact information provided below.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.6 Relationship
                  </h3>
                  <p>
                    This Agreement does not create any partnership, joint venture, agency, or employment relationship between you and Roboticela.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                    16.7 Language
                  </h3>
                  <p>
                    This Agreement is written in English. Any translations are provided for convenience only. In case of conflict, the English version shall prevail.
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8">
                    17. Contact Information
                  </h2>
                  <p>
                    For questions, concerns, or notices regarding this Agreement or the Services, you may contact Roboticela at:
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
                    18. Acknowledgment & Acceptance
                  </h2>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    BY USING THE SERVICES, YOU ACKNOWLEDGE THAT:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li>You have read this Agreement in its entirety</li>
                    <li>You understand all terms and conditions</li>
                    <li>You agree to be bound by all terms and conditions</li>
                    <li>You have the legal capacity to enter into this Agreement</li>
                    <li>You will comply with all applicable laws and this Agreement</li>
                    <li>If you do not agree, you must immediately discontinue use of the Services</li>
                  </ol>
                  <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
                    <strong>THIS AGREEMENT IS EFFECTIVE AS OF THE DATE YOU FIRST USE THE SERVICES AND SHALL CONTINUE UNTIL TERMINATED IN ACCORDANCE WITH ITS TERMS.</strong>
                  </p>
                </section>

                <hr className="border-white/20 dark:border-white/10 my-8" />

                <p className="text-sm text-slate-600 dark:text-gray-400 italic mt-8">
                  These Terms of Service are provided for informational purposes. They create binding legal obligations. Roboticela reserves all rights not expressly granted herein. If you have questions about this Agreement, consult with legal counsel before using the Services.
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

