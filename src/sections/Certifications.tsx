import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-28 relative bg-[#090d16] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications &amp; <span className="text-gradient-emerald">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Verified industry certifications, academic mentorship recognitions, and competitive programming achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-5 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4 group-hover:scale-101 transition-transform">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {cert.credlyUrl && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
                      Credly Verified
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-400 group-hover:underline font-medium">
                  Click to inspect
                </span>
                {cert.credlyUrl && (
                  <span className="text-slate-500 flex items-center gap-1">
                    <span>Badge</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b101d] rounded-2xl border border-slate-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image preview */}
              <div className="w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80 mb-6 flex items-center justify-center p-2">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[420px] w-auto object-contain"
                />
              </div>

              {/* Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {selectedCert.issuer}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Year: {selectedCert.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>

                {selectedCert.credlyUrl && (
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href={selectedCert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                      <span>Verify on Credly</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setSelectedCert(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
