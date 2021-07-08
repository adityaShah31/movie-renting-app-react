import React from 'react';
import VideoCard from './VideoCard';
import { useContext } from 'react';
import videoContext from '../context/VideoContext';

const FeaturedVideos = (props) => {
  const { videos, setVideos } = useContext(videoContext);
  return (
    <div className='w-100 ms-3 me-0 mt-5'>
      <div className='container featuredVidTopContainer px-2 mb-3 mx-0 d-flex justify-content-between w-100'>
        <h4>{props.title}</h4>
        <form action='' method='get'>
          <button type='submit'>View All</button>
        </form>
      </div>
      <div className='container featuredVidBottomContainer d-flex flex-wrap justify-content-around mx-0'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
