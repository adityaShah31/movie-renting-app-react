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

  const setListingData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        shuffleList(json);
        setListing(json);
      })
      .catch((err) => console.log(err));
  };

  const shuffleList = (list) => {
    list.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setTitle('All');
    setListingData('/api/videos');
  }, []);

  const filterVideos = (filter) => {
    if (filter === 'movies') {
      setTitle('Movies');
      setListingData('/api/videos?type=movie');
    } else if (filter === 'tv-shows') {
      setTitle('TV Shows');
      setListingData('/api/videos?type=tv-show');
    } else {
      setTitle('All');
      setListingData('/api/videos');
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
