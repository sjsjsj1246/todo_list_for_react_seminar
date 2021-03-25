import React, { useRef, useState } from 'react';
import styles from './form.module.css';
import { MdClear } from 'react-icons/md';

const Form = ({ onKeyPress, onCreate }) => {
  const [addToggle, setAddToggle] = useState(false);
  const descriptionRef = useRef();
  const handleCreate = () => {
    onCreate(descriptionRef.current.value);
    descriptionRef.current.value = '';
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setAddToggle(!addToggle);
  };

  document.body.onclick = () => {
    setAddToggle(false);
  };

  return (
    <div className={styles.form} onClick={handleToggle}>
      <button className={styles.addButton}>
        <MdClear
          className={`${styles.addIcon} ${addToggle && styles.addToggle}`}
        />
      </button>
      {addToggle ? (
        <div className={styles.addForm}>
          <input
            ref={descriptionRef}
            className={styles.input}
            type="text"
            name="text"
            placeholder="할 일을 입력하세요"
            onKeyPress={handleKeyPress}
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
          <button className={styles.submit} onClick={handleCreate}>
            추가
          </button>
        </div>
      ) : (
        <div className={styles.closeForm} onClick={handleToggle}>
          Add Todo card
        </div>
      )}
    </div>
  );
};

export default Form;
