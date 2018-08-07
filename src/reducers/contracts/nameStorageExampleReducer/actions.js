import * as types from './actionTypes';

export const setDrizzleAction = (drizzle) => {
  return {
    type: types.SET_DRIZZLE,
    drizzle
  }
}

export function setSubscriptionChannelAction(methodName, channel) {
  return {
    type: types.SET_SUBSCRIPTION_CHANNEL,
    methodName,
    channel
  }
}

export function setSubscriptionValueAction(key, value) {
  return {
    type: types.SET_SUBSCRIPTION_VALUE,
    key,
    value
  }
}

export function incrementIndexAction() {
  return {
    type: types.INCREMENT_INDEX,
  }
}

export function decrementIndexAction() {
  return {
    type: types.DECREMENT_INDEX,
  }
}
