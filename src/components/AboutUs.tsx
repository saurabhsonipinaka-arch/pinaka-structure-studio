import React from 'react';
import { Target, ShieldCheck, Maximize2, Sparkles, UserCheck, Award, MapPin, Phone, Mail } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Precision CAD Engineering',
      desc: 'Millimeter-level dimensional precision that translates flawlessly to site execution without on-site guesswork or column misalignments.'
    },
    {
      icon: Sparkles,
      title: 'Modern Minimalist Aesthetic',
      desc: 'Clean geometric lines, balanced natural light, ventilated double-height volumes, and timeless material palettes tailored for Indian conditions.'
    },
    {
      icon: ShieldCheck,
      title: 'Structural Safety & Longevity',
      desc: 'Designs strictly compliant with Indian Standard (IS) structural codes, seismic resistance standards, and heavy monsoon waterproofing.'
    },
    {
      icon: Maximize2,
      title: 'Space Optimization',
      desc: 'Every square foot counts. We maximize usable carpet area, minimize wasteful long corridors, and optimize ergonomic furniture flow.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-pink-50/40 relative border-t border-pink-100">
      
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
            <span className="w-8 h-[2px] bg-pink-600" />
            About Pinaka Structure Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
            Crafting Structural Excellence in the Heart of Ranchi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-inter leading-relaxed">
            Founded and directed by <strong className="text-pink-600 font-bold">Saurabh Kumar</strong>, Pinaka Structure Studio is a premier architectural and engineering design atelier based in Ranchi, Jharkhand. We blend cutting-edge 2D CAD drafting, photorealistic 3D visualization, and structural stability principles to create homes, duplexes, and commercial spaces that endure for generations.
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left: Saurabh Kumar Leadership Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-pink-200 p-7 sm:p-9 shadow-xl overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/60 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white border border-pink-300 overflow-hidden flex items-center justify-center p-1 shadow-sm shrink-0">
                  <img 
                    src={BRAND_CONFIG.logoUrl} 
                    alt="Pinaka Structure Studio" 
                    className="w-full h-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-montserrat">
                    Saurabh Kumar
                  </h3>
                  <div className="text-xs font-bold text-pink-600 tracking-wider uppercase">
                    Founder &amp; Principal Designer
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-pink-600" /> Ranchi, Jharkhand
                  </div>
                </div>
              </div>

              {/* Founder Statement */}
              <blockquote className="text-sm sm:text-base text-slate-700 italic border-l-2 border-pink-500 pl-4 py-1 mb-6">
                &ldquo;Architecture isn&apos;t just drawing walls—it is orchestrating light, ventilation, emotional comfort, and uncompromising structural safety into a permanent shelter for your family.&rdquo;
              </blockquote>

              <div className="space-y-2.5 text-xs text-slate-600 border-t border-pink-100 pt-5">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-pink-600" />
                  <span>Direct One-on-One Project Consultations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-pink-600" />
                  <span>Specialist in Duplex &amp; Multi-Story Planning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="hover:text-pink-600 font-medium transition-colors">
                    {BRAND_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-pink-600" />
                  <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-pink-600 font-medium transition-colors truncate">
                    {BRAND_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Verification Stamp */}
              <div className="mt-6 pt-4 border-t border-pink-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>BUILDING BYLAWS COMPLIANT</span>
                <span className="text-pink-600 font-bold">VERIFIED STUDIO</span>
              </div>
            </div>
          </div>

          {/* Right: The 4 Structural Philosophy Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-pink-100 hover:border-pink-300 transition-all hover:-translate-y-1 duration-300 group shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-montserrat text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-inter">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Highlight Banner: Location & Reach */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-pink-100/70 via-rose-50 to-pink-100/70 border border-pink-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-pink-600 font-bold">
              Local Expertise &amp; Regional Execution
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 font-montserrat">
              Serving Ranchi &amp; Major Districts of Jharkhand &amp; Bihar
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Active projects across Kanke Road, Morabadi, Bariatu, Lalpur, Doranda, Harmu, Hinoo, Ratu Road, as well as Dhanbad, Bokaro, and Jamshedpur.
            </p>
          </div>
          <a
            href="#enquiry"
            className="shrink-0 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider transition-all text-center shadow-md"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
};
