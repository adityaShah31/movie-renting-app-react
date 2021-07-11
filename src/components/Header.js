import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='p-0 navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img src='/images/logo.png' alt='Logo' srcSet='' />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse bg-dark' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link active'
                  aria-current='page'
                  exact
                  to='/'
                  activeStyle={{
                    color: 'white',
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/listing'
                  activeStyle={{
                    color: 'white',
                  }}
                >
                  Listing
                </NavLink>
              </li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li className='nav-item'>
                <i className='fas fa-user fa-lg'></i>
                <Link className='nav-link d-inline ms-1' to='#loginModal' data-bs-toggle='modal'>
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
