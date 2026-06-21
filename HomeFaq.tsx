import React, { useEffect } from 'react';
import LucideIcon from './LucideIcon';

const HOME_FAQS = [
  {
    question: 'What is ROSKYRO?',
    answer:
      'ROSKYRO is an AI Growth Technology Company based in India. It helps small and medium businesses become visible on Google Search, get recommended by AI tools like ChatGPT and Gemini, and build stronger online trust through automated systems for visibility, reputation, and lead generation.',
  },
  {
    question: 'What services does ROSKYRO offer?',
    answer:
      'ROSKYRO offers Google Business Profile optimization, local SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), online reputation and review management, WhatsApp Business API automation, AI chatbots, and CRM and lead generation systems — organized under its Knowledge, Yield, Reputation, and Optimization (K-Y-R-O) framework.',
  },
  {
    question: 'Who is ROSKYRO for?',
    answer:
      'ROSKYRO is built for small and medium businesses and professionals in India — including clinics, CAs, lawyers, retail shops, and service providers — who want more customers from Google and AI search without managing the technical work themselves.',
  },
  {
    question: 'How is ROSKYRO different from a marketing agency?',
    answer:
      'ROSKYRO builds AI-powered systems rather than running one-off marketing campaigns. The goal is measurable, ongoing visibility and automation — including how a business appears across both traditional search and newer AI answer engines — rather than time-limited service work.',
  },
  {
    question: 'How can I get started with ROSKYRO?',
    answer:
      "Businesses can book a free visibility audit through the ROSKYRO website or WhatsApp. The audit reviews a business's current Google and online presence and outlines specific areas for improvement before any paid engagement begins.",
  },
];

export default function HomeFaq() {
  useEffect(() => {
    const existing = document.getElementById('roskyro-home-faq-jsonld');
    if (existing) existing.remove();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    };

    const script = document.createElement('script');
    script.id = 'roskyro-home-faq-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('roskyro-home-faq-jsonld');
      if (el) el.remove();
    };
  }, []);

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
