import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import rating from './rating';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
