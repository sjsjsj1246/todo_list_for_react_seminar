import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import TodoList from './components/todoList/todo_list';
import Clock from 'react-clock-face';
import useInterval from './service/useInterval';

const App = (props) => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
    console.log(date.getSeconds());
  }, 1000);

  return (
    <div className={styles.app}>
      <Clock
        className={styles.clock}
        hours={date.getHours()}
        minutes={date.getMinutes()}
        numbers={true}
        size={'25vh'}
      />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
