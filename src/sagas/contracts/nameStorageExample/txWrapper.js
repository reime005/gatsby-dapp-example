import { select } from "redux-saga/effects";
import * as selectors from './selectors';

/**
 * Wraps a drizzle smart contract transaction
 **/
export function* txWrapper(contractName = "NameStorageExample",
contractMethod = "",
...args) {
  const contracts = yield select(selectors.getContracts);

  if (!contracts) {
    return;
  }

  try {
    contracts[contractName].methods[contractMethod].cacheSend(...args);
  } catch (e) {
    console.error(`Error in contract ${contractName} for method 
    ${contractMethod}: ${e.message}`);
  }
}