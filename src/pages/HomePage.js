import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedVideos from '../components/FeaturedVideos';

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <HeroCarousel movies={props.bannerMovies} />
      <FeaturedVideos featuredVideos={props.bannerMovies} title='Featured Movies' />
      <FeaturedVideos featuredVideos={props.bannerMovies} title='Featured TV Shows' />
      <Footer />
    </div>
  );
};

export default HomePage;
