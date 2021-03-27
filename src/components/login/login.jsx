import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ endlesscreation }) => {
  const history = useHistory();
  const goTodoList = () => {
    history.push({
      pathname: '/todo_list',
    });
  };
  const onLogin = (providerName) => {
    endlesscreation.login(providerName).then(goTodoList);
  };

  return (
    <div className={styles.login}>
      <Header />
      <section>
        <h1>login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={() => onLogin('google')}>
              Google 로그인
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={() => onLogin('github')}>
              Github 로그인
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={() => onLogin('guest')}>
              게스트 로그인
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
