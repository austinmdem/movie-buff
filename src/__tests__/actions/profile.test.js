import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/profile';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

// Testing GET_PROFILE action

describe('testing GET_PROFILE/getCurrentProfile action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should create GET_PROFILE', () => {
    mock.onGet('/me').reply(200, {
      data: [{ id: 1, name: 'Austin Deming' }],
    });

    store.dispatch(actions.getCurrentProfile()).then(() => {
      let expectedActions = [
        {
          type: types.GET_PROFILE,
          payload: {
            data: [{ id: 1, name: 'Austin Deming' }],
          },
        },
      ];
      expectedActions(store.getActions()).toEqual(expectedActions);
    });
  });
});
