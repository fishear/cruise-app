import React from 'react';
import ReactDOM from 'react-dom';
import CruiseApp from './containers/CruiseApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<CruiseApp />,
	document.getElementById('root'));
registerServiceWorker();
