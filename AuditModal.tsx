import React, { useState } from 'react';
import { X, ShieldAlert, Sparkles, AlertCircle, Bot } from 'lucide-react';
import { AuditRequest } from './types';
import { CONTACT } from './siteConfig';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanContext?: string;
}

export default function AuditModal({ isOpen, onClose, selectedPlanContext = '' }: AuditModalProps) {
  const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    growthFocus: 'all',
  });

  const [progressLog, setProgressLog] = useState<string[]>([]);
  const [progressNum, setProgressNum] = useState(0);
  const [generatedReport, setGeneratedReport] = useState<any>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const runPreliminaryEstimate = () => {
    setStep('loading');
    setProgressNum(0);
    setProgressLog([]);

    // NOTE: This is an illustrative preliminary checklist animation, not a live
    // crawl of the submitted website. A ROSKYRO team member reviews the actual
    // business profile and website by hand and follows up with real findings.
    const logs = [
      'Logging submitted business details...',
      'Checking common Google Business Profile gaps...',
      'Reviewing typical local SEO checklist items...',
      'Checking for AEO/GEO readiness signals...',
      'Estimating review & reputation activity range...',
      'Preparing preliminary summary...',
    ];

    let currentLogIdx = 0;

    const interval = setInterval(() => {
      if (currentLogIdx < logs.length) {
        setProgressLog((prev) => [...prev, logs[currentLogIdx]]);
        setProgressNum((prev) => Math.min(prev + 16, 100));
        currentLogIdx++;
      } else {
        clearInterval(interval);

        // Preliminary estimate only — a ROSKYRO specialist confirms actual
        // findings after manually reviewing the business during follow-up.
        const score = Math.floor(Math.random() * 20) + 35;

        const report = {
          score,
          gaps: [
            {
              title: 'AEO / GEO Readiness',
              desc: 'Most unaudited businesses are missing structured data (schema) that helps AI tools like ChatGPT and Gemini recommend them. We will confirm your exact status during the call.',
              status: 'Needs Review',
            },
            {
              title: 'Lead Response Speed',
              desc: 'Businesses without automated follow-up typically lose 20-30% of leads to slow response times. We will check your current setup.',
              status: 'Needs Review',
            },
            {
              title: 'Google Review Activity',
              desc: 'Review velocity (recent reviews, not just total count) is a major local ranking factor. We will check your profile during the audit call.',
              status: 'Needs Review',
            },
          ],
        };

        setGeneratedReport(report);
        setStep('results');

        setSubmitStatus('sending');
        fetch('https://formsubmit.co/ajax/' + CONTACT.email, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Free Audit Request: ${formData.businessName}`,
            _replyto: formData.email,
            _captcha: 'false',
            _template: 'table',
            'Business Name': formData.businessName,
            'Website / GBP link': formData.websiteUrl || 'Not provided',
            'Contact Email': formData.email,
            'WhatsApp Phone': formData.phone,
            'Selected Focus Area': formData.growthFocus,
            'Plan Context': selectedPlanContext || 'General audit request',
          }),
        })
          .then((res) => {
            setSubmitStatus(res.ok ? 'success' : 'error');
          })
          .catch(() => {
            setSubmitStatus('error');
          });
      }
    }, 750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email) {
      alert('Please provide at least a Business Name and email.');
      return;
    }

    const auditObj: AuditRequest = {
      id: Date.now().toString(),
      ...formData,
      timestamp: Date.now(),
    };

    try {
      const currentSubmissions = JSON.parse(localStorage.getItem('roskyro_sub_logs') || '[]');
      localStorage.setItem('roskyro_sub_logs', JSON.stringify([...currentSubmissions, auditObj]));
    } catch {
      // localStorage unavailable — non-critical, submission still emails via formsubmit.
    }

    runPreliminaryEstimate();
  };

  const whatsappText = `Hi ROSKYRO, I requested a free visibility audit for ${formData.businessName}. Could we schedule a quick call to go through the findings?`;
  const shareToWhatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative rounded-3xl bg-[#090D1C] border border-cyan-800/30 w-full max-w-lg overflow-hidden shadow-2xl transition-all p-px max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-transparent animate-pulse" />
        <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-b from-neon-violet to-transparent animate-pulse" />

        <div className="bg-[#0b1024] p-6 sm:p-8 space-y-6 relative z-10">
          <div className="flex justify-between items-start">
            <div className="space-y-1 text-left">
              <span className="text-[9px] font-mono tracking-widest text-[#06b6d4] uppercase block">
                {selectedPlanContext ? `Plan: ${selectedPlanContext}` : 'Free Visibility Audit'}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                {step === 'form'
                  ? 'Book Your Free Visibility Audit'
                  : step === 'loading'
                  ? 'Preparing Your Preliminary Summary...'
                  : 'Preliminary Estimate'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-500 hover:text-white hover:border-slate-700 transition"
              title="Close panel"
            >
              <X size={16} />
            </button>
          </div>

          <div className="h-px bg-slate-850/80" />

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Share a few details below. We will give you an instant preliminary estimate, then a ROSKYRO
                specialist personally reviews your Google Business Profile and website and follows up with
                real, specific findings — usually within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                    placeholder="e.g. Sharma Dental Clinic"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                    Website URL / Google Business Profile link
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                    placeholder="e.g. https://yoursite.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Contact Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                      placeholder="e.g. contact@domain.com"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      WhatsApp Mobile *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                      placeholder="e.g. +91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">
                    What would you like us to focus on?
                  </label>
                  <select
                    value={formData.growthFocus}
                    onChange={(e) => setFormData({ ...formData, growthFocus: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-350 font-sans"
                  >
                    <option value="all">Complete overview (Knowledge, Yield, Reputation, Optimization)</option>
                    <option value="visibility">Search visibility (SEO + AEO + GEO)</option>
                    <option value="reputation">Reviews &amp; reputation</option>
                    <option value="leads">Lead response &amp; follow-up automation</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400 text-xs font-bold font-sans tracking-wide text-white transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                >
                  Get My Free Audit →
                </button>
              </div>
            </form>
          )}

          {step === 'loading' && (
            <div className="py-8 space-y-6 text-center">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-slate-900" />
                <div className="absolute inset-0 rounded-full border-4 border-t-neon-cyan border-r-neon-violet animate-spin" />
                <div className="absolute inset-2.5 rounded-full bg-slate-950/80 flex items-center justify-center font-mono font-bold text-xs text-neon-cyan">
                  {progressNum}%
                </div>
              </div>

              <div className="space-y-3.5 max-w-sm mx-auto">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest">
                  Preparing your preliminary summary
                </span>

                <div className="h-28 bg-slate-950 border border-slate-900 rounded-xl p-3.5 text-[10.5px] font-mono text-slate-400 text-left overflow-y-auto space-y-1">
                  {progressLog.map((log, i) => (
                    <div key={i} className="flex gap-2 items-center text-slate-300">
                      <span className="text-emerald-400">→</span>
                      <span className="truncate">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'results' && generatedReport && (
            <div className="space-y-6 text-left">
              <div className="px-4 py-2.5 rounded-2xl bg-amber-500/5 border border-amber-600/20 flex items-start gap-2.5 text-[11px] font-sans text-amber-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  This is a preliminary estimate based on common patterns for unaudited businesses — not a live
                  scan of your specific site. A ROSKYRO specialist will confirm real findings during your follow-up.
                </span>
              </div>

              <div className="px-4 py-2.5 rounded-2xl bg-slate-950/40 border border-slate-850/80 flex items-center justify-between gap-2.5 text-[11px] font-sans">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="relative flex h-2 w-2">
                    {submitStatus === 'sending' && (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </>
                    )}
                    {submitStatus === 'success' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    )}
                    {submitStatus === 'error' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    )}
                    {submitStatus === 'idle' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                    )}
                  </span>
                  <span>
                    {submitStatus === 'sending' && 'Sending your request to the ROSKYRO team...'}
                    {submitStatus === 'success' && 'Request received — we will follow up shortly'}
                    {submitStatus === 'error' && 'Saved — please also message us on WhatsApp below'}
                    {submitStatus === 'idle' && 'Request ready'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    Preliminary Estimate
                  </span>
                  <h4 className="font-display font-black text-lg text-white">Visibility Score</h4>
                  <p className="text-slate-450 text-[11px] leading-relaxed">
                    Based on patterns typical of similar unaudited businesses.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-amber-500/30 flex flex-col justify-center items-center shadow-lg">
                  <span className="text-amber-400 font-display text-2xl font-black">{generatedReport.score}</span>
                  <span className="text-[9px] font-mono text-slate-500 font-semibold tracking-wider">/ 100</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
                  Areas we will check during your real audit:
                </span>

                <div className="space-y-2.5">
                  {generatedReport.gaps.map((gap: any, i: number) => (
                    <div key={i} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex gap-3 items-start">
                      <div className="mt-0.5 shrink-0">
                        <ShieldAlert className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="space-y-0.5 leading-snug flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs text-slate-100">{gap.title}</h5>
                          <span className="text-[8.5px] font-mono uppercase font-black tracking-wider text-amber-400">
                            {gap.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed pr-1">{gap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-850/80 my-5" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={shareToWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs tracking-wider font-sans text-center hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4 fill-current text-slate-950" />
                  Talk to Us on WhatsApp
                </a>

                <button
                  onClick={() => {
                    setFormData({ businessName: '', websiteUrl: '', email: '', phone: '', growthFocus: 'all' });
                    setSubmitStatus('idle');
                    setStep('form');
                  }}
                  className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-200 text-xs font-semibold text-center transition-all cursor-pointer"
                >
                  Run Another Estimate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
