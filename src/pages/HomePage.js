import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedVideos from '../components/FeaturedVideos';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <FeaturedVideos title='Featured Movies' />
      <FeaturedVideos title='Featured TV Shows' />
      <Footer />
    </div>
  );
};

export default HomePage;
