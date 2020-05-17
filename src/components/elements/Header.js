import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import movieBuffLogo from '../images/movieBuffLogo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import { StyledHeader } from '../styles/StyledHeader';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="navigation-links">
      <a onClick={logout} href="#!" style={{ textDecoration: 'none' }}>
        <p>Logout</p>
      </a>
      <p>|</p>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <p style={{ textDecoration: 'none' }}>Dashboard</p>
      </Link>
    </div>
  );

  const guestLinks = (
    <div className="navigation-links">
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <p>Login</p>
      </Link>
      <p>|</p>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <p>Register</p>
      </Link>
    </div>
  );

  return (
    <StyledHeader>
      <div className="login-signup">
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </div>

      <div className="logo-center">
        <Link to="/">
          <img src={movieBuffLogo} alt="movie-buff-logo" />
        </Link>
      </div>

      <img src={TMDBLogo} alt="tmdb-logo" />
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

export default connect(mapStateToProps, { logout })(Header);
