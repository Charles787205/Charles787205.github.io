import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const circles = Array.from({ length: 15 }, () => ({
  width: Math.random() * 300 + 150,
  height: Math.random() * 300 + 150,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 8,
}));

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-blue-500/40"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="aspect-square bg-linear-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  
                  <img src="/MyPicture.jpg" alt="My Picture" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate developer based in Davao City, Philippines, specializing in 
                creating beautiful and functional web applications. With a keen eye for design 
                and a love for clean code, I bring ideas to life through technology.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold min-w-24">Location:</span>
                  <span className="text-gray-400">Bago Aplaya, Davao City</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold min-w-24">Email:</span>
                  <a href="mailto:joviancharles1210@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    joviancharles1210@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold min-w-24">Phone:</span>
                  <a href="tel:+63156787205" className="text-gray-400 hover:text-white transition-colors">
                    +63 156 787 205
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
