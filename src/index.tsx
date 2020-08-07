import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '~app/App';

import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// TODO: enable service worker when everything is ready
serviceWorker.unregister();
