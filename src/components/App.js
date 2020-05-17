import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Movie from './Movie';
import NotFound from './NotFound';
import Alert from './elements/Alert';
import PrivateRoute from './routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../setAuthToken';

import { GlobalStyle } from './styles/GlobalStyle';

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
          <PrivateRoute as={Dashboard} path="/dashboard" />
          <Movie path="/:movieId" />
          <NotFound default />
        </Router>

        <GlobalStyle />
      </Provider>
    </>
  );
};

export default App;
