import { React, useContext } from 'react';

import videoContext from '../context/VideoContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedVideos from '../components/FeaturedVideos';

const ListingPage = () => {
  const { videos, setVideos } = useContext(videoContext);
  return (
    <div>
      <Header />
      <FeaturedVideos title='All' featuredVideos={videos} />
      <Footer />
    </div>
  );
};

export default ListingPage;
