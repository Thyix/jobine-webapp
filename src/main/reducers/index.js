// @flow

import { combineReducers } from 'redux';
import authentication from '../../authentication/reducers/authenticationReducers';
import offers from '../../offers/reducer/offerReducer';
import messages from '../../chat/reducer/chatReducer';

const appReducer = combineReducers({
  authentication,
  offers,
  messages,
});

type State = {
  authentication:any,
  offers: any,
  messages: any,
};

type Action = {
  type: string;
};

const rootReducer = (state?: State, action: Action) => {
  let newState = state;

  return appReducer(newState, action);
};

export default rootReducer;