import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from '~store/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// TODO: enable service worker when everything is ready
serviceWorker.unregister()
