import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import { ApplicationEnvironment } from '~common/types';

import { history, rootReducer } from '.';

// Middlewares
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware();
const middlewares = [...getDefaultMiddleware(), routeMiddleware, epicMiddleware];

// Configure store
export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: (process.env.NODE_ENV as ApplicationEnvironment) !== ApplicationEnvironment.Production,
});
