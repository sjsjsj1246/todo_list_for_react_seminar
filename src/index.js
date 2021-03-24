import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import axios from 'axios';
import TodoList from './service/todo_list';

// const httpClient = axios.create({
//   baseURL: 'http://',
//   params: { key: process.env.TODO_LIST_API_KEY },
// });
//const todolist = new TodoList(httpClient);

ReactDOM.render(
  <React.StrictMode>
    {/* <App todolist={todolist} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
