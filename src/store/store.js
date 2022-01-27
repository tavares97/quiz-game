import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: {
		rootReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
