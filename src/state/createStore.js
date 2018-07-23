/* global window:true */
/* eslint no-underscore-dangle: 0 */

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { generateContractsInitialState } from 'drizzle';
import { drizzleOptions } from './drizzleOptions';
import rootReducer from './reducer/rootReducer';
import rootSaga from './saga/saga';

export const __DEV__ = process.env.NODE_ENV === "develop";

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions),
}

const sagaMiddleware = createSagaMiddleware();

const prodMiddlewares = [
  sagaMiddleware,
];

const devMiddlewares = [
  sagaMiddleware,  
];

export default () => {
  const store = createStore(
    rootReducer, 
    initialState, 
    compose(
      applyMiddleware(
        ...devMiddlewares,
      )
    )
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  // run the rootSaga initially
  store.runSagaTask();

  return store;
};
