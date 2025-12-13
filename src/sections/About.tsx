import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="aspect-square bg-linear-to-br from-slate-200 to-slate-300 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  
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
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate developer based in Davao City, Philippines, specializing in 
                creating beautiful and functional web applications. With a keen eye for design 
                and a love for clean code, I bring ideas to life through technology.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-semibold min-w-24">Location:</span>
                  <span className="text-slate-600">Bago Aplaya, Davao City</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-semibold min-w-24">Email:</span>
                  <a href="mailto:joviancharles1210@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                    joviancharles1210@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-semibold min-w-24">Phone:</span>
                  <a href="tel:+63156787205" className="text-slate-600 hover:text-slate-900 transition-colors">
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
