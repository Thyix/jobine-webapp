// @flow

import { createSelector } from 'reselect';

const messageSelector = state => state.messages.messages;
const getMessages = createSelector(messageSelector, (messages) => messages);

const fetchedSelector = state => state.messages.fetched;
const isFetched = createSelector(fetchedSelector, (fetched) => fetched);

const fetchingSelector = state => state.messages.fetching;
const isFetching = createSelector(fetchingSelector, (fetching) => fetching);


export { 
  getMessages, 
  isFetched,
  isFetching,
};