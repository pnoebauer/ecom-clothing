import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

import persistReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

export const store = createStore(persistReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const storeAndPersistor = { store, persistor };

// export default storeAndPersistor;
