import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import TodoItem from '../todo_item/todo_item';
import styles from './todo_list.module.css';

const TodoList = () => {
  const textRef = useRef();
  const history = useHistory();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일',
      checked: false,
    },
    {
      id: 2,
      text: '할 일2',
      checked: true,
    },
  ]);

  const handleCreate = () => {
    const todo = {
      id: Date.now(),
      text: textRef.current.value,
      checked: false,
    };
    setTodos(todos.concat(todo));

    textRef.current.value = '';
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const goTodoHome = () => {
    history.push({
      pathname: '/',
    });
  };
  const onLogout = () => {
    goTodoHome();
  };

  return (
    <div className={styles.todoList}>
      <Header onLogout={onLogout} />
      <section className={styles.section}>
        <div className={styles.container}>
          {todos.map((todo) => (
            <TodoItem
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <div className={styles.form}>
          <input
            ref={textRef}
            className={styles.input}
            type="text"
            name="text"
            placeholder="할 일을 입력하세요"
          />
          <button className={styles.submit} onClick={handleCreate}>
            추가
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TodoList;
