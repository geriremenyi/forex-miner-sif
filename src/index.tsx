// Library dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Local dependencies
import { App } from '~app/App';

// SASS module
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);