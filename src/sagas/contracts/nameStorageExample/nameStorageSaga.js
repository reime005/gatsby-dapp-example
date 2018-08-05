import { takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as generators from './generators';

export function* nameStorageSaga() {
  yield takeEvery(types.INIT, generators.initGenerator);
  yield takeEvery(types.TX_CHANGE_NAME, generators.changeNameGenerator);
  yield takeEvery(types.TX_CHANGE_FOO, generators.changeFooGenerator);
  yield takeEvery(types.GET_CALL, generators.getCallGenerator);
  yield takeEvery(types.SUBSCRIBE, generators.subscribeGenerator);
}