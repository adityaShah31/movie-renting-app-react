import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedVideos from '../components/FeaturedVideos';

const SearchResultsPage = (props) => {
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');

  const [resultVideos, setResultVideos] = useState([]);
  useEffect(() => {
    fetch(`https://f-movies-backend.herokuapp.com/videos/search?q=${searchTerm || ''}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setResultVideos(json.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div>
        <Header />
        <FeaturedVideos title='Results' hideButton={true} featuredVideos={resultVideos} />
        <Footer />
      </div>
    </div>
  );
};

export default SearchResultsPage;
