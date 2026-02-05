import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Favorites from './components/Favorites';
import LocationPromo from './components/LocationPromo';
import Values from './components/Values';
import Locations from './components/Locations';
import Franchise from './components/Franchise';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-risa-black selection:bg-risa-red selection:text-white">
      <Header />
      <Hero />
      <div className="relative z-10 mt-8 md:mt-12 rotate-[-2deg] origin-left">
        <Marquee />
      </div>
      <Favorites />
      <LocationPromo />
      <Values />
      <Locations />
      <Franchise />
      <Footer />
    </main>
  );
};

export default App;