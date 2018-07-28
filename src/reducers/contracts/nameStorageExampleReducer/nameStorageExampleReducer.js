import {
  SET_DRIZZLE,
  SET_SUBSCRIPTION_VALUE,
} from './actionTypes';
import { initialState } from '~/constants/nameStorageExample';

export const nameStorageExampleReducer = (state = initialState, action) => {
  let nextState = state || initialState;
  
  switch (action.type) {
    case SET_DRIZZLE:
      nextState = {
        ...nextState,
        drizzle: action.drizzle
      }
      break;
    case SET_SUBSCRIPTION_VALUE:
      nextState = {
        ...nextState,
        [action.key]: action.value
      }
      break;
    default:
  }

  return nextState;
};
