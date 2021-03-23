import React from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import TodoList from './components/todo_list/todo_list';

const App = (props) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/todo_list">
            <TodoList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
