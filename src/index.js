import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import axios from 'axios';
import EndlessCreation from './service/endlesscreation';

const httpClient = axios.create({
  baseURL: 'https://api.dnatuna.fun',
  params: {},
});
const endlesscreation = new EndlessCreation(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App endlesscreation={endlesscreation} />
  </React.StrictMode>,
  document.getElementById('root'),
);
