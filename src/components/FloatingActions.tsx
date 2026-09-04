import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../data/architecturalData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Quick Trigger */}
      <a
        href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Saurabh Kumar, I am visiting the Pinaka Structure Studio website and would like a consultation on an architectural project in Ranchi.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-xs px-4 py-3 rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300"
        aria-label="Chat with Saurabh on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-montserrat tracking-wide">
          WhatsApp Saurabh
        </span>
      </a>

      {/* Call Quick Trigger */}
      <a
        href={`tel:${BRAND_CONFIG.phoneRaw}`}
        className="group flex items-center gap-2.5 bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white font-bold text-xs px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Call Pinaka Structure Studio"
        id="floating-call-btn"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline font-montserrat tracking-wide">
          +91 7909092464
        </span>
      </a>
    </div>
  );
};
