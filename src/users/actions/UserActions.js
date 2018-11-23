// @flow

import { UpdateUsers } from '../services/UsersAPI';

export const UPDATE_REQUEST = 'users/UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'users/UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'users/UPDATE_FAILURE';

export function login(identifier: string, password: string) {
  return async (dispatch: Function, getState: any) => {
      dispatch({ type: UPDATE_REQUEST });
      const loggedUser = await UpdateUsers(identifier, password);
      if (loggedUser) {
        dispatch({ type: UPDATE_SUCCESS, session: loggedUser });
      } else {
        dispatch({ type: UPDATE_FAILURE });
      }
  };
}