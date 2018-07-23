import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import {
  changeNameSagaAction,
  getNameSagaAction,
  initSagaAction
} from '~/state/saga/actions';
import Web3Wrapper from '~/components/Web3/Web3Wrapper';
import { contracts } from '../state/contracts';

export default connect((state) => ({
  reducer: state.reducer,
  [contracts.NameStorageExample.callMethods.getName]: state.reducer[contracts.NameStorageExample.callMethods.getName],
  store: state.store,
}),
(dispatch) => ({
  getName: () => dispatch(getNameSagaAction()),
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