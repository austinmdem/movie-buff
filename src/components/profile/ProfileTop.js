import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    topthreemovies,
    favoritegenre,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        <p>{topthreemovies} hello</p>
      </p>
      <p>{favoritegenre}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
