import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import GitHubLogin from 'react-github-login';
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

  return (
    <div className={styles.login}>
      <Header />
      <section>
        <h1>login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(props) => (
                <button className={styles.button} onClick={props.onClick}>
                  Google 로그인
                </button>
              )}
              onSuccess={(result) => {
                endlesscreation
                  .postGoogleToken(result.tokenObj)
                  .then((data) => {
                    endlesscreation.setAccessToken(data.accessToken);
                    goTodoList();
                  });
              }}
              onFailure={(result) => console.log(result)}
              cookiePolicy={'single_host_origin'}
              redirectUri={process.env.REACT_APP_BASE_URL}
            />
          </li>
          <li className={styles.item}>
            <GitHubLogin
              className={styles.button}
              buttonText="GitHub 로그인"
              clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
              onSuccess={(result) => {
                endlesscreation.getGithubToken(result.code).then((response) => {
                  const accessToken = response.substring(
                    response.indexOf('=') + 1,
                    response.indexOf('&'),
                  );
                  endlesscreation.postGithubToken(accessToken).then((data) => {
                    endlesscreation.setAccessToken(data.accessToken);
                    goTodoList();
                  });
                });
              }}
              onFailure={(result) => console.log(result)}
              cookiePolicy={'single_host_origin'}
              redirectUri={process.env.REACT_APP_BASE_URL}
            />
          </li>
          <li className={styles.item}>
            <button
              className={styles.button}
              onClick={() => endlesscreation.login('guest').then(goTodoList)}
            >
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
