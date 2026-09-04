import React, { useState } from 'react';
import { Maximize2, MapPin, Compass, Eye, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/architecturalData';
import { PortfolioProject, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onConsultAboutProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onConsultAboutProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: '2d-plans', label: '2D Floor Plans' },
    { id: '3d-models', label: '3D Elevation & Models' },
    { id: 'interiors', label: 'Luxury Interiors' },
    { id: 'exteriors', label: 'Exterior Concepts' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-pink-50/30 relative border-t border-pink-100">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-blueprint-grid-dense opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 mb-3">
              <span className="w-6 h-[2px] bg-pink-600" />
              Portfolio &amp; Featured Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-slate-900 tracking-tight">
              Selected Architectural Works
            </h2>
            <p className="mt-3 text-base text-slate-600 font-inter max-w-xl">
              Explore our verified residential duplexes, AutoCAD blueprints, luxury penthouses, and commercial facades built across Ranchi and Jharkhand.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-pink-700 bg-pink-100 border border-pink-200 px-3 py-1.5 rounded-lg w-fit font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>SHOWING {filteredProjects.length} ARCHIVES</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-2 border-b border-pink-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat tracking-wide ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-[0_4px_15px_rgba(219,39,119,0.3)] font-bold'
                  : 'bg-white text-slate-700 border border-pink-100 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-item-${project.id}`}
              className="group relative rounded-xl overflow-hidden bg-white border border-pink-100 hover:border-pink-300 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} - Pinaka Structure Studio Ranchi`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/10" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-pink-200 text-[10px] font-bold uppercase tracking-wider text-pink-700 shadow-sm">
                  {project.categoryLabel}
                </div>

                {/* Vastu Compliant Indicator */}
                {project.vastuCompliant && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/95 border border-pink-300 flex items-center justify-center text-pink-600 shadow-sm" title="Vastu Compliant">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-3.5 py-2 rounded bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs font-bold font-montserrat flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Inspect Blueprint
                  </span>
                </div>
              </div>

              {/* Project Metadata Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-pink-600 font-bold mb-1.5">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-bold font-montserrat text-slate-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-inter leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Maximize2 className="w-3 h-3 text-pink-600" />
                    {project.areaSqFt} SQ FT
                  </span>
                  <span className="text-pink-600 text-[11px] uppercase tracking-wider font-bold">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Bottom Note */}
        <div className="mt-12 text-center p-6 rounded-xl bg-white border border-pink-200 max-w-2xl mx-auto shadow-sm">
          <div className="text-sm font-bold text-slate-900 mb-1">
            Have a custom plot dimension or commercial site in Jharkhand?
          </div>
          <p className="text-xs text-slate-600 mb-4">
            We draft tailor-made 2D &amp; 3D designs for 1000 sq ft to 20,000+ sq ft sites.
          </p>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs font-bold uppercase tracking-wider hover:from-pink-700 hover:to-rose-600 transition-all font-montserrat shadow-md"
          >
            Request Custom Consultation
          </a>
        </div>

      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onConsultAboutProject={onConsultAboutProject}
      />
    </section>
  );
};
