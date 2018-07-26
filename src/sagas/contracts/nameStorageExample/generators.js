import { Drizzle } from 'drizzle'
import { put, select, call, take } from "redux-saga/effects";
import { eventChannel } from 'redux-saga';

import { drizzleOptions } from "~/constants";
import { setDrizzleAction, setSubscriptionValueAction } from '~/reducers';
import { contracts } from '~/constants';
import { txWrapper } from './txWrapper';
import * as selectors from './selectors';

export function* initGenerator(action) {
  const {
    store
  } = action;

  if (!store) {
    console.log("no store");
    return;
  }

  try {
    const drizzle = new Drizzle(drizzleOptions, store);
    
    yield put(setDrizzleAction(drizzle));
  } catch (e) {
    console.error(`Error in drizzle initialization: ${e.message}`);
  }
}

export function* changeNameGenerator(action) {
  const {
    name
  } = action;

  const contractName = contracts.NameStorageExample.contractName;
  const methodName = contracts.NameStorageExample.txMethods.changeName;

  yield call(txWrapper, contractName, methodName, name);
}

export function* getCallGenerator(action) {
  const {
    methodName
  } = action;

  const contractName = contracts.NameStorageExample.contractName;

  const state = yield select((state) => state);

  const drizzleContracts = yield select(selectors.getContracts);
  
  if (!drizzleContracts) {
    return;
  }

  const arrayKey = yield call(drizzleContracts
    [contractName]
    .methods
    [methodName]
    .cacheCall)

  yield call(subscribeGenerator, {contractName, methodName, key: arrayKey});
}

function retrieveFromState(state, contractName, methodName, key) {
  if (state.contracts
    [contractName]
    [methodName]
    [key]) {
      return state.contracts
        [contractName]
        [methodName]
        [key]
        .value
    }
  return undefined;
}

export function* subscribeGenerator(action) {
  let {
    contractName,
    methodName,
    key
  } = action;

  let store = yield select(selectors.getStore);

  if (!store) {
    return;
  }

  const channel = yield call(createSubscriptionChannel, store);

  while (true) {
    let state = yield call(store.getState);

    const existingValue = yield call(retrieveFromState,
      state, contractName, methodName, key);

    state = yield take(channel);

    const newValue = yield call(retrieveFromState,
      state, contractName, methodName, key);

    if (newValue !== existingValue) {
      yield put(setSubscriptionValueAction(methodName.substring(3).toLowerCase(), newValue));
    }
  }
}

function createSubscriptionChannel(store) {
  return eventChannel(emit => {
    return store.subscribe(() => {
      emit(store.getState());
    })
  })
}