import React from 'react';
import Hero from '../components/Hero'; 
import TrendingProducts from '../components/TrendingProducts';
import Team from '../components/Team';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingProducts />
      <Team />
    </div>
  );
};

export default Home; 