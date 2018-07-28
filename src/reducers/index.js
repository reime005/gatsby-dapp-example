export * from './contracts';

import { combineReducers } from 'redux';
import { nameStorageExampleReducer } from './contracts';
import { drizzleReducers } from 'drizzle';

export const rootReducer = combineReducers({ nameStorageExampleReducer, ...drizzleReducers, });
