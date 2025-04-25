import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { codesOHADA } from '../data/articles';

const CodesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="codes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Consultez les Codes OHADA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accédez à l'ensemble des textes juridiques de l'Organisation pour l'Harmonisation en Afrique du Droit des Affaires.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {codesOHADA.map((code, index) => (
            <motion.div
              key={code.id}
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`h-64 p-6 flex flex-col justify-between transition-colors duration-300 ${
                hoveredIndex === index ? 'bg-[#E60023] text-white' : 'bg-white text-gray-900'
              }`}>
                <div>
                  <h3 className="font-bold text-xl mb-2">{code.nom}</h3>
                  <p className={`${hoveredIndex === index ? 'text-white' : 'text-gray-600'}`}>
                    {code.articleCount} articles disponibles
                  </p>
                </div>
                
                <div className="flex justify-between items-end">
                  <motion.button 
                    className={`px-4 py-2 rounded-full font-medium ${
                      hoveredIndex === index 
                        ? 'bg-white text-[#E60023]' 
                        : 'bg-[#E60023] text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Consulter
                  </motion.button>
                  
                  <motion.div
                    animate={{ 
                      rotate: hoveredIndex === index ? 45 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="bg-[#333333] hover:bg-black text-white font-medium py-3 px-8 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voir tous les codes</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CodesSection;
