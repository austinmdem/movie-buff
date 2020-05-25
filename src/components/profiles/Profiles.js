import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../elements/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

import { FaConnectdevelop } from 'react-icons/fa';
import StyledProfiles from '../styles/StyledProfiles';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <StyledProfiles>
            <div className="container">
              <div className="box">
                <h1 className="large text-primary">Profiles</h1>
                <p className="lead">
                  <FaConnectdevelop style={{ paddingRight: '10px' }} />
                  Browse and connect with friends
                </p>
                <div className="profiles">
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      <ProfileItem key={profile._id} profile={profile} />
                    ))
                  ) : (
                    <h4>No profiles found</h4>
                  )}
                </div>
              </div>
            </div>
          </StyledProfiles>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
