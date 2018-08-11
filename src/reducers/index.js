import { combineReducers } from 'redux';
import { nameStorageExampleReducer } from './contracts';
import {drizzleReducers} from 'src/lib/reducer';

// let drizzleReducers = undefined;
// if (typeof window !== 'undefined') {
//   drizzleReducers = require('drizzle').drizzleReducers;
// }

export const rootReducer = combineReducers({ nameStorageExampleReducer, ...drizzleReducers });

export * from './contracts';