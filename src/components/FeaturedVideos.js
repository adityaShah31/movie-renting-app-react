import React from 'react';

const FeaturedVideos = (props) => {
  return (
    <div className='w-100 mx-3 mt-5'>
      <div className='container featuredVidTopContainer px-2 mb-2 ms-0 me-0 d-flex justify-content-between w-100'>
        <h4>{props.title}</h4>
        <form action='' method='get'>
          <button type='submit'>View All</button>
        </form>
      </div>
      <div className='container d-flex mx-0'>
        {props.featuredVideos.map((video) => (
          <div className='card featuredVideoCard me-2'>
            <img className='cardImgPoster d-block' src='{video.imgPoster}' alt='' />
            <div className='posterOverlay'>
              <p className='p-3'>{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
