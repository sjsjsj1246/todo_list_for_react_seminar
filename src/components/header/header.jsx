import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo List</h1>
      {onLogout && (
        <button className={styles.logout} onClick={() => onLogout()}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
