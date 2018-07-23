import { select, put } from "redux-saga/effects";
import * as selectors from './selectors';

export function* txWrapper(contractName = "NameStorageExample",
contractMethod = "",
...args) {
  const contract = yield select(selectors.getContract(contractName));

  if (!contract) {
    return;
  }

  try {
    contract.methods[contractMethod].cacheSend(...args);
  } catch (e) {
    console.error(`Error in contract ${contractName} for method 
    ${contractMethod}: ${e.message}`);
  }
}