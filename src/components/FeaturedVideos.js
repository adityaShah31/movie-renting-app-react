import React from 'react';
import VideoCard from './VideoCard';

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
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
