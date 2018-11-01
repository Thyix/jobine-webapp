// @flow

import { combineReducers } from 'redux';

const appReducer = combineReducers({

});

type State = {
};

type Action = {
  type: string;
};

const rootReducer = (state?: State, action: Action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;