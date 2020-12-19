import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
