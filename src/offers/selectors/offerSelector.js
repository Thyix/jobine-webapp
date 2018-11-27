// @flow

import { createSelector } from 'reselect';

const offerSelector = state => state.offers.offers;
const getOffer = createSelector(offerSelector, (session) => session);

const fetchedSelector = state => state.offers.fetched;
const isFetched = createSelector(fetchedSelector, (fetched) => fetched);

const fetchingSelector = state => state.offers.fetching;
const isFetching = createSelector(fetchingSelector, (isFetching) => isFetching);

export { 
  getOffer, 
  isFetched,
  isFetching, 
};