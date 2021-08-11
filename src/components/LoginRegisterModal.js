import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginRegisterModal = () => {
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
  });

  const submitLoginForm = (e) => {
    e.preventDefault();

    fetch('https://f-movies-backend.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        } else return console.log('Check your credentials FOOL!');
      })
      .then((json) => {
        if (json) {
          setLoginData({
            email: '',
            password: '',
          });

          history.push('/user/dashboard', json.message);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const submitRegisterForm = (e) => {
    e.preventDefault();

    fetch('https://f-movies-backend.herokuapp.com/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else return console.log('Check your credentials FOOL!');
      })
      .then((json) => {
        if (json) {
          setRegisterData({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            username: '',
          });
          history.push('/user/dashboard', json.message);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='allModals'>
      <div className='modal fade' id='loginModal' aria-hidden='true' aria-labelledby='loginModalHeaderLbl' tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-dark px-2'>
            <div className='modal-header'>
              <h5 className='modal-title text-white' id='loginModalHeaderLbl'>
                Sign In
              </h5>
              <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form action='/' method='post' onSubmit={submitLoginForm}>
                <input
                  className='form-control mb-4'
                  type='email'
                  value={loginData.email}
                  name='emailLgn'
                  id='emailLgn'
                  placeholder='Email'
                  onChange={(e) => {
                    setLoginData({ ...loginData, email: e.target.value });
                  }}
                />
                <input
                  className='form-control mb-5'
                  type='password'
                  value={loginData.password}
                  name='passwordLgn'
                  id='passwordLgn'
                  placeholder='Password'
                  onChange={(e) => {
                    setLoginData({ ...loginData, password: e.target.value });
                  }}
                />
                <button type='submit' className='btn btn-dark w-100'>
                  Login
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <p className='text-white'>
                Don't have an account? &nbsp;&nbsp;
                <a href='#registerModal' data-bs-toggle='modal' data-bs-dismiss='modal'>
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='modal fade' id='registerModal' aria-hidden='true' aria-labelledby='registerModalHeaderLbl' tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-dark px-2'>
            <div className='modal-header'>
              <h5 className='modal-title text-white' id='registerModalHeaderLbl'>
                Create New Account
              </h5>
              <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body container'>
              <form action='/' method='POST' onSubmit={submitRegisterForm}>
                <div className='container d-flex justify-content-between mb-4 px-0'>
                  <input
                    className='form-control'
                    type='text'
                    name='firstName'
                    id='fName'
                    placeholder='First Name'
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                  />
                  <div className='mx-2'></div>
                  <input
                    className='form-control'
                    type='text'
                    name='lastName'
                    id='lName'
                    placeholder='Last Name'
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  />
                </div>
                <input
                  className='form-control mb-4'
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                />
                <input
                  className='form-control mb-4'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                />
                <input
                  className='form-control mb-4'
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                />
                {/* <input className='form-control mb-4' type='password' name='passwordConfirm' id='passwordConfirm' placeholder='Confirm Password' /> */}
                <div className='form-check mt-4'>
                  <input type='checkbox' className='form-check-input' id='termsCheck' name='termsCheck' />
                  <label className='form-check-label text-white' htmlFor='termsCheck'>
                    I certify that I am at least 18 years of age and agree to the Terms & Conditions and Privacy Policy set forth by FMovies.
                  </label>
                </div>
                <br />
                <br />
                <button type='submit' className='btn btn-dark w-100'>
                  Sign Up
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <p className='text-white'>
                Already have an account? &nbsp;&nbsp;
                <a href='#loginModal' data-bs-toggle='modal' data-bs-dismiss='modal'>
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
