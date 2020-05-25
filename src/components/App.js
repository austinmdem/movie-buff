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

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../setAuthToken';

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

          <Movie path="/:movieId" />
          <NotFound default />
        </Router>

        <GlobalStyle />
      </Provider>
    </>
  );
};

export default App;
