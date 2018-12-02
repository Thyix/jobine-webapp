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

export { 
  getOffer, 
  isFetched,
  isFetching,
  getTab, 
};