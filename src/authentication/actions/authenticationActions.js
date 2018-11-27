// @flow

import { AuthenticationLogin, AuthenticationSignup, DeleteProfile, FetchProfiles } from '../services/AuthenticationAPI';
import { UpdateUsers } from '../../users/services/UsersAPI'; 

export const LOGIN_REQUEST = 'authentication/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'authentication/LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'authentication/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'authentication/SIGNUP_FAILURE';
export const UPDATE_REQUEST = 'authentication/UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'authentication/UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'authentication/UPDATE_FAILURE';
export const FETCH_PROFILES = 'authentication/FETCH_PROFILES';

export const DELETE = 'authentication/DELETE';
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

export function fetchProfiles() {
  return async (dispatch: Function, getState: any) => {
    const allUsers = await FetchProfiles();
    if (allUsers) {
      dispatch({ type: FETCH_PROFILES, profiles: allUsers });
    }
  }
}

export function signup(username: string, job: string, email: string, password: string) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: SIGNUP_REQUEST });
    const isSignedUp = await AuthenticationSignup(username, job, email, password);
    if (isSignedUp) {
      dispatch({ type: SIGNUP_SUCCESS, session: isSignedUp });
    } else {
      dispatch({ type: SIGNUP_FAILURE });
    }
  }
}

export function update(newProfile:Profile) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_REQUEST });
    const newUser = await UpdateUsers(newProfile);
    if (newUser) {
      dispatch({ type: UPDATE_SUCCESS, session: newUser });
    } else {
      dispatch({ type: UPDATE_FAILURE });
    }
  }
}

export function deleteProfile(user:Profile) {
  return async (dispatch: Function, getState: any) => {
    await DeleteProfile(user);
    dispatch({ type: DELETE });
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
