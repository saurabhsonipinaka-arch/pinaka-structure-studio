import React from 'react';
import { X, MapPin, Maximize, Calendar, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onConsultAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultAboutProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-pink-200 rounded-2xl shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 border border-pink-200 text-slate-700 hover:text-pink-600 hover:border-pink-500 transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20" />
          
          <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-pink-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              {project.categoryLabel}
            </span>
            {project.vastuCompliant && (
              <span className="px-3 py-1 rounded bg-white/95 border border-pink-300 text-pink-700 text-xs font-semibold flex items-center gap-1 shadow-sm">
                <Compass className="w-3.5 h-3.5 text-pink-600" /> Vastu Compliant
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-pink-100 pb-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-slate-900">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 mt-2">
                <span className="flex items-center gap-1.5 text-pink-600 font-semibold">
                  <MapPin className="w-4 h-4" /> {project.location}
                </span>
                <span className="text-pink-200">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Maximize className="w-4 h-4 text-pink-600" /> {project.dimensions} ({project.areaSqFt.toLocaleString()} sq ft)
                </span>
                <span className="text-pink-200">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-pink-600" /> Executed: {project.completionYear}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onConsultAboutProject(project.title);
              }}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white text-xs font-bold uppercase tracking-wider font-montserrat shadow-md transition-all"
            >
              <span>Inquire Similar Layout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-pink-600 mb-2 font-bold">
              Architectural Concept &amp; Scope
            </h4>
            <p className="text-sm sm:text-base text-slate-600 font-inter leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features & Specifications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-pink-600 mb-3 font-bold">
              Structural &amp; Design Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-pink-50/50 border border-pink-100 text-xs sm:text-sm text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blueprint Engineering Note */}
          <div className="p-4 rounded-xl bg-pink-50/60 border border-dashed border-pink-300 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-pink-600 font-bold block">Need Custom Plans for Your Specific Plot Size?</span>
              <span>Saurabh Kumar designs custom architectural plans for any plot geometry, orientation, or budget.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onConsultAboutProject(project.title);
              }}
              className="text-xs font-bold text-pink-600 underline hover:text-pink-700 shrink-0"
            >
              Get Free Estimate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
