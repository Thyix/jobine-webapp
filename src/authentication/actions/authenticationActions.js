// @flow

import { AuthenticationLogin, AuthenticationSignup } from '../services/AuthenticationAPI';

export const LOGIN_REQUEST = 'authentication/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'authentication/LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'authentication/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'authentication/SIGNUP_FAILURE';
export const LOGOUT = 'authentication/LOGOUT';


export function login(identifier: string, password: string) {
  return async (dispatch: Function, getState: any) => {
      dispatch({ type: LOGIN_REQUEST });
      const loggedUser = await AuthenticationLogin(identifier, password);
      if (loggedUser) {
        dispatch({ type: LOGIN_SUCCESS, session: loggedUser });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
  };
}

export function signup(username: string, job: string, email: string, password: string) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: SIGNUP_REQUEST });
    const isSignedUp = await AuthenticationSignup(username, job, email, password);
    console.log('is signed up', isSignedUp);
    if (isSignedUp) {
      dispatch({ type: SIGNUP_SUCCESS });
    } else {
      dispatch({ type: SIGNUP_FAILURE });
    }
  }
}

export function authenticate(token: string) {
  return async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      dispatch({ type: LOGIN_SUCCESS });

    } catch (e) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}

export function logout() {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: LOGOUT });
  };
}
