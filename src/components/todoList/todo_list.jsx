import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Form from '../form/form';
import Header from '../header/header';
import TodoItem from '../todo_item/todo_item';
import styles from './todo_list.module.css';

const TodoList = ({ endlesscreation }) => {
  const history = useHistory();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    endlesscreation.getTodoList().then((todos) => setTodos(todos));
  }, [endlesscreation]);

  const refresh = () => {
    endlesscreation.getTodoList().then((todos) => setTodos(todos));
  };

  const handleCreate = (description) => {
    const todo = {
      title: 'title',
      description: description,
      writer: '황인서',
    };
    endlesscreation.postTodoList(todo).then(() => refresh());
  };

  const handleRemove = (id) => {
    endlesscreation.deleteTodo(id).then(() => refresh());
  };

  const handleEdit = (id, description) => {
    const todo = {
      id: id,
      title: 'title',
      description: description,
      writer: '황인서',
    };
    endlesscreation.patchTodo(todo).then(() => refresh());
  };

  const handleToggle = (id, isCompleted) => {
    endlesscreation.patchTodoComplete(id, !isCompleted).then(() => refresh());
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
              key={todo.id}
              description={todo.description}
              isCompleted={todo.isCompleted}
              onToggle={handleToggle}
              onRemove={handleRemove}
              onEdit={handleEdit}
            />
          ))}
        </div>
        <Form onCreate={handleCreate} />
      </section>
    </div>
  );
};

export default TodoList;
