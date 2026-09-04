import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Studio', href: '#about' },
    { name: 'Services & Deliverables', href: '#services' },
    { name: 'Featured Works & Portfolio', href: '#portfolio' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Consultation & Contact', href: '#enquiry' },
  ];

  const serviceLinks = [
    '2D Architectural Floor Plans',
    '3D Home & Elevation Design',
    'Apartment & Duplex Planning',
    'Luxury Interior Design',
    'High-End Exterior Concepts',
    'Municipal Sanction Assistance',
  ];

  const targetLocations = [
    'Ranchi (Kanke Road, Morabadi, Bariatu, Lalpur, Doranda, Harmu, Hinoo, Ratu Road)',
    'Dhanbad & Bokaro Steel City',
    'Jamshedpur & Ramgarh',
    'Hazaribagh & Chaibasa',
    'Pan-Jharkhand & Bihar Architectural Services',
  ];

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-pink-200 relative">
      
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-pink-200/80">
          
          {/* Column 1: Brand & Founder Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-100 border border-pink-300 flex items-center justify-center text-pink-600 shadow-sm">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-montserrat font-bold text-lg uppercase tracking-wider text-slate-900 block leading-tight">
                  Pinaka Structure Studio
                </span>
                <span className="text-[10px] tracking-[0.2em] text-pink-600 uppercase font-semibold">
                  Ranchi, Jharkhand
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-inter">
              Premier 2D/3D Architecture, Duplex, Apartment &amp; Interior/Exterior Design Studio led by <strong className="text-pink-600">Saurabh Kumar</strong>. Dedicated to structural safety, modern aesthetics, space efficiency, and Vastu compliance.
            </p>

            <div className="pt-2 text-xs text-slate-600 space-y-1">
              <div><strong className="text-pink-600">Founder &amp; Principal:</strong> Saurabh Kumar</div>
              <div><strong className="text-pink-600">Location:</strong> Ranchi, Jharkhand, India</div>
              <div><strong className="text-pink-600">Standards:</strong> IS Codes &amp; Municipal Bylaws</div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-pink-600 mb-3 font-bold">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 transition-all shadow-xs"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 transition-all shadow-xs"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-pink-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 transition-all shadow-xs"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-pink-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Architectural Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {serviceLinks.map((service, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-600 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="hover:text-pink-600 transition-colors">
                  {BRAND_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-600 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-pink-600 transition-colors break-all">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-pink-600 block mb-1 font-bold">
                KEY SERVICE CORRIDORS:
              </span>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Ranchi, Dhanbad, Bokaro, Jamshedpur, Hazaribagh &amp; Eastern India.
              </p>
            </div>
          </div>

        </div>

        {/* SEO Tagline & Regional Footer Bar */}
        <div className="py-6 border-b border-pink-200/60 text-center text-xs text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-700">Target Keywords:</strong> Architect in Ranchi • 3D Home Plan Ranchi • 2D Floor Plan Designer Jharkhand • Interior Exterior Design Ranchi • Duplex Elevation Design
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px]">
            {targetLocations.map((loc, idx) => (
              <span key={idx} className="hover:text-pink-600 transition-colors">
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-inter">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-800 font-semibold">Pinaka Structure Studio</span>. All rights reserved.
          </div>

          {/* Prominent Required Attribution */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 shadow-xs">
            <span className="font-bold font-montserrat">Developed by Saurabh</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-700 font-semibold transition-colors p-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
