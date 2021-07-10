import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import videoContext from '../context/VideoContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

const DetailPage = () => {
  // const { videos } = useContext(videoContext);

  const [video, setVideo] = useState({
    id: -1,
    title: '',
    synopsis: '',
    genres: [],
    releaseYear: '',
    runtime: '',
    poster: '',
    banner: '',
    type: '',
    rent: '',
    buy: '',
    IMDbRating: '',
    actors: [],
    director: '',
    inDemand: false,
    featured: false,
  });

  let { id } = useParams();
  console.log(id);
  console.log(video);

  useEffect(() => {
    fetch(`http://localhost:3000/videos/${id}`)
      .then((res) => res.json())
      .then((json) => setVideo(json))
      .catch((err) => console.log(err));

    // const result = videos.find((video) => video.id === Number(id));
    // setVideo(result);
  }, []);

  return (
    <div id='videoDetailPage'>
      <Header />
      <div className='detailPgBody'>
        <img className='backgroundCover' src={`${video.banner}`} alt='Background Cover' />
        <div className='backgroundOverlay'>
          <div className='container my-5'>
            <div className='row'>
              <div className='col-2'>
                <img src={video.poster} alt='Poster' className='featuredVideoCard me-3' />
              </div>
              <div className='col-10'>
                <div className='container d-flex flex-column align-self-start mt-2'>
                  <h1 className='text-white d-inline me-5'>{video.title}</h1>
                  <div className='d-flex mt-2'>
                    <div className='imdbIcon me-2'>IMDb</div>
                    <p className='text-white ratingIMDb mb-0'>{video.IMDbRating}</p>

                    <div className='d-flex ms-5 align-items-center'>
                      {video.genres.map((genre) => (
                        <div className='imdbIcon genreIcon me-2'>{genre}</div>
                      ))}
                    </div>
                  </div>

                  <div className='metaInfoContainer mt-3'>
                    <div className='container flex-column align-items-start d-flex px-0'>
                      <p className='text-white fs-6'>Director:&nbsp;&nbsp;{video.director}</p>
                      <p className='text-white'>
                        <span className='fs-6'>Cast:&nbsp;&nbsp;</span>
                        {video.actors.map((actor) => actor + ', ')}
                      </p>
                    </div>
                  </div>
                  <div className='synopsisCollapsible mt-2'>
                    <p className='text-white detailSynopsis'>{video.synopsis}</p>
                  </div>
                </div>

                <div className='container d-flex actionBtnsContainer mt-3'>
                  <Link to='#' className='me-5'>
                    <button type='button' className='btn btn-dark px-4'>
                      Rent&nbsp;&nbsp;${video.rent}
                    </button>
                  </Link>
                  <Link to='#'>
                    <button type='button' className='btn btn-dark px-4'>
                      Buy&nbsp;&nbsp;${video.buy}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
