import React from 'react';

const FeaturedVideos = (props) => {
  return (
    <div className='container px-2 mt-4 d-flex justify-content-between'>
      <h4>{props.title}</h4>
      <form action='' method='get'>
        <button type='submit'>View All</button>
      </form>
    </div>
  );
};

export default FeaturedVideos;
