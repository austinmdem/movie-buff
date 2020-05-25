import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import StyledProfileForm from '../styles/StyledProfileForm';

const initialState = {
  topthreemovies: '',
  favoritegenre: '',
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      if (Array.isArray(profileData.topthreemovies))
        profileData.topthreemovies = profileData.topthreemovies.join(',');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { topthreemovies, favoritegenre } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <>
      <StyledProfileForm>
        <div className="box">
          <h1 className="large text-primary">Create Your Profile</h1>
          <p className="lead">
            Let's get some information to make your profile stand out
          </p>
          <small>* = All fields required</small>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <h2 className="lead">Favorite Movie Genre</h2>
              <select
                name="favoritegenre"
                value={favoritegenre}
                onChange={(e) => onChange(e)}
              >
                <option>* Select Favorite Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="True Crime">True Crime</option>
                <option value="Drama">Drama</option>
                <option value="Epics/Historical">Epics/Historical</option>
                <option value="Horror">Horror</option>
                <option value="Musicals">Musicals</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="War">War</option>
                <option value="Westerns">Westerns</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <h2 className="lead">Top 3 Movies</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Top 3 Movies"
                name="topthreemovies"
                value={topthreemovies}
                onChange={(e) => onChange(e)}
              />
              <small className="form-text">
                Please use comma separated values (eg. Interstellar, Gladiator,
                Spy Game)
              </small>
            </div>
            <input type="submit" className=" btn-primary my-1" />

            <Link to="/dashboard" className="btn btn-return">
              Go Back
            </Link>
          </form>
        </div>
      </StyledProfileForm>
    </>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
