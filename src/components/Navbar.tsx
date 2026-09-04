import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Compass, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';

interface NavbarProps {
  onConsultationClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConsultationClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Studio', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vastu 2D Plans', href: '#vastu-plans' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact & Enquiry', href: '#enquiry' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-md py-3.5' 
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-12 h-12 rounded-xl bg-white border border-pink-200 overflow-hidden flex items-center justify-center p-0.5 shadow-sm group-hover:border-pink-500 group-hover:shadow-[0_0_16px_rgba(219,39,119,0.2)] transition-all">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="Pinaka Structure Studio Logo"
                className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold tracking-wider text-lg sm:text-xl text-slate-900 uppercase leading-tight group-hover:text-pink-600 transition-colors">
                Pinaka
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-pink-600 uppercase font-bold">
                Structure Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-pink-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-pink-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA & Phone Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              id="nav-call-btn"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-pink-600 px-3.5 py-2 rounded-md border border-pink-200 hover:border-pink-400 transition-all bg-pink-50/60"
            >
              <Phone className="w-3.5 h-3.5 text-pink-600" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>

            <button
              onClick={onConsultationClick}
              id="nav-consult-cta-btn"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white px-4 py-2.5 rounded-md transition-all shadow-md hover:shadow-[0_4px_16px_rgba(219,39,119,0.35)] font-montserrat"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onConsultationClick}
              className="px-2.5 py-1.5 rounded bg-pink-600 text-white text-xs font-bold shadow-sm"
            >
              Consult
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-pink-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="py-1">
            <div className="text-[11px] uppercase tracking-widest text-pink-600 font-bold mb-2">
              Architectural Studio • Ranchi
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-slate-800 hover:text-pink-600 border-b border-pink-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2.5">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-pink-200 bg-pink-50/60 text-sm text-slate-800 font-medium"
            >
              <Phone className="w-4 h-4 text-pink-600" />
              <span>Call: {BRAND_CONFIG.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Saurabh Kumar, I want to inquire about architectural designs in Ranchi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-700 text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onConsultationClick();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white text-sm font-bold uppercase tracking-wider text-center shadow-md"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
