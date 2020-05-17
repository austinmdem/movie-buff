import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../Login';

const PrivateRoute = ({ as: Component, ...props }) => {
  if (!props.auth.isAuthenticated && !props.auth.loading) {
    return <Login />;
  } else {
    return <Component {...props} />;
  }
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
