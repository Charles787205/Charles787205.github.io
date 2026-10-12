import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#0a0f1d] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's <span className="text-gradient-emerald">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Interested in discussing full-stack development, logistics systems, or engineering opportunities? Reach out directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 backdrop-blur-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Email Me</h3>
              <p className="text-xs text-slate-400 mb-4">
                Primary channel for inquiries and interview invitations.
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-emerald-300 break-all mb-4 select-all">
                {PROFILE.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-semibold text-center hover:bg-emerald-400 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Send Mail</span>
                <Send className="w-3 h-3" />
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 backdrop-blur-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">GitHub</h3>
              <p className="text-xs text-slate-400 mb-4">
                Explore repositories, full-stack projects, and commit history.
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-300 mb-4">
                @Charles787205
              </div>
            </div>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold text-center border border-slate-700 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 backdrop-blur-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-400 mb-4">
                Connect professionally and view background details.
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-300 mb-4 truncate">
                Jovian Charles Cañedo
              </div>
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold text-center border border-slate-700 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>View LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location & Telephone Sub-bar */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Based in {PROFILE.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <a href={`tel:${PROFILE.phone}`} className="hover:text-white transition-colors">
              {PROFILE.phone}
            </a>
          </div>

          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Remote &amp; On-Site Roles</span>
          </div>
        </div>

        {/* Clean Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript, Vite &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>•</span>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
