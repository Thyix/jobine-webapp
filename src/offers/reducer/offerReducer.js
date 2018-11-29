// @flow

import {
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,
  CREATE_OFFER,
} from '../actions/offersActions';

const initialState = {
  fetching: false,
  fetched: false,
  offers: [],
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_OFFERS_REQUEST: {
      return { ...state, fetching: true, fetched: false };
    }
    case FETCH_OFFERS_SUCCESS: {
      return { ...state, fetching: false, fetched: true, offers: action.offers }; 
    }
    case FETCH_OFFERS_FAILURE: {
      return { ...state, fetching: false, fetched: false };
    }
    case CREATE_OFFER: {
      return { ...state, offers: [...state.offers, action.offers]}
    }
    default:
      return state;
  }
}