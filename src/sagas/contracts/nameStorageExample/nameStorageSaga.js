import { takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as generators from './generators';

export function* nameStorageSaga() {
  yield takeEvery(types.INIT, generators.initGenerator);
  yield takeEvery(types.TX_CHANGE_CONTRACT_NAME, generators.changeContractNameGenerator);
  yield takeEvery(types.TX_ADD_INDEX_NAME, generators.addIndexNameGenerator);
  yield takeEvery(types.TX_CHANGE_ADDRESS_NAME, generators.changeAddressNameGenerator);
  yield takeEvery(types.GET_CALL, generators.getCallGenerator);
  yield takeEvery(types.SUBSCRIBE, generators.subscribeGenerator);
}