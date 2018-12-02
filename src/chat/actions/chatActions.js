// @flow

import { FetchMessages } from '../services/chatAPI';

export const FETCH_MESSAGES_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'offers/FETCH_OFFERS_FAILURE';


export function fetchMessages() {
  return async (dispatch: Function, getState: any) => {
      dispatch({ type: FETCH_MESSAGES_REQUEST });
      const newMessages = await FetchMessages();
      if (newMessages) {
        dispatch({ type: FETCH_MESSAGES_SUCCESS, messages: newMessages });
      } else {
        dispatch({ type: FETCH_MESSAGES_FAILURE });
      }
  };
}

