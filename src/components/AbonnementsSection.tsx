import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { prixAbonnements } from '../data/articles';

const AbonnementsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="abonnements" className="py-24 bg-gradient-to-br from-[#000000] to-[#333333] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choisissez votre abonnement</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Des formules adaptées à vos besoins pour accéder aux ressources juridiques du Code OHADA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          {prixAbonnements.map((abonnement, index) => (
            <motion.div
              key={abonnement.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white text-gray-900 shadow-[0_0_30px_rgba(230,0,35,0.4)]' 
                  : 'bg-gray-800 text-white'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`py-8 px-6 ${activeIndex === index ? 'bg-[#E60023]' : 'bg-gray-700'} text-white`}>
                <h3 className="text-2xl font-bold mb-2">{abonnement.titre}</h3>
                <p className="opacity-90">{abonnement.description}</p>
              </div>

              <div className="p-8">
                <div className="mb-6 flex items-end">
                  <span className="text-4xl font-bold">{abonnement.prix} €</span>
                  <span className="ml-2 opacity-80">/ {abonnement.periode}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {abonnement.caracteristiques.map((carac, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <svg 
                        className={`w-5 h-5 mr-3 ${activeIndex === index ? 'text-[#E60023]' : 'text-green-400'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={activeIndex === index ? 'text-gray-800' : 'text-gray-300'}>
                        {carac}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                    activeIndex === index 
                      ? 'bg-[#E60023] text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeIndex === index ? 'Sélectionner cette offre' : 'Choisir cette offre'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-3">Besoin d'une solution sur mesure ?</h3>
          <p className="mb-4">Contactez-nous pour une offre personnalisée adaptée aux besoins spécifiques de votre cabinet ou entreprise.</p>
          <motion.button 
            className="bg-white text-gray-900 font-medium py-3 px-8 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Demander un devis</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AbonnementsSection;
