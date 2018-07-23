import * as types from './actionTypes';

export function initSagaAction(store) {
  return {
    type: types.INIT,
    store
  }
} 

export function getNameSagaAction() {
  return {
    type: types.CALL_GET_NAME 
  }
} 

export function changeNameSagaAction(name) {
  return {
    type: types.CALL_GET_NAME,
    name
  }
}

export function subscribeSagaAction() {
  return {
    type: types.SUBSCRIBE,
  }
}

export function unsubscribeSagaAction() {
  return {
    type: types.UNSUBSCRIBE,
  }
}
