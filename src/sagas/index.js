export * from './contracts';

import {
  nameStorageSaga
} from './contracts';
import { fork } from 'redux-saga/effects';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga))
  }
}

export const rootSaga = startSagas(nameStorageSaga);
