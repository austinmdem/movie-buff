import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import ProfileTop from './ProfileTop';
import Spinner from '../elements/Spinner';
import { getProfileById } from '../../actions/profile';

import { StyledProfile } from '../styles/StyledProfile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  id,
}) => {
  //
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <StyledProfile>
          <Fragment>
            <div className="profile-nav">
              <Link to="/profiles" className="btn">
                Back to Profiles
              </Link>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link to="/profile-form" className="btn">
                    Edit Profile
                  </Link>
                )}
              <ProfileTop profile={profile} />
            </div>
          </Fragment>
        </StyledProfile>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
