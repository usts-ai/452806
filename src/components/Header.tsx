import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://i.imgur.com/9vA2pAY.png" alt="Logo CodeOHADA" className="h-10 mr-3" />
          <span className={`font-bold text-2xl ${scrolled ? 'text-[#E60023]' : 'text-white'}`}>CodeOHADA</span>
        </motion.div>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex space-x-8">
          {['Accueil', 'Codes', 'Abonnements', 'Actualités', 'À propos'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg font-medium hover:text-[#E60023] transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            className="bg-[#E60023] text-white px-6 py-2 rounded-full font-medium hover:bg-[#cc001f] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Se connecter
          </motion.button>
        </nav>

        {/* Bouton menu mobile */}
        <motion.button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>☰</span>
        </motion.button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-6 right-6 text-white text-3xl"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                aria-label="Fermer"
              >
                ✕
              </motion.button>
              <nav className="flex flex-col items-center space-y-6">
                {['Accueil', 'Codes', 'Abonnements', 'Actualités', 'À propos'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-medium text-white hover:text-[#E60023] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="bg-[#E60023] text-white px-8 py-3 rounded-full font-medium hover:bg-[#cc001f] transition-colors mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Se connecter
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
