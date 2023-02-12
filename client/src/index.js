import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import './function';

console.log(process.env.REACT_APP_PORT);
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

