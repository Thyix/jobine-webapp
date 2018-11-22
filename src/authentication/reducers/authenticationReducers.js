// @flow

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from '../actions/authenticationActions';

const initialState = {
  authenticated: false,
  authenticating: false,
  signingup: false,
  failedSignup: false,
  session: undefined,
  failed: false,
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, authenticated: false, authenticating: true };
    }

    case LOGIN_SUCCESS: {
      return { ...state, authenticated: true, authenticating: false, failed: false, session: action.session };
    }

    case LOGIN_FAILURE: {
      return { ...state, authenticated: false, authenticating: false, failed: true };
    }
    case SIGNUP_REQUEST: {
      return { ...state, authenticated: false, authenticating: true, signingup: true, failedSignup: false };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, authenticated: true, authenticating: false, signingup: false, failedSignup: false, session: action.session };
    }
    case SIGNUP_FAILURE: {
      return { ...state, authenticated: false, signingup: false, failedSignup: true };
    }



    case LOGOUT: {
      return { ...state, authenticated: false, authenticating: false};
    }

    default:
      return state;
  }
}