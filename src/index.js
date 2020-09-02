import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


const rows = JSON.parse(document.getElementById('user-data').dataset.users);

ReactDOM.render(<App rows={rows} />, document.getElementById('root'));
