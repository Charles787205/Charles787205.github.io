import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  stack: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer — Transport Management System',
    company: 'Resolvify',
    location: 'Remote',
    period: '2025 – Present',
    responsibilities: [
      'Developed a transport management system for managing day-to-day transportation and fleet operations.',
      'Built modules for managing vehicles, drivers, vendors, trips, and related transport operations.',
      'Designed RESTful APIs and backend services to support operational workflows and data management.',
      'Implemented role-based access control and permission management for different system users.',
      'Designed and optimized database structures for transport, fleet, and operational data.',
      'Built reusable interfaces and business logic to streamline transport management workflows.',
    ],
    stack: 'Laravel, React, Inertia.js, TypeScript, MySQL',
  },
  {
    title: 'Software Developer — Logistics Management System',
    company: 'INT Logistics',
    location: 'Remote',
    period: '2024 – 2025',
    responsibilities: [
      'Developed a logistics management dashboard for monitoring delivery operations and performance across multiple distribution hubs.',
      'Built RESTful APIs for retrieving and processing operational data, including delivery, failed delivery, and hub performance metrics.',
      'Implemented interactive analytics and data visualizations to help monitor logistics operations and identify performance trends.',
      'Designed and optimized MySQL database structures and queries for efficient retrieval of operational data.',
      'Developed interfaces for viewing performance at individual hubs and across the entire logistics network.',
      'Improved application performance by optimizing database queries and data retrieval for dashboard views.',
    ],
    stack: 'Next.js, Laravel, MySQL, RESTful APIs',
  },
  {
    title: 'Web Development Intern',
    company: 'Mediaone Solutions',
    location: 'Remote',
    period: '2024',
    responsibilities: [
      'Built a dynamic form builder web application using HTMX for hypermedia-driven interactions.',
      'Developed drag-and-drop interface for creating custom forms with multiple field types.',
      'Implemented Google OAuth authentication for secure user management.',
      'Created server-side rendering architecture with Node.js and Express.js for optimal performance and SEO.',
      'Designed MongoDB schema for storing form templates, responses, and user data.',
      'Optimized user experience with real-time form interactions without heavy JavaScript frameworks.',
      'Built response management system for collecting and analyzing form submissions.',
    ],
    stack: 'HTMX, Node.js, Express.js, MongoDB, EJS, Tailwind CSS, Google OAuth',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-emerald-50 py-32 overflow-hidden relative">
      {/* 3D Grid Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'center top'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-teal-600" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="text-teal-600 mt-1.5">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full border border-teal-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
