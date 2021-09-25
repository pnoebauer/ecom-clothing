import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

import persistReducer from './root-reducer';

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

export const store = createStore(persistReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default {store, persistor};
