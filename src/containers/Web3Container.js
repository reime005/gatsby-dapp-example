import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import {
  changeNameSagaAction,
  changeFooSagaAction,
  getCallSagaAction,
  initSagaAction
} from '~/sagas';
import { Web3Wrapper } from '~/components';
import { contracts } from '~/constants';

const name = contracts.NameStorageExample.callMethods.name.substring(3).toLowerCase();
const foo = contracts.NameStorageExample.callMethods.foo.substring(3).toLowerCase();
const numbers = contracts.NameStorageExample.callMethods.numbers.substring(3).toLowerCase();

export default connect((state) => ({
  drizzle: state.nameStorageExampleReducer.drizzle,
  name: state.nameStorageExampleReducer[name],
  foo: state.nameStorageExampleReducer[foo],
  numbers: state.nameStorageExampleReducer[numbers],
  store: state.store,
}),
(dispatch) => ({
  getNumbers: () => dispatch(getCallSagaAction(contracts.NameStorageExample.callMethods.numbers)),
  getName: () => dispatch(getCallSagaAction(contracts.NameStorageExample.callMethods.name)),
  getFoo: () => dispatch(getCallSagaAction(contracts.NameStorageExample.callMethods.foo)),
  changeFoo: (foo) => dispatch(changeFooSagaAction(foo)),
  changeName: (name) => dispatch(changeNameSagaAction(name)),
  init: (store) => dispatch(initSagaAction(store)),
}))(drizzleConnect(
  Web3Wrapper,
  (state) => ({
    web: state.web3,
    accounts: state.accounts,
    accountBalances: state.accountBalances,
    initialized: state.drizzleStatus.initialized
  }),
));
