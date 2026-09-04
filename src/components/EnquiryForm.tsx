import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';
import { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  prefilledProjectType?: string;
  prefilledEstimate?: {
    service: string;
    area: number;
    approxPrice: number;
  } | null;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  prefilledProjectType,
  prefilledEstimate,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: '2D Plan',
    plotArea: '',
    budgetRange: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledProjectType) {
      let mappedType = '2D Home Plan (Vastu)';
      if (prefilledProjectType.toLowerCase().includes('apartment') || prefilledProjectType.toLowerCase().includes('flat')) {
        mappedType = '2D Apartment Plan (Vastu)';
      } else if (prefilledProjectType.includes('2D') || prefilledProjectType.toLowerCase().includes('home') || prefilledProjectType.toLowerCase().includes('vastu')) {
        mappedType = '2D Home Plan (Vastu)';
      } else if (prefilledProjectType.includes('3D')) {
        mappedType = '3D Design';
      } else if (prefilledProjectType.includes('Interior')) {
        mappedType = 'Interior';
      } else if (prefilledProjectType.includes('Full')) {
        mappedType = 'Full House';
      } else if (prefilledProjectType.includes('Duplex')) {
        mappedType = 'Duplex/Apartment';
      }

      setFormData((prev) => ({
        ...prev,
        projectType: mappedType,
        message: prev.message || (prefilledProjectType !== mappedType ? `Inquiring for: ${prefilledProjectType}` : prev.message)
      }));
    }
  }, [prefilledProjectType]);

  useEffect(() => {
    if (prefilledEstimate) {
      setFormData((prev) => ({
        ...prev,
        plotArea: `${prefilledEstimate.area} sq ft`,
        message: `Inquiring for ${prefilledEstimate.service} for approx ${prefilledEstimate.area} sq ft plot. Estimated design budget ₹${prefilledEstimate.approxPrice.toLocaleString('en-IN')}.`,
      }));
    }
  }, [prefilledEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save lead in localStorage for persistence
    try {
      const existingLeads = JSON.parse(localStorage.getItem('pinaka_leads') || '[]');
      existingLeads.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('pinaka_leads', JSON.stringify(existingLeads));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Architectural Consultation Request - Pinaka Structure Studio*
• Name: ${formData.fullName || 'Client'}
• Phone: ${formData.phoneNumber || 'Not specified'}
• Email: ${formData.email || 'Not specified'}
• Service Type: ${formData.projectType}
• Plot Area: ${formData.plotArea || 'Not specified'}
• Message: ${formData.message || 'I would like to discuss my project in Ranchi.'}`;

    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-pink-50/40 relative border-t border-pink-100">
      
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
            <span className="w-8 h-[2px] bg-pink-600" />
            Consultation &amp; Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
            Let&apos;s Build Your Architectural Vision
          </h2>
          <p className="mt-3 text-base text-slate-600 font-inter leading-relaxed">
            Get in touch directly with <strong className="text-pink-600">Saurabh Kumar</strong> for custom 2D floor plans, 3D duplex elevations, or complete house blueprints in Ranchi, Jharkhand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Studio Presence */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-white border border-pink-100 p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-montserrat text-slate-900">
                Pinaka Structure Studio
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-pink-600 font-bold">
                      Studio Location
                    </div>
                    <div className="font-semibold text-slate-900 text-base">
                      {BRAND_CONFIG.address}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Serving Kanke, Morabadi, Bariatu, Doranda, Lalpur &amp; all Jharkhand
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-pink-600 font-bold">
                      Direct Contact Number
                    </div>
                    <a
                      href={`tel:${BRAND_CONFIG.phoneRaw}`}
                      className="font-semibold text-slate-900 text-base hover:text-pink-600 transition-colors block"
                    >
                      {BRAND_CONFIG.phone}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Direct line to Saurabh Kumar
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs uppercase tracking-wider text-pink-600 font-bold">
                      Official Email ID
                    </div>
                    <a
                      href={`mailto:${BRAND_CONFIG.email}`}
                      className="font-semibold text-slate-900 text-sm sm:text-base hover:text-pink-600 transition-colors break-all block"
                    >
                      {BRAND_CONFIG.email}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Response within 4-6 business hours
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pink-50/50 border border-pink-100">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-pink-600 font-bold">
                      Studio Hours
                    </div>
                    <div className="font-semibold text-slate-900 text-sm sm:text-base">
                      {BRAND_CONFIG.workingHours}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Sunday: By prior consultation appointment
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-pink-50/30 border border-emerald-200 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    Instant WhatsApp Support
                  </div>
                  <div className="text-xs text-slate-600">
                    Send plot sketches or municipal documents
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-3.5 py-2 rounded-lg bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#20ba59] transition-colors shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Architectural Service Assurance */}
            <div className="p-5 rounded-xl bg-white border border-pink-100 text-xs text-slate-600 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-pink-600 font-bold text-xs uppercase">
                <ShieldCheck className="w-4 h-4" /> Client Privacy &amp; Site Security
              </div>
              <p>
                Your plot dimensions, structural blueprints, and personal contact info remain 100% confidential and are never shared with external brokers or contractors without permission.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-pink-200 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-pink-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-slate-900">
                    Get Free Architectural Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below for a customized callback &amp; site evaluation.
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-500 flex items-center justify-center text-pink-600 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-montserrat text-slate-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-pink-600">{formData.fullName}</strong>. Saurabh Kumar will review your {formData.projectType} request and reach out at <strong>{formData.phoneNumber}</strong> within 4 hours.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-pink-100 text-pink-700 text-xs font-semibold hover:bg-pink-200 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sahay"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Type <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="2D Home Plan (Vastu)">2D Home Floor Plan (as per Vastu)</option>
                        <option value="2D Apartment Plan (Vastu)">2D Apartment / Flat Plan (as per Vastu)</option>
                        <option value="2D Plan">2D Floor Plan (AutoCAD / Municipal Bylaws)</option>
                        <option value="3D Design">3D Home Elevation &amp; Models</option>
                        <option value="Duplex/Apartment">Duplex Villa / Multi-story Apartment</option>
                        <option value="Interior">Luxury Interior Design</option>
                        <option value="Full House">Full House Architecture (Complete Bundle)</option>
                      </select>
                    </div>
                  </div>

                  {/* Plot Area or Dimensions */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Approx. Plot Area or Dimensions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 30x50 ft / 1500 sq ft / Kanke Road Ranchi"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details / Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your plot orientation (North/East/South/West), number of bedrooms, duplex preferences, Vastu requirements, or budget constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-pink-100 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-4 px-6 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(219,39,119,0.3)] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Blueprint Request...</span>
                      ) : (
                        <>
                          <span>Submit Free Consultation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-4 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Direct communication with owner Saurabh Kumar. Guaranteed reply within 4 hours.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
