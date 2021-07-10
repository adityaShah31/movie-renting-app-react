import React from 'react';

const SegmentedControl = (props) => {
  const handleFilterChange = (e) => {
    const { value } = e.target;
    props.onFilterChange(value);
  };

  return (
    <div className='container px-0 mt-4 segmentControl d-flex justify-content-center align-items-center'>
      <div className='radioBtn ms-auto'>
        <input type='radio' id='allRadio' name='videoFilter' value='all' defaultChecked onChange={handleFilterChange} />
        <label htmlFor='allRadio'>All</label>
      </div>
      <div className='radioBtn'>
        <input type='radio' id='movieRadio' name='videoFilter' value='movies' onChange={handleFilterChange} />
        <label htmlFor='movieRadio'>Movies</label>
      </div>
      <div className='radioBtn'>
        <input type='radio' id='tvShowRadio' name='videoFilter' value='tv-shows' onChange={handleFilterChange} />
        <label htmlFor='tvShowRadio'>TV Shows</label>
      </div>
    </div>
  );
};

export default SegmentedControl;
