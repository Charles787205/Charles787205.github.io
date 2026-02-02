import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    title: 'IT Specialist - Databases',
    issuer: 'Certiport',
    date: '2024',
    credentialId: 'fdd1ce6d-af0c-4115-aea8-681b38673300',
    image: '/certificates/database.png',
    description: 'Validates fundamental database concepts including core database concepts, creating database objects, manipulating data, and data storage.',
    credlyUrl: 'https://www.credly.com/badges/fdd1ce6d-af0c-4115-aea8-681b38673300/linked_in_profile',
  },
  
  {
    title: 'IT Specialist - HTML & CSS',
    issuer: 'Certiport',
    date: '2023',
    credentialId: 'd13049c9-3105-4654-9546-5cceee396523',
    image: '/certificates/html_css.png',
    description: 'Validates foundational knowledge of HTML and CSS, including document structure, styling, responsive design, and web accessibility.',
    credlyUrl: 'https://www.credly.com/badges/d13049c9-3105-4654-9546-5cceee396523/linked_in_profile',
  },
  {
    title: 'CCE Skills Clinic Mentor Certificate',
    issuer: 'University of Mindanao',
    date: '2024',
    credentialId: 'MENTOR-001',
    image: '/certificates/certificate of mentor.jpg',
    description: 'Certificate awarded for serving as a mentor in the CCE Skills Clinic program at the University of Mindanao.',
  },
  {
    title: 'Certificate of Participation - PSITS',
    issuer: 'PSITS',
    date: '2024',
    credentialId: 'PSITS-001',
    image: '/certificates/certificate of participation psits.jpg',
    description: 'Certificate of participation in PSITS (Philippine Society of Information Technology Students) events and activities.',
  },
  
  {
    title: 'Certificate of Participation - IT Olympiad ACM Programming Competition',
    issuer: 'MCITS',
    date: '2024',
    credentialId: 'MCITS-001',
    image: '/certificates/mcits.jpg',
    description: 'Certificate from MCITS (Mindanao Conference on Information Technology Students).',
  },
  {
    title: 'StackTrek Certification',
    issuer: 'StackTrek',
    date: '2024',
    credentialId: 'STREK-001',
    image: '/certificates/stacktrek.png',
    description: 'Certificate of completion from StackTrek programming bootcamp.',
  },
];

const staticAwards = Array.from({ length: 25 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 40 + 20,
}));

const movingAwards = Array.from({ length: 25 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 30 + 15,
  yOffset: Math.random() * -150 - 50,
  xOffset: (Math.random() - 0.5) * 80,
  rotation: Math.random() * 180,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {staticAwards.map((award, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: award.left,
              top: award.top,
            }}
          >
            <Award 
              className="text-teal-300/30" 
              size={award.size}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
        {movingAwards.map((award, i) => (
          <motion.div
            key={`moving-${i}`}
            className="absolute"
            style={{
              left: award.left,
              top: award.top,
            }}
            animate={{
              y: [0, award.yOffset],
              x: [0, award.xOffset],
              opacity: [0, 0.4, 0],
              rotate: [0, award.rotation],
            }}
            transition={{
              duration: award.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: award.delay,
            }}
          >
            <Award 
              className="text-amber-400/40" 
              size={award.size}
              strokeWidth={2}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-teal-300 transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-teal-100 p-2 rounded-lg border border-teal-200">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-lg flex-1 text-gray-900">{cert.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                {cert.description && (
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{cert.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-200 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>

                {/* Certificate Image */}
                <div className={`w-full bg-gray-50 flex items-center justify-center ${
                  selectedCert.credlyUrl ? 'p-8' : ''
                }`}>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className={selectedCert.credlyUrl ? 'max-w-md w-full h-auto' : 'w-full h-auto'}
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-lg border border-teal-200">
                      <Award className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedCert.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-1">{selectedCert.issuer}</p>
                      <p className="text-gray-500 mb-3">{selectedCert.date}</p>
                      {selectedCert.description && (
                        <p className="text-gray-600 mb-4">{selectedCert.description}</p>
                      )}
                      {selectedCert.credlyUrl && (
                        <a
                          href={selectedCert.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
                        >
                          View on Credly
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
