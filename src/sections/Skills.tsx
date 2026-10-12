import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layers,
  Boxes,
  ShieldCheck,
  Truck,
  Workflow
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Layers: Layers,
  Boxes: Boxes,
  ShieldCheck: ShieldCheck,
  Database: Database,
  Truck: Truck,
  Workflow: Workflow
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-[#0a0f1d] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="text-gradient-emerald">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Organized by discipline. Focused on technologies actively applied across production systems, databases, and architectural designs.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 p-6 sm:p-7 shadow-lg backdrop-blur-md transition-all duration-200 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const CustomIcon = skill.iconName ? iconMap[skill.iconName] : null;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-emerald-500/40 text-slate-200 text-xs sm:text-sm font-medium transition-all group"
                      >
                        {skill.iconUrl && (
                          <img
                            src={skill.iconUrl}
                            alt=""
                            className="w-4 h-4 object-contain shrink-0 group-hover:scale-110 transition-transform"
                            loading="lazy"
                          />
                        )}
                        {CustomIcon && (
                          <CustomIcon className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
