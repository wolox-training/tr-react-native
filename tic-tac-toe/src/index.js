import React from 'react';
import ReactDOM from 'react-dom';

import './scss/application.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './app/components/App'; // eslint-disable-line import/first

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
