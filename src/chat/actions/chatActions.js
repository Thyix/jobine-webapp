// @flow

import { FetchMessages, CreateMessage } from '../services/chatAPI';
import Profile from '../../authentication/domain/Profile';
import Message from '../domain/Message';

export const FETCH_MESSAGES_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'offers/FETCH_OFFERS_FAILURE';
export const CREATE_MESSAGE = 'offers/CREATE_MESSAGE';
export const UPDATE_SEARCH_QUERY = 'offers/UPDATE_SEARCH_QUERY';

export function fetchMessages(session: Profile) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: FETCH_MESSAGES_REQUEST });
    const newMessages = await FetchMessages();
    if (newMessages) {
        newMessages.filter(m => (m.idUserFrom === session.idUser || m.idUserTo === session.idUser));
        dispatch({ type: FETCH_MESSAGES_SUCCESS, messages: newMessages });
      } else {
        dispatch({ type: FETCH_MESSAGES_FAILURE });
      }
  };
}

export function  createMessage(message: Message) {
  return async (dispatch: Function, getState: any) => {
    const newMessage = await CreateMessage(message);
    dispatch({ type: CREATE_MESSAGE, messages: newMessage });
  }
}

export function updateSearchQuery(query: string) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_SEARCH_QUERY, searchQuery: query });
  }
}


