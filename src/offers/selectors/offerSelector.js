// @flow

import { createSelector } from 'reselect';

const offerSelector = state => state.offers.offers;
const getOffer = createSelector(offerSelector, (offers) => offers);

const fetchedSelector = state => state.offers.fetched;
const isFetched = createSelector(fetchedSelector, (fetched) => fetched);

const fetchingSelector = state => state.offers.fetching;
const isFetching = createSelector(fetchingSelector, (fetching) => fetching);

const tabSelector = state => state.offers.tab;
const getTab = createSelector(tabSelector, (tab) => tab);

const selectedUserSelector = state => state.offers.selectedUser;
const getSelectedUser = createSelector(selectedUserSelector , (selectedUser) => selectedUser);

const selectedOfferSelector = state => state.offers.selectedOffer;
const getSelectedOffer = createSelector(selectedOfferSelector, (selectedOffer) => selectedOffer);

const chatUserSelector = state => state.offers.chatUser;
const getChatUser = createSelector(chatUserSelector, (chatUser) => chatUser);

export { 
  getOffer, 
  isFetched,
  isFetching,
  getTab, 
  getSelectedUser,
  getSelectedOffer,
  getChatUser
};