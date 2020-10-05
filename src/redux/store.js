import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas';

import persistReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

export const store = createStore(persistReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };