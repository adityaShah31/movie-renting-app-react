import React, { useContext, useState, useEffect } from 'react';

import videoContext from '../context/VideoContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedVideos from '../components/FeaturedVideos';
import SegmentedControl from '../components/SegmentedControl';

const ListingPage = () => {
  const { videos } = useContext(videoContext);

  const [listingVideos, setListing] = useState([videos]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('All');
    setListing(videos);
  }, []);

  const filterVideos = (filter) => {
    if (filter === 'movies') {
      const movies = videos.filter((video) => video.type === 'movie');
      setTitle('Movies');
      setListing(movies);
    } else if (filter === 'tv-shows') {
      const tvShows = videos.filter((video) => video.type === 'tv-show');
      setTitle('TV Shows');
      setListing(tvShows);
    } else {
      const allVideos = [...videos];
      setTitle('All');
      setListing(allVideos);
    }
  };

  return (
    <div>
      <Header />
      <SegmentedControl onFilterChange={filterVideos} />
      <FeaturedVideos title={title} hideButton={true} featuredVideos={listingVideos} />
      <Footer />
    </div>
  );
};

export default ListingPage;
