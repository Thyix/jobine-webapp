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

export { getSession, isAuthenticated, isAuthenticating, hasFailed, isSigningUp, hasFailedSignup };