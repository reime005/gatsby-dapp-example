import * as types from './actionTypes';

export function initSagaAction(store) {
  return {
    type: types.INIT,
    store
  }
}

export function getCallSagaAction(methodName, args) {
  return {
    type: types.GET_CALL,
    methodName,
    ...args 
  }
}

export function changeAddressNameSagaAction(name) {
  return {
    type: types.TX_CHANGE_ADDRESS_NAME,
    name
  }
}

export function changeContractNameSagaAction(name) {
  return {
    type: types.TX_CHANGE_CONTRACT_NAME,
    name
  }
}

export function addIndexNameSagaAction(name) {
  return {
    type: types.TX_ADD_INDEX_NAME,
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
