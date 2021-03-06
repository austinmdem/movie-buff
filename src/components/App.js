import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import ProfileForm from './profile-forms/ProfileForm';
import Movie from './Movie';
import NotFound from './NotFound';
import Alert from './elements/Alert';
import PrivateRoute from './routing/PrivateRoute';
import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';
import Posts from './posts/Posts';
import Post from './post/Post';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

import { GlobalStyle } from './styles/GlobalStyle';
import './styles/alerts.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Provider store={store}>
        <Header />
        <Alert />
        <Router>
          <Home path="/" component={Home} />
          <Login path="/login" component={Login} />
          <Register path="/register" component={Register} />
          <Profiles path="/profiles" component={Profiles} />
          <PrivateRoute as={Dashboard} path="/dashboard" />
          <PrivateRoute as={ProfileForm} path="/profile-form" />
          <Profile path="/profile/:id" component={Profile} />
          <PrivateRoute as={Posts} path="/posts" />
          <PrivateRoute as={Post} path="/posts/:id" />

          <Movie path="/:movieId" />
          <NotFound default />
        </Router>

        <GlobalStyle />
      </Provider>
    </>
  );
};

export default App;
