import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { FaUser } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import movieBuffLogo1 from '../images/movieBuffLogo1.png';
import TMDBLogo from '../images/tmdb_logo.svg';
import { Animated } from 'react-animated-css';

import ResponsiveMenu from 'react-responsive-navbar';
import { StyledHeader } from '../styles/StyledHeader';
import { StyledNavLinks } from '../styles/StyledNavLinks';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Animated
      animationIn="fadeInDownBig"
      animationOut="fadeout"
      isVisible={true}
    >
      <ResponsiveMenu
        menuOpenButton={<FaBars />}
        menuCloseButton={<FaTimes />}
        changeMenuOn="768px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <StyledNavLinks>
            <div className="navigation-links" data-test="navlinks">
              <a onClick={logout} href="#!" style={{ textDecoration: 'none' }}>
                <p>Logout</p>
              </a>

              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <p style={{ textDecoration: 'none' }}>Dashboard</p>
              </Link>

              <Link to="/profiles" style={{ textDecoration: 'none' }}>
                <p style={{ textDecoration: 'none' }}>
                  <FaUser style={{ marginRight: '10px' }} /> Profiles
                </p>
              </Link>

              <Link to="/posts" style={{ textDecoration: 'none' }}>
                <p style={{ textDecoration: 'none' }}>Posts</p>
              </Link>

              <Link to="/" style={{ textDecoration: 'none' }}>
                <p style={{ textDecoration: 'none' }}>Browse Movies</p>
              </Link>
            </div>
          </StyledNavLinks>
        }
      />
    </Animated>
  );

  const guestLinks = (
    <Animated
      animationIn="fadeInDownBig"
      animationOut="fadeout"
      isVisible={true}
    >
      <StyledNavLinks>
        <div className="login-panel">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <p>Login</p>
          </Link>

          <Link to="/register" style={{ textDecoration: 'none' }}>
            <p>Register</p>
          </Link>
        </div>
      </StyledNavLinks>
    </Animated>
  );

  return (
    <StyledHeader>
      <div className="logo-center">
        <Link to="/">
          <img src={movieBuffLogo1} alt="movie-buff-logo" />
        </Link>
      </div>

      <div className="login-signup">
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </div>

      <img src={TMDBLogo} alt="tmdb-logo" className="tmdb-logo" />
    </StyledHeader>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export { Header };

export default connect(mapStateToProps, { logout })(Header);
