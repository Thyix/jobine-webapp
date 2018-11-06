// @flow

export const LOGIN_REQUEST = 'authentication/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'authentication/LOGIN_FAILURE';
export const LOGOUT = 'authentication/LOGOUT';

export function login(identifier: string, password: string) {
  return async (dispatch: Function, getState: any) => {
    //try {
      dispatch({ type: LOGIN_REQUEST });
      if (identifier === 'test' && password === 'test') {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    //} catch (e) {
      //dispatch({ type: LOGIN_FAILURE });
      //throw e;
    //}
  };
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
    console.log('logout actions');
    dispatch({ type: LOGOUT });
  };
}
