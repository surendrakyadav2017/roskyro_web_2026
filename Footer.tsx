import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LucideIcon from './LucideIcon';
import { CONTACT } from './siteConfig';

interface FooterProps {
  onBookAudit: () => void;
}

export default function Footer({ onBookAudit }: FooterProps) {
  const socialLinks = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/roskyro.in/' },
    { name: 'Instagram', url: 'https://www.instagram.com/roskyro.in/' },
    { name: 'Facebook', url: 'https://www.facebook.com/roskyro.in/' },
    { name: 'Youtube', url: 'https://www.youtube.com/@ROSKYRO' },
  ];

  return (
    <footer className="bg-[#03050c] border-t border-slate-900 pt-20 pb-12 relative overflow-hidden text-left">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="footer" />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              ROSKYRO is an AI Growth Technology Company helping small and medium businesses scale visibility, trust, and revenue through result-oriented automation.
            </p>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block font-bold">
                Connect With Us:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 hover:border-neon-cyan hover:bg-neon-cyan/5 text-slate-400 hover:text-neon-cyan flex items-center justify-center transition-all duration-300 scale-100 hover:scale-110"
                    title={`Visit ROSKYRO on ${social.name}`}
                  >
                    <LucideIcon name={social.name} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-widest block border-l-2 border-neon-cyan pl-3.5">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3 pl-3.5">
              <Link to="/" className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                Services &amp; Solutions
              </Link>
              <Link to="/pricing" className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-widest block border-l-2 border-neon-violet pl-3.5">
              Contact
            </h4>

            <div className="space-y-3 pl-3.5 text-xs sm:text-sm text-slate-400 font-sans">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-cyan transition-colors"
              >
                <LucideIcon name="Phone" size={14} />
                {CONTACT.displayPhone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-neon-cyan transition-colors"
              >
                <LucideIcon name="Mail" size={14} />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2">
                <LucideIcon name="MapPin" size={14} />
                {CONTACT.serviceArea}
              </div>

              <button
                onClick={onBookAudit}
                className="mt-2 w-full text-center py-2.5 rounded-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-xs shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-900/85 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} ROSKYRO. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
