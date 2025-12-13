import { motion } from 'framer-motion';
import { Download } from 'lucide-react';


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6"
          >
            Jovian Charles Canedo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.a
            href="/MyResume.pdf"
            download="Jovian_Charles_Canedo_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm hover:shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block text-slate-400"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
