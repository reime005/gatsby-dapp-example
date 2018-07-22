/* global window:true */
/* eslint no-underscore-dangle: 0 */

import { createStore } from 'redux';
import { generateContractsInitialState, Drizzle, generateStore } from 'drizzle';
import rootReducer from './index';
import { drizzleOptions } from './drizzleOptions';

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions),
}

export default () => {
  const devtools =
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;

  // const store = generateStore(drizzleOptions);
  // const drizzle = new Drizzle(drizzleOptions, store);
  // console.log(drizzle);
  
  return (createStore(rootReducer, initialState, devtools));
};
