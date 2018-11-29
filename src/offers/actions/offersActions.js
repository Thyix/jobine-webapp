// @flow

import { FetchOffers, CreateOffer } from '../services/OfferAPI';
import { FetchProfiles } from '../../authentication/services/AuthenticationAPI';

export const FETCH_OFFERS_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_OFFERS_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAILURE = 'offers/FETCH_OFFERS_FAILURE';
export const GET_OFFER_USER = 'offers/GET_OFFER_USER';
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

export function fetchOfferUser(id: string) {
  return async (dispatch: Function, getState: any) => {
    const allUsers = await FetchProfiles();
    if (allUsers) {
      const user = allUsers.filter(f => f.idUser === id);
      dispatch({ type: GET_OFFER_USER, offerUser: user });
    }
  }
}

export function createOffer(newOffer: Offer) {
  return async (dispatch: Function, getState: any) => {
    const offer = await CreateOffer(newOffer);
    dispatch({ type: CREATE_OFFER, offers: offer })
  }
}
