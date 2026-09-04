import React, { useState } from 'react';
import { Ruler, Compass, ShieldCheck, Clock, CheckCircle2, Calculator, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_PILLARS, FAQS } from '../data/architecturalData';

interface WhyChooseUsProps {
  onEstimateSelect: (estimateDetails: { service: string; area: number; approxPrice: number }) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onEstimateSelect }) => {
  // Interactive estimator state
  const [plotArea, setPlotArea] = useState<number>(1500);
  const [selectedPackage, setSelectedPackage] = useState<'2d' | '3d' | 'combo' | 'interior'>('combo');

  // Rates in INR per sq ft for architectural planning in Ranchi
  const packageRates = {
    '2d': { name: '2D Municipal Floor Plan', ratePerSqFt: 8, baseDays: '3 Days' },
    '3d': { name: '3D Elevation & Facade', ratePerSqFt: 12, baseDays: '4 Days' },
    'combo': { name: 'Full House (2D + 3D + Structural)', ratePerSqFt: 18, baseDays: '6 Days' },
    'interior': { name: 'Luxury Interior Blueprint', ratePerSqFt: 25, baseDays: '7 Days' },
  };

  const calculatedCost = Math.round(plotArea * packageRates[selectedPackage].ratePerSqFt);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Ruler':
        return Ruler;
      case 'Compass':
        return Compass;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Clock':
        return Clock;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative">
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
            <span className="w-6 h-[2px] bg-pink-600" />
            The Pinaka Advantage
            <span className="w-6 h-[2px] bg-pink-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
            Why Homeowners &amp; Builders in Ranchi Choose Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-inter leading-relaxed">
            Architectural brilliance backed by structural rigor, ethical transparency, and zero construction delays.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_CHOOSE_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            return (
              <div
                key={pillar.id}
                id={`why-choose-${pillar.id}`}
                className="rounded-2xl bg-white border border-pink-100 p-6 flex flex-col justify-between hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-pink-700 bg-pink-50 px-2.5 py-1 rounded border border-pink-200">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-montserrat text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-pink-100 text-[11px] font-mono text-pink-600 uppercase tracking-wider font-semibold">
                  ✓ {pillar.metricLabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Architectural Cost & Time Estimator Tool */}
        <div className="rounded-3xl bg-gradient-to-br from-pink-50/60 via-white to-rose-50/50 border border-pink-200 p-6 sm:p-10 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-pink-600 font-bold">
                <Calculator className="w-4 h-4" />
                <span>Instant Project Planning Estimator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-slate-900">
                Estimate Your Architectural Design in Seconds
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600">
                Transparent design pricing for residential &amp; commercial properties in Ranchi, Jharkhand. Select your built-up area and service type:
              </p>

              {/* Area Slider */}
              <div className="space-y-3 p-4 rounded-xl bg-white border border-pink-200 shadow-sm">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-semibold text-slate-800">Built-up / Plot Area:</span>
                  <span className="font-mono font-bold text-pink-600 text-base sm:text-lg">
                    {plotArea.toLocaleString()} SQ FT
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="6000"
                  step="50"
                  value={plotArea}
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  className="w-full accent-pink-600 cursor-pointer h-2 bg-pink-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>600 sq ft (Compact)</span>
                  <span>1,500 sq ft (Standard Duplex)</span>
                  <span>6,000 sq ft (Large Villa/G+3)</span>
                </div>
              </div>

              {/* Package Selection Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-800">
                  Select Design Package:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(packageRates) as Array<keyof typeof packageRates>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPackage(key)}
                      className={`p-3 rounded-lg text-left text-xs transition-all cursor-pointer ${
                        selectedPackage === key
                          ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold shadow-md'
                          : 'bg-white text-slate-700 border border-pink-100 hover:bg-pink-50'
                      }`}
                    >
                      <div className="truncate font-medium">{packageRates[key].name}</div>
                      <div className="text-[10px] opacity-85 mt-1">₹{packageRates[key].ratePerSqFt}/sq ft</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-pink-300 shadow-xl text-center space-y-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-pink-600 font-bold">
                  Ballpark Architectural Quotation
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-slate-900">
                    ₹{calculatedCost.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-500 font-sans font-normal ml-1">approx</span>
                  </div>
                  <div className="text-xs text-pink-600 font-bold mt-1">
                    Includes Municipal Ready Drafts &amp; Revisions
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 border-y border-pink-100 py-4 text-left">
                  <div className="flex justify-between">
                    <span>Package Selected:</span>
                    <span className="font-semibold text-slate-900">{packageRates[selectedPackage].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Area:</span>
                    <span className="font-mono font-semibold text-slate-900">{plotArea} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Turnaround:</span>
                    <span className="font-bold text-pink-600">{packageRates[selectedPackage].baseDays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vastu Compliance:</span>
                    <span className="text-pink-600 font-bold">Included 100%</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onEstimateSelect({
                      service: packageRates[selectedPackage].name,
                      area: plotArea,
                      approxPrice: calculatedCost,
                    });
                    const enquiryElement = document.getElementById('enquiry');
                    enquiryElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Book with this Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-slate-400 italic">
                  * Final quotation may adjust based on structural complexity, soil conditions &amp; custom site requirements.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Architectural FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-slate-900">
              Frequently Asked Architectural Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear answers from Saurabh Kumar regarding design, sanctioning, and execution in Ranchi.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl bg-white border border-pink-100 p-4.5 open:border-pink-300 shadow-sm transition-colors"
              >
                <summary className="flex justify-between items-center font-montserrat font-semibold text-sm sm:text-base text-slate-800 cursor-pointer list-none select-none group-hover:text-pink-600 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-pink-600 text-xl transition-transform group-open:rotate-45 ml-2 font-bold">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 font-inter leading-relaxed pl-1 border-t border-pink-100 pt-2.5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
