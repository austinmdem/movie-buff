import React from 'react';
import { Link } from '@reach/router';
import StyledDashboardActions from '../styles/StyledDashboardActions';

const DashboardActions = () => {
  return (
    <div>
      <StyledDashboardActions>
        <div className="dash-buttons">
          <Link to="/profile-form" className="btn btn-light">
            Edit Profile
          </Link>
        </div>
      </StyledDashboardActions>
    </div>
  );
};

export default DashboardActions;
