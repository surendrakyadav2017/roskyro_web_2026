import React from 'react';
import LucideIcon from './LucideIcon';

const FOUNDING_PERKS = [
  {
    icon: 'Users',
    title: 'Direct Founder Access',
    desc: 'As an early client, you work directly with the founding team — not a rotating account manager.',
  },
  {
    icon: 'Rocket',
    title: 'Early-Mover Pricing',
    desc: 'Founding clients lock in current rates before they increase as our case studies grow.',
  },
  {
    icon: 'Target',
    title: 'Built Around Your Results',
    desc: 'Early engagements directly shape the systems we build — your feedback becomes our roadmap.',
  },
];

export default function EarlyAccess() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
            Founding Cohort
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            We're Newly Launched — On Purpose, That's an Advantage for You
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            We won't show you fabricated client logos or testimonials. ROSKYRO is a new AI Growth Technology
            Company, and our first clients get something larger agencies can't offer: direct, hands-on attention
            from the people who built the systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FOUNDING_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 hover:border-neon-cyan/25 transition-all duration-300 space-y-3 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                <LucideIcon name={perk.icon} size={20} className="text-neon-cyan" />
              </div>
              <h3 className="font-display text-base font-bold text-white">{perk.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
