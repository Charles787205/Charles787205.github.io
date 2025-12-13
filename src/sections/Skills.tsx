import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Django", level: 80, category: "Backend" },
  { name: "Laravel", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "MySQL", level: 75, category: "Database" },
  { name: "Java", level: 85, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "PHP", level: 75, category: "Languages" },
  { name: "Git", level: 85, category: "Tools" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-slate-900 mb-16 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-6">{category}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05), duration: 0.5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-900 font-medium">{skill.name}</span>
                        <span className="text-slate-600">{skill.level}%</span>
                      </div>
                      
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: (catIndex * 0.1) + (index * 0.05) + 0.3, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-linear-to-r from-slate-700 to-slate-900 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
