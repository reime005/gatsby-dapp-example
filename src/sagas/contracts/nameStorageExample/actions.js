import * as types from './actionTypes';

export function initSagaAction(store) {
  return {
    type: types.INIT,
    store
  }
}

export function getCallSagaAction(methodName) {
  return {
    type: types.GET_CALL,
    methodName 
  }
}

export function changeNameSagaAction(name) {
  return {
    type: types.TX_CHANGE_NAME,
    name
  }
}

export function changeFooSagaAction(foo) {
  return {
    type: types.TX_CHANGE_FOO,
    foo
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
