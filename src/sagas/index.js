import {
  nameStorageSaga
} from './contracts';
import { fork, all } from 'redux-saga/effects';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield all(
      sagas.map(saga => fork(saga))
    )
  }
}

let _rootSaga = undefined;

if (typeof window !== 'undefined') {
  const drizzleSagas = require('drizzle').drizzleSagas;
  _rootSaga = startSagas(nameStorageSaga, drizzleSagas);
} else {
  _rootSaga = startSagas(nameStorageSaga);
}

export const rootSaga = _rootSaga;

export * from './contracts';