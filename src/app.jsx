import React from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import TodoList from './components/todos/todos';

const App = (props) => {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/todos">
            <TodoList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
