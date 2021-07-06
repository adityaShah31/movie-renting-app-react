import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='p-0 navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/home'>
            <img src='/images/logo.png' alt='' srcset='' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home'>
                  Movies
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/home'>
                  TV Shows
                </a>
              </li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li className='nav-item'>
                <i className='fas fa-user fa-lg'></i>
                <a className='nav-link d-inline ms-1' href='/home'>
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
