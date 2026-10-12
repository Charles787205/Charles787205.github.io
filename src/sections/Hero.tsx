import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, ShieldCheck, Database, Server, Truck } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const highlights = [
  { icon: Truck, label: 'Logistics & Fleet Systems' },
  { icon: Database, label: 'Relational DBs & MySQL' },
  { icon: Server, label: 'Backend APIs (Laravel / C#)' },
  { icon: ShieldCheck, label: 'RBAC & Business Automation' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] opacity-70" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] opacity-60" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-teal-500/8 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 w-full text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-8 backdrop-blur-md shadow-sm shadow-emerald-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Developer &amp; Systems Engineering Opportunities</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Hi, I'm <span className="text-gradient-emerald">{PROFILE.name}</span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-300 mt-2 block font-sans">
              Junior Full-Stack Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
            Specializing in <span className="text-slate-200 font-semibold">logistics systems</span>, <span className="text-slate-200 font-semibold">fleet operations</span>, and <span className="text-slate-200 font-semibold">business automation</span>. Computer Science graduate with hands-on production experience building enterprise dashboards, backend REST APIs, relational databases, and high-throughput workflows.
          </p>
        </motion.div>

        {/* Experience Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-3xl mx-auto"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-200 text-sm sm:text-base group"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>

          <a
            href={PROFILE.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download={PROFILE.resumeFileName}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 shadow-sm transition-all duration-200 text-sm sm:text-base"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Profile links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex items-center justify-center gap-5 text-slate-400 text-sm"
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-slate-300" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700">•</span>
          <span className="text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span>{PROFILE.location}</span>
          </span>
        </motion.div>

        {/* Quick Numbers / Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-4xl mx-auto pt-10 border-t border-slate-800/80"
        >
          {PROFILE.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-mono tracking-tight text-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
