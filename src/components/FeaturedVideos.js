import { React, useContext } from 'react';
import VideoCard from './VideoCard';

const FeaturedVideos = (props) => {
  return (
    <div className='w-100 ms-3 me-0 mt-5'>
      <div className='container featuredVidTopContainer text-white px-2 mb-3 mx-0 d-flex justify-content-between w-100'>
        <h4>{props.title}</h4>
        <form action='' method='get'>
          <button type='submit'>View All</button>
        </form>
      </div>
      <div className='container-fluid featuredVidBottomContainer d-flex flex-wrap justify-content-start mx-0'>
        {props.featuredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
