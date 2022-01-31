import React from 'react';
// useHistory is for routes accessed before
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <div className='navbar'>
        <div className='container'>
          <Link to={'/dashboard'} className='navbar-brand'>
            Facility App
          </Link>
          <div className='collapses navbar-collapses'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='#!'>
                  <i className='fas fa-sign-out-alt'></i> <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
