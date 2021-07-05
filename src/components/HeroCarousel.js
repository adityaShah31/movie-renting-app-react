import React from 'react';

const HeroCarousel = (props) => {
  console.log(props.movies);
  return (
    <div className='px-0 mx-0 container hero-carousel-container'>
      <div id='heroCarousel' className='carousel slide' data-ride='carousel'>
        <div class='carousel-indicators'>
          {props.movies.map((movie, index) => (
            <button type='button' data-bs-target='#heroCarousel' data-bs-slide-to={`${index}`} className={index === 0 ? 'active' : ''} aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {props.movies.map((movie, index) => (
            <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} data-bs-interval='7000'>
              <img src={`${movie.imgBanner}`} class='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h1 className='mb-4'>{movie.title}</h1>
                <p className='carousel-caption-mv-desc'>{movie.description}</p>
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
