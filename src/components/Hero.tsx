import React from 'react';
import { ArrowRight, Eye, Phone, MessageSquare, CheckCircle2, Shield, Compass, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';

interface HeroProps {
  onConsultationClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultationClick, onViewWorkClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-white overflow-hidden bg-blueprint-grid"
    >
      {/* Architectural Background Ambience & Pink Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-rose-100/60 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Technical Coordinate Badges */}
      <div className="hidden xl:flex absolute top-28 right-12 flex-col items-end text-[11px] font-mono tracking-widest text-pink-600/70 pointer-events-none">
        <span>PROJECT GRID: PINAKA-ST-2026</span>
        <span>COORD: 23°20&apos;38.8&quot;N 85°18&apos;34.6&quot;E</span>
        <span>LOC: RANCHI, JHARKHAND (IN)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Architectural Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-slate-800 text-xs sm:text-sm font-medium shadow-sm">
              <img 
                src={BRAND_CONFIG.logoUrl} 
                alt="Pinaka Structure Studio" 
                className="w-5 h-5 object-contain rounded-full border border-pink-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-pink-600 font-bold tracking-wide">Pinaka Structure Studio</span>
              <span className="text-pink-300">|</span>
              <span className="text-slate-600 font-medium">Ranchi, Jharkhand</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-montserrat text-slate-900 tracking-tight leading-[1.12]">
              Transforming Spaces into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500">
                Structural Masterpieces
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-inter leading-relaxed max-w-2xl">
              Premier 2D Floor Plans for Homes &amp; Apartments as per Vastu, 3D Elevation, Duplex &amp; Interior/Exterior Studio led by{' '}
              <span className="text-pink-600 font-semibold">Saurabh Kumar</span>. Engineered for Vedic harmony, space optimization, and structural durability.
            </p>

            {/* Primary Calls To Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onConsultationClick}
                id="hero-cta-consultation"
                className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(219,39,119,0.25)] hover:shadow-[0_12px_30px_rgba(219,39,119,0.4)]"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewWorkClick}
                id="hero-cta-view-work"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-white hover:bg-pink-50 text-slate-800 font-montserrat font-semibold text-sm sm:text-base border border-pink-200 hover:border-pink-400 transition-all shadow-sm"
              >
                <Eye className="w-4 h-4 text-pink-600" />
                <span>View Work</span>
              </button>
            </div>

            {/* Fast Direct Contact Channels */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-600">
              <span className="text-pink-600 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pink-600" /> Direct Connect:
              </span>
              <a 
                href={`tel:${BRAND_CONFIG.phoneRaw}`} 
                className="flex items-center gap-1.5 text-slate-800 hover:text-pink-600 font-medium underline decoration-pink-300 underline-offset-4"
              >
                <Phone className="w-3.5 h-3.5 text-pink-600" />
                <span>{BRAND_CONFIG.phone}</span>
              </a>
              <span className="text-pink-200">•</span>
              <a 
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Saurabh, I would like to consult with Pinaka Structure Studio.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 hover:underline font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Saurabh</span>
              </a>
            </div>

            {/* Architectural Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 border-t border-pink-100">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">100% Customized</div>
                  <div className="text-slate-500">Zero cookie-cutter layouts</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Vastu 2D Plans</div>
                  <div className="text-slate-500">Homes &amp; Apartments</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Shield className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Structural Safety</div>
                  <div className="text-slate-500">IS Code &amp; Load Certified</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: Architectural Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-300/40 to-rose-200/40 rounded-2xl blur-lg opacity-70" />
              
              <div className="relative rounded-xl overflow-hidden bg-white border border-pink-200 shadow-xl">
                
                {/* Technical Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-pink-50/80 border-b border-pink-100 text-[11px] font-mono text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                    <span className="font-bold text-slate-900">FEATURED ELEVATION ARCHIVE</span>
                  </div>
                  <span className="text-pink-600 font-semibold">RANCHI VILLA G+1</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Pinaka Structure Studio Modern Duplex Architectural Elevation in Ranchi"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/10" />
                  
                  {/* Architectural Dimension Callout Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded border border-pink-200 text-[11px] font-mono text-slate-800 shadow-sm">
                    <span className="text-pink-600 font-bold">AREA:</span> 2,850 SQ. FT. | DUPLEX
                  </div>

                  {/* Vastu Tag */}
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase shadow-sm">
                    Vastu Aligned
                  </div>

                  {/* Bottom Image Stats Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-pink-200 flex items-center justify-between text-xs shadow-md">
                    <div>
                      <div className="font-bold text-slate-900">Morabadi Luxury Facade</div>
                      <div className="text-[11px] text-pink-600 font-semibold">3D Photorealistic Exterior</div>
                    </div>
                    <button
                      onClick={onViewWorkClick}
                      className="px-3 py-1 rounded bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-600 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Inspect
                    </button>
                  </div>
                </div>

                {/* Technical Dimension Matrix Footer */}
                <div className="p-4 bg-pink-50/40 grid grid-cols-3 gap-2 text-center text-xs border-t border-pink-100">
                  <div className="p-2 rounded bg-white border border-pink-100 shadow-xs">
                    <span className="block text-[10px] uppercase text-slate-500 font-medium">Turnaround</span>
                    <span className="font-bold text-pink-600">3-5 Days</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-pink-100 shadow-xs">
                    <span className="block text-[10px] uppercase text-slate-500 font-medium">CAD Accuracy</span>
                    <span className="font-bold text-slate-800">100% mm</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-pink-100 shadow-xs">
                    <span className="block text-[10px] uppercase text-slate-500 font-medium">Sanction Ready</span>
                    <span className="font-bold text-pink-600">100% Compliant</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
