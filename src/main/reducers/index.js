// @flow

import { combineReducers } from 'redux';
import authentication from '../../authentication/reducers/authenticationReducers';
import offers from '../../offers/reducer/offerReducer';

const appReducer = combineReducers({
  authentication,
  offers,
});

type State = {
  authentication:any,
  offers: any,
};

type Action = {
  type: string;
};

const rootReducer = (state?: State, action: Action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;