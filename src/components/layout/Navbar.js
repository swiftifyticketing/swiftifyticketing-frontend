import React, { useState, useEffect } from "react";
// useHistory is for routes accessed before
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Navbar.css";

import { logout } from "../../redux/actions/auth";

const Navbar = (props) => {
  const { isAuthenticated, logout } = props;
  const history = useHistory();
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logoutUser = () => {
    logout();
    history.push("/");
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      {isAuthenticated ? (
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to={"/"} className='navbar-logo'>
              <img
                className='icon'
                alt='logo'
                src='public\..\SwiftifyTicketingIcon.png'
                height={80}
                width={175}
              />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/dashboard'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-links'
                  href='#!'
                  onClick={function () {
                    logoutUser();
                    closeMobileMenu();
                  }}
                >
                  <i className='fas fa-sign-out-alt'></i> <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to={"/"} className='navbar-logo'>
              <img
                className='icon'
                alt='logo'
                src='public\..\SwiftifyTicketingIcon.png'
                height={50}
                width={145}
              />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              style={{ listStyle: "none" }}
            >
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'></li>
              <li className='nav-item'>
                <Link
                  to='/sign-in'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
