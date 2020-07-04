import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './RootReducer';

// Reducer
const reducer = rootReducer;

// Middlewares
const epicMiddleware = createEpicMiddleware();
const middleware = [...getDefaultMiddleware(), epicMiddleware]

// Configure store
export const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})