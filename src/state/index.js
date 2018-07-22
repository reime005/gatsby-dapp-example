import { combineReducers } from 'redux';
import app from './app';
import { drizzleReducers } from 'drizzle';

export default combineReducers({ ...drizzleReducers, app });
