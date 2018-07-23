import { Drizzle, generateStore } from 'drizzle'
import { put, select, call } from "redux-saga/effects";

import { drizzleOptions } from "../drizzleOptions";
import { setDrizzleAction } from '../reducer/actions';
import { contracts } from '../contracts';
import { txWrapper } from './txWrapper';

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

export function* subscribeGenerator(action) {
  const {
    name
  } = action;

  //TODO: implement
}