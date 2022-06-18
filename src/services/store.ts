import {applyMiddleware, createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const middleware = [thunk];
const store = createStore(authReducer, applyMiddleware(...middleware));

export default store;
