import * as types from './actionTypes';

export function setDrizzleAction(drizzle) {
  return {
    type: types.SET_DRIZZLE,
    drizzle
  }
}
