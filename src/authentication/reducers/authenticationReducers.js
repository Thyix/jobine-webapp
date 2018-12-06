// @flow

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,

  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,

  DELETE,

  IS_ADMIN,

  FETCH_PROFILES,

  LOGOUT,
} from '../actions/authenticationActions';

const initialState = {
  authenticated: false,
  authenticating: false,

  signingup: false,
  failedSignup: false,

  updating: false,
  updated: false,
  failedUpdate: false,

  profiles: [],

  admin: false,

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
      return { ...state, authenticated: false, authenticating: false, failed: true, failedSignup: false };
    }

    case SIGNUP_REQUEST: {
      return { ...state, authenticated: false, authenticating: true, signingup: true, failedSignup: false };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, authenticated: true, authenticating: false, signingup: false, failedSignup: false, session: action.session };
    }
    case SIGNUP_FAILURE: {
      return { ...state, authenticated: false, authenticating: false, signingup: false, failed: false, failedSignup: true };
    }

    case UPDATE_REQUEST: {
      return { ...state, updated: false, updating: true };
    }
    case UPDATE_SUCCESS: {
      return { ...state, updated: true, updating: false, failedUpdate: false, session: action.session };
    }
    case UPDATE_FAILURE: {
      return { ...state, updated: false, updating: false, failedUpdate: true };
    }
    case FETCH_PROFILES: {
      return { ...state, profiles: action.profiles };
    }
    case DELETE: {
      return { ...state, authenticated: false, authenticating: false, session: null};
    }

    case IS_ADMIN: {
      return { ...state, admin: true };
    }

    case LOGOUT: {
      return { ...state, authenticated: false, authenticating: false, admin: false };
    }

    default:
      return state;
  }
}