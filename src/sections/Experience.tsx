import { motion } from 'framer-motion';
import { Briefcase, Building2, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-[#090d16] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-gradient-emerald">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Practical development experience delivering business systems, logistics platforms, and backend services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/40 before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start gap-8 group"
              >
                {/* Timeline Center Node */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b101d] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Terminal className="w-4 h-4" />
                </div>

                {/* Content Card (Full width on mobile, alternates on desktop) */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                      <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Responsibilities list */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
