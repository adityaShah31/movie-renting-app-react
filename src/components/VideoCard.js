import React from 'react';

const VideoCard = (props) => {
  return (
    <div className='card featuredVideoCard me-2 mb-3'>
      <img className='cardImgPoster d-block' src={props.video.poster} alt='' />
      <div className='posterOverlay'>
        <p className='p-3'>{props.video.title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
