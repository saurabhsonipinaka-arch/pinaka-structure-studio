import React from 'react';
import { Compass, Box, Building2, Sparkles, Layers, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/architecturalData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return Compass;
      case 'Box':
        return Box;
      case 'Building2':
        return Building2;
      case 'Sparkles':
        return Sparkles;
      case 'Layers':
        return Layers;
      default:
        return Compass;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
            <span className="w-6 h-[2px] bg-pink-600" />
            What We Do
            <span className="w-6 h-[2px] bg-pink-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
            Comprehensive Architectural &amp; Structural Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-inter leading-relaxed">
            From initial municipal-ready 2D CAD floor plans to breathtaking 4K 3D elevation renders and turnkey luxury interior blueprints.
          </p>
        </div>

        {/* 5-Service Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const Icon = getIcon(service.iconName);
            const isFeatured = index === 1; // 3D Elevation is frequently requested

            return (
              <article
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl ${
                  isFeatured 
                    ? 'bg-gradient-to-b from-pink-50/60 via-white to-white border-2 border-pink-500 shadow-[0_10px_30px_rgba(219,39,119,0.15)]' 
                    : 'bg-white border border-pink-100 hover:border-pink-300'
                }`}
              >
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-pink-100 border border-pink-200 text-pink-700">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Icon & Sequence Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-2xl font-mono font-bold text-pink-200">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold font-montserrat text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-inter leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-pink-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-pink-600 font-bold">
                      Deliverables Included:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA to Enquire for this exact service */}
                <div className="pt-4 border-t border-pink-100 flex items-center justify-between mt-auto">
                  <div className="text-[11px] text-slate-500 italic truncate max-w-[170px]">
                    {service.idealFor}
                  </div>

                  <button
                    onClick={() => onSelectService(service.projectTypeKey)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 transition-colors group cursor-pointer"
                  >
                    <span>Request Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </article>
            );
          })}

          {/* 6th Card: Custom Master Planning & Structural Advisory */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-pink-50 via-white to-rose-50 border border-dashed border-pink-300 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-13 h-13 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center text-pink-600 mb-6 shadow-sm">
                <Compass className="w-6 h-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 block mb-1">
                Full-Spectrum Turnkey
              </span>
              <h3 className="text-xl font-bold font-montserrat text-slate-900 mb-3">
                Complete End-to-End Home Architectural Pack
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-inter">
                Need a comprehensive bundle? Get 2D Municipal Floor Plans + 3D Elevations + Structural Working Drawings + Electrical &amp; Plumbing Blueprints in one seamless package.
              </p>
              <div className="p-3.5 rounded-lg bg-white/90 border border-pink-200 text-xs space-y-1 text-slate-700 shadow-sm">
                <div className="text-pink-700 font-medium">✓ Single point of contact with Saurabh Kumar</div>
                <div className="text-pink-700 font-medium">✓ Saves up to 25% compared to individual items</div>
                <div className="text-pink-700 font-medium">✓ On-site structural engineering verification</div>
              </div>
            </div>

            <button
              onClick={() => onSelectService('Full House')}
              className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all text-center shadow-md hover:shadow-lg cursor-pointer"
            >
              Enquire For Full House Package
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
