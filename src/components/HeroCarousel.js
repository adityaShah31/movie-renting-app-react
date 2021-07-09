import React from 'react';
import { useContext } from 'react';
import videoContext from '../context/VideoContext';

const HeroCarousel = () => {
  const { videos } = useContext(videoContext);

  let inDemandVideos = videos.filter((video) => video.inDemand);

  return (
    <div className='px-0 mx-0 container hero-carousel-container'>
      <div id='heroCarousel' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          {inDemandVideos.map((video, index) => (
            <button key={video.id} type='button' data-bs-target='#heroCarousel' data-bs-slide-to={`${index}`} className={index === 0 ? 'active' : ''} aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {inDemandVideos.map((video, index) => (
            <div key={video.id} className={index === 0 ? 'carousel-item active' : 'carousel-item'} data-bs-interval='5000'>
              <div className='bannerImgContainer'>
                <img src={`${video.banner}`} className='d-block' alt='...' />
              </div>
              <div className='carousel-caption d-none d-md-block px-5'>
                <h1 className='mb-3 display-5'>{video.title}</h1>
                <p className='carousel-caption-mv-desc'>{video.synopsis}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#heroCarousel' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#heroCarousel' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
