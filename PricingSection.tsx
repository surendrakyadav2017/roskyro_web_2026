import React from 'react';
import { PricingPlan } from './types';
import LucideIcon from './LucideIcon';

interface PricingSectionProps {
  plans: PricingPlan[];
  onBookAuditForPlan: (planName: string) => void;
}

export default function PricingSection({ plans, onBookAuditForPlan }: PricingSectionProps) {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">

      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/10 w-80 h-80 rounded-full bg-blue-600/10 blur-[130px] animate-pulse-glow" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] animate-pulse-glow" style={{ animationDuration: '14s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-450 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            System Packaging &amp; Rates
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Predictive Investment Framework
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            We build result-oriented technological systems with recurring SaaS reliability. Select the infrastructure fit for your business scale.
          </p>
        </div>

        {/* Pricing Layout - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0b0f24] border-2 border-neon-violet shadow-[0_0_40px_rgba(139,92,246,0.15)] z-10 scale-[1.03]'
                    : 'bg-slate-900/50 border border-slate-850/80 hover:border-slate-800'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border border-purple-400/50 text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-lg select-none">
                    Most Popular System
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-black text-slate-100 text-left">
                      {plan.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm text-left leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="h-px bg-slate-800/80" />

                  <div className="space-y-4">
                    <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-850 text-left space-y-1">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">System Setup Fee</span>
                      <div className="text-md sm:text-lg font-bold font-mono text-emerald-400">
                        {plan.setupFeeDefault}
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-850 text-left space-y-1">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Recurring System SaaS Fee</span>
                      <div className="text-md sm:text-lg font-bold font-mono text-neon-cyan">
                        {plan.monthlyDefault}/month
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/80" />

                  <div className="space-y-3.5 text-left">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">System Features Included:</span>
                    <div className="space-y-2">
                      {plan.features.map((feat, featIdx) => (
                        <div key={featIdx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <LucideIcon name="Check" size={10} className="stroke-[3]" />
                          </div>
                          <span className="text-slate-300 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onBookAuditForPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl text-center font-bold text-xs font-sans tracking-wide transition-all duration-300 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5'
                        : 'bg-slate-950 hover:bg-slate-900 text-slate-100 hover:text-white border border-slate-850 hover:border-slate-800'
                    }`}
                  >
                    Deploy {plan.name} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
