import { combineReducers } from 'redux';
import { nameStorageExampleReducer } from './contracts';


let drizzleReducers = undefined;
if (typeof window !== 'undefined') {
  drizzleReducers = require('drizzle').drizzleReducers;
}

export const rootReducer = combineReducers({ nameStorageExampleReducer, ...drizzleReducers && drizzleReducers });

export * from './contracts';