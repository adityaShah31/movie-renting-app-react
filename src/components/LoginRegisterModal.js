import React from 'react';

const LoginRegisterModal = () => {
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
              <form action='#' method='post'>
                <input className='form-control mb-4' type='email' name='emailLgn' id='emailLgn' placeholder='Email' />
                <input className='form-control mb-5' type='password' name='passwordLgn' id='passwordLgn' placeholder='Password' />
                <button type='submit' className='btn btn-dark w-100' disabled>
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
              <form action='#' method='post'>
                <div className='container d-flex justify-content-between mb-4 px-0'>
                  <input className='form-control' type='text' name='fName' id='fName' placeholder='First Name' />
                  <div className='mx-2'></div>
                  <input className='form-control' type='text' name='lName' id='lName' placeholder='Last Name' />
                </div>
                <input className='form-control mb-4' type='text' name='username' id='username' placeholder='Username' />
                <input className='form-control mb-4' type='email' name='email' id='email' placeholder='Email' />
                <input className='form-control mb-4' type='password' name='password' id='password' placeholder='Password' />
                <input className='form-control mb-4' type='password' name='passwordConfirm' id='passwordConfirm' placeholder='Confirm Password' />
                <div className='form-check mt-4'>
                  <input type='checkbox' className='form-check-input' id='termsCheck' name='termsCheck' />
                  <label className='form-check-label text-white' htmlFor='termsCheck'>
                    I certify that I am at least 18 years of age and agree to the Terms & Conditions and Privacy Policy set forth by FMovies.
                  </label>
                </div>
                <br />
                <br />
                <button type='submit' className='btn btn-dark w-100' disabled>
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
