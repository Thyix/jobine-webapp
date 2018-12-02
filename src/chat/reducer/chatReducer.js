// @flow

import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from '../actions/chatActions';

const initialState = {
  fetching: false,
  fetched: false,
  messages: []
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST: {
      return { ...state, fetching: true, fetched: false };
    }
    case FETCH_MESSAGES_SUCCESS: {
      return { ...state, fetching: false, fetched: true, messages: action.messages };
    }
    case FETCH_MESSAGES_FAILURE: {
      return { ...state, fetching: false, fetched: false };
    }
    default:
      return state;
  }
}