import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
  return (
    <div className={styles.login}>
      <Header />
      <section>
        <h1>login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
