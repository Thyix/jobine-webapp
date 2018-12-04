// @flow

import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  CREATE_MESSAGE,
  UPDATE_SEARCH_QUERY,
} from '../actions/chatActions';

const initialState = {
  fetching: false,
  fetched: false,
  messages: [],
  searchQuery: '',
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
    case UPDATE_SEARCH_QUERY: {
      return { ...state, searchQuery: action.searchQuery };
    }
    case CREATE_MESSAGE: {
      return { ...state, messages: [...state.messages, action.messages] };
    }
    default:
      return state;
  }
}