import { takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as generators from './generators';

export default function* sagas() {
  yield takeEvery(types.INIT, generators.initGenerator);
  yield takeEvery(types.TX_CHANGE_NAME, generators.changeNameGenerator);
  yield takeEvery(types.SUBSCRIBE, generators.subscribeGenerator);
}