// @flow

import { createSelector } from 'reselect';

const offerSelector = state => state.offers.offers;
const getOffer = createSelector(offerSelector, (offers) => offers);

const fetchedSelector = state => state.offers.fetched;
const isFetched = createSelector(fetchedSelector, (fetched) => fetched);

const fetchingSelector = state => state.offers.fetching;
const isFetching = createSelector(fetchingSelector, (fetching) => fetching);

export { 
  getOffer, 
  isFetched,
  isFetching, 
};