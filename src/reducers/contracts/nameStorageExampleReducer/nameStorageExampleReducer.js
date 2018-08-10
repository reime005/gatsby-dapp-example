import {
  SET_DRIZZLE,
  SET_SUBSCRIPTION_VALUE,
  SET_SUBSCRIPTION_CHANNEL,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
} from './actionTypes';
import { initialState } from 'src/constants/nameStorageExample';

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
    case INCREMENT_INDEX:
      nextState = {
        ...nextState,
        index: nextState.index + 1
      }
      break;
    case DECREMENT_INDEX:
      nextState = {
        ...nextState,
        index: nextState.index > 0 ? nextState.index - 1 : 0
      }
      break;
    case SET_SUBSCRIPTION_CHANNEL:
      let channelSubscriptions = nextState.channelSubscriptions;
      channelSubscriptions[action.methodName] = action.channel;

      nextState = {
        ...nextState,
        channelSubscriptions
      }
      break;
    default:
  }

  return nextState;
};
