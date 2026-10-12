import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  CheckCircle2,
  AlertCircle,
  Truck,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Logistics & Systems' | 'Full-Stack Web' | 'Desktop & Automation' | 'Architecture & APIs';

const categories: CategoryFilter[] = [
  'All',
  'Logistics & Systems',
  'Architecture & APIs',
  'Full-Stack Web',
  'Desktop & Automation'
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const openProjectModal = (project: Project, imageIdx = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(imageIdx);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setActiveImageIndex(0);
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-28 relative bg-[#090d16] overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Software Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real enterprise logistics dashboards, fleet management systems, and backend architectures built with modern engineering practices. Click any project to inspect case studies and visual interfaces.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isIllustrative = project.imageType === 'illustrative_architecture';
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl shadow-black/40 hover:shadow-emerald-500/5"
              >
                {/* Visual Preview Container */}
                <div
                  className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer group/img border-b border-slate-800/80"
                  onClick={() => openProjectModal(project)}
                >
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                  {/* Badge & Image Type indicator */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/85 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      {project.badge}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium backdrop-blur-md border ${
                        isIllustrative
                          ? 'bg-amber-950/70 text-amber-300 border-amber-500/30'
                          : 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {isIllustrative ? 'Architecture Blueprint' : 'Production Interface'}
                    </span>
                  </div>

                  {/* Hover Prompt to expand */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-slate-950/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inspect Case Study &amp; {project.images.length} {project.images.length === 1 ? 'Visual' : 'Visuals'}</span>
                    </span>
                  </div>

                  {/* Multiple image count tag */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700/60">
                      1 of {project.images.length} screenshots
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Role subtitle */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-emerald-400">{project.category}</span>
                      <span>•</span>
                      <span>{project.role}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Contributions snippet */}
                    <div className="mb-5 space-y-1.5 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Core Responsibilities:
                      </div>
                      {project.keyContributions.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Links Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-sm">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-xs sm:text-sm cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study & Visuals Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b101d] rounded-2xl border border-slate-800 max-w-5xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b101d]/90 backdrop-blur-md border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {selectedProject.category}
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Preview Carousel */}
              <div className="relative bg-slate-950 border-b border-slate-800 flex items-center justify-center min-h-[280px] sm:min-h-[420px]">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                  className="w-full max-h-[500px] object-contain"
                />

                {/* Left/Right Carousel Controls */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-sm transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Thumbnails Row */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-md max-w-[90%] overflow-x-auto">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`w-10 h-6 rounded overflow-hidden border transition-all ${
                            i === activeImageIndex
                              ? 'border-emerald-400 ring-2 ring-emerald-400/30 scale-110'
                              : 'border-slate-700 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Verification label */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-md border ${
                      selectedProject.imageType === 'actual'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>
                      {selectedProject.imageType === 'actual'
                        ? 'Actual Running Software Screenshot'
                        : 'Illustrative Architecture Blueprint'}
                    </span>
                  </span>
                </div>
              </div>

              {/* Case Study Details Body */}
              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedProject.fullOverview}
                  </p>
                  {selectedProject.statusNote && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{selectedProject.statusNote}</span>
                    </div>
                  )}
                </div>

                {/* Role & Business Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      My Role &amp; Scope
                    </span>
                    <span className="text-white font-medium text-sm">
                      {selectedProject.role}
                    </span>
                  </div>
                  {selectedProject.businessImpact && (
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                        Business Impact
                      </span>
                      <span className="text-slate-300 text-sm">
                        {selectedProject.businessImpact}
                      </span>
                    </div>
                  )}
                </div>

                {/* Key Contributions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Technical Responsibilities &amp; Implementations</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyContributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges Solved */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>Technical Challenges &amp; Solutions</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.challengesSolved.map((ch, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-emerald-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-4">
                    {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {selectedProject.liveDemoUrl && (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
