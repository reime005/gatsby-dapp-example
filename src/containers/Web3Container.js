import { connect } from 'react-redux';
import {
  changeAddressNameSagaAction,
  changeContractNameSagaAction,
  addIndexNameSagaAction,
  getCallSagaAction,
  initSagaAction
} from 'src/sagas';
import {
  incrementIndexAction,
  decrementIndexAction,
} from 'src/reducers';
import { Web3Wrapper } from 'src/components';
import { contracts } from 'src/constants';

const contractName = contracts.NameStorageExample.callMethods.contractName;
const indexName = contracts.NameStorageExample.callMethods.indexName;
const addressName = contracts.NameStorageExample.callMethods.addressName;

let _Web3Container = Web3Wrapper;

_Web3Container = connect((state) => ({
  accounts: state.accounts,
  accountBalances: state.accountBalances,
  initialized: state.drizzleStatus.initialized,
  drizzle: state.nameStorageExampleReducer.drizzle,
  contractName: state.nameStorageExampleReducer[contractName],
  indexName: state.nameStorageExampleReducer[indexName],
  addressName: state.nameStorageExampleReducer[addressName],
  index: state.nameStorageExampleReducer.index,
}),
(dispatch) => ({
  getContractName: () => dispatch(
    getCallSagaAction(contracts.NameStorageExample.callMethods.contractName)),
  getAddressName: (address) => dispatch(
    getCallSagaAction(contracts.NameStorageExample.callMethods.addressName, address)),
  getIndexName: (index) => dispatch(
    getCallSagaAction(contracts.NameStorageExample.callMethods.indexName, index)),
  
  incrementIndex: () => dispatch(
    incrementIndexAction()
  ),
  decrementIndex: () => dispatch(
    decrementIndexAction()
  ),

  changeAddressName: (name) => dispatch(
    changeAddressNameSagaAction(name)),
  addIndexName: (name) => dispatch(
    addIndexNameSagaAction(name)),
  changeContractName: (name) => dispatch(
    changeContractNameSagaAction(name)),
}))(_Web3Container);

export const Web3Container = _Web3Container;