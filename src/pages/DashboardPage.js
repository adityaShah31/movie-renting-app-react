import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';

const DashboardPage = () => {
  const { state } = useLocation();
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <div className='container d-flex flex-column align-items-start mt-5 vh-100'>
        <h1 className='text-light d-block ms-0 mb-4'>Dashboard Page</h1>
        <h5 className='text-light d-block'>{state}</h5>
      </div>
    </div>
  );
};

export default DashboardPage;
