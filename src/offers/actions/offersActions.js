// @flow

import { FetchOffers, CreateOffer } from '../services/OfferAPI';

export const FETCH_OFFERS_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_OFFERS_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAILURE = 'offers/FETCH_OFFERS_FAILURE';
export const GET_OFFER_USER = 'offers/GET_OFFER_USER';
export const CHANGE_TAB = 'offers/CHANGE_TAB';
export const UPDATE_SELECTED_USER = 'offers/UPDATE_SELECTED_USER';
export const UPDATE_SELECTED_OFFER = 'offers/UPDATE_SELECTED_OFFER';
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

export function changeTab(newTab: number) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: CHANGE_TAB, tab: newTab });
  }
}

export function updateSelectedUser(id: number) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_SELECTED_USER, selectedUser: id });
  }
}

export function updateSelectedOffer(id: number) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_SELECTED_OFFER, selectedOffer: id });
  }
}

export function createOffer(newOffer: Offer) {
  return async (dispatch: Function, getState: any) => {
    const offer = await CreateOffer(newOffer);
    dispatch({ type: CREATE_OFFER, offers: offer })
  }
}
