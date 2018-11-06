// @flow

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authenticationActions';

const initialState = {
  authenticated: false,
  authenticating: false,
  session: undefined,
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      console.log('login request');
      return { ...state, authenticated: false, authenticating: true };
    }

    case LOGIN_SUCCESS: {
      console.log('login success');
      return { ...state, authenticated: true, authenticating: false, session: action.session };
    }

    case LOGIN_FAILURE: {
      console.log('login failure');
      return { ...state, authenticated: false, authenticating: false };
    }

    case LOGOUT: {
      console.log('loging out');
      return { ...state, authenticated: false, authenticating: false};
    }

    default:
      return state;
  }
}