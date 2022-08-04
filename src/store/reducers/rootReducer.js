import { combineReducers } from 'redux';

import emailReducer from './email.reducer';

export default combineReducers({ email: emailReducer });
