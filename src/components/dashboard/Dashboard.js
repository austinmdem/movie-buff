import React, { Fragment, useEffect } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../elements/Spinner';
import DashboardActions from './DashboardActions';

import { StyledDashboard } from '../styles/StyledDashboard';
import { FaUser, FaUserMinus } from 'react-icons/fa';
import { Animated } from 'react-animated-css';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <StyledDashboard>
        <Animated
          animationIn="fadeInUpBig"
          animationOut="fadeout"
          isVisible={true}
        >
          <div className="box">
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
              <FaUser /> Welcome {user && user.name}
            </p>
            {profile !== null ? (
              <Fragment>
                <DashboardActions />
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAccount()}
                  >
                    <FaUserMinus /> Delete Account
                  </button>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <p>You have not yet created a profile, please add some info</p>
                <Link to="/profile-form">Create Profile</Link>
              </Fragment>
            )}
          </div>
        </Animated>
      </StyledDashboard>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
