import {
  nameStorageSaga
} from './contracts';
import { fork, all } from 'redux-saga/effects';
import { drizzleSagas } from 'src/lib/rootSaga';

function startSagas(...sagas) {
  return function* rootSaga() {
    yield all(
      sagas.map(saga => fork(saga))
    )
  }
}

export const rootSaga = startSagas(drizzleSagas, nameStorageSaga);

export * from './contracts';