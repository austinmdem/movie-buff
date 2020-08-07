import * as types from '../../actions/types';
import profile from '../../reducers/profile';

describe('Profile Reducer', () => {
  it('Should return the initial state', () => {
    expect(profile(undefined, {})).toEqual({
      profile: null,
      profiles: [],
      loading: true,
      error: {},
    });
  });
});
