import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import videoContext from '../context/VideoContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedVideos from '../components/FeaturedVideos';
import SegmentedControl from '../components/SegmentedControl';

const ListingPage = () => {
  const { videos } = useContext(videoContext);

  const [listingVideos, setListing] = useState([videos]);
  const [title, setTitle] = useState('');

  const setListingData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setListing(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTitle('All');

    setListingData('http://localhost:3000/videos');

    // setListing(videos);
  }, []);

  const filterVideos = (filter) => {
    if (filter === 'movies') {
      // const movies = videos.filter((video) => video.type === 'movie');
      // setListing(movies);
      setTitle('Movies');
      setListingData('http://localhost:3000/videos?type=movie');
    } else if (filter === 'tv-shows') {
      // const tvShows = videos.filter((video) => video.type === 'tv-show');
      // setListing(tvShows);
      setTitle('TV Shows');
      setListingData('http://localhost:3000/videos?type=tv-show');
    } else {
      // const allVideos = [...videos];
      // setListing(allVideos);
      setTitle('All');
      setListingData('http://localhost:3000/videos');
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
