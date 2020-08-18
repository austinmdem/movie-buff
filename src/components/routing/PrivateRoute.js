import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../Login';
import Spinner from '../elements/Spinner';

const PrivateRoute = ({
  as: Component,
  auth: { isAuthenticated, loading },
  ...props
}) => {
  if (loading) {
    return <Spinner />;
  } else if (isAuthenticated && !loading) {
    return <Component {...props} />;
  } else {
    return <Login />;
  }
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
