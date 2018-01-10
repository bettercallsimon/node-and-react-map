import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import registerServiceWorker from './registerServiceWorker'; => god damn service worker during production...
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//  service workers, disabled for the moment + making sure I unregister them all for this app at the moment
//registerServiceWorker();
unregister();
