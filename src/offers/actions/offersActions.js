// @flow

import { FetchOffers, CreateOffer } from '../services/OfferAPI';

export const FETCH_OFFERS_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_OFFERS_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAILURE = 'offers/FETCH_OFFERS_FAILURE';
export const CREATE_OFFER = 'offers/CREATE_OFFER';


export function fetchOffers() {
  return async (dispatch: Function, getState: any) => {
      dispatch({ type: FETCH_OFFERS_REQUEST });
      const newOffers = await FetchOffers();
      if (newOffers) {
        dispatch({ type: FETCH_OFFERS_SUCCESS, offers: newOffers });
      } else {
        dispatch({ type: FETCH_OFFERS_FAILURE });
      }
  };
}

export function createOffer(newOffer: Offer) {
  console.log('getting into action');
  return async (dispatch: Function, getState: any) => {
    const offer = await CreateOffer(newOffer);
    console.log('new offer', offer);
  }
}
