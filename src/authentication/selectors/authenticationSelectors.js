// @flow

import { createSelector } from 'reselect';

const sessionSelector = state => state.authentication.session;
const getSession = createSelector(sessionSelector, (session) => session);

const authenticatedSelector = state => state.authentication.authenticated;
const isAuthenticated = createSelector(authenticatedSelector, (authenticated) => authenticated);

const authenticatingSelector = state => state.authentication.authenticating;
const isAuthenticating = createSelector(authenticatingSelector, (authenticating) => authenticating);

const signupSelector = state => state.authentication.signinup;
const isSigningUp = createSelector(signupSelector, (signinup) => signinup);

const signupFailedSelector = state => state.authentication.failedSignup;
const hasFailedSignup = createSelector(signupFailedSelector, (failedSignup) => failedSignup);

const authenticationFailed = state => state.authentication.failed;
const hasFailed = createSelector(authenticationFailed, (failed) => failed);

const updatingSelector = state => state.authentication.updating;
const isUpdating = createSelector(updatingSelector, (updating) => updating);

const updatedSelector = state => state.authentication.updated;
const isUpdated = createSelector(updatedSelector, (updated) => updated);

const updateFailed = state => state.authentatication.failedUpdate;
const hasFailedUpdate = createSelector(updateFailed, (failedUpdate) => failedUpdate);

const allUsersSelector = state => state.authentication.profiles;
const getAllUsers = createSelector(allUsersSelector, (profiles) => profiles);

const adminSelector = state => state.authentication.admin;
const isAdmin = createSelector(adminSelector, (admin) => admin);

export { 
  getSession, 
  isAuthenticated,
  isAuthenticating, 
  hasFailed,
  isSigningUp,
  hasFailedSignup,
  isUpdated,
  isUpdating,
  hasFailedUpdate,
  getAllUsers,
  isAdmin,
};