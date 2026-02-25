import React from 'react';
import Hero from '../components/Hero'; 
import TrendingProducts from '../components/TrendingProducts';
import Team from '../components/Team';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <TrendingProducts />
      <Team />
    </main>
  );
};

export default Home; 
