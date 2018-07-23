import { combineReducers } from 'redux';
import reducer from './reducer';
import { drizzleReducers } from 'drizzle';

export default combineReducers({ ...drizzleReducers, reducer });
