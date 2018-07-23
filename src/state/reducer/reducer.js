import * as types from './actionTypes';
import initialState from '../initialState';

export default (state, action) => {
  let nextState = state || initialState;

  switch (action.type) {
    case types.SET_DRIZZLE:
      nextState = {
        ...nextState,
        drizzle: action.drizzle
      }
      break;
    case types.SET_SUBSCRIPTION_VALUE:
      nextState = {
        ...nextState,
        [action.key]: action.value
      }
      break;
    default:
  }

  return nextState;
};
