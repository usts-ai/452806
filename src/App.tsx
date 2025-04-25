import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ArticlesSection from './components/ArticlesSection';
import TemoignagesSection from './components/TemoignagesSection';
import ActualitesSection from './components/ActualitesSection';
import AbonnementsSection from './components/AbonnementsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ArticlesSection />
        <TemoignagesSection />
        <ActualitesSection />
        <AbonnementsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
