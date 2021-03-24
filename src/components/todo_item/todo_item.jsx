import React from 'react';
import styles from './todo_item.module.css';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItem = ({ id, text, checked, onRemove, onToggle }) => {
  return (
    <div
      className={`${styles.todoItem} ${checked && styles.checked}`}
      onClick={() => onToggle(id)}
    >
      <div className={styles.checkBox}>{checked && <MdDone />}</div>
      <p className={styles.text}>{text}</p>
      <div
        className={styles.Remove}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoItem;
