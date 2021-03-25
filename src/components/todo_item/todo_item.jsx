import React, { useRef, useState } from 'react';
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
  const descriptionRef = useRef();
  const handleEdit = () => {
    onEdit(id, descriptionRef.current.value);
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
              placeholder={description}
              ref={descriptionRef}
              onKeyPress={handleKeyPress}
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
