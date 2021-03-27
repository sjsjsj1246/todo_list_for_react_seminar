import React, { useState } from 'react';
import styles from './todo_item.module.css';
import { MdModeEdit, MdDone, MdDelete } from 'react-icons/md';

const TodoItem = ({
  id,
  description,
  isCompleted,
  onRemove,
  onToggle,
  onEdit,
}) => {
  const [editToggle, setEditToggle] = useState(false);
  const [inputValue, setInputValue] = useState(description);

  const handleEdit = () => {
    onEdit(id, inputValue);
    setEditToggle(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  document.body.onclick = () => {
    setEditToggle(false);
  };

  return (
    <div className={styles.card}>
      <div
        className={`${styles.todoItem} ${isCompleted && styles.isCompleted}`}
        onClick={() => onToggle(id, isCompleted)}
      >
        <div className={styles.checkBox}>{isCompleted && <MdDone />}</div>
        {editToggle ? (
          <div className={styles.editForm}>
            <input
              className={styles.editForm}
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            ></input>
          </div>
        ) : (
          <p className={styles.description}>{description}</p>
        )}
        <div
          className={styles.edit}
          onClick={(e) => {
            e.stopPropagation();
            setEditToggle(!editToggle);
          }}
        >
          <MdModeEdit />
        </div>
        <div
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
