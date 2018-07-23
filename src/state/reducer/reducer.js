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
    default:
  }

  return nextState;
};
