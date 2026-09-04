import React, { useState } from 'react';
import { 
  Compass, 
  Home, 
  Building2, 
  CheckCircle2, 
  Maximize2, 
  ArrowRight, 
  Sparkles, 
  Ruler, 
  Info, 
  ShieldCheck, 
  Layers,
  Flame,
  Droplets,
  Wind,
  Sun,
  Eye,
  Check
} from 'lucide-react';
import { 
  VASTU_FLOOR_PLANS, 
  VASTU_DIRECTION_GUIDES, 
  VastuFloorPlan, 
  VastuDirectionGuide 
} from '../data/vastuFloorPlansData';

interface VastuFloorPlansProps {
  onSelectPlan: (planTitle: string) => void;
}

export const VastuFloorPlans: React.FC<VastuFloorPlansProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'home' | 'apartment' | 'duplex'>('all');
  const [selectedPlan, setSelectedPlan] = useState<VastuFloorPlan>(VASTU_FLOOR_PLANS[0]);
  const [activeDirectionCode, setActiveDirectionCode] = useState<string>('NE');
  const [showDirectionGuide, setShowDirectionGuide] = useState<boolean>(false);

  const filteredPlans = activeTab === 'all' 
    ? VASTU_FLOOR_PLANS 
    : VASTU_FLOOR_PLANS.filter(p => p.type === activeTab);

  const activeDirection: VastuDirectionGuide = VASTU_DIRECTION_GUIDES.find(d => d.code === activeDirectionCode) || VASTU_DIRECTION_GUIDES[0];

  return (
    <section id="vastu-plans" className="py-20 lg:py-28 bg-white relative border-t border-pink-100">
      
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
              <span className="w-8 h-[2px] bg-pink-600" />
              Scientific Vastu Shastra &amp; AutoCAD Blueprints
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
              2D Floor Plans for Homes &amp; Apartments as per Vastu
            </h2>
            <p className="mt-3 text-base text-slate-600 font-inter leading-relaxed">
              Precision AutoCAD architectural drafting aligning modern spatial efficiency with authentic Vedic Vastu Shastra principles. Engineered for maximum natural daylight, positive cosmic circulation, and 100% building bylaws compliance in Ranchi and Jharkhand.
            </p>
          </div>

          {/* Quick Stats / Guide Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowDirectionGuide(!showDirectionGuide)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold font-montserrat uppercase tracking-wider flex items-center gap-2 border transition-all cursor-pointer shadow-xs ${
                showDirectionGuide
                  ? 'bg-pink-600 text-white border-pink-600 shadow-md'
                  : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'
              }`}
              id="vastu-guide-toggle-btn"
            >
              <Compass className="w-4 h-4" />
              <span>{showDirectionGuide ? 'Close Direction Guide' : 'Interactive Vastu Compass'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-pink-100">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md font-bold'
                  : 'bg-white text-slate-700 border border-pink-100 hover:bg-pink-50 hover:text-pink-600'
              }`}
              id="tab-all-vastu-plans"
            >
              All Plans ({VASTU_FLOOR_PLANS.length})
            </button>

            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat flex items-center gap-1.5 ${
                activeTab === 'home'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md font-bold'
                  : 'bg-white text-slate-700 border border-pink-100 hover:bg-pink-50 hover:text-pink-600'
              }`}
              id="tab-home-vastu-plans"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Independent Homes &amp; Villas</span>
            </button>

            <button
              onClick={() => setActiveTab('apartment')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat flex items-center gap-1.5 ${
                activeTab === 'apartment'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md font-bold'
                  : 'bg-white text-slate-700 border border-pink-100 hover:bg-pink-50 hover:text-pink-600'
              }`}
              id="tab-apartment-vastu-plans"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Apartments &amp; Flats</span>
            </button>

            <button
              onClick={() => setActiveTab('duplex')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat flex items-center gap-1.5 ${
                activeTab === 'duplex'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md font-bold'
                  : 'bg-white text-slate-700 border border-pink-100 hover:bg-pink-50 hover:text-pink-600'
              }`}
              id="tab-duplex-vastu-plans"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Duplex &amp; Multi-Story</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            <span className="text-pink-600 font-bold">100%</span> VASTU VERIFIED BY SAURABH KUMAR
          </div>
        </div>

        {/* OPTIONAL EXPANDABLE: Interactive Vastu Shastra 8-Direction Matrix */}
        {showDirectionGuide && (
          <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-pink-50/70 border border-pink-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-pink-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-widest">
                  <Compass className="w-4 h-4" /> Interactive Vastu Compass Guide
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-slate-900 mt-1">
                  How Saurabh Kumar Positions Rooms in Homes &amp; Apartments
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-white px-3 py-1 rounded-full border border-pink-100">
                Click any zone below to view recommendations
              </span>
            </div>

            {/* Direction Selector Pills */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-6">
              {VASTU_DIRECTION_GUIDES.map((d) => (
                <button
                  key={d.code}
                  onClick={() => setActiveDirectionCode(d.code)}
                  className={`p-2.5 rounded-xl text-center transition-all cursor-pointer border ${
                    activeDirectionCode === d.code
                      ? 'bg-pink-600 text-white border-pink-600 shadow-sm font-bold scale-105'
                      : 'bg-white text-slate-700 border-pink-100 hover:bg-pink-100/60 hover:text-pink-700'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider">{d.code}</div>
                  <div className="text-[10px] truncate opacity-90">{d.direction}</div>
                </button>
              ))}
            </div>

            {/* Active Direction Detail Panel */}
            <div className="bg-white rounded-xl p-6 border border-pink-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-pink-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-pink-100 text-pink-700 font-bold font-mono text-xs">
                      {activeDirection.code} ({activeDirection.direction})
                    </span>
                    <span className="text-lg font-bold font-montserrat text-slate-900">
                      {activeDirection.zoneName}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    <strong>Primary Element:</strong> {activeDirection.element}
                  </p>
                </div>
                <div className="text-xs text-slate-600 max-w-sm italic">
                  &ldquo;{activeDirection.spiritualSignificance}&rdquo;
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                {/* For Independent Homes */}
                <div className="p-4 rounded-lg bg-pink-50/50 border border-pink-100 space-y-2">
                  <div className="font-bold text-slate-900 font-montserrat flex items-center gap-1.5 text-pink-700">
                    <Home className="w-3.5 h-3.5" /> For Independent Homes
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {activeDirection.recommendedHome.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Apartments & Flats */}
                <div className="p-4 rounded-lg bg-pink-50/50 border border-pink-100 space-y-2">
                  <div className="font-bold text-slate-900 font-montserrat flex items-center gap-1.5 text-pink-700">
                    <Building2 className="w-3.5 h-3.5" /> For Apartments &amp; Flats
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {activeDirection.recommendedApartment.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to strictly avoid */}
                <div className="p-4 rounded-lg bg-rose-50/70 border border-rose-100 space-y-2">
                  <div className="font-bold text-rose-800 font-montserrat flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-600" /> Vastu Dosha to Strictly Avoid
                  </div>
                  <ul className="space-y-1.5 text-rose-700">
                    {activeDirection.strictAvoid.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Two-Column Interactive Feature: Left = Blueprint Plans Showcase Cards, Right = Deep Blueprint Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of 2D Floor Plans */}
          <div className="lg:col-span-7 space-y-5">
            {filteredPlans.map((plan) => {
              const isSelected = selectedPlan.id === plan.id;
              return (
                <div
                  key={plan.id}
                  id={`plan-card-${plan.id}`}
                  onClick={() => setSelectedPlan(plan)}
                  className={`p-6 rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-pink-500 shadow-xl ring-2 ring-pink-500/20'
                      : 'bg-white border-pink-100 hover:border-pink-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Bar with Type & Orientation Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-pink-100 text-pink-700 text-[11px] font-bold uppercase tracking-wider font-montserrat">
                        {plan.configuration} • {plan.typeLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                        {plan.orientation}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-pink-600 font-bold flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      {plan.builtUpAreaSqFt} SQ FT
                    </span>
                  </div>

                  {/* Title & Plot Dimensions */}
                  <h3 className="text-lg sm:text-xl font-bold font-montserrat text-slate-900">
                    {plan.title}
                  </h3>
                  
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    Plot / Carpet Footprint: <span className="text-slate-800 font-semibold">{plan.dimensions}</span>
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-inter leading-relaxed">
                    {plan.overview}
                  </p>

                  {/* Vastu Key Bullets */}
                  <div className="mt-4 pt-3 border-t border-pink-100/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-pink-600 mb-2 flex items-center gap-1">
                      <Compass className="w-3 h-3" /> Vastu Alignment Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {plan.vastuHighlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-5 pt-3 border-t border-pink-100 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlan(plan);
                      }}
                      className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect CAD Breakdown</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPlan(plan.title);
                      }}
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white font-montserrat text-xs font-bold uppercase tracking-wider hover:from-pink-700 hover:to-rose-600 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>Inquire This Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Blueprint & Vastu Room Coordinates Matrix */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-pink-200 shadow-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-pink-100">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-pink-600 font-bold font-mono">
                    CAD Specification Sheet
                  </span>
                  <h3 className="text-lg font-bold font-montserrat text-slate-900 mt-0.5">
                    {selectedPlan.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600">
                  <Ruler className="w-4 h-4" />
                </div>
              </div>

              {/* Visual CAD Blueprint Schematic Graphic */}
              <div className="mt-4 relative rounded-xl overflow-hidden border border-pink-200 bg-pink-50/50">
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={selectedPlan.blueprintImage}
                    alt={`${selectedPlan.title} 2D AutoCAD blueprint as per Vastu`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  
                  {/* Watermark Blueprint Overlay Badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-xs border border-pink-200 text-[10px] font-mono text-slate-800 font-bold">
                    ORIENTATION: {selectedPlan.orientation.toUpperCase()}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-pink-600 text-white text-[10px] font-bold font-montserrat uppercase">
                    100% Vastu Aligned
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <div className="font-bold font-montserrat text-sm">{selectedPlan.dimensions} • {selectedPlan.builtUpAreaSqFt} SQ FT</div>
                    <div className="text-[11px] text-pink-200 font-mono">AutoCAD DWG + PDF Sanction Set</div>
                  </div>
                </div>
              </div>

              {/* Room by Room Vastu Coordinates Matrix */}
              <div className="mt-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 font-montserrat flex items-center justify-between">
                  <span>Room Orientation Breakdown</span>
                  <span className="text-[10px] text-pink-600 font-mono">Vastu Zone Alignment</span>
                </div>

                <div className="space-y-2">
                  {selectedPlan.roomDetails.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-pink-50/40 border border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-colors text-xs"
                    >
                      <div className="flex items-center justify-between font-semibold text-slate-900 mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                          {r.room}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white border border-pink-200 text-[10px] font-mono font-bold text-pink-700">
                          {r.direction} ({r.zone})
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1">
                        <span>Dimensions: <strong>{r.dimensions}</strong></span>
                      </div>
                      <p className="text-[11px] text-slate-600 italic">
                        {r.vastuReason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bylaw & Compliance assurance */}
              <div className="mt-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Building Bylaws &amp; Setback Compliant
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Every 2D plan is drafted to local building regulations, setback margins, staircase width formulas, and ventilation shafts for Ranchi and Jharkhand.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2">
                <button
                  onClick={() => onSelectPlan(selectedPlan.title)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(219,39,119,0.3)] transition-all cursor-pointer"
                  id="consult-this-plan-btn"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize This Plan for My Plot</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Direct consultation with Saurabh Kumar • Delivered in 3-5 working days
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Customized Plot Dimension Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-pink-200 text-center max-w-4xl mx-auto shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> Have an Odd or Non-Standard Plot?
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-slate-900 mb-2">
            We Draft Tailor-Made Vastu Plans for Any Plot Geometry in Ranchi
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-5 leading-relaxed">
            Whether your plot is corner-facing, irregular trapezoidal, narrow front, or a multi-unit apartment complex, Saurabh Kumar applies scientific Vastu Shastra to neutralize doshas without wasting expensive carpet area.
          </p>
          <button
            onClick={() => onSelectPlan('Custom 2D Vastu Floor Plan')}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white font-montserrat text-xs font-bold uppercase tracking-wider hover:from-pink-700 hover:to-rose-600 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom Plot Vastu Layout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
