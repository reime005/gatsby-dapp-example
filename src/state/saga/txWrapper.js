import { select, put } from "redux-saga/effects";
import * as selectors from './selectors';

export function* txWrapper(contractName = "NameStorageExample",
contractMethod = "",
...args) {
  const contracts = yield select(selectors.getContracts);
  
  // console.log("contracts");
  // console.log(contracts);
  // console.log(contracts[contractName].methods[contractMethod]);
  // return;

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