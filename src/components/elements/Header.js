import React from 'react';
import { Link } from '@reach/router';

import movieBuffLogo from '../images/movieBuffLogo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader,
  StyledLoginNav,
  StyledMovieBuffLogo,
  StyledTMDBLogo,
} from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledLoginNav>Login</StyledLoginNav>
      <Link to="/">
        <StyledMovieBuffLogo src={movieBuffLogo} alt="movie-buff-logo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
