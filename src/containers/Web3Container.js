import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import {
  changeNameSagaAction,
  initSagaAction
} from '~/state/saga/actions';
import Web3Wrapper from '~/components/Web3/Web3Wrapper';

// export default connect(
//   (state) => ({
//     ...state
//     // store: state.store,
//     // accounts: state.accounts,
//     // initialized: state.drizzleStatus.initialized
//   }),
//   (dispatch) => ({
//     changeName: (name) => dispatch(changeNameSagaAction(name)),
//     init: (store) => dispatch(initSagaAction(store)),
//   })
// )(Web3Wrapper);
export default connect((state) => ({
  reducer: state.reducer,
  
  store: state.store,
}),
(dispatch) => ({
  changeName: (name) => dispatch(changeNameSagaAction(name)),
  init: (store) => dispatch(initSagaAction(store)),
}))(drizzleConnect(
  Web3Wrapper,
  (state) => ({
  accounts: state.accounts,
  accountBalances: state.accountBalances,
  initialized: state.drizzleStatus.initialized
    // store: state.store,
    // accounts: state.accounts,
    // initialized: state.drizzleStatus.initialized
  }),
));