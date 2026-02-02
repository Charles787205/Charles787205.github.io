import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['about', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}
          >
            JCC
          </motion.a>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`transition-colors relative group ${
                    isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  } ${activeSection === item.href.slice(1) ? 'text-gray-900 font-semibold' : ''}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full ${
                    activeSection === item.href.slice(1) ? 'w-full' : ''
                  }`} />
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full transition-colors ${
              isScrolled 
                ? 'bg-teal-600 text-white hover:bg-teal-700' 
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
