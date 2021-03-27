import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import EndlessCreation from './service/endlesscreation';

const endlesscreation = new EndlessCreation();

ReactDOM.render(
  <React.StrictMode>
    <App endlesscreation={endlesscreation} />
  </React.StrictMode>,
  document.getElementById('root'),
);
