import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import {
  changeNameSagaAction,
  initSagaAction
} from '~/state/saga/actions';
import Web3Wrapper from '~/components/Web3/Web3Wrapper';
import { contracts } from '../state/contracts';
import { getCallSagaAction } from '../state/saga/actions';

export default connect((state) => ({
  reducer: state.reducer,
  name: state.reducer[contracts.NameStorageExample.callMethods.name.substring(3).toLowerCase()],
  numbers: state.reducer[contracts.NameStorageExample.callMethods.numbers.substring(3).toLowerCase()],
  store: state.store,
}),
(dispatch) => ({
  getNumbers: () => dispatch(getCallSagaAction(contracts.NameStorageExample.callMethods.numbers)),
  getName: () => dispatch(getCallSagaAction(contracts.NameStorageExample.callMethods.name)),
  changeName: (name) => dispatch(changeNameSagaAction(name)),
  init: (store) => dispatch(initSagaAction(store)),
}))(drizzleConnect(
  Web3Wrapper,
  (state) => ({
    accounts: state.accounts,
    accountBalances: state.accountBalances,
    initialized: state.drizzleStatus.initialized
  }),
));