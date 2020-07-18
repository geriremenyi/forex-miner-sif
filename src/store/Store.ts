import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'

import { rootReducer } from './RootReducer'
import { ApplicationEnvironment } from '~utilities/types'

// Reducer
const reducer = rootReducer

// Middlewares
const epicMiddleware = createEpicMiddleware()
const middleware = [...getDefaultMiddleware(), epicMiddleware]

// Configure store
export const store = configureStore({
  reducer,
  middleware,
  devTools: (process.env.NODE_ENV as ApplicationEnvironment) !== ApplicationEnvironment.Production,
})
