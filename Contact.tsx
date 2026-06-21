import React from 'react';
import Seo from './Seo';
import LucideIcon from './LucideIcon';
import { CONTACT, buildWhatsappLink, SOCIAL_LINKS } from './siteConfig';

interface ContactProps {
  onBookAudit: () => void;
}

export default function Contact({ onBookAudit }: ContactProps) {
  return (
    <>
      <Seo
        title="Contact ROSKYRO | AI Growth Technology Company"
        description="Get in touch with ROSKYRO via WhatsApp or email. We help small and medium businesses across India grow visibility, trust, and revenue through AI-powered systems."
        path="/contact"
      />

      <section className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
              Let's Talk
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch With ROSKYRO
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-sans">
              The fastest way to reach us is WhatsApp. We typically respond within a few hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-400/50 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                <LucideIcon name="Phone" size={22} className="text-slate-950" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="font-display font-bold text-white text-base">WhatsApp</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{CONTACT.displayPhone}</p>
                <span className="text-emerald-400 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Message us now →
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="p-7 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-neon-cyan/30 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <LucideIcon name="Mail" size={22} className="text-neon-cyan" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="font-display font-bold text-white text-base">Email</h3>
                <p className="text-slate-400 text-xs sm:text-sm break-all">{CONTACT.email}</p>
                <span className="text-neon-cyan text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Send an email →
                </span>
              </div>
            </a>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/20 border border-slate-850 flex flex-col sm:flex-row items-center gap-6 justify-between mb-10">
            <div className="flex items-center gap-3 text-left">
              <LucideIcon name="MapPin" size={20} className="text-slate-400 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-white text-sm">Service Area</h3>
                <p className="text-slate-400 text-xs">{CONTACT.serviceArea}</p>
              </div>
            </div>
            <button
              onClick={onBookAudit}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-xs font-bold whitespace-nowrap"
            >
              Book a Free Audit Instead →
            </button>
          </div>

          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
              Follow ROSKYRO
            </span>
            <div className="flex justify-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 hover:border-neon-cyan hover:bg-neon-cyan/5 text-slate-400 hover:text-neon-cyan flex items-center justify-center transition-all"
                  title={`Visit ROSKYRO on ${social.name}`}
                >
                  <LucideIcon name={social.name} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
