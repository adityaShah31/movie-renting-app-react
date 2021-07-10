import { React, useContext } from 'react';

import videoContext from '../context/VideoContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedVideos from '../components/FeaturedVideos';
import ContentBlock from '../components/ContentBlock';

const HomePage = () => {
  const { videos } = useContext(videoContext);

  const featuredMovies = [];
  const featuredShows = [];

  //Sort into featured movies & tv-shows
  videos.forEach((video) => {
    if (video.type === 'movie' && video.featured) featuredMovies.push(video);
    else if (video.type === 'tv-show' && video.featured) featuredShows.push(video);
  });

  return (
    <div>
      <Header />
      <HeroCarousel />
      <FeaturedVideos title='Featured Movies' featuredVideos={featuredMovies.slice(0, 12)} />
      <FeaturedVideos title='Featured TV Shows' featuredVideos={featuredShows.slice(0, 12)} />
      <ContentBlock />
      <Footer />
    </div>
  );
};

export default HomePage;
