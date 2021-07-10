import { React } from 'react';
import { Link } from 'react-router-dom';

import VideoCard from './VideoCard';

const FeaturedVideos = (props) => {
  return (
    <div className='w-100 ms-3 me-0 mt-4'>
      <div className='container featuredVidTopContainer text-white px-2 mb-3 mx-1 d-flex justify-content-between'>
        <h4>{props.title}</h4>
        <Link to='/listing' className={props.hideButton ? 'd-none viewDetailBtn btn btn-dark' : 'viewDetailBtn btn btn-dark'}>
          View All
        </Link>
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
