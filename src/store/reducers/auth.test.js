// do not need enzyme as we're not rendering any React components

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  let initialState
  beforeEach(() => {
    initialState = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    };
  })

  it('should return the initial state', () => {
    const expected = {
      ...initialState
    };
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('should store the token upon login', () => {

    const expected = {
      ...initialState,
      token: 'someIdToken',
      userId: 'someUserId'
    };
    expect(reducer(initialState, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'someIdToken',
      userId: 'someUserId'
    }))
    .toEqual(expected);
  });

});
