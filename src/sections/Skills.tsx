import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  iconUrl: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", level: 85, category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Django", level: 80, category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Laravel", level: 75, category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "MongoDB", level: 70, category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", level: 75, category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Java", level: 85, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", level: 80, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C#", level: 80, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "PHP", level: 75, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "JavaScript", level: 85, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 85, category: "Languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Unity", level: 75, category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
  { name: "Godot", level: 70, category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
  { name: "Git", level: 85, category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const symbolChars = ['</>','{}','[]','()','//','*','#','@'];
const symbols = Array.from({ length: 30 }, () => ({
  symbol: symbolChars[Math.floor(Math.random() * 8)],
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 5,
  xOffset: (Math.random() - 0.5) * 50,
}));

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend":
      return <Code2 className="w-6 h-6" />;
    case "Backend":
      return <Terminal className="w-6 h-6" />;
    case "Database":
      return <Database className="w-6 h-6" />;
    case "Languages":
      return <Code2 className="w-6 h-6" />;
    case "Tools":
      return <Wrench className="w-6 h-6" />;
    default:
      return <Code2 className="w-6 h-6" />;
  }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Animated Tech Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {symbols.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/30 font-mono text-4xl font-bold"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -200],
              x: [0, item.xOffset],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-16 text-center"
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
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-2xl font-semibold text-gray-300">{category}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05), duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-white font-medium text-center text-sm">{skill.name}</span>
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
