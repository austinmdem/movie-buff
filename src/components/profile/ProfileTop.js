import React from 'react';
import PropTypes from 'prop-types';

import { StyledProfileTop } from '../styles/StyledProfileTop';

const ProfileTop = ({
  profile: {
    topthreemovies,
    favoritegenre,
    user: { name, avatar },
  },
}) => {
  return (
    <StyledProfileTop>
      <div className="profile-top bg-primary p-2">
        <img
          className="round-img my-1"
          src={`https://robohash.org/${name}`}
          alt=""
        />
        <h1 className="large">{name}</h1>
        <p className="lead">
          <p>My Top 3: {topthreemovies} </p>
        </p>
        <p>Favorite Movie Genre: {favoritegenre}</p>
      </div>
    </StyledProfileTop>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
