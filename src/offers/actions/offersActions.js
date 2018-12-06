// @flow

import { FetchOffers, CreateOffer, DeleteOffer } from '../services/OfferAPI';
import Offer from '../domain/Offer';
import moment from 'moment';

export const FETCH_OFFERS_REQUEST = 'offers/FETCH_OFFERS_REQUEST';
export const FETCH_OFFERS_SUCCESS = 'offers/FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAILURE = 'offers/FETCH_OFFERS_FAILURE';
export const GET_OFFER_USER = 'offers/GET_OFFER_USER';
export const CHANGE_TAB = 'offers/CHANGE_TAB';
export const UPDATE_SELECTED_USER = 'offers/UPDATE_SELECTED_USER';
export const UPDATE_SELECTED_OFFER = 'offers/UPDATE_SELECTED_OFFER';
export const UPDATE_CHAT_USER = 'offers/UPDATE_CHAT_USER';
export const CREATE_OFFER = 'offers/CREATE_OFFER';
export const DELETE_OFFER = 'offers/DELETE_OFFER';


export function fetchOffers() {
  return async (dispatch: Function, getState: any) => {
      dispatch({ type: FETCH_OFFERS_REQUEST });
      const newOffers = await FetchOffers();
      newOffers.sort(function(a, b){return moment(Date.parse(b.dateOffer.replace("[UTC]", ""))) - moment(Date.parse(a.dateOffer.replace("[UTC]", "")))});
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

export function updateSelectedUser(id: Profile) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_SELECTED_USER, selectedUser: id });
  }
}

export function updateSelectedOffer(id: Offer) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_SELECTED_OFFER, selectedOffer: id });
  }
}

export function updateChatUser(id: Profile) {
  return async (dispatch: Function, getState: any) => {
    dispatch({ type: UPDATE_CHAT_USER, chatUser: id });
  }
}

export function createOffer(newOffer: Offer) {
  return async (dispatch: Function, getState: any) => {
    const offer = await CreateOffer(newOffer);
    dispatch({ type: CREATE_OFFER, offers: offer })
  }
}


export function deleteOffer(offer: Offer) {
  return async (dispatch: Function, getState: any) => {
    await DeleteOffer(offer);
    dispatch({ type: DELETE_OFFER });
  }
}
