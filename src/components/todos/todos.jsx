import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import TodoItem from '../todo_item/todo_item';
import styles from './todos.module.css';

const TodoList = (props) => {
  return (
    <div className={styles.todoList}>
      <Header />
      <section>
        <div className={styles.todoList}>
          <TodoItem />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TodoList;
