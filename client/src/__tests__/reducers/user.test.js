import * as types from '../../actions/types';
import * as reducer from '../../reducers/profile';

describe('Profile Reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer.default(undefined, {})).toEqual({
      profile: null,
      profiles: [],
      loading: true,
      error: {},
    });
  });

  it('Should handle GET_PROFILE', () => {
    const action = {
      type: types.GET_PROFILE,
      payload: types.profile,
      loading: types.loading,
    };

    expect(reducer.default(undefined, action)).toMatchSnapshot();
  });

  it('Should handle GET_PROFILES', () => {
    const action = {
      type: types.GET_PROFILES,
      payload: types.profiles,
      loading: types.loading,
    };

    expect(reducer.default(undefined, action)).toMatchSnapshot();
  });

  it('Should handle PROFILE_ERROR', () => {
    const action = {
      type: types.PROFILE_ERROR,
      payload: types.error,
      loading: types.loading,
      profile: types.profile,
    };

    expect(reducer.default(undefined, action)).toMatchSnapshot();
  });

  it('Should handle CLEAR_PROFILE', () => {
    const action = {
      type: types.CLEAR_PROFILE,
      profile: types.profile,
    };

    expect(reducer.default(undefined, action)).toMatchSnapshot();
  });
});
