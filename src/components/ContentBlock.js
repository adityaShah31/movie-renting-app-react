import React from 'react';

const ContentBlock = () => {
  return (
    <div className='container staticContentContainer mt-5 mx-1 mw-100'>
      <div className='mx-0 px-0 d-flex flex-row flex-wrap mw-100 justify-content-evenly'>
        <img className='mt-2' src='/images/content-1.png' alt='Feature' />
        <img className='mt-2' src='/images/content-2.png' alt='Feature' />
        <img className='mt-2' src='/images/content-3.png' alt='Feature' />
      </div>
    </div>
  );
};

export default ContentBlock;
