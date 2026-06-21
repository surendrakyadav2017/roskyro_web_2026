import React from 'react';
import Seo from './Seo';
import WhyRoskyro from './WhyRoskyro';
import LucideIcon from './LucideIcon';

export default function About() {
  return (
    <>
      <Seo
        title="About ROSKYRO | AI Growth Technology Company"
        description="ROSKYRO is an AI Growth Technology Company on a mission to help small and medium businesses across India become impossible to miss — on Google, on AI search, and in their local market."
        path="/about"
      />

      <section className="pt-32 pb-16 bg-slate-950 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
            Our Mission
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We Exist So Small Businesses Stop Losing Customers They Never Knew They Had
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Every day, people search Google and ask AI tools like ChatGPT and Gemini for recommendations near
            them — and great local businesses lose that customer simply because their digital presence was never
            built for this new layer of search. ROSKYRO exists to close that gap with AI-powered systems, not
            one-off marketing gimmicks.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto">
              <LucideIcon name="Target" size={22} className="text-neon-cyan" />
            </div>
            <h3 className="font-display text-base font-bold text-white">Result-Oriented</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We build systems measured by outcomes — visibility, leads, and revenue — not vanity metrics.
            </p>
          </div>
          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto">
              <LucideIcon name="Lightbulb" size={22} className="text-neon-violet" />
            </div>
            <h3 className="font-display text-base font-bold text-white">Early on AEO &amp; GEO</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We're building for how AI search already works today, not retrofitting old SEO tactics.
            </p>
          </div>
          <div className="space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto">
              <LucideIcon name="ShieldCheck" size={22} className="text-emerald-400" />
            </div>
            <h3 className="font-display text-base font-bold text-white">Honest by Default</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              No fabricated case studies, no inflated claims — just transparent systems and real reporting.
            </p>
          </div>
        </div>
      </section>

      <WhyRoskyro />
    </>
  );
}
