// @flow

import { combineReducers } from 'redux';
import authentication from '../../authentication/reducers/authenticationReducers';

const appReducer = combineReducers({
  authentication,
});

type State = {
  authentication:any,
};

type Action = {
  type: string;
};

const rootReducer = (state?: State, action: Action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;