import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import { ApplicationEnvironment } from '~common/types';

import { history, rootReducer, rootEpic } from '.';
import { IRootAction } from './IRootAction';
import { IRootState } from './IRootState';

// Middlewares
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware<IRootAction, IRootAction, IRootState>();
const middlewares = [...getDefaultMiddleware(), routeMiddleware, epicMiddleware];

// Configure
const innerStore = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: (process.env.NODE_ENV as ApplicationEnvironment) !== ApplicationEnvironment.Production
});
epicMiddleware.run(rootEpic);

// Expose
export const store = innerStore;
