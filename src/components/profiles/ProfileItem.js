import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import StyledProfileItem from '../styles/StyledProfileItem';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    topthreemovies,
    favoritegenre,
  },
}) => {
  return (
    <div>
      <StyledProfileItem>
        <img src={avatar} alt="" className="round-img" />
        <div>
          <h2>{name}</h2>
          <p>My Top 3: {topthreemovies}</p>
          <p>Favorite Movie Genre: {favoritegenre}</p>
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>
        </div>
      </StyledProfileItem>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
