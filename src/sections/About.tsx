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
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-teal-300/60"
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
          <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50"
          >
            <div className="space-y-6">
              <p className="text-md text-gray-800 leading-relaxed  font-light">
                I'm a flexible web developer based in Davao City, Philippines, specializing in 
                building full-stack applications from concept to deployment. I adapt quickly to new 
                technologies and frameworks, whether working on frontend interfaces, backend APIs, or 
                database design. With experience across multiple tech stacks, I bring versatility and 
                problem-solving skills to every project.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-semibold min-w-24">Location:</span>
                  <span className="text-gray-700">Bago Aplaya, Davao City</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-semibold min-w-24">Email:</span>
                  <a href="mailto:joviancharles1210@gmail.com" className="text-gray-700 hover:text-teal-600 transition-colors">
                    joviancharles1210@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-semibold min-w-24">Phone:</span>
                  <a href="tel:+63156787205" className="text-gray-700 hover:text-teal-600 transition-colors">
                    +63 156 787 205
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
