import { connect } from 'react-redux';
import {
  changeAddressNameSagaAction,
  changeContractNameSagaAction,
  addIndexNameSagaAction,
  getCallSagaAction,
  initSagaAction
} from '~/sagas';
import {
  incrementIndexAction,
  decrementIndexAction,
} from '~/reducers';
import { Web3Wrapper } from '~/components';
import { contracts } from '~/constants';

const changeContractName = contracts.NameStorageExample.callMethods.contractName.substring(3).toLowerCase();
const indexName = contracts.NameStorageExample.callMethods.indexName.substring(3).toLowerCase();
const addressName = contracts.NameStorageExample.callMethods.addressName.substring(3).toLowerCase();

let _Web3Container = Web3Wrapper;

if (typeof window !== 'undefined') {
  const drizzleConnect = require('drizzle-react').drizzleConnect;
  _Web3Container = drizzleConnect(
    _Web3Container,
      (state) => ({
        web: state.web3,
        accounts: state.accounts,
        accountBalances: state.accountBalances,
        initialized: state.drizzleStatus.initialized
      }),
    );
}

_Web3Container = connect((state) => ({
  drizzle: state.nameStorageExampleReducer.drizzle,
  contractName: state.nameStorageExampleReducer[changeContractName],
  indexName: state.nameStorageExampleReducer[indexName],
  addressName: state.nameStorageExampleReducer[addressName],
  index: state.nameStorageExampleReducer.index,
}),
(dispatch) => ({
  getContractName: () => dispatch(
    getCallSagaAction(contracts.NameStorageExample.callMethods.contractName)),
  getAddressName: () => dispatch(
    getCallSagaAction(contracts.NameStorageExample.callMethods.addressName)),
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