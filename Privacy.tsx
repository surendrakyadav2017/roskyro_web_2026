import React from 'react';
import Seo from './Seo';
import { SITE, CONTACT } from './siteConfig';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | ROSKYRO"
        description="ROSKYRO's privacy policy — how we collect, use, and protect information submitted through our website and services."
        path="/privacy-policy"
      />

      <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-300 text-sm leading-relaxed font-sans">
          <h1 className="font-display text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-xs font-mono">Last updated: June 2026</p>

          <p>
            {SITE.name} ("we," "us," or "our") respects your privacy. This policy explains what information we
            collect through {SITE.url}, how we use it, and the choices you have.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>When you use our free audit form, contact us, or message us on WhatsApp, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Your name and business name</li>
            <li>Email address and phone/WhatsApp number</li>
            <li>Website or Google Business Profile URL you submit for review</li>
            <li>Any information you voluntarily share during consultations</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-white pt-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>To respond to audit requests and provide the services you request</li>
            <li>To communicate with you about your account or service delivery</li>
            <li>To improve our website and service offerings</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Data Storage &amp; Third Parties</h2>
          <p>
            Audit request submissions may be processed via third-party form-handling services to deliver your
            request to our team by email. We take reasonable steps to use providers with industry-standard
            security practices.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us at {CONTACT.email}.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Contact Us</h2>
          <p>
            If you have questions about this policy, reach us at{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-neon-cyan hover:underline">
              {CONTACT.email}
            </a>{' '}
            or via WhatsApp at {CONTACT.displayPhone}.
          </p>

          <p className="text-slate-500 text-xs pt-6 border-t border-slate-900">
            This policy is a general template and should be reviewed by a qualified legal professional to ensure
            full compliance with applicable data protection laws (such as India's DPDP Act) for your specific
            business operations.
          </p>
        </div>
      </section>
    </>
  );
}
