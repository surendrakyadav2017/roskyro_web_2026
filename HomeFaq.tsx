import React from 'react';
import LucideIcon from './LucideIcon';
import { HOME_FAQS } from './homeFaqData';

/**
 * Visible FAQ section for the homepage. The matching FAQPage JSON-LD schema
 * is injected by JsonLd.tsx at the app root (not here) so it loads at the
 * same time as the rest of the page's structured data, rather than waiting
 * for this component to mount lower on the page.
 */
export default function HomeFaq() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
            Common Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {HOME_FAQS.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 hover:border-neon-cyan/20 transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <LucideIcon name="MessageCircle" size={18} className="text-neon-cyan mt-0.5 shrink-0" />
                <h3 className="font-display text-base font-bold text-white">{faq.question}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
