import React, { useState } from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

import { StyledLogin } from './styles/StyledLogin';
import { Animated } from 'react-animated-css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect from="/login" to="/dashboard" noThrow />;
  }

  return (
    <>
      <StyledLogin>
        <Animated
          animationIn="fadeInUpBig"
          animationOut="fadeout"
          isVisible={true}
        >
          <div className="container">
            <form className="box" onSubmit={(e) => onSubmit(e)}>
              <h1 className="large text-primary">Sign In</h1>
              <p className="lead"></p>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Login" />
              <p className="my-1">
                Don't have an account?{' '}
                <a href="/register" style={{ textDecoration: 'none' }}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </Animated>
      </StyledLogin>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
