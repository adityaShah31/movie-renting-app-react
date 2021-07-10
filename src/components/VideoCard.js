import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  return (
    <Link to={`video/${props.video.id}`}>
      <div className='card featuredVideoCard me-3 mb-3'>
        <img className='cardImgPoster d-block' src={props.video.poster} alt='' />
        <div className='posterOverlay'>
          <p className='p-3'>{props.video.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
