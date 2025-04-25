import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articlesJuridiques } from '../data/articles';

const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const openArticle = (id: number) => {
    setSelectedArticle(id);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Articles juridiques disponibles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consultez nos articles juridiques de référence issus du Code OHADA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesJuridiques.map((article, index) => (
            <motion.div
              key={article.id}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                article.isAbonne ? 'border border-[#E60023]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {article.codeName}
                  </span>
                  {article.isAbonne && (
                    <span className="text-sm bg-[#E60023] text-white px-3 py-1 rounded-full flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Abonnés
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-2">{article.titre}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.contenu.substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.datePublication}</span>
                  
                  <motion.button
                    onClick={() => openArticle(article.id)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      article.isAbonne 
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                        : 'bg-[#E60023] text-white hover:bg-[#cc001f]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {article.isAbonne ? 'Accès réservé' : 'Lire'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedArticle !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
            >
              <motion.div
                className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const article = articlesJuridiques.find(a => a.id === selectedArticle);
                  if (!article) return null;

                  return (
                    <>
                      <div className="bg-gray-800 text-white p-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm bg-white text-gray-800 px-3 py-1 rounded-full">
                            {article.codeName}
                          </span>
                          <button 
                            onClick={closeArticle}
                            className="text-white hover:text-gray-300 transition-colors"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <h3 className="text-xl font-bold">{article.titre}</h3>
                        <p className="text-gray-300 text-sm mt-2">{article.datePublication} - {article.section}</p>
                      </div>

                      <div className="p-6">
                        {article.isAbonne ? (
                          <div className="text-center py-10">
                            <svg className="w-16 h-16 mx-auto text-[#E60023] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Contenu réservé aux abonnés</h3>
                            <p className="text-gray-600 mb-4">Pour accéder à cet article juridique et bien plus encore, rejoignez notre plateforme.</p>
                            
                            <div className="flex justify-center space-x-4">
                              <motion.button
                                className="bg-[#E60023] text-white px-6 py-2 rounded-full font-medium hover:bg-[#cc001f]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Découvrir nos abonnements
                              </motion.button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-700 leading-relaxed">
                            {article.contenu}
                          </p>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="bg-gray-800 hover:bg-black text-white font-medium py-3 px-8 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voir tous les articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
