import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Server,
  Database,
  LayoutDashboard,
  Cloud,
  Cpu,
  Mail
} from 'lucide-react';
import { PROFILE, EDUCATION } from '../data/portfolioData';

const corePillars = [
  {
    icon: LayoutDashboard,
    title: 'Operational Dashboards & Systems',
    description: 'Translating complex logistics workflows and high-volume parcel sortation data into real-time operational interfaces.'
  },
  {
    icon: Server,
    title: 'Backend APIs & Architecture',
    description: 'Designing structured RESTful endpoints and service-repository patterns using Laravel, C# .NET, Node.js, and Python.'
  },
  {
    icon: Database,
    title: 'Relational Database Engineering',
    description: 'Structuring normalized schemas, foreign-key invariants, and indexing strategies in MySQL, PostgreSQL, and SQLite.'
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure Deployment',
    description: 'Deploying and managing production environments on AWS (EC2, RDS), Linux VPS instances, Docker containers, and Nginx.'
  }
];

export default function About() {
  const edu = EDUCATION[0];

  return (
    <section id="about" className="py-28 relative bg-[#0a0f1d] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-gradient-emerald">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Bridging technical software architecture with operational business workflows.
          </p>
        </div>

        {/* 2-Column Content: Left Portrait & Stats, Right Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Quick Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Portrait Card */}
            <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-4 sm:p-5 shadow-2xl backdrop-blur-md overflow-hidden group">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-5">
                <img
                  src="/MyPicture.jpg"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Location overlay badge */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/70 text-slate-200 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {PROFILE.name}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    BSCS '25
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Junior Full-Stack Developer with hands-on enterprise experience in logistics telemetry, transport dispatch systems, and web application architecture.
                </p>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PROFILE.email}</span>
                  </a>
                  <span>{PROFILE.phone}</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 backdrop-blur-md">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-emerald-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {edu.location} • {edu.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Professional Summary Box */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Engineering Practical Software for Real-World Operations
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science graduate who specializes in building software that drives tangible business operations. Over the past two years, I have worked directly on production platforms that manage logistics networks, parcel delivery tracking, and multi-leg fleet dispatching across regional distribution centers.
                </p>
                <p>
                  My core focus centers on full-stack web applications, backend API architecture, and database design. Rather than building surface-level mockups, I enjoy designing the complete lifecycle of a system—from normalized database schemas and role-based permissions (RBAC) to intuitive frontend dashboards and cloud deployment.
                </p>
                <p>
                  I take pride in writing maintainable, clean code that directly solves operational bottlenecks: replacing fragmented spreadsheets with real-time audit tools, automating dispatch workflows, and ensuring database queries respond in milliseconds even under high record volume.
                </p>
              </div>
            </div>

            {/* Core Competencies 2x2 Grid */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Core Engineering Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-sm text-white">
                          {pillar.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
