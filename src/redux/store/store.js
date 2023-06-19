import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {persistedReducer}  from '../root-reducer/root-reducer.js';

const logger = createLogger();

export const store = createStore(persistedReducer,applyMiddleware(thunkMiddleware,logger))
export const persistor = persistStore(store);
