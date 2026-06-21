import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookAudit: () => void;
}

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onBookAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-900 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo variant="nav" />

          <div className="hidden lg:flex items-center space-x-8 font-sans">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-neon-cyan'
                    : 'text-slate-300 hover:text-neon-cyan'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onBookAudit}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-slate-100 rounded-lg group bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 hover:text-white focus:outline-none cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0">
                Book Free Audit
              </span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 shadow-2xl py-6 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-left py-2 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-neon-cyan'
                    : 'text-slate-300 hover:text-neon-cyan'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-900 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookAudit();
                }}
                className="w-full text-center py-2.5 rounded-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
