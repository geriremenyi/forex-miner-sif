import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import { ApplicationEnvironment } from '~common/types';

import { history, rootReducer, rootEpic } from '.';
import { RootAction } from './RootAction';
import { IRootState } from './IRootState';

// Middlewares
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware<RootAction, RootAction, IRootState, any>();
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
