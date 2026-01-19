import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const circles = Array.from({ length: 20 }, () => ({
  width: Math.random() * 150 + 50,
  height: Math.random() * 150 + 50,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  yOffset: Math.random() * 100 - 50,
  xOffset: Math.random() * 100 - 50,
  scale: Math.random() * 0.5 + 0.8,
  duration: Math.random() * 10 + 10,
}));

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 backdrop-blur-sm"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              y: [0, circle.yOffset, 0],
              x: [0, circle.xOffset, 0],
              scale: [1, circle.scale, 1],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#grid)"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
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
            className="text-6xl md:text-8xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6"
          >
            Jovian Charles Canedo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
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
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all"
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
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-zinc-900 border-2 border-zinc-700 text-gray-300 rounded-full hover:border-white hover:text-white transition-all shadow-sm hover:shadow-md"
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
            className="inline-block text-gray-600"
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
