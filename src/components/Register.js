import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

import StyledRegister from './styles/StyledRegister';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect from="/register" to="/dashboard" noThrow />;
  }

  return (
    <>
      <StyledRegister>
        <form className="box" onSubmit={(e) => onSubmit(e)}>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
          <p className="my-1">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </StyledRegister>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
