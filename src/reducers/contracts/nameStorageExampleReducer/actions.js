import * as types from './actionTypes';

export const setDrizzleAction = (drizzle) => {
  return {
    type: types.SET_DRIZZLE,
    drizzle
  }
}

export function setSubscriptionValueAction(key, value) {
  return {
    type: types.SET_SUBSCRIPTION_VALUE,
    key,
    value
  }
}
