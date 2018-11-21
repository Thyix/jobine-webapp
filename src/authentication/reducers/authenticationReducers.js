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
  failed: false,
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, authenticated: false, authenticating: true };
    }

    case LOGIN_SUCCESS: {
      console.log('session:', action.session);
      return { ...state, authenticated: true, authenticating: false, failed: false, session: action.session };
    }

    case LOGIN_FAILURE: {
      return { ...state, authenticated: false, authenticating: false, failed: true };
    }

    case LOGOUT: {
      return { ...state, authenticated: false, authenticating: false};
    }

    default:
      return state;
  }
}