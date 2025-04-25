import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { temoignages } from '../data/articles';

const TemoignagesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  // Changement automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % temoignages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ce qu'en disent nos utilisateurs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages des professionnels du droit qui utilisent notre plateforme au quotidien.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1">
            <motion.div 
              className="h-full bg-[#E60023]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <motion.div 
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#E60023]"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={temoignages[current].avatar} 
                    alt={temoignages[current].nom} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <svg 
                  className="w-12 h-12 text-gray-200 mb-6" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-2.21 0-4 1.79-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4zm12 0c-2.21 0-4 1.79-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4z"/>
                </svg>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {temoignages[current].texte}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <h3 className="font-bold text-lg text-gray-900">{temoignages[current].nom}</h3>
                  <p className="text-gray-600">{temoignages[current].fonction}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-10 space-x-2">
            {temoignages.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-[#E60023]' : 'bg-gray-300'}`}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesSection;
