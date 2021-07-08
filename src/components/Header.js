import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='p-0 navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img src='/images/logo.png' alt='' srcSet='' />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/movies'>
                  Movies
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/tv-shows'>
                  TV Shows
                </Link>
              </li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li className='nav-item'>
                <i className='fas fa-user fa-lg'></i>
                <Link className='nav-link d-inline ms-1' to='/login'>
                  Login/Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
