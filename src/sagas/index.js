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

let drizzleSagas = undefined;
if (typeof window !== 'undefined') {
  drizzleSagas = require('drizzle').drizzleSagas;
}

export const rootSaga = startSagas(nameStorageSaga, drizzleSagas && drizzleSagas);

export * from './contracts';